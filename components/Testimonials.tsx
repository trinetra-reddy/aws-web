
export default function Testimonials() {
  const testimonials = [
    { name: "Suresh", quote: "They helped us scale our platform in record time!" },
    { name: "Anjali", quote: "Fantastic design and great team to work with." },
    { name: "Rahul", quote: "True professionals in every aspect." },
  ];

  return (
    <section className="py-16 px-4 bg-blue-50">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white shadow p-6 rounded">
            <p className="italic">"{t.quote}"</p>
            <p className="mt-4 text-right font-semibold">- {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
