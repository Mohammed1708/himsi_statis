"use client";

import { X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Kegiatan() {
  const [selectedBenefit, setSelectedBenefit] = useState<number | null>(null);

  const benefits = [
    {
      image: "/logonasi.png",
      title: "NASI",
      description:
        "NASI (Nongkrong Asik Sistem Informasi) merupakan kegiatan rutin HIMSI yang dilaksanakan setiap tiga bulan sekali sebagai ajang silaturahmi dan penguatan relasi antaranggota melalui pertemuan santai di luar kampus. Kegiatan ini bersifat non-formal dan dirancang untuk mendorong interaksi yang lebih dekat melalui sesi berbagi pengalaman kuliah, diskusi ringan, dan sharing session yang memberikan ruang bagi anggota untuk bertukar wawasan serta saling mendukung. NASI menjadi sarana bonding yang efektif untuk memperkuat kekompakan, komunikasi, dan rasa kebersamaan dalam lingkungan HIMSI.",
    },
    {
      image: "/logoseminar.png",
      title: "Seminar",
      description:
        "Seminar HIMSI merupakan kegiatan yang bertujuan meningkatkan wawasan dan kompetensi mahasiswa Sistem Informasi melalui pemaparan materi oleh narasumber berpengalaman. Acara ini membahas topik-topik relevan seputar teknologi, pengembangan diri, dan dunia kerja, serta dilengkapi sesi diskusi interaktif dan tanya jawab. Melalui seminar ini, HIMSI berupaya mendukung pengembangan akademik dan soft skill anggotanya dalam lingkungan belajar yang informatif.",
    },
    {
      image: "/workshop.png",
      title: "Workshop",
      description:
        "Workshop HIMSI merupakan kegiatan pembelajaran praktis yang dirancang untuk meningkatkan keterampilan teknis dan pemahaman aplikatif mahasiswa Sistem Informasi. Melalui sesi pelatihan yang dipandu oleh instruktur atau praktisi berpengalaman, peserta mendapatkan kesempatan untuk mempraktikkan materi secara langsung, mulai dari pengenalan konsep hingga penerapan pada studi kasus nyata. Workshop ini bertujuan memperkuat kompetensi mahasiswa dalam bidang teknologi dan pengembangan diri, sekaligus mendukung terciptanya lingkungan belajar yang aktif, kolaboratif, dan berorientasi pada penguasaan keterampilan.",
    },
    {
      image: "/logomakrab.png",
      title: "Makrab",
      description:
        "MAKRAB (Malam Keakraban) HIMSI merupakan kegiatan tahunan yang diselenggarakan setelah pergantian kepengurusan dan penerimaan pengurus baru. Acara ini dilaksanakan di luar kampus selama satu hari satu malam sebagai sarana membangun keakraban, kekompakan, dan komunikasi yang solid antar–pengurus HIMSI. Melalui rangkaian aktivitas kebersamaan, permainan, dan sesi interaksi yang bersifat non-formal, MAKRAB berfungsi sebagai momen penting untuk mempererat hubungan internal serta memperkuat bonding dalam mempersiapkan kolaborasi dan kinerja kepengurusan HIMSI di periode berikutnya.",
    },
    {
      image: "/stuban.png",
      title: "Studi Banding",
      description:
        "Studi Banding HIMSI merupakan kegiatan yang diselenggarakan sebagai upaya memperluas wawasan organisasi melalui pertukaran informasi, pengalaman, serta praktik terbaik dengan Himpunan Mahasiswa Sistem Informasi dari kampus lain. Kegiatan ini mencakup pemaparan program kerja, diskusi terkait manajemen organisasi, berbagi strategi pengembangan himpunan, serta sesi tanya jawab yang bersifat kolaboratif. Melalui studi banding, HIMSI bertujuan meningkatkan kualitas tata kelola organisasi, memperkuat relasi antarhimpunan, dan membuka peluang kerja sama yang bermanfaat untuk pengembangan kepengurusan di periode mendatang.",
    },
  ];

  useEffect(() => {
    if (selectedBenefit !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedBenefit]);

  const openModal = (index: number) => {
    setSelectedBenefit(index);
  };

  const closeModal = () => {
    setSelectedBenefit(null);
  };

  return (
    <section id="kegiatan" className="py-16 md:py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kegiatan Himsi
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Mari berkembang dan berkontribusi bersama dalam ekosistem organisasi
            yang inovatif dan suportif.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="hidden lg:flex justify-center gap-4 mb-12 w-full">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="fade-in group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col items-center justify-center p-4 aspect-square w-full max-w-[200px]"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex flex-col items-center justify-center h-full w-full">
                  <div className="w-16 h-16 mb-3 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3 text-center">
                    {benefit.title}
                  </h3>
                  <button
                    onClick={() => openModal(idx)}
                    className="mt-auto w-full py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-xs font-medium text-center"
                  >
                    Baca Selengkapnya
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:flex lg:hidden flex-col items-center w-full">
            <div className="flex justify-center gap-4 mb-6 w-full">
              {benefits.slice(0, 3).map((benefit, idx) => (
                <div
                  key={idx}
                  className="fade-in group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col items-center justify-center p-4 aspect-square w-full max-w-[180px]"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex flex-col items-center justify-center h-full w-full">
                    <div className="w-16 h-16 mb-3 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
                      <Image
                        src={benefit.image}
                        alt={benefit.title}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-3 text-center">
                      {benefit.title}
                    </h3>
                    <button
                      onClick={() => openModal(idx)}
                      className="mt-auto w-full py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-xs font-medium text-center"
                    >
                      Baca Selengkapnya
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-4 w-full">
              {benefits.slice(3, 5).map((benefit, idx) => (
                <div
                  key={idx + 3}
                  className="fade-in group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col items-center justify-center p-4 aspect-square w-full max-w-[180px]"
                  style={{ animationDelay: `${(idx + 3) * 100}ms` }}
                >
                  <div className="flex flex-col items-center justify-center h-full w-full">
                    <div className="w-16 h-16 mb-3 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
                      <Image
                        src={benefit.image}
                        alt={benefit.title}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-3 text-center">
                      {benefit.title}
                    </h3>
                    <button
                      onClick={() => openModal(idx + 3)}
                      className="mt-auto w-full py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-xs font-medium text-center"
                    >
                      Baca Selengkapnya
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile View - Updated untuk persegi panjang vertikal */}
          <div className="flex md:hidden flex-col items-center w-full gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="fade-in group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col items-center justify-center p-6 w-full min-h-[200px]"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex flex-col items-center justify-center h-full w-full text-center">
                  <div className="w-20 h-20 mb-4 rounded-xl overflow-hidden flex items-center justify-center bg-gray-100">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <button
                    onClick={() => openModal(idx)}
                    className="mt-auto w-full py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium text-center px-4"
                  >
                    Baca Selengkapnya
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedBenefit !== null && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
                      <Image
                        src={benefits[selectedBenefit].image}
                        alt={benefits[selectedBenefit].title}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {benefits[selectedBenefit].title}
                    </h3>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X size={24} className="text-gray-500" />
                  </button>
                </div>

                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {benefits[selectedBenefit].description}
                  </p>
                </div>

                <div className="flex justify-end mt-6 pt-6 border-t border-gray-200">
                  <button
                    onClick={closeModal}
                    className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}