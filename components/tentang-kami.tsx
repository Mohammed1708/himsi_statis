"use client";

import { useState } from "react";

interface Pengurus {
  jabatan: string;
  nama: string;
  foto: string;
}

export default function TentangKami() {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>(
    {}
  );

  const pengurus: Pengurus[] = [
    {
      jabatan: "Ketua",
      nama: "Sunitra Indah Putri",
      foto: "/ketua.png",
    },
    {
      jabatan: "Wakil Ketua",
      nama: "Tiara putri Ad'haini",
      foto: "/wakil.png",
    },
    {
      jabatan: "Sekretaris 1",
      nama: "Salsa Nur Aini",
      foto: "/sekretaris_1.png",
    },
    {
      jabatan: "Sekretaris 2",
      nama: "Rifqi Tsanaya",
      foto: "/sekretaris_2.png",
    },
    {
      jabatan: "Bendahara 1",
      nama: "Adinda Wulandari",
      foto: "/bendahara_1.png",
    },
    {
      jabatan: "Bendahara 2",
      nama: "Bunga Rifanisa Alzannah",
      foto: "/bendahara_2.png",
    },
  ];

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section id="tentang" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Tentang Kami
        </h2>

        <div className="mb-16 fade-in">
          <p className="text-gray-600 leading-relaxed mb-4 text-lg">
            HIMSI (Himpunan Mahasiswa Sistem Informasi) Universitas Nusa Mandiri
            adalah organisasi mahasiswa yang didirikan dengan tujuan untuk
            menjadi wadah bagi mahasiswa program studi Sistem Informasi dalam
            mengembangkan diri, berbagi pengetahuan, dan berkontribusi positif
            kepada masyarakat.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Sejak berdiri, HIMSI telah menjadi jembatan komunikasi yang kuat
            antara mahasiswa, dosen pembimbing, dan industri. Kami berkomitmen
            untuk menciptakan ekosistem pembelajaran yang inovatif, saling
            mendukung, dan penuh dengan integritas.
          </p>
        </div>

        {/* Struktur Kepengurusan */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Struktur Kepengurusan
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {pengurus.map((member, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  {!imageErrors[index] ? (
                    <img
                      src={member.foto}
                      alt={member.nama}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(index)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">
                        {member.nama.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <p className="font-semibold text-gray-900">{member.nama}</p>
                <p className="text-sm text-primary font-medium">
                  {member.jabatan}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
