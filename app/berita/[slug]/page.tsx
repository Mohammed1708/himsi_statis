"use client"

import { useParams } from "next/navigation"
import { Calendar, MapPin, Clock, Users, ArrowLeft, Share2, BookOpen } from "lucide-react"
import Link from "next/link"

// Data berita lengkap
const semuaBerita = [
  {
    judul: "HIMSI Open Class",
    slug: "himsi-open-class",
    tanggal: "3 Mei - 22 Juni 2025",
    waktu: "19:00 - 21:00 WIB",
    lokasi: "Zoom Meeting",
    peserta: "150+ Mahasiswa",
    kategori: "Program Pembelajaran",
    image: "/openclass.jpg",
    deskripsi: "HIMSI Unusa Mandiri menyelenggarakan HIMSI Open Class dari 3 Mei hingga 22 Juni 2025 via Zoom, menawarkan kelas Front-End dan Back-End Development yang masing-masing terdiri dari delapan pertemuan dengan bimbingan mentor berpengalaman.",
    kontenLengkap: `
      <p class="lead">Himpunan Mahasiswa Sistem Informasi (HIMSI) Universitas Nusa Mandiri kembali menunjukkan komitmennya dalam mendukung peningkatan kompetensi mahasiswa di bidang teknologi dengan menyelenggarakan <em>HIMSI Open Class</em>. Program ini berlangsung secara daring melalui platform Zoom dan dirancang untuk memberikan pembelajaran terstruktur bagi mahasiswa yang ingin mengembangkan kemampuan di bidang pemrograman dan pengembangan web.</p>
      
      <h3>📚 Kelas yang Ditawarkan</h3>
      <p>Kegiatan ini menawarkan dua kelas utama:</p>
      <div class="program-grid">
        <div class="program-card">
          <h4>Front-End Development</h4>
          <ul>
            <li>HTML, CSS, JavaScript Modern</li>
            <li>React.js Fundamentals</li>
            <li>Responsive Design</li>
            <li>8x Pertemuan Intensif</li>
          </ul>
        </div>
        <div class="program-card">
          <h4>Back-End Development</h4>
          <ul>
            <li>Node.js & Express.js</li>
            <li>Database Management</li>
            <li>API Development</li>
            <li>8x Pertemuan Mendalam</li>
          </ul>
        </div>
      </div>

      <h3>🎯 Metode Pembelajaran</h3>
      <p>Melalui <em>HIMSI Open Class</em>, peserta tidak hanya mempelajari teori, tetapi juga diberikan kesempatan untuk:</p>
      <ul>
        <li><strong>Mini Project</strong> sebagai bentuk penerapan materi</li>
        <li><strong>Mentoring Eksklusif</strong> dengan praktisi industri</li>
        <li><strong>Code Review</strong> langsung dari mentor</li>
        <li><strong>Portfolio Building</strong> untuk persiapan karir</li>
      </ul>

      <h3>💫 Manfaat yang Didapat</h3>
      <div class="benefits-grid">
        <div class="benefit-item">
          <span class="benefit-icon">🎓</span>
          <div>
            <strong>Sertifikat Kompetensi</strong>
            <p>Pengakuan resmi atas keterampilan yang dikuasai</p>
          </div>
        </div>
        <div class="benefit-item">
          <span class="benefit-icon">👥</span>
          <div>
            <strong>Networking</strong>
            <p>Jaringan dengan sesama mahasiswa dan mentor</p>
          </div>
        </div>
        <div class="benefit-item">
          <span class="benefit-icon">💼</span>
          <div>
            <strong>Portfolio</strong>
            <p>Project nyata untuk meningkatkan CV</p>
          </div>
        </div>
        <div class="benefit-item">
          <span class="benefit-icon">🚀</span>
          <div>
            <strong>Skill Development</strong>
            <p>Pengembangan skill industri yang relevan</p>
          </div>
        </div>
      </div>

      <blockquote>
        "Antusiasme mahasiswa terlihat dari tingginya partisipasi serta minat untuk memperdalam kemampuan coding dan memahami lebih dalam proses pengembangan web."
      </blockquote>

      <p>Melalui program ini, HIMSI Universitas Nusa Mandiri kembali menegaskan peran aktifnya dalam memberikan ruang belajar yang berkualitas, adaptif, dan relevan dengan kebutuhan industri teknologi saat ini.</p>
    `
  },
  {
    judul: "Seminar Transformasi Digital",
    slug: "seminar-transformasi-digital",
    tanggal: "22 Mei 2025",
    waktu: "13:00 - 16:30 WIB",
    lokasi: "Auditorium Kampus A UNM",
    peserta: "200+ Peserta",
    kategori: "Seminar & Workshop",
    image: "/seminar.jpg",
    deskripsi: "HIMSI Universitas Nusa Mandiri sukses menggelar seminar kolaboratif dengan NIC bertema 'Transformasi Digital: Menyongsong Era Bisnis Berbasis Data dan AI'.",
    kontenLengkap: `
      <p class="lead">Himpunan Mahasiswa Sistem Informasi (HIMSI) Universitas Nusa Mandiri sukses menyelenggarakan seminar kolaborasi bersama Nusa Informatics Community (NIC) dengan tema <em>"Transformasi Digital: Menyongsong Era Bisnis Berbasis Data dan AI"</em>. Kegiatan ini menjadi wadah penting bagi mahasiswa untuk memahami bagaimana teknologi data dan kecerdasan buatan berperan besar dalam perkembangan industri modern.</p>

      <h3>🎤 Narasumber Berpengalaman</h3>
      <p>Seminar ini menghadirkan narasumber inspiratif yang memaparkan beragam wawasan terkait:</p>
      <ul>
        <li>Implementasi Data Analytics dalam bisnis</li>
        <li>Strategi AI untuk efisiensi operasional</li>
        <li>Transformasi digital perusahaan tradisional</li>
        <li>Peluang karir di era digital</li>
      </ul>

      <h3>💡 Highlights Materi</h3>
      <div class="highlight-grid">
        <div class="highlight-card">
          <h4>Data-Driven Decision Making</h4>
          <p>Bagaimana data menjadi pondasi pengambilan keputusan strategis dalam bisnis modern</p>
        </div>
        <div class="highlight-card">
          <h4>AI Implementation</h4>
          <p>Studi kasus penerapan AI dalam meningkatkan customer experience dan operational excellence</p>
        </div>
        <div class="highlight-card">
          <h4>Digital Transformation Roadmap</h4>
          <p>Langkah-langkah strategis menuju transformasi digital yang berhasil</p>
        </div>
      </div>

      <h3>👥 Interaksi Peserta</h3>
      <p>Antusiasme peserta terlihat jelas sepanjang kegiatan. Para mahasiswa aktif berdiskusi, mengajukan pertanyaan, serta berinteraksi langsung dengan narasumber untuk memperdalam pemahaman mereka. Suasana seminar berlangsung dinamis, mencerminkan semangat belajar dan minat tinggi peserta terhadap isu-isu teknologi yang semakin relevan dengan kebutuhan industri saat ini.</p>

      <div class="testimonial">
        <p>"Seminar ini membuka wawasan saya tentang bagaimana data dan AI tidak hanya sekadar tren, tetapi sudah menjadi kebutuhan strategis dalam bisnis."</p>
        <cite>- Peserta Seminar</cite>
      </div>

      <p>Melalui terselenggaranya seminar ini, HIMSI Universitas Nusa Mandiri menegaskan komitmennya dalam menghadirkan kegiatan edukatif yang berkualitas dan berkelanjutan. HIMSI terus berupaya menyediakan ruang pengembangan pengetahuan yang selaras dengan perkembangan zaman, guna mempersiapkan mahasiswa menjadi generasi yang adaptif, kompeten, dan siap menghadapi tantangan era digital.</p>
    `
  },
  {
    judul: "Studi Banding HIMSI UNM X HIMASI STTNF",
    slug: "studi-banding-himsi-unm-himasi-sttnf",
    tanggal: "14 Juni 2025",
    waktu: "09:00 - 15:00 WIB",
    lokasi: "Rooftop Kampus A STTNF, Depok",
    peserta: "50+ Anggota Himpunan",
    kategori: "Studi Banding",
    image: "/stubanHimsi.jpg",
    deskripsi: "HIMSI UNM berkolaborasi dengan HIMASI STT NF menyelenggarakan Studi Banding bertema 'Menguatkan Sinergi, Membangun Kolaborasi'.",
    kontenLengkap: `
      <p class="lead">Dalam upaya mempererat silaturahmi, memperluas wawasan kelembagaan, serta meningkatkan kualitas organisasi kemahasiswaan, Himpunan Mahasiswa Sistem Informasi (HIMSI) Universitas Nusa Mandiri berkolaborasi dengan Himpunan Mahasiswa Sistem Informasi (HIMASI) Sekolah Tinggi Teknologi Nurul Fikri (STTNF) dalam kegiatan Studi Banding bertema <em>"Menguatkan Sinergi, Membangun Kolaborasi."</em> Kegiatan ini menjadi forum strategis bagi kedua himpunan untuk saling bertukar pengalaman dan wawasan terkait pengelolaan organisasi.</p>

      <h3>🎯 Agenda Kegiatan</h3>
      <div class="agenda-timeline">
        <div class="agenda-item">
          <span class="agenda-time">09:00 - 09:30</span>
          <div class="agenda-content">
            <h4>Registrasi & Pembukaan</h4>
            <p>Sambutan dari perwakilan kedua himpunan</p>
          </div>
        </div>
        <div class="agenda-item">
          <span class="agenda-time">09:30 - 11:00</span>
          <div class="agenda-content">
            <h4>Presentasi Program Kerja</h4>
            <p>Sharing best practices dan program unggulan masing-masing himpunan</p>
          </div>
        </div>
        <div class="agenda-item">
          <span class="agenda-time">11:00 - 12:30</span>
          <div class="agenda-content">
            <h4>Diskusi Interaktif</h4>
            <p>Forum tanya jawab dan brainstorming ide kolaborasi</p>
          </div>
        </div>
        <div class="agenda-item">
          <span class="agenda-time">12:30 - 13:30</span>
          <div class="agenda-content">
            <h4>Ishoma & Networking</h4>
            <p>Sesi informal untuk mempererat hubungan</p>
          </div>
        </div>
        <div class="agenda-item">
          <span class="agenda-time">13:30 - 15:00</span>
          <div class="agenda-content">
            <h4>Action Plan & Penutupan</h4>
            <p>Penyusunan rencana kolaborasi dan penutupan acara</p>
          </div>
        </div>
      </div>

      <h3>🤝 Hasil yang Dicapai</h3>
      <p>Melalui studi banding ini, HIMSI Universitas Nusa Mandiri dan HIMASI STTNF saling berbagi praktik terbaik, ide pengembangan program kerja, serta strategi untuk meningkatkan kualitas tata kelola organisasi kemahasiswaan. Pertemuan ini tidak hanya berlangsung dalam nuansa formal, tetapi juga menjadi ruang penting untuk mempererat hubungan antarlembaga dan membuka peluang kolaborasi yang lebih kuat di masa mendatang.</p>

      <div class="outcome-grid">
        <div class="outcome-item">
          <span class="outcome-number">5+</span>
          <p>Ide Program Kerja Baru</p>
        </div>
        <div class="outcome-item">
          <span class="outcome-number">3</span>
          <p>Rencana Kolaborasi</p>
        </div>
        <div class="outcome-item">
          <span class="outcome-number">100%</span>
          <p>Peningkatan Sinergi</p>
        </div>
      </div>

      <blockquote>
        "Acara yang digelar di Rooftop Kampus A STTNF, Depok, berlangsung dengan penuh antusiasme dari kedua belah pihak. Sesi diskusi, presentasi program kerja, hingga forum tanya jawab interaktif berlangsung dinamis, menciptakan suasana yang inspiratif dan komunikatif bagi seluruh peserta."
      </blockquote>

      <p>Melalui kegiatan ini, HIMSI Universitas Nusa Mandiri dan HIMASI STTNF berharap dapat terus memperkuat sinergi yang terbangun serta mendorong terciptanya kerja sama berkelanjutan dalam pengembangan organisasi kemahasiswaan, guna menghadirkan lingkungan yang lebih inovatif dan berkualitas.</p>
    `
  },
  {
    judul: "PMinKref HIMSI X HIMMA",
    slug: "minkref-himsi-himma",
    tanggal: "4 Juli 2025",
    waktu: "14:00 - 17:00 WIB",
    lokasi: "Lab Komputer Kampus B UNM",
    peserta: "80+ Mahasiswa",
    kategori: "Workshop Kreatif",
    image: "/minkref.jpg",
    deskripsi: "HIMSI Universitas Nusa Mandiri berkolaborasi dengan HIMMA sukses menyelenggarakan MinKref (Mini Kreatif), workshop desain poster.",
    kontenLengkap: `
      <p class="lead">Dalam upaya mengembangkan potensi dan kreativitas mahasiswa di bidang desain grafis, Himpunan Mahasiswa Sistem Informasi (HIMSI) Universitas Nusa Mandiri berkolaborasi dengan Himpunan Mahasiswa Manajemen (HIMMA) sukses menyelenggarakan kegiatan <em>MinKref (Mini Kreatif)</em>, sebuah workshop desain poster yang menghadirkan suasana penuh warna dan inovasi.</p>

      <h3>🎨 Materi Workshop</h3>
      <p>Kegiatan ini menjadi ruang pembelajaran bagi peserta untuk memahami:</p>
      <div class="workshop-grid">
        <div class="workshop-module">
          <h4>📐 Dasar Desain Grafis</h4>
          <ul>
            <li>Prinsip-prinsip desain (kontras, alignment, repetition, proximity)</li>
            <li>Pemilihan warna dan tipografi</li>
            <li>Komposisi layout yang efektif</li>
          </ul>
        </div>
        <div class="workshop-module">
          <h4>🛠️ Tools & Software</h4>
          <ul>
            <li>Pengenalan Canva untuk pemula</li>
            <li>Tips dan tricks desain efisien</li>
            <li>Resource gratis untuk desain</li>
          </ul>
        </div>
        <div class="workshop-module">
          <h4>🚀 Praktik Langsung</h4>
          <ul>
            <li>Membuat poster dari konsep hingga final</li>
            <li>Teknik visual storytelling</li>
            <li>Optimasi untuk media sosial</li>
          </ul>
        </div>
      </div>

      <h3>🌟 Highlights Kegiatan</h3>
      <div class="highlights-container">
        <div class="highlight-feature">
          <span class="highlight-icon">💫</span>
          <div>
            <h4>Hands-on Session</h4>
            <p>Peserta langsung mempraktikkan teknik desain dengan pendampingan mentor</p>
          </div>
        </div>
        <div class="highlight-feature">
          <span class="highlight-icon">🎯</span>
          <div>
            <h4>Design Challenge</h4>
            <p>Kompetisi kecil dengan tema tertentu untuk mengasah kreativitas</p>
          </div>
        </div>
        <div class="highlight-feature">
          <span class="highlight-icon">🏆</span>
          <div>
            <h4>Best Design Award</h4>
            <p>Penghargaan untuk desain terbaik hasil workshop</p>
          </div>
        </div>
      </div>

      <h3>👥 Testimoni Peserta</h3>
      <div class="testimonial-grid">
        <div class="testimonial-card">
          <p>"Workshopnya sangat menyenangkan! Saya yang awalnya tidak bisa desain sama sekali, sekarang bisa membuat poster yang menarik."</p>
          <cite>- Sarah, Participant</cite>
        </div>
        <div class="testimonial-card">
          <p>"Mentornya sabar banget dalam ngajarin, dan materinya mudah dipahami bahkan untuk pemula."</p>
          <cite>- Rizki, Participant</cite>
        </div>
      </div>

      <p>Workshop berlangsung hangat dengan antusiasme peserta yang aktif bertanya, berdiskusi, dan mencoba berbagai gaya desain. Semangat kolaboratif yang terbangun membuat sesi semakin dinamis dan menyenangkan, memperlihatkan minat besar mahasiswa terhadap dunia kreatif.</p>

      <div class="cta-section">
        <h3>📸 Lihat Karya Peserta</h3>
        <p>Ingin melihat hasil karya desain poster dari peserta workshop? Kunjungi Instagram kami untuk melihat gallery lengkapnya!</p>
        <a href="#" class="instagram-cta">📷 Lihat Gallery</a>
      </div>

      <p>Melalui MinKref, peserta mendapatkan pengalaman langsung untuk berkreasi sambil bertukar ide, sekaligus menambah wawasan dalam bidang desain grafis. Kegiatan ini menjadi bukti nyata komitmen HIMSI dan HIMMA dalam menyediakan ruang pengembangan bakat yang positif, kreatif, dan inspiratif bagi mahasiswa.</p>
    `
  }
]

export default function DetailBerita() {
  const params = useParams()
  const slug = params.slug as string
  
  const berita = semuaBerita.find(item => item.slug === slug)

  if (!berita) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
        <div className="text-center bg-white rounded-2xl shadow-lg p-8 max-w-md">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-10 h-10 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Berita Tidak Ditemukan</h1>
          <p className="text-gray-600 mb-6">Maaf, berita yang Anda cari tidak dapat ditemukan.</p>
          <Link 
            href="/#berita"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft size={20} />
            Kembali ke Berita
          </Link>
        </div>
      </div>
    )
  }

  const shareBerita = () => {
    if (navigator.share) {
      navigator.share({
        title: berita.judul,
        text: berita.deskripsi,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Link berita telah disalin!')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/#berita"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors bg-white/50 backdrop-blur rounded-lg px-4 py-2 border border-gray-200"
            >
              <ArrowLeft size={20} />
              Kembali ke Berita
            </Link>
            
            <button
              onClick={shareBerita}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors bg-white/50 backdrop-blur rounded-lg px-4 py-2 border border-gray-200"
            >
              <Share2 size={18} />
              Bagikan
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Image Header */}
        <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden mb-8 shadow-xl">
          <img
            src={berita.image || "/placeholder.svg"}
            alt={berita.judul}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="inline-block bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
              {berita.kategori}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
              {berita.judul}
            </h1>
          </div>
        </div>

        {/* Meta Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Tanggal</p>
                <p className="font-semibold text-gray-900">{berita.tanggal}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Waktu</p>
                <p className="font-semibold text-gray-900">{berita.waktu}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Lokasi</p>
                <p className="font-semibold text-gray-900">{berita.lokasi}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Peserta</p>
                <p className="font-semibold text-gray-900">{berita.peserta}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
          {/* Short Description */}
          <p className="text-xl text-gray-700 mb-8 leading-relaxed border-l-4 border-primary pl-4 italic">
            {berita.deskripsi}
          </p>

          {/* Full Content */}
          <div 
            className="article-content"
            dangerouslySetInnerHTML={{ __html: berita.kontenLengkap }}
          />
        </div>

        {/* Related Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/#berita"
            className="inline-flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm"
          >
            <ArrowLeft size={20} />
            Lihat Berita Lainnya
          </Link>
          <button
            onClick={shareBerita}
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
          >
            <Share2 size={20} />
            Bagikan Berita Ini
          </button>
        </div>
      </article>
    </div>
  )
}