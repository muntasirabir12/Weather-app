export const metadata = { title: "About – SkyNow" };

export default function About() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl md:text-5xl font-bold mb-6">About SkyNow</h1>
      <div className="space-y-4 text-lg text-ink/80">
        <p>SkyNow is a simple weather app built with Next.js and Tailwind CSS as a learning project.</p>
        <p>
          Type a city name and the app finds its location, then fetches current conditions and a
          7-day forecast from the free Open-Meteo API.
        </p>
        <p>The layout is responsive, so it works the same on a phone, tablet or desktop.</p>
      </div>
      <h2 className="text-xl font-semibold mt-8 mb-2">Built with</h2>
      <ul className="list-disc pl-6 space-y-1 text-ink/80">
        <li>Next.js (App Router) for pages and routing</li>
        <li>Tailwind CSS for responsive styling</li>
        <li>Open-Meteo for weather and city search data</li>
      </ul>
    </section>
  );
}
