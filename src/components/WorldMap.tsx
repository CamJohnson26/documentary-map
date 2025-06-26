import React, { useState, useMemo, useEffect } from "react";
import {
    MapContainer,
    TileLayer,
    CircleMarker,
    Popup,
    Marker,
    useMap,
} from "react-leaflet";
import type {LatLngExpression} from "leaflet";
import "leaflet/dist/leaflet.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import {sampleEvents} from '../data/documentaries.ts'
import { useMapEvent } from "react-leaflet";
import L from 'leaflet';

function FitWorldOnce() {
    const map = useMap();
    useEffect(() => {
        map.setView([0, 0], 2);
    }, [map]);
    return null;
}

function getSliderValueFromYear(year: number, currentYear: number): number {
    const minYear = -6000000000;
    const midYear = 1500;
    const maxYear = currentYear;

    const lowerExponent = 0.000000367;
    const upperExponent = 0.392;

    if (year <= midYear) {
        const t = (year - minYear) / (midYear - minYear);
        return 50 * Math.pow(t, 1 / lowerExponent);
    } else {
        const t = (year - midYear) / (maxYear - midYear);
        return 50 + 50 * Math.pow(t, 1 / upperExponent);
    }
}


const WorldMap: React.FC = () => {
    const currentYear = useMemo(() => new Date().getFullYear(), []);
    const [selectedYear, setSelectedYear] = useState<number>(currentYear);
    const [sliderValue, setSliderValue] = useState<number>(100);

    const getYearFromSlider = (value: number): number => {
        const minYear = -6000000000;
        const midYear = 1500;
        const maxYear = currentYear;

        const lowerExponent = 0.000000367;
        const upperExponent = 0.392;

        let year: number;

        if (value <= 50) {
            const t = Math.pow(value / 50, lowerExponent);
            year = minYear + (midYear - minYear) * t;
        } else {
            const t = Math.pow((value - 50) / 50, upperExponent);
            year = midYear + (maxYear - midYear) * t;
        }

        return Math.round(Math.max(year, -271820));
    };

    const handleSliderChange = (value: number | number[]) => {
        if (Array.isArray(value)) {
            return;
        }
        setSliderValue(value);
        const year = getYearFromSlider(value);
        setSelectedYear(year);
    };

    return (
        <div style={{ width: "100%", height: "100vh", position: "relative" }}>
            <MapContainer center={[0, 0]} zoom={2} style={{ height: "100%" }}>
                <FitWorldOnce />
                <TileLayer
                    attribution='&copy; <a href="https://osm.org">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapEvents sliderValue={sliderValue} currentYear={currentYear} />
            </MapContainer>

            <div
                style={{
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                    right: 20,
                    background: "rgba(255,255,255,0.9)",
                    padding: 10,
                    borderRadius: 8,
                    zIndex: 1000,
                }}
            >
                <p style={{ color: 'black' }}>
                    <strong>Selected Year:</strong> {selectedYear}
                </p>
                <Slider
                    min={0}
                    max={100}
                    value={sliderValue}
                    onChange={handleSliderChange}
                    marks={{
                        0: "1000",
                        33: "1500",
                        67: "1900",
                        100: "Now"
                    }}
                    step={1}
                    handleRender={(node, handleProps) => {
                        const year = getYearFromSlider(handleProps.value);
                        return (
                            <Tooltip
                                overlay={year.toString()}
                                placement="top"
                                visible
                                key={handleProps.index}
                            >
                                {node}
                            </Tooltip>
                        );
                    }}
                />
            </div>
        </div>
    );
};

function MapEvents({ sliderValue, currentYear }: { sliderValue: number; currentYear: number }) {
    const map = useMap();
    const [clusters, setClusters] = useState<any[]>([]);
    const [zoom, setZoom] = useState(map.getZoom());

    // Handle zoom change
    useMapEvent("zoomend", () => {
        setZoom(map.getZoom());
    });

    // Recompute clusters when zoom or slider changes
    useEffect(() => {
        const thresholdDegrees = 360 / Math.pow(2, zoom + 2); // smaller when zoomed in
        const clustered: any[] = [];

        const unvisited = [...sampleEvents];
        while (unvisited.length) {
            const base = unvisited.pop()!;
            const cluster = [base];

            for (let i = unvisited.length - 1; i >= 0; i--) {
                const other = unvisited[i];
                const dLat = Math.abs(base.location.lat - other.location.lat);
                const dLng = Math.abs(base.location.lng - other.location.lng);
                if (dLat <= thresholdDegrees && dLng <= thresholdDegrees) {
                    cluster.push(other);
                    unvisited.splice(i, 1);
                }
            }

            clustered.push(cluster);
        }

        setClusters(clustered);
    }, [zoom, sliderValue]);

    return (
        <>
            {clusters.map((events, idx) => {
                const lat = events.reduce((sum, e) => sum + e.location.lat, 0) / events.length;
                const lng = events.reduce((sum, e) => sum + e.location.lng, 0) / events.length;

                let maxAlpha = 0;
                for (const event of events) {
                    const midYear = (event.event_start + event.event_end) / 2;
                    const eventSliderValue = getSliderValueFromYear(midYear, currentYear);
                    const sliderDistance = Math.abs(sliderValue - eventSliderValue);
                    let alpha = 0;
                    if (sliderDistance <= 5) alpha = 1;
                    else if (sliderDistance <= 10) alpha = 1 - (sliderDistance - 5) / 5;
                    else alpha = 0.1;
                    if (alpha > maxAlpha) maxAlpha = alpha;
                }

                return (
                    <React.Fragment key={idx}>
                        <CircleMarker
                            center={[lat, lng] as LatLngExpression}
                            radius={8 + Math.min(events.length, 10)}
                            pathOptions={{
                                color: "black",
                                fillColor: "#c1121f",
                                fillOpacity: maxAlpha,
                                weight: 1,
                            }}
                        >
                            <Popup>
                                <div style={{ maxHeight: "150px", overflowY: "auto", paddingRight: "4px" }}>
                                    {events.map((event, i) => (
                                        <div key={i} style={{ marginBottom: "8px" }}>
                                            <strong>{event.title}</strong>
                                            <br />
                                            {event.description}
                                            <br />
                                            {event.event_start} – {event.event_end}
                                        </div>
                                    ))}
                                </div>
                            </Popup>
                        </CircleMarker>

                        {events.length > 1 && (
                            <Marker
                                position={[lat, lng] as LatLngExpression}
                                interactive={false}
                                icon={L.divIcon({
                                    className: 'event-cluster-label',
                                    html: `<div style="
      background: white;
      color: black;
      border: 1px solid black;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
         transform: translate(-1px, -1px);
      justify-content: center;
      font-size: 10px;
      font-weight: bold;
      pointer-events: none;
  ">${events.length}</div>`,
                                    iconSize: [20, 20],
                                    iconAnchor: [10, 10],
                                })}
                            />
                        )}
                    </React.Fragment>
                );
            })}
        </>
    );
}




export default WorldMap;
