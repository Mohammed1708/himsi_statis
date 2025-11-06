"use client"

import { Heart, Users, Target } from "lucide-react"

export default function GabungKami() {
  const benefits = [
    {
      icon: Users,
      title: "Komunitas Besar",
      description: "Bergabung dengan ribuan mahasiswa Sistem Informasi yang saling mendukung dan berbagi pengetahuan.",
    },
    {
      icon: Target,
      title: "Pengembangan Diri",
      description:
        "Akses ke berbagai program pelatihan, seminar, dan workshop untuk meningkatkan skill dan pengetahuan.",
    },
    {
      icon: Heart,
      title: "Berkontribusi",
      description: "Menjadi bagian dari gerakan positif dalam memberikan dampak kepada masyarakat dan industri.",
    },
  ]

  return (
    <section id="gabung" className="py-16 md:py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ingin Bergabung dengan HIMSI?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Mari berkembang dan berkontribusi bersama dalam ekosistem organisasi yang inovatif dan suportif.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <div key={idx} className="text-center fade-in group" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="inline-flex w-16 h-16 bg-primary rounded-lg items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
                  <Icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:shadow-lg transition-shadow">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </section>
  )
}
