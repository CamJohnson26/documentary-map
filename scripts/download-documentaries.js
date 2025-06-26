import fs from 'fs';
import fetch from 'node-fetch';
import Papa from 'papaparse';

const API_KEY = ''; // <-- Replace with your actual TMDB API key
const BASE_URL = 'https://api.themoviedb.org/3/discover/movie';
const GENRE_DOCUMENTARY = 99;
const MAX_RESULTS = 1500;
const RESULTS_PER_PAGE = 20;
const TOTAL_PAGES = 200; // We'll over-fetch to account for filtering

const ALLOWED_CERTIFICATIONS = ['G', 'PG', 'PG-13', 'R'];

// Returns a valid certification string (or null) based on any country's rating
function getValidCertification(releaseDates) {
    for (const entry of releaseDates.results) {
        const certs = entry.release_dates || [];
        for (const cert of certs) {
            const rating = cert.certification?.trim();
            if (rating && ALLOWED_CERTIFICATIONS.includes(rating)) {
                return rating; // Accept first valid rating
            }
        }
    }
    return null; // No acceptable rating found
}

async function fetchPage(page) {
    const url = `${BASE_URL}?api_key=${API_KEY}&with_genres=${GENRE_DOCUMENTARY}&sort_by=popularity.desc&page=${page}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch page ${page}: ${response.statusText}`);
    }
    const data = await response.json();
    return data.results;
}

async function getMovieDetails(movieId) {
    const [detailsRes, releaseDatesRes] = await Promise.all([
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`),
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/release_dates?api_key=${API_KEY}`)
    ]);

    if (!detailsRes.ok || !releaseDatesRes.ok) return null;

    const details = await detailsRes.json();
    const releaseDates = await releaseDatesRes.json();

    const validCert = getValidCertification(releaseDates);
    if (!validCert) return null;

    return {
        name: details.title || '',
        year: details.release_date ? details.release_date.slice(0, 4) : '',
        location: details.production_countries?.[0]?.name || '',
        description: details.overview?.replace(/\r?\n|\r/g, ' ') || ''
    };
}

async function main() {
    const allDocs = [];

    for (let page = 1; page <= TOTAL_PAGES; page++) {
        console.log(`🔎 Fetching page ${page}/${TOTAL_PAGES}...`);
        let results;
        try {
            results = await fetchPage(page);
        } catch (err) {
            console.warn(`⚠️ Skipping page ${page}: ${err.message}`);
            continue;
        }

        for (const movie of results) {
            try {
                const data = await getMovieDetails(movie.id);
                if (data) {
                    allDocs.push(data);
                    console.log(`✅ Added: ${data.name}`);
                }
            } catch (err) {
                console.warn(`⚠️ Movie ID ${movie.id} failed: ${err.message}`);
            }

            if (allDocs.length >= MAX_RESULTS) break;
        }

        if (allDocs.length >= MAX_RESULTS) break;
    }

    const csv = Papa.unparse(allDocs);
    fs.writeFileSync('documentaries.csv', csv);
    console.log(`\n🎉 Done! Saved ${allDocs.length} documentaries to documentaries.csv`);
}

main().catch(console.error);
