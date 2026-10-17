import ContactForm from "../../components/ContactForm";

export const metadata = { title: "Contact – SkyNow" };

export default function Contact() {
  return (
    <section className="mx-auto max-w-xl px-4 py-10">
      <h1 className="text-3xl md:text-5xl font-bold mb-6">Contact</h1>
      <p className="mb-6 text-ink/80">Have a question or suggestion? Send us a message.</p>
      <ContactForm />
    </section>
  );
}
