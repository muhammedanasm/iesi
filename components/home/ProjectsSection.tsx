// "use client";
// import React, { useState, useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const categories = [
//   "All",
//   "MEP Systems",
//   "HVAC & Cooling",
//   "Electrical",
//   "Industrial",
// ];

// const projects = [
//   {
//     id: 1,
//     title: "Al Baz Restaurant",
//     category: "MEP Systems",
//     image:
//       "https://images.unsplash.com/photo-1558389186-438424b00a32?q=80&w=2070",
//     size: "large",
//   },
//   {
//     id: 2,
//     title: "Luxury Villa - Al Khoudh",
//     category: "HVAC & Cooling",
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
//     size: "small",
//   },
//   {
//     id: 3,
//     title: "Omantel Outlet",
//     category: "Electrical",
//     image:
//       "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
//     size: "medium",
//   },
//   {
//     id: 4,
//     title: "Industrial Warehouse",
//     category: "Industrial",
//     image:
//       "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070",
//     size: "large",
//   },
//   {
//     id: 5,
//     title: "St. Regis Hotel Cafe",
//     category: "MEP Systems",
//     image:
//       "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2070",
//     size: "medium",
//   },
//   {
//     id: 6,
//     title: "Smart Building ELV",
//     category: "Electrical",
//     image:
//       "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070",
//     size: "small",
//   },
// ];

// const ProjectsSection = () => {
//   const [filter, setFilter] = useState("All");
//   const sectionRef = useRef(null);

//   const filteredProjects =
//     filter === "All" ? projects : projects.filter((p) => p.category === filter);

//   useGSAP(
//     () => {
//       gsap.from(".project-card", {
//         y: 50,
//         opacity: 0,
//         stagger: 0.1,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 70%",
//         },
//       });
//     },
//     { scope: sectionRef },
//   );

//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-32 bg-white px-6 md:px-12 lg:px-20 overflow-hidden"
//     >
//       {/* --- BACKGROUND ILLUSTRATOR: ARCHITECTURAL SKETCH --- */}
//       <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-0">
//         <svg
//           width="100%"
//           height="100%"
//           viewBox="0 0 1000 1000"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M0 200 L1000 200 M200 0 L200 1000 M800 0 L800 1000 M0 800 L1000 800"
//             stroke="black"
//             strokeWidth="1"
//             fill="none"
//           />
//           <circle
//             cx="200"
//             cy="200"
//             r="150"
//             stroke="black"
//             strokeWidth="0.5"
//             fill="none"
//           />
//           <path
//             d="M400 100 L900 600 M100 900 L600 400"
//             stroke="black"
//             strokeWidth="0.5"
//             strokeDasharray="5,5"
//             fill="none"
//           />
//         </svg>
//       </div>

//       <div className="max-w-[1500px] mx-auto relative z-10">
//         {/* Header */}
//         {/* Header with Compact Marquee Box */}
//         {/* Header with Compact Marquee Box */}
//         <div className="text-center mb-16">
//           <div className="mb-8 inline-flex items-center overflow-hidden bg-[#F5F4F2] border border-black/5 rounded-full py-2 px-6 w-fit mx-auto max-w-[220px]">
//             <div className="whitespace-nowrap animate-marquee-project flex gap-8 text-[9px] tracking-[0.4em] font-bold text-[#C69A59] uppercase">
//               <span>Fresh Updates</span>
//               <span>Fresh Updates</span>
//               <span>Fresh Updates</span>
//             </div>
//           </div>
//           <h2 className="text-5xl md:text-5xl font-sans text-[#161616] leading-tight">
//             Our Excellent Efforts
//           </h2>
//         </div>

//         {/* Filters */}
//         <div className="flex flex-wrap justify-center gap-4 mb-16">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setFilter(cat)}
//               className={`flex items-center px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-500 border ${
//                 filter === cat
//                   ? "bg-[#C69A59] border-[#C69A59] text-white shadow-lg"
//                   : "bg-transparent border-black/10 text-gray-500 hover:border-[#C69A59] hover:text-[#C69A59]"
//               }`}
//             >
//               {/* Small Dot Indicator - Added inline-block and size adjustment */}
//               <span
//                 className={`inline-block w-2 h-2 rounded-full mr-2.5 transition-colors duration-500 ${
//                   filter === cat ? "bg-white" : "bg-[#C69A59]"
//                 }`}
//               ></span>

//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Projects Masonry Grid */}
//         <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
//           {filteredProjects.map((project) => (
//             <div
//               key={project.id}
//               className="project-card relative group overflow-hidden rounded-[30px] break-inside-avoid bg-[#f8f8f8]"
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
//               />

//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
//                 <span className="text-[#C69A59] text-[10px] tracking-[0.3em] font-bold uppercase mb-2">
//                   {project.category}
//                 </span>
//                 <h4 className="text-white text-2xl font-serif font-bold">
//                   {project.title}
//                 </h4>
//                 <div className="mt-6 w-10 h-10 rounded-full bg-white flex items-center justify-center text-black transform translate-y-10 group-hover:translate-y-0 transition-transform duration-700">
//                   →
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx global>{`
//         @keyframes marquee-project {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-marquee-project {
//           animation: marquee-project 10s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ProjectsSection;

"use client";
import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  "All",
  "MEP Systems",
  "HVAC & Cooling",
  "Electrical",
  "Industrial",
];

const projects = [
  {
    id: 1,
    title: "Al Baz Restaurant",
    category: "MEP Systems",
    image:
      "https://images.unsplash.com/photo-1558389186-438424b00a32?q=80&w=2070",
    gridClass: "lg:col-span-1 lg:row-span-1",
  }, // Column 1 - Top
  {
    id: 2,
    title: "Luxury Villa",
    category: "HVAC & Cooling",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    // gridClass: "lg:col-span-1 lg:row-span-2",
    gridClass: "lg:col-span-1 lg:row-span-2 lg:h-[390px]",
  }, // Column 2 - Tall
  {
    id: 3,
    title: "Industrial Plant",
    category: "Industrial",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070",
    gridClass: "lg:col-span-2 lg:row-span-1",
  }, // Column 3 & 4 - Wide Top
  {
    id: 4,
    title: "Modern Office",
    category: "Electrical",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
    gridClass: "lg:col-span-1 lg:row-span-2 lg:h-[390px]",
  }, // Column 5 - Tall
  {
    id: 5,
    title: "St. Regis Cafe",
    category: "MEP Systems",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2070",
    gridClass: "lg:col-span-1 lg:row-span-1",
  }, // Column 1 - Bottom
  {
    id: 6,
    title: "Smart Network",
    category: "Electrical",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070",
    gridClass: "lg:col-span-1 lg:row-span-1",
  }, // Column 3 - Bottom Left
  {
    id: 7,
    title: "CCTV Control",
    category: "Electrical",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070",
    gridClass: "lg:col-span-1 lg:row-span-1",
  }, // Column 4 - Bottom Right
  //   {
  //     id: 8,
  //     title: "IES Workshop",
  //     category: "Industrial",
  //     image:
  //       "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070",
  //     gridClass: "lg:col-span-5 lg:row-span-1",
  //   }, // Full Width Bottom (Optional)
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");
  const sectionRef = useRef(null);

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  useGSAP(
    () => {
      gsap.set(".project-card", { opacity: 0, y: 30 });

      gsap.to(".project-card", {
        y: 0,
        opacity: 1,
        stagger: 0.06,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef, dependencies: [filteredProjects] },
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-white px-4 md:px-10 lg:px-16 overflow-hidden"
    >
      {/* BACKGROUND ILLUSTRATOR */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 1200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 300 L1200 300 M0 900 L1200 900 M300 0 L300 1200 M900 0 L900 1200"
            stroke="black"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="300"
            cy="300"
            r="250"
            stroke="black"
            strokeWidth="0.5"
            fill="none"
          />
          <circle
            cx="900"
            cy="800"
            r="200"
            stroke="black"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-[1700px] mx-auto relative z-10">
        {/* Compact Header Marquee */}
        <div className="text-center mb-16">
          <div className="mb-6 inline-flex items-center overflow-hidden bg-[#F5F4F2] border border-black/5 rounded-full py-1.5 px-6 w-fit mx-auto max-w-[200px]">
            <div className="whitespace-nowrap animate-marquee-project flex gap-6 text-[9px] tracking-[0.4em] font-bold text-[#C69A59] uppercase">
              <span>Fresh Updates</span>
              <span>Fresh Updates</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium font-sans text-[#161616] leading-tight">
            Our Excellent Efforts
          </h2>
        </div>

        {/* Filter Labels with Dots */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`flex items-center px-7 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 border cursor-pointer ${
                filter === cat
                  ? "bg-[#C69A59] border-[#C69A59] text-white shadow-xl shadow-[#C69A59]/20"
                  : "bg-transparent border-black/5 text-gray-500 hover:border-[#C69A59] hover:text-[#C69A59]"
              }`}
            >
              <span
                className={`inline-block w-1.5 h-1.5 rounded-full mr-2.5 transition-colors duration-500 ${filter === cat ? "bg-white" : "bg-[#C69A59]"}`}
              ></span>
              {cat}
            </button>
          ))}
        </div>

        {/* --- EXACT LUMORIA 5-COLUMN GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 auto-rows-[220px] md:auto-rows-[260px]">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`project-card relative group cursor-pointer overflow-hidden rounded-[30px] md:rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-700 ${project.gridClass}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Hover Content */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[#C69A59] text-[9px] tracking-[0.4em] font-bold uppercase mb-2 block">
                    {project.category}
                  </span>
                  <h4 className="text-white text-xl md:text-2xl font-sans font-medium leading-tight">
                    {project.title}
                  </h4>
                </div>
                <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#161616] scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                  <span className="text-lg">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-project {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-project {
          animation: marquee-project 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
