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
      <p style="font-size: 1.125rem; color: #374151; line-height: 1.75; margin-bottom: 1.5rem; font-weight: 500;">
        Himpunan Mahasiswa Sistem Informasi (HIMSI) Universitas Nusa Mandiri kembali menunjukkan komitmennya dalam mendukung peningkatan kompetensi mahasiswa di bidang teknologi dengan menyelenggarakan HIMSI Open Class. Program ini berlangsung secara daring melalui platform Zoom dan dirancang untuk memberikan pembelajaran terstruktur bagi mahasiswa yang ingin mengembangkan kemampuan di bidang pemrograman dan pengembangan web.
      </p>
      
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #111827; margin: 2rem 0 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #3b82f6;">Kelas yang Ditawarkan</h3>
      <p style="color: #4b5563; margin-bottom: 1rem; line-height: 1.625;">Kegiatan ini menawarkan dua kelas utama:</p>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem;">
          <h4 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 1rem;">Front-End Development</h4>
          <ul style="color: #4b5563; list-style-type: disc; padding-left: 1.25rem; line-height: 1.625;">
            <li style="margin-bottom: 0.5rem;">HTML, CSS, JavaScript Modern</li>
            <li style="margin-bottom: 0.5rem;">React.js Fundamentals</li>
            <li style="margin-bottom: 0.5rem;">Responsive Design</li>
            <li>8x Pertemuan Intensif</li>
          </ul>
        </div>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem;">
          <h4 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 1rem;">Back-End Development</h4>
          <ul style="color: #4b5563; list-style-type: disc; padding-left: 1.25rem; line-height: 1.625;">
            <li style="margin-bottom: 0.5rem;">Node.js & Express.js</li>
            <li style="margin-bottom: 0.5rem;">Database Management</li>
            <li style="margin-bottom: 0.5rem;">API Development</li>
            <li>8x Pertemuan Mendalam</li>
          </ul>
        </div>
      </div>

      <h3 style="font-size: 1.25rem; font-weight: 700; color: #111827; margin: 2rem 0 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #3b82f6;">Metode Pembelajaran</h3>
      <p style="color: #4b5563; margin-bottom: 1rem; line-height: 1.625;">Melalui HIMSI Open Class, peserta tidak hanya mempelajari teori, tetapi juga diberikan kesempatan untuk:</p>
      <ul style="color: #4b5563; list-style-type: disc; padding-left: 1.25rem; margin-bottom: 1.5rem; line-height: 1.625;">
        <li style="margin-bottom: 0.5rem;"><strong>Mini Project</strong> sebagai bentuk penerapan materi</li>
        <li style="margin-bottom: 0.5rem;"><strong>Mentoring Eksklusif</strong> dengan praktisi industri</li>
        <li style="margin-bottom: 0.5rem;"><strong>Code Review</strong> langsung dari mentor</li>
        <li><strong>Portfolio Building</strong> untuk persiapan karir</li>
      </ul>

      <h3 style="font-size: 1.25rem; font-weight: 700; color: #111827; margin: 2rem 0 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #3b82f6;">Manfaat yang Didapat</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.25rem; margin: 1.5rem 0;">
        <div style="display: flex; align-items: flex-start; gap: 1rem; background: #f0f9ff; padding: 1.25rem; border-radius: 0.75rem; border: 1px solid #e0f2fe;">
          <span style="font-size: 1.5rem; flex-shrink: 0;">🎓</span>
          <div>
            <strong style="display: block; color: #111827; margin-bottom: 0.25rem;">Sertifikat Kompetensi</strong>
            <p style="color: #4b5563; font-size: 0.875rem; line-height: 1.5;">Pengakuan resmi atas keterampilan yang dikuasai</p>
          </div>
        </div>
        <div style="display: flex; align-items: flex-start; gap: 1rem; background: #f0f9ff; padding: 1.25rem; border-radius: 0.75rem; border: 1px solid #e0f2fe;">
          <span style="font-size: 1.5rem; flex-shrink: 0;">👥</span>
          <div>
            <strong style="display: block; color: #111827; margin-bottom: 0.25rem;">Networking</strong>
            <p style="color: #4b5563; font-size: 0.875rem; line-height: 1.5;">Jaringan dengan sesama mahasiswa dan mentor</p>
          </div>
        </div>
        <div style="display: flex; align-items: flex-start; gap: 1rem; background: #f0f9ff; padding: 1.25rem; border-radius: 0.75rem; border: 1px solid #e0f2fe;">
          <span style="font-size: 1.5rem; flex-shrink: 0;">💼</span>
          <div>
            <strong style="display: block; color: #111827; margin-bottom: 0.25rem;">Portfolio</strong>
            <p style="color: #4b5563; font-size: 0.875rem; line-height: 1.5;">Project nyata untuk meningkatkan CV</p>
          </div>
        </div>
        <div style="display: flex; align-items: flex-start; gap: 1rem; background: #f0f9ff; padding: 1.25rem; border-radius: 0.75rem; border: 1px solid #e0f2fe;">
          <span style="font-size: 1.5rem; flex-shrink: 0;">🚀</span>
          <div>
            <strong style="display: block; color: #111827; margin-bottom: 0.25rem;">Skill Development</strong>
            <p style="color: #4b5563; font-size: 0.875rem; line-height: 1.5;">Pengembangan skill industri yang relevan</p>
          </div>
        </div>
      </div>

      <blockquote style="border-left: 4px solid #3b82f6; padding-left: 1.5rem; margin: 2rem 0; color: #4b5563; font-style: normal; font-weight: 500;">
        "Antusiasme mahasiswa terlihat dari tingginya partisipasi serta minat untuk memperdalam kemampuan coding dan memahami lebih dalam proses pengembangan web."
      </blockquote>

      <p style="color: #4b5563; line-height: 1.625; margin-top: 1.5rem;">
        Melalui program ini, HIMSI Universitas Nusa Mandiri kembali menegaskan peran aktifnya dalam memberikan ruang belajar yang berkualitas, adaptif, dan relevan dengan kebutuhan industri teknologi saat ini.
      </p>
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
      <p style="font-size: 1.125rem; color: #374151; line-height: 1.75; margin-bottom: 1.5rem; font-weight: 500;">
        Himpunan Mahasiswa Sistem Informasi (HIMSI) Universitas Nusa Mandiri sukses menyelenggarakan seminar kolaborasi bersama Nusa Informatics Community (NIC) dengan tema "Transformasi Digital: Menyongsong Era Bisnis Berbasis Data dan AI". Kegiatan ini menjadi wadah penting bagi mahasiswa untuk memahami bagaimana teknologi data dan kecerdasan buatan berperan besar dalam perkembangan industri modern.
      </p>

      <h3 style="font-size: 1.25rem; font-weight: 700; color: #111827; margin: 2rem 0 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #3b82f6;">Narasumber Berpengalaman</h3>
      <p style="color: #4b5563; margin-bottom: 1rem; line-height: 1.625;">Seminar ini menghadirkan narasumber inspiratif yang memaparkan beragam wawasan terkait:</p>
      <ul style="color: #4b5563; list-style-type: disc; padding-left: 1.25rem; margin-bottom: 1.5rem; line-height: 1.625;">
        <li style="margin-bottom: 0.5rem;">Implementasi Data Analytics dalam bisnis</li>
        <li style="margin-bottom: 0.5rem;">Strategi AI untuk efisiensi operasional</li>
        <li style="margin-bottom: 0.5rem;">Transformasi digital perusahaan tradisional</li>
        <li>Peluang karir di era digital</li>
      </ul>

      <h3 style="font-size: 1.25rem; font-weight: 700; color: #111827; margin: 2rem 0 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #3b82f6;">Highlights Materi</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem;">
          <h4 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 0.75rem;">Data-Driven Decision Making</h4>
          <p style="color: #4b5563; line-height: 1.5;">Bagaimana data menjadi pondasi pengambilan keputusan strategis dalam bisnis modern</p>
        </div>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem;">
          <h4 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 0.75rem;">AI Implementation</h4>
          <p style="color: #4b5563; line-height: 1.5;">Studi kasus penerapan AI dalam meningkatkan customer experience dan operational excellence</p>
        </div>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem;">
          <h4 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 0.75rem;">Digital Transformation Roadmap</h4>
          <p style="color: #4b5563; line-height: 1.5;">Langkah-langkah strategis menuju transformasi digital yang berhasil</p>
        </div>
      </div>

      <h3 style="font-size: 1.25rem; font-weight: 700; color: #111827; margin: 2rem 0 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #3b82f6;">Interaksi Peserta</h3>
      <p style="color: #4b5563; line-height: 1.625; margin-bottom: 1.5rem;">
        Antusiasme peserta terlihat jelas sepanjang kegiatan. Para mahasiswa aktif berdiskusi, mengajukan pertanyaan, serta berinteraksi langsung dengan narasumber untuk memperdalam pemahaman mereka. Suasana seminar berlangsung dinamis, mencerminkan semangat belajar dan minat tinggi peserta terhadap isu-isu teknologi yang semakin relevan dengan kebutuhan industri saat ini.
      </p>

      <div style="background: #f0f9ff; border-left: 4px solid #3b82f6; padding: 1.5rem; margin: 2rem 0; border-radius: 0 0.5rem 0.5rem 0;">
        <p style="color: #1e40af; font-style: normal; font-weight: 500; margin-bottom: 0.5rem;">
          "Seminar ini membuka wawasan saya tentang bagaimana data dan AI tidak hanya sekadar tren, tetapi sudah menjadi kebutuhan strategis dalam bisnis."
        </p>
        <cite style="color: #6b7280; font-size: 0.875rem;">- Peserta Seminar</cite>
      </div>

      <p style="color: #4b5563; line-height: 1.625;">
        Melalui terselenggaranya seminar ini, HIMSI Universitas Nusa Mandiri menegaskan komitmennya dalam menghadirkan kegiatan edukatif yang berkualitas dan berkelanjutan. HIMSI terus berupaya menyediakan ruang pengembangan pengetahuan yang selaras dengan perkembangan zaman, guna mempersiapkan mahasiswa menjadi generasi yang adaptif, kompeten, dan siap menghadapi tantangan era digital.
      </p>
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
      <p style="font-size: 1.125rem; color: #374151; line-height: 1.75; margin-bottom: 1.5rem; font-weight: 500;">
        Dalam upaya mempererat silaturahmi, memperluas wawasan kelembagaan, serta meningkatkan kualitas organisasi kemahasiswaan, Himpunan Mahasiswa Sistem Informasi (HIMSI) Universitas Nusa Mandiri berkolaborasi dengan Himpunan Mahasiswa Sistem Informasi (HIMASI) Sekolah Tinggi Teknologi Nurul Fikri (STTNF) dalam kegiatan Studi Banding bertema "Menguatkan Sinergi, Membangun Kolaborasi." Kegiatan ini menjadi forum strategis bagi kedua himpunan untuk saling bertukar pengalaman dan wawasan terkait pengelolaan organisasi.
      </p>

      <h3 style="font-size: 1.25rem; font-weight: 700; color: #111827; margin: 2rem 0 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #3b82f6;">Agenda Kegiatan</h3>
      <div style="margin: 1.5rem 0;">
        <div style="display: flex; margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid #e5e7eb;">
          <span style="flex-shrink: 0; width: 120px; color: #111827; font-weight: 600;">09:00 - 09:30</span>
          <div>
            <h4 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 0.25rem;">Registrasi & Pembukaan</h4>
            <p style="color: #4b5563; line-height: 1.5;">Sambutan dari perwakilan kedua himpunan</p>
          </div>
        </div>
        <div style="display: flex; margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid #e5e7eb;">
          <span style="flex-shrink: 0; width: 120px; color: #111827; font-weight: 600;">09:30 - 11:00</span>
          <div>
            <h4 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 0.25rem;">Presentasi Program Kerja</h4>
            <p style="color: #4b5563; line-height: 1.5;">Sharing best practices dan program unggulan masing-masing himpunan</p>
          </div>
        </div>
        <div style="display: flex; margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid #e5e7eb;">
          <span style="flex-shrink: 0; width: 120px; color: #111827; font-weight: 600;">11:00 - 12:30</span>
          <div>
            <h4 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 0.25rem;">Diskusi Interaktif</h4>
            <p style="color: #4b5563; line-height: 1.5;">Forum tanya jawab dan brainstorming ide kolaborasi</p>
          </div>
        </div>
        <div style="display: flex; margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid #e5e7eb;">
          <span style="flex-shrink: 0; width: 120px; color: #111827; font-weight: 600;">12:30 - 13:30</span>
          <div>
            <h4 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 0.25rem;">Ishoma & Networking</h4>
            <p style="color: #4b5563; line-height: 1.5;">Sesi informal untuk mempererat hubungan</p>
          </div>
        </div>
        <div style="display: flex;">
          <span style="flex-shrink: 0; width: 120px; color: #111827; font-weight: 600;">13:30 - 15:00</span>
          <div>
            <h4 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 0.25rem;">Action Plan & Penutupan</h4>
            <p style="color: #4b5563; line-height: 1.5;">Penyusunan rencana kolaborasi dan penutupan acara</p>
          </div>
        </div>
      </div>

      <h3 style="font-size: 1.25rem; font-weight: 700; color: #111827; margin: 2rem 0 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #3b82f6;">Hasil yang Dicapai</h3>
      <p style="color: #4b5563; line-height: 1.625; margin-bottom: 1.5rem;">
        Melalui studi banding ini, HIMSI Universitas Nusa Mandiri dan HIMASI STTNF saling berbagi praktik terbaik, ide pengembangan program kerja, serta strategi untuk meningkatkan kualitas tata kelola organisasi kemahasiswaan. Pertemuan ini tidak hanya berlangsung dalam nuansa formal, tetapi juga menjadi ruang penting untuk mempererat hubungan antarlembaga dan membuka peluang kolaborasi yang lebih kuat di masa mendatang.
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
        <div style="text-align: center; background: #f8fafc; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e2e8f0;">
          <span style="font-size: 2rem; font-weight: 700; color: #3b82f6; display: block; margin-bottom: 0.5rem;">5+</span>
          <p style="color: #4b5563; font-weight: 600;">Ide Program Kerja Baru</p>
        </div>
        <div style="text-align: center; background: #f8fafc; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e2e8f0;">
          <span style="font-size: 2rem; font-weight: 700; color: #3b82f6; display: block; margin-bottom: 0.5rem;">3</span>
          <p style="color: #4b5563; font-weight: 600;">Rencana Kolaborasi</p>
        </div>
        <div style="text-align: center; background: #f8fafc; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e2e8f0;">
          <span style="font-size: 2rem; font-weight: 700; color: #3b82f6; display: block; margin-bottom: 0.5rem;">100%</span>
          <p style="color: #4b5563; font-weight: 600;">Peningkatan Sinergi</p>
        </div>
      </div>

      <blockquote style="border-left: 4px solid #3b82f6; padding-left: 1.5rem; margin: 2rem 0; color: #4b5563; font-style: normal; font-weight: 500;">
        "Acara yang digelar di Rooftop Kampus A STTNF, Depok, berlangsung dengan penuh antusiasme dari kedua belah pihak. Sesi diskusi, presentasi program kerja, hingga forum tanya jawab interaktif berlangsung dinamis, menciptakan suasana yang inspiratif dan komunikatif bagi seluruh peserta."
      </blockquote>

      <p style="color: #4b5563; line-height: 1.625; margin-top: 1.5rem;">
        Melalui kegiatan ini, HIMSI Universitas Nusa Mandiri dan HIMASI STTNF berharap dapat terus memperkuat sinergi yang terbangun serta mendorong terciptanya kerja sama berkelanjutan dalam pengembangan organisasi kemahasiswaan, guna menghadirkan lingkungan yang lebih inovatif dan berkualitas.
      </p>
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
      <p style="font-size: 1.125rem; color: #374151; line-height: 1.75; margin-bottom: 1.5rem; font-weight: 500;">
        Dalam upaya mengembangkan potensi dan kreativitas mahasiswa di bidang desain grafis, Himpunan Mahasiswa Sistem Informasi (HIMSI) Universitas Nusa Mandiri berkolaborasi dengan Himpunan Mahasiswa Manajemen (HIMMA) sukses menyelenggarakan kegiatan MinKref (Mini Kreatif), sebuah workshop desain poster yang menghadirkan suasana penuh warna dan inovasi.
      </p>

      <h3 style="font-size: 1.25rem; font-weight: 700; color: #111827; margin: 2rem 0 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #3b82f6;">Materi Workshop</h3>
      <p style="color: #4b5563; margin-bottom: 1rem; line-height: 1.625;">Kegiatan ini menjadi ruang pembelajaran bagi peserta untuk memahami:</p>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem;">
          <h4 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 0.75rem;">Dasar Desain Grafis</h4>
          <ul style="color: #4b5563; list-style-type: disc; padding-left: 1.25rem; line-height: 1.5;">
            <li style="margin-bottom: 0.5rem;">Prinsip-prinsip desain (kontras, alignment, repetition, proximity)</li>
            <li style="margin-bottom: 0.5rem;">Pemilihan warna dan tipografi</li>
            <li>Komposisi layout yang efektif</li>
          </ul>
        </div>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem;">
          <h4 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 0.75rem;">Tools & Software</h4>
          <ul style="color: #4b5563; list-style-type: disc; padding-left: 1.25rem; line-height: 1.5;">
            <li style="margin-bottom: 0.5rem;">Pengenalan Canva untuk pemula</li>
            <li style="margin-bottom: 0.5rem;">Tips dan tricks desain efisien</li>
            <li>Resource gratis untuk desain</li>
          </ul>
        </div>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem;">
          <h4 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 0.75rem;">Praktik Langsung</h4>
          <ul style="color: #4b5563; list-style-type: disc; padding-left: 1.25rem; line-height: 1.5;">
            <li style="margin-bottom: 0.5rem;">Membuat poster dari konsep hingga final</li>
            <li style="margin-bottom: 0.5rem;">Teknik visual storytelling</li>
            <li>Optimasi untuk media sosial</li>
          </ul>
        </div>
      </div>

      <h3 style="font-size: 1.25rem; font-weight: 700; color: #111827; margin: 2rem 0 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #3b82f6;">Highlights Kegiatan</h3>
      <div style="display: grid; gap: 1rem; margin: 1.5rem 0;">
        <div style="display: flex; align-items: flex-start; gap: 1rem; background: #f8fafc; padding: 1.25rem; border-radius: 0.75rem; border: 1px solid #e2e8f0;">
          <span style="font-size: 1.5rem; flex-shrink: 0;">💫</span>
          <div>
            <h4 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 0.25rem;">Hands-on Session</h4>
            <p style="color: #4b5563; line-height: 1.5;">Peserta langsung mempraktikkan teknik desain dengan pendampingan mentor</p>
          </div>
        </div>
        <div style="display: flex; align-items: flex-start; gap: 1rem; background: #f8fafc; padding: 1.25rem; border-radius: 0.75rem; border: 1px solid #e2e8f0;">
          <span style="font-size: 1.5rem; flex-shrink: 0;">🎯</span>
          <div>
            <h4 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 0.25rem;">Design Challenge</h4>
            <p style="color: #4b5563; line-height: 1.5;">Kompetisi kecil dengan tema tertentu untuk mengasah kreativitas</p>
          </div>
        </div>
        <div style="display: flex; align-items: flex-start; gap: 1rem; background: #f8fafc; padding: 1.25rem; border-radius: 0.75rem; border: 1px solid #e2e8f0;">
          <span style="font-size: 1.5rem; flex-shrink: 0;">🏆</span>
          <div>
            <h4 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 0.25rem;">Best Design Award</h4>
            <p style="color: #4b5563; line-height: 1.5;">Penghargaan untuk desain terbaik hasil workshop</p>
          </div>
        </div>
      </div>

      <h3 style="font-size: 1.25rem; font-weight: 700; color: #111827; margin: 2rem 0 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #3b82f6;">Testimoni Peserta</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
        <div style="background: #f0f9ff; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e0f2fe;">
          <p style="color: #1e40af; font-style: normal; margin-bottom: 0.75rem; line-height: 1.5;">
            "Workshopnya sangat menyenangkan! Saya yang awalnya tidak bisa desain sama sekali, sekarang bisa membuat poster yang menarik."
          </p>
          <cite style="color: #6b7280; font-size: 0.875rem; font-style: normal;">- Sarah, Participant</cite>
        </div>
        <div style="background: #f0f9ff; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e0f2fe;">
          <p style="color: #1e40af; font-style: normal; margin-bottom: 0.75rem; line-height: 1.5;">
            "Mentornya sabar banget dalam ngajarin, dan materinya mudah dipahami bahkan untuk pemula."
          </p>
          <cite style="color: #6b7280; font-size: 0.875rem; font-style: normal;">- Rizki, Participant</cite>
        </div>
      </div>

      <p style="color: #4b5563; line-height: 1.625; margin-bottom: 1.5rem;">
        Workshop berlangsung hangat dengan antusiasme peserta yang aktif bertanya, berdiskusi, dan mencoba berbagai gaya desain. Semangat kolaboratif yang terbangun membuat sesi semakin dinamis dan menyenangkan, memperlihatkan minat besar mahasiswa terhadap dunia kreatif.
      </p>

      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem; margin: 2rem 0;">
        <h3 style="font-size: 1.25rem; font-weight: 700; color: #111827; margin-bottom: 0.5rem;">Lihat Karya Peserta</h3>
        <p style="color: #4b5563; margin-bottom: 1rem; line-height: 1.5;">Ingin melihat hasil karya desain poster dari peserta workshop? Kunjungi Instagram kami untuk melihat gallery lengkapnya!</p>
        <a href="#" style="display: inline-block; background: #3b82f6; color: white; padding: 0.5rem 1rem; border-radius: 0.5rem; text-decoration: none; font-weight: 600; transition: background-color 0.2s;">Lihat Gallery</a>
      </div>

      <p style="color: #4b5563; line-height: 1.625;">
        Melalui MinKref, peserta mendapatkan pengalaman langsung untuk berkreasi sambil bertukar ide, sekaligus menambah wawasan dalam bidang desain grafis. Kegiatan ini menjadi bukti nyata komitmen HIMSI dan HIMMA dalam menyediakan ruang pengembangan bakat yang positif, kreatif, dan inspiratif bagi mahasiswa.
      </p>
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
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
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
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors bg-white/50 backdrop-blur rounded-lg px-4 py-2 border border-gray-200"
            >
              <ArrowLeft size={20} />
              Kembali ke Berita
            </Link>
            
            <button
              onClick={shareBerita}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors bg-white/50 backdrop-blur rounded-lg px-4 py-2 border border-gray-200"
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
            <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
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
          <p className="text-lg text-gray-700 mb-8 leading-relaxed border-l-4 border-blue-600 pl-4 bg-blue-50 py-3 rounded-r">
            {berita.deskripsi}
          </p>

          {/* Full Content */}
          <div 
            className="prose prose-lg max-w-none"
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
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25"
          >
            <Share2 size={20} />
            Bagikan Berita Ini
          </button>
        </div>
      </article>
    </div>
  )
}