"use client"

import { Eye, Zap } from "lucide-react"

export default function VisiMisi() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Visi & Misi</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Visi */}
          <div className="fade-in group">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
                <Eye size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi</h3>
                <p className="text-gray-600 leading-relaxed">
                  Menjadi organisasi mahasiswa yang aktif, inovatif, dan berintegritas dalam bidang Sistem Informasi.
                </p>
              </div>
            </div>
          </div>

          {/* Misi */}
          <div className="fade-in group">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
                <Zap size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Mengembangkan potensi dan kreativitas mahasiswa Sistem Informasi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Meningkatkan kolaborasi akademik dan sosial antar mahasiswa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Menjadi wadah komunikasi solid antara mahasiswa, dosen, dan masyarakat</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
