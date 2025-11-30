"use client"

import { Clock, User, Calendar, MapPin } from "lucide-react"
import { useState, useEffect } from "react"

export default function Pengumuman() {
  const [selectedBerita, setSelectedBerita] = useState<any>(null)

  // Effect untuk mencegah scroll ketika popup terbuka
  useEffect(() => {
    if (selectedBerita) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedBerita])

  const berita = [
    {
      judul: "HIMSI Mengajar: Inisiatif untuk Pendidikan Digital",
      author: "HIMSI",
      tanggal: "20 Agustus 2025",
      ringkasan:
        "HIMSI UNM gelar kelas AI untuk literasi teknologi siswa SMK Raflesia Depok.",
      image: "/ngajar.jpg",
      detail: `Depok, 20 Agustus 2025 - Sebagai bentuk kontribusi nyata dalam meningkatkan literasi teknologi di kalangan pelajar, Himpunan Mahasiswa Sistem Informasi (HIMSI) Universitas Nusa Mandiri menyelenggarakan kegiatan *HIMSI Mengajar* dengan tema *"Menjadi Generasi Siap Teknologi: Kupas Tuntas Artificial Intelligence (AI) Bersama HIMSI."* Kegiatan ini menjadi langkah strategis HIMSI dalam memperluas dampak edukatif sekaligus mengenalkan teknologi masa depan kepada generasi muda.

Program ini diikuti oleh para siswa SMK Raflesia Depok yang menunjukkan antusiasme tinggi sepanjang kegiatan. Suasana belajar yang penuh energi terlihat sejak awal, di mana para siswa aktif berpartisipasi dan menunjukkan rasa ingin tahu yang besar terhadap materi yang disampaikan.

Melalui sesi sharing bersama narasumber, peserta memperoleh pemahaman mendalam mengenai konsep dasar Artificial Intelligence serta penerapannya dalam kehidupan sehari-hari. Sesi tanya jawab berlangsung interaktif dan menarik, mencerminkan minat besar siswa terhadap perkembangan teknologi dan peluang yang ditawarkan di era digital.

Selain memberikan wawasan baru bagi para pelajar, *HIMSI Mengajar* juga menjadi sarana bagi mahasiswa HIMSI untuk mengasah kemampuan berbagi ilmu, memperluas jaringan edukatif, serta menumbuhkan semangat kontribusi positif dalam bidang teknologi informasi. Kegiatan ini mengukuhkan komitmen HIMSI Universitas Nusa Mandiri dalam mendukung peningkatan literasi teknologi di lingkungan pendidikan.`,
      waktu: "08.00 - 15.00 WIB",
      lokasi: "SMK Raflesia Depok",
      tanggalPelaksanaan: "20 Agustus 2025"
    },
    {
      judul: "HIMSI Goes To Ragunan",
      author: "Admin HIMSI",
      tanggal: "16 November 2025",
      ringkasan:
        "Kegiatan kebersamaan pengurus HIMSI untuk mempererat hubungan dan refreshing di Kebun Binatang Ragunan.",
      image: "/ragunan1.0.jpg",
      detail: `Jakarta, 16 November 2025 - Himpunan Mahasiswa Sistem Informasi (HIMSI) Universitas Nusa Mandiri sukses melaksanakan kegiatan HIMSI Goes to Ragunan, sebuah agenda kebersamaan yang bertujuan mempererat hubungan antarpengurus sekaligus menciptakan suasana refreshing setelah menjalani aktivitas perkuliahan dan organisasi. Kegiatan ini menjadi salah satu bentuk upaya HIMSI dalam membangun kekompakan dan memperkuat komunikasi internal melalui kegiatan outdoor yang santai dan menyenangkan.

Selama kegiatan berlangsung, para pengurus mengisi waktu dengan berbagai aktivitas interaktif seperti jelajah area Kebun Binatang Ragunan, diskusi ringan, serta permainan kelompok yang memupuk kerja sama dan keakraban. Suasana kebersamaan terasa hangat, ditambah antusiasme seluruh peserta yang terlibat aktif dalam setiap sesi kegiatan.

Selain menjadi ajang rekreasi, HIMSI Goes to Ragunan juga berfungsi sebagai ruang refleksi bersama mengenai perjalanan organisasi, sekaligus memotivasi pengurus untuk terus berkontribusi secara maksimal dalam periode kepengurusan yang sedang berjalan. Banyak momen kebersamaan terekam selama kegiatan, menandai kuatnya solidaritas yang terbangun di antara pengurus HIMSI.

Melalui kegiatan ini, HIMSI Universitas Nusa Mandiri kembali menunjukkan komitmennya dalam membangun lingkungan organisasi yang harmonis, suportif, dan penuh kolaborasi. *HIMSI Goes to Ragunan* diharapkan dapat menjadi energi positif bagi pengurus untuk terus berkarya dan menjaga kekompakan hingga akhir periode.`,
      waktu: "07.00 - 17.00 WIB",
      lokasi: "Kebun Binatang Ragunan, Jakarta",
      tanggalPelaksanaan: "16 November 2025"
    },
    {
      judul: "HIMSI Tech Workshop: Web Development Bootcamp",
      author: "HIMSI",
      tanggal: "15 Desember 2025",
      ringkasan:
        "Workshop intensif pengembangan web untuk mahasiswa yang ingin mendalami frontend dan backend development.",
      image: "/bootcamp.jpg",
      detail: `Bandung, 15 Desember 2025 - Himpunan Mahasiswa Sistem Informasi (HIMSI) Universitas Nusa Mandiri sukses menyelenggarakan Tech Workshop: Web Development Bootcamp yang diikuti oleh 50 mahasiswa dari berbagai angkatan. Kegiatan ini bertujuan untuk meningkatkan kompetensi teknis mahasiswa dalam bidang pengembangan web yang semakin dibutuhkan di era digital.

Bootcamp berlangsung selama dua hari dengan materi mencakup HTML, CSS, JavaScript, React.js untuk frontend, serta Node.js dan MongoDB untuk backend. Para peserta mendapatkan pengalaman hands-on langsung dengan bimbingan mentor yang berpengalaman di industri teknologi.

Workshop ini tidak hanya fokus pada teori, tetapi juga memberikan kesempatan bagi peserta untuk mengerjakan project nyata dan membangun portfolio. Antusiasme peserta sangat tinggi terlihat dari diskusi teknis yang berlangsung intensif dan kolaborasi yang terbentuk selama sesi mentoring.

Tech Workshop ini merupakan bagian dari komitmen HIMSI dalam mempersiapkan mahasiswa menghadapi tantangan industri 4.0 dan meningkatkan daya saing lulusan di pasar kerja. Kegiatan serupa akan terus diselenggarakan secara berkala untuk mengakomodir minat dan kebutuhan mahasiswa akan pengembangan skill teknologi.`,
      waktu: "09.00 - 16.00 WIB",
      lokasi: "Gedung Serba Guna Kampus UNM",
      tanggalPelaksanaan: "15 Desember 2025"
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
                <button 
                  onClick={() => setSelectedBerita(item)}
                  className="text-primary font-semibold text-sm hover:gap-2 flex items-center gap-1 transition-all"
                >
                  Baca Selengkapnya →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedBerita && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl border border-gray-200">
            <div className="relative">
              {/* Header dengan gambar */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={selectedBerita.image || "/placeholder.svg"}
                  alt={selectedBerita.judul}
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => setSelectedBerita(null)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User size={16} />
                    {selectedBerita.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    {selectedBerita.tanggal}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedBerita.judul}</h3>

                {/* Informasi Waktu dan Lokasi */}
                <div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-100">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Calendar size={18} className="text-primary" />
                    Informasi Pelaksanaan
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Calendar size={14} className="text-gray-500" />
                      <span className="font-medium">Tanggal:</span>
                      <span>{selectedBerita.tanggalPelaksanaan}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Clock size={14} className="text-gray-500" />
                      <span className="font-medium">Waktu:</span>
                      <span>{selectedBerita.waktu}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-gray-700">
                      <MapPin size={14} className="text-gray-500 mt-0.5" />
                      <div>
                        <span className="font-medium">Lokasi:</span>
                        <span className="ml-1">{selectedBerita.lokasi}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detail Berita */}
                <div className="prose prose-gray max-w-none">
                  {selectedBerita.detail.split('\n').map((paragraph: string, index: number) => (
                    <p key={index} className="text-gray-600 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <button 
                  onClick={() => setSelectedBerita(null)}
                  className="mt-6 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors w-full sm:w-auto"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}