// pages/about.tsx
import Image from 'next/image'

export default function About() {
  return (
    <main className="w-full max-w-6xl mx-auto px-4 py-10 space-y-16">
      {/* Section: Company Mission */}
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">About Anantha Web Solutions</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are committed to helping businesses grow with modern software solutions. Our values are rooted in integrity, innovation, and long-term impact.
        </p>
      </section>

      {/* Section: Team and Leadership */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Leadership Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: 'G. Baba Fakruddin', title: 'Director & Operations Head', img: '/assets/team1.png' },
            { name: 'Trinethra Reddy', title: 'Director & Strategy Head', img: '/assets/team2.png' },
            { name: 'Jane Doe', title: 'Lead Developer', img: '/assets/team3.png' }
          ].map((member, idx) => (
            <div key={idx} className="text-center border rounded shadow-sm p-4">
              <Image
                src={member.img}
                alt={member.name}
                width={100}
                height={100}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="font-bold">{member.name}</h4>
              <p className="text-sm text-gray-500">{member.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Timeline of Growth */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Timeline of Growth</h2>
        <ul className="space-y-4 border-l-2 border-blue-600 pl-6">
          {[
            { year: '2021', event: 'Company founded with vision to empower SMEs digitally.' },
            { year: '2022', event: 'Delivered 50+ custom apps for clients globally.' },
            { year: '2023', event: 'Opened second office and doubled team size.' },
            { year: '2024', event: 'Awarded for Best Emerging Tech Partner in APAC.' }
          ].map((item, i) => (
            <li key={i}>
              <span className="font-semibold text-blue-700">{item.year}</span> – {item.event}
            </li>
          ))}
        </ul>
      </section>

      {/* Section: Awards and Certifications */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Awards & Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: 'Best Innovation Award', desc: 'Recognized for developing breakthrough solutions.' },
            { title: 'ISO 27001 Certified', desc: 'Data security and compliance excellence.' },
            { title: 'Top 10 Dev Firms in India', desc: 'Ranked by TechReview Global in 2023.' }
          ].map((award, i) => (
            <div key={i} className="p-4 border rounded shadow-sm">
              <h4 className="font-bold mb-1">{award.title}</h4>
              <p className="text-sm text-gray-600">{award.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
