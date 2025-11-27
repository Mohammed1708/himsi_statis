"use client"

import { Clock, User } from "lucide-react"

export default function Pengumuman() {
  const berita = [
    {
      judul: "HIMSI Mengajar: Inisiatif untuk Pendidikan Digital",
      author: "HIMSI",
      tanggal: "20 Agustus 2025",
      ringkasan:
        "HIMSI UNM gelar kelas AI untuk literasi teknologi siswa SMK Raflesia Depok.",
      image: "/ngajar.jpg",
    },
    {
      judul: "Kerjasama HIMSI dengan PT Tech Innovation",
      author: "Admin HIMSI",
      tanggal: "28 November 2024",
      ringkasan:
        "HIMSI menjalin kerjasama strategis dengan PT Tech Innovation untuk memberikan pelatihan dan magang kepada mahasiswa.",
      image: "/kerjasama.jpg",
    },
    {
      judul: "Mahasiswa HIMSI Juara Hackathon Nasional",
      author: "Admin HIMSI",
      tanggal: "25 November 2024",
      ringkasan:
        "Tim dari HIMSI berhasil memenangkan kompetisi Hackathon Nasional dengan project innovative di bidang IoT.",
      image: "/hackathon-event.png",
    },
  ]

  return (
    <section id="pengumuman" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Pengumuman</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {berita.map((item, idx) => (
            <article
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow fade-in group"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden bg-gray-200">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.judul}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {item.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {item.tanggal}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{item.judul}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{item.ringkasan}</p>
                <button className="text-primary font-semibold text-sm hover:gap-2 flex items-center gap-1 transition-all">
                  Baca Selengkapnya →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
