"use client";
import { useEffect, useState } from "react";

const codes = {
  0: "Clear sky", 1: "Mainly clear", 2: "Partly cloudy", 3: "Overcast",
  45: "Fog", 48: "Rime fog", 51: "Light drizzle", 53: "Drizzle", 55: "Heavy drizzle",
  61: "Light rain", 63: "Rain", 65: "Heavy rain", 71: "Light snow", 73: "Snow", 75: "Heavy snow",
  80: "Rain showers", 81: "Rain showers", 82: "Violent showers", 95: "Thunderstorm",
  96: "Thunderstorm with hail", 99: "Thunderstorm with hail",
};

export default function WeatherDisplay() {
  const [query, setQuery] = useState("Dhaka");
  const [data, setData] = useState(null);
  const [place, setPlace] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function load(city) {
    setLoading(true);
    setError("");
    try {
      const geo = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
      ).then((r) => r.json());
      if (!geo.results?.length) throw new Error(`"${city}" not found. Check the spelling and try again.`);
      const { latitude, longitude, name, country } = geo.results[0];

      const url =
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}` +
        `&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code` +
        `&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto`;
      const w = await fetch(url).then((r) => r.json());
      if (!w.current) throw new Error("Weather data is not available right now.");

      setPlace(`${name}, ${country}`);
      setData(w);
    } catch (e) {
      setError(e.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load("Dhaka"); }, []);

  const c = data?.current;
  const units = data?.current_units;

  return (
    <section className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl md:text-5xl font-bold mb-6">Weather right now</h1>

      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && query.trim() && load(query.trim())}
          placeholder="Search a city"
          aria-label="City name"
          className="flex-1 rounded border border-ink/20 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky"
        />
        <button
          onClick={() => query.trim() && load(query.trim())}
          className="rounded bg-ink text-white px-6 py-3 hover:bg-ink/90"
        >
          Search
        </button>
      </div>

      {loading && <p>Loading weather…</p>}
      {error && <p className="rounded bg-red-100 text-red-800 px-4 py-3">{error}</p>}

      {!loading && !error && c && (
        <>
          <div className="rounded-2xl bg-ink text-white p-6 md:p-10">
            <p className="text-white/70">{place}</p>
            <div className="flex flex-wrap items-end gap-x-6 gap-y-2 mt-2">
              <p className="text-7xl md:text-8xl font-bold leading-none">
                {Math.round(c.temperature_2m)}°
              </p>
              <p className="text-xl md:text-2xl text-sky pb-2">{codes[c.weather_code] ?? "Unknown"}</p>
            </div>

            <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <Stat label="Humidity" value={`${c.relative_humidity_2m}${units.relative_humidity_2m}`} />
              <Stat label="Wind speed" value={`${c.wind_speed_10m} ${units.wind_speed_10m}`} />
              <Stat label="Time" value={new Date(c.time).toLocaleString([], { dateStyle: "medium", timeStyle: "short" })} />
              <Stat label="Update interval" value={`${c.interval / 60} min`} />
            </dl>
          </div>

          <h2 className="text-xl font-semibold mt-10 mb-3">7-day forecast</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {data.daily.time.map((d, i) => (
              <div key={d} className="rounded-lg bg-white p-3 text-center">
                <p className="text-sm text-ink/60">
                  {new Date(d).toLocaleDateString([], { weekday: "short", day: "numeric" })}
                </p>
                <p className="font-semibold mt-1">
                  {Math.round(data.daily.temperature_2m_max[i])}° / {Math.round(data.daily.temperature_2m_min[i])}°
                </p>
                <p className="text-xs text-ink/60 mt-1">{codes[data.daily.weather_code[i]] ?? ""}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-lg bg-white/10 p-4">
      <dt className="text-sm text-white/70">{label}</dt>
      <dd className="text-lg font-semibold mt-1">{value}</dd>
    </div>
  );
}
