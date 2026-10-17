import Link from "next/link";
import WeatherDisplay from "../components/WeatherDisplay";

export default function Home() {
  return (
    <>
      <WeatherDisplay />
      <section className="mx-auto max-w-5xl px-4">
        <div className="rounded-2xl bg-white p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-2">About SkyNow</h2>
          <p className="max-w-prose text-ink/80">
            SkyNow shows live temperature, humidity and wind speed for any city. It uses the free
            Open-Meteo API, so no sign-up or API key is needed.
          </p>
          <Link href="/about" className="inline-block mt-4 font-semibold underline decoration-sun decoration-2 underline-offset-4">
            Read more about the app
          </Link>
        </div>
      </section>
    </>
  );
}
