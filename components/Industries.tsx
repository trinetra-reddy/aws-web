
export default function Industries() {
  const industries = ["Software", "Hospitality", "E-commerce", "Automobile", "Custom Solutions"];
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Industries We Serve</h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        {industries.map((ind, i) => (
          <div key={i} className="border border-blue-900 px-6 py-3 rounded text-blue-900 font-medium">
            {ind}
          </div>
        ))}
      </div>
    </section>
  );
}
