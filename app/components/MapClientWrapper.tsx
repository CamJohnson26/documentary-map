import React, { useEffect, useState } from "react";

const MapClientWrapper: React.FC = () => {
    const [MapComponent, setMapComponent] = useState<React.FC | null>(null);

    useEffect(() => {
        import("./WorldMap").then((mod) => {
            setMapComponent(() => mod.default);
        });
    }, []);

    if (!MapComponent) return <div>Loading map...</div>;
    return <MapComponent />;
};

export default MapClientWrapper;