"use client"

import { Calendar } from "lucide-react"

export default function Berita() {
  const kegiatan = [
    {
      judul: "HIMSI Open Class",
      tanggal: "3 Mei - 22 Juni 2025",
      deskripsi:
        "HIMSI Unusa Mandiri menyelenggarakan HIMSI Open Class dari 3 Mei hingga 22 Juni 2025 via Zoom, menawarkan kelas Front-End dan Back-End Development yang masing-masing terdiri dari delapan pertemuan dengan bimbingan mentor berpengalaman. Melalui program ini, peserta tidak hanya mendapatkan pembelajaran teori tetapi juga praktik via mini project, serta manfaat seperti mentoring eksklusif dan sertifikat kompetensi, sehingga berhasil mendapat sambutan positif dari mahasiswa yang ingin mendalami coding dan pengembangan web.",
      image: "/openclass.jpg",
    },
    {
      judul: "Seminar Tranformasi Digital",
      tanggal: "22 Mei 2025",
      deskripsi: "HIMSI Universitas Nusa Mandiri sukses menggelar seminar kolaboratif dengan NIC bertema “Transformasi Digital: Menyongsong Era Bisnis Berbasis Data dan AI”. Kegiatan ini menghadirkan narasumber inspiratif yang membagikan wawasan tentang pemanfaatan data dan AI untuk efisiensi dan inovasi bisnis, mengajak peserta memahami transformasi digital sebagai kunci menghadapi perkembangan industri. Acara berlangsung meriah dengan antusiasme peserta yang aktif berdiskusi, merefleksikan komitmen HIMSI dalam menyediakan wadah pengembangan pengetahuan yang relevan dengan perkembangan zaman.",
      image: "/seminar.jpg",
    },
    {
      judul: "Studi Banding HIMSI UNM X HIMASI STTNF",
      tanggal: "14 Juni 2025",
      deskripsi: "Dalam rangka mempererat silaturahmi dan meningkatkan kualitas organisasi, HIMSI UNM berkolaborasi dengan HIMASI STT NF menyelenggarakan Studi Banding bertema “Menguatkan Sinergi, Membangun Kolaborasi” pada 14 Juni 2025 di Depok. Kegiatan ini menjadi ajang strategis bagi kedua himpunan untuk saling berbagi pengalaman, bertukar ide, serta memperluas wawasan pengelolaan organisasi melalui diskusi, presentasi, dan forum interaktif, sehingga diharapkan dapat melahirkan inovasi kolaboratif dan memperkuat hubungan antarlembaga.",
      image: "/stubanHimsi.jpg",
    },
    {
      judul: "PMinKref HIMSI X HIMMA",
      tanggal: "4 Juli 2025",
      deskripsi: "HIMSI Universitas Nusa Mandiri berkolaborasi dengan HIMMA sukses menyelenggarakan MinKref (Mini Kreatif), sebuah workshop desain poster yang bertujuan mengembangkan potensi dan kreativitas mahasiswa. Kegiatan ini menjadi wadah bagi peserta untuk mempelajari dasar-dasar desain grafis hingga teknik praktis pembuatan poster dalam suasana yang hangat dan interaktif. Melalui workshop ini, peserta tidak hanya mendapat pengetahuan baru, tetapi juga kesempatan berkreasi langsung dan bertukar ide secara menyenangkan.",
      image: "/minkref.jpg",
    },
  ]

  return (
    <section id="kegiatan" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Berita Himsi</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {kegiatan.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow fade-in group"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-70 overflow-hidden bg-gray-200">
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
