import type { Route } from "./+types/home";
import MapClientWrapper from '../components/MapClientWrapper'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Documentary Map" },
  ];
}

export default function Home() {
  return <MapClientWrapper meta={meta} />;
}
