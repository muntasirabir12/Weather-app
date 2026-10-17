export const metadata = { title: "Services – SkyNow" };

const services = [
  { title: "Current conditions", text: "Temperature, humidity, wind speed and sky condition for the city you search." },
  { title: "7-day forecast", text: "Daily high and low temperatures with a short weather summary." },
  { title: "City search", text: "Find weather for any city in the world by typing its name." },
  { title: "Live update time", text: "See the exact time of the reading and how often the data refreshes." },
  { title: "Works on every screen", text: "A responsive layout that fits phones, tablets and desktops." },
  { title: "Free and key-less", text: "Powered by Open-Meteo, so there is nothing to register for." },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl md:text-5xl font-bold mb-8">Services</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s) => (
          <div key={s.title} className="rounded-xl bg-white p-6 border-l-4 border-sun">
            <h2 className="text-lg font-semibold mb-2">{s.title}</h2>
            <p className="text-ink/80">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
