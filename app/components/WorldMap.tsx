import React, { useState, useMemo, useEffect } from "react";
import {
    MapContainer,
    TileLayer,
    CircleMarker,
    Popup,
    useMap,
} from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import {sampleEvents} from '../data/documentaries'

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

    const handleSliderChange = (value: number) => {
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

function MapEvents({ sliderValue, currentYear }: { sliderValue: number, currentYear: number }) {
    return (
        <>
            {sampleEvents.map((event, idx) => {
                const midYear = (event.event_start + event.event_end) / 2;
                const eventSliderValue = getSliderValueFromYear(midYear, currentYear);

                const sliderDistance = Math.abs(sliderValue - eventSliderValue);

                // Fade in fully if within 5 steps, then fade out linearly up to 10
                let alpha = 0;
                if (sliderDistance <= 5) alpha = 1;
                else if (sliderDistance <= 10) alpha = 1 - (sliderDistance - 5) / 5;
                else alpha = 0.1;

                return (
                    <CircleMarker
                        key={idx}
                        center={[event.location.lat, event.location.lng] as LatLngExpression}
                        radius={10}
                        pathOptions={{
                            color: "black",
                            fillColor: "red",
                            fillOpacity: alpha,
                            weight: 1,
                        }}
                        className="fade-transition"
                    >
                        <Popup>
                            <strong>{event.title}</strong>
                            <br />
                            {event.description}
                            <br />
                            {event.event_start} – {event.event_end}
                        </Popup>
                    </CircleMarker>
                );
            })}
        </>
    );
}


export default WorldMap;
