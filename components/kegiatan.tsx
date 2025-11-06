"use client"

import { Calendar } from "lucide-react"

export default function Kegiatan() {
  const kegiatan = [
    {
      judul: "Seminar Teknologi",
      tanggal: "15 Desember 2024",
      deskripsi:
        "Seminar menghadirkan pembicara dari industri teknologi terkemuka membahas tren AI dan teknologi masa depan.",
      image: "/seminar-teknologi.jpg",
    },
    {
      judul: "Workshop Coding",
      tanggal: "22 Desember 2024",
      deskripsi: "Workshop intensif untuk meningkatkan skill coding mahasiswa dalam bahasa pemrograman modern.",
      image: "/workshop-coding.jpg",
    },
    {
      judul: "Bakti Sosial",
      tanggal: "29 Desember 2024",
      deskripsi: "Program memberikan kembali kepada masyarakat melalui berbagai kegiatan sosial dan edukasi.",
      image: "/bakti-sosial.jpg",
    },
    {
      judul: "Pelatihan Kepemimpinan",
      tanggal: "5 Januari 2025",
      deskripsi: "Pelatihan untuk mengembangkan skill kepemimpinan dan komunikasi bagi anggota organisasi.",
      image: "/pelatihan-kepemimpinan.jpg",
    },
  ]

  return (
    <section id="kegiatan" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Kegiatan Kami</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {kegiatan.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow fade-in group"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.judul}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-primary font-medium mb-2">
                  <Calendar size={16} />
                  {item.tanggal}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.judul}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.deskripsi}</p>
                <button className="text-primary font-semibold text-sm hover:gap-2 flex items-center gap-1 transition-all">
                  Pelajari Lebih Lanjut →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
