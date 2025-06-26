import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const inputPath = path.join(__dirname, 'input.csv');
const outputPath = path.join(__dirname, 'output.json');

try {
    const data = await fs.readFile(inputPath, 'utf8');

    const lines = data.trim().split('\n');
    const headers = lines[0].split('\t');

    const cleanNumber = str => parseFloat(str.replace(/[^\d.-]/g, ''));

    const results = lines.slice(1).map(line => {
        const values = line.split('\t');
        const row = {};
        headers.forEach((header, i) => {
            row[header] = values[i];
        });

        return {
            title: row['name'].trim(),
            description: row['100 char description'].trim(),
            location: {
                lat: cleanNumber(row['lat (##.####)']) || 0,
                lng: cleanNumber(row['lng (##.####)']) || 0
            },
            event_start: parseInt(row['event_start (yyyy)'], 10) || 0,
            event_end: parseInt(row['event_end (yyyy)'], 10) || 0
        };
    });

    await fs.writeFile(outputPath, JSON.stringify(results, null, 4), 'utf8');
    console.log('Conversion complete. JSON saved to:', outputPath);
} catch (err) {
    console.error('Error:', err);
}
