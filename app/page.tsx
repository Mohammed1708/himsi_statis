"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import VisiMisi from "@/components/visi-misi"
import TentangKami from "@/components/tentang-kami"
import Kegiatan from "@/components/berita"
import Berita from "@/components/pengumuman"
import Kontak from "@/components/kontak"
import Footer from "@/components/footer"
import Pengumuman from "@/components/pengumuman"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <VisiMisi />
      <TentangKami />
      <Kegiatan />
      <Berita />
      <Pengumuman />
      <Kontak />
      <Footer />
    </main>
  )
}
