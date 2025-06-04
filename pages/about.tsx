// // pages/about.tsx
// 'use client'
// import { motion } from 'framer-motion'
// import Image from 'next/image'

// const fadeInVariants = {
//   hidden: { opacity: 0, y: 40 },
//   show: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, delay: i * 0.15 }
//   })
// }

// export default function About() {
//   return (
//     <main className="w-full bg-white text-blue-900 px-6 py-16">
//       <div className="max-w-7xl mx-auto space-y-20">
//         {/* Page Heading */}
//         <motion.h1
//           className="text-4xl md:text-5xl font-extrabold leading-tight text-center text-[#1d3a70]"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           About Anantha Web Solutions
//         </motion.h1>

//         {/* Mission Section */}
//         <motion.section
//           className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           variants={fadeInVariants}
//         >
//           <motion.div
//             className="rounded-xl overflow-hidden shadow-lg"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <Image
//               src="/assets/about.webp"
//               alt="AI-powered communication"
//               width={600}
//               height={400}
//               className="w-full h-auto object-cover"
//             />
//           </motion.div>

//           <motion.div
//             className="text-center md:text-left"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-2xl font-semibold mb-4 text-[#1d3a70]">Our Mission</h2>
//             <p className="text-blue-800 text-lg leading-relaxed">
//               At <strong>Anantha Web Solutions</strong>, our mission is to empower businesses through innovative digital solutions.
//               We aim to deliver exceptional value to our clients by focusing on their unique needs and challenges.
//             </p>
//           </motion.div>
//         </motion.section>

//         {/* Section: Team and Leadership */}
//         <section>
//           <h2 className="text-3xl font-bold text-center mb-12 text-[#1d3a70]">Leadership Team</h2>
//           <motion.div
//             className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//           >
//             {[{
//               name: 'G. Baba Fakruddin', title: 'Director & Operations Head', img: '/assets/team1.png' },
//               { name: 'Trinethra Reddy', title: 'Director & Strategy Head', img: '/assets/team2.png' },
//               { name: 'Teja sree', title: 'Lead Developer', img: '/assets/team3.png' }
//             ].map((member, idx) => (
//               <motion.div
//                 key={idx}
//                 className="bg-white rounded-lg shadow-md p-6 text-center border hover:shadow-lg transition"
//                 custom={idx}
//                 variants={fadeInVariants}
//                 initial="hidden"
//                 whileInView="show"
//               >
//                 <Image
//                   src={member.img}
//                   alt={member.name}
//                   width={100}
//                   height={100}
//                   className="rounded-full mx-auto mb-4 object-cover shadow"
//                 />
//                 <h4 className="font-bold text-lg text-blue-900">{member.name}</h4>
//                 <p className="text-sm text-blue-700 mt-1">{member.title}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </section>

//         {/* Section: Timeline of Growth */}
//         <section>
//           <h2 className="text-3xl font-bold text-center mb-10 text-[#1d3a70]">Timeline of Growth</h2>
//           <ul className="space-y-4 border-l-2 border-blue-600 pl-6 max-w-3xl mx-auto">
//             {[{
//               year: '2021', event: 'Company founded with vision to empower SMEs digitally.' },
//               { year: '2022', event: 'Delivered 50+ custom apps for clients globally.' },
//               { year: '2023', event: 'Opened second office and doubled team size.' },
//               { year: '2024', event: 'Awarded for Best Emerging Tech Partner in APAC.' }
//             ].map((item, i) => (
//               <li key={i}>
//                 <span className="font-semibold text-blue-700">{item.year}</span> – {item.event}
//               </li>
//             ))}
//           </ul>
//         </section>
//       </div>
//     </main>
//   )
// }

// pages/about.tsx
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const fadeInVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 }
  })
}

export default function About() {
  return (
    <main className="w-full bg-white text-blue-900 px-6 py-16">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Page Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold leading-tight text-center text-[#1d3a70]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Anantha Web Solutions
        </motion.h1>

        {/* Mission Section */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <motion.div
            className="rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/assets/about.webp"
              alt="AI-powered communication"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#1d3a70]">Our Mission</h2>
            <p className="text-blue-800 text-lg leading-relaxed">
              At <strong>Anantha Web Solutions</strong>, our mission is to empower businesses through innovative digital solutions.
              We aim to deliver exceptional value to our clients by focusing on their unique needs and challenges.
            </p>
          </motion.div>
        </motion.section>

        {/* Section: Team and Leadership */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1d3a70]">Leadership Team</h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[{
              name: 'G. Baba Fakruddin', title: 'Director & Operations Head', img: '/assets/team1.png' },
              { name: 'Trinethra Reddy', title: 'Director & Strategy Head', img: '/assets/team2.png' },
              { name: 'Teja sree', title: 'Lead Developer', img: '/assets/team3.png' }
            ].map((member, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 text-center border hover:shadow-xl transition transform hover:-translate-y-1"
                custom={idx}
                variants={fadeInVariants}
                initial="hidden"
                whileInView="show"
              >
                <div className="relative w-28 h-28 mx-auto mb-4">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover shadow border-4 border-white"
                  />
                </div>
                <h4 className="font-bold text-lg text-blue-900 mb-1">{member.name}</h4>
                <p className="text-sm text-black italic">{member.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Section: Timeline of Growth */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-10 text-[#1d3a70]">Timeline of Growth</h2>
          <ul className="space-y-4 border-l-2 border-blue-600 pl-6 max-w-3xl mx-auto">
            {[{
              year: '2021', event: 'Company founded with vision to empower SMEs digitally.' },
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
      </div>
    </main>
  )
}