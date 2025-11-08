'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function PendaftaranPage() {
  const [form, setForm] = useState({
    Nama: '',
    NIM: '',
    Semester: '',
    Asal_Kampus: '',
    Tipe_kelas: '',
    No_telp: '',
    Department_1: '',
    Department_2: '',
    Posisi_1: '',
    Posisi_2: '',
    Tanggal_lahir: '',
    Alamat_Email: '',
  })
  const [pesan, setPesan] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { error } = await supabase.from('pendaftar').insert([form])

    if (error) {
      console.error(error)
      setPesan('❌ Gagal menyimpan data!')
    } else {
      setPesan('✅ Pendaftaran berhasil disimpan!')
      setForm({
        Nama: '',
        NIM: '',
        Semester: '',
        Asal_Kampus: '',
        Tipe_kelas: '',
        No_telp: '',
        Department_1: '',
        Department_2: '',
        Posisi_1: '',
        Posisi_2: '',
        Tanggal_lahir: '',
        Alamat_Email: '',
      })
    }
  }

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Form Pendaftaran HIMSI</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="Nama" placeholder="Nama Lengkap" value={form.Nama} onChange={handleChange} className="border p-2 w-full rounded" />
        <input name="NIM" placeholder="NIM" value={form.NIM} onChange={handleChange} className="border p-2 w-full rounded" />
        <input name="Semester" placeholder="Semester" value={form.Semester} onChange={handleChange} className="border p-2 w-full rounded" />
        <input name="Asal_Kampus" placeholder="Asal Kampus" value={form.Asal_Kampus} onChange={handleChange} className="border p-2 w-full rounded" />
        <input name="Tipe_kelas" placeholder="Tipe Kelas" value={form.Tipe_kelas} onChange={handleChange} className="border p-2 w-full rounded" />
        <input name="No_telp" placeholder="No. Telepon" value={form.No_telp} onChange={handleChange} className="border p-2 w-full rounded" />
        <input name="Department_1" placeholder="Department 1" value={form.Department_1} onChange={handleChange} className="border p-2 w-full rounded" />
        <input name="Department_2" placeholder="Department 2" value={form.Department_2} onChange={handleChange} className="border p-2 w-full rounded" />
        <input name="Posisi_1" placeholder="Posisi 1" value={form.Posisi_1} onChange={handleChange} className="border p-2 w-full rounded" />
        <input name="Posisi_2" placeholder="Posisi 2" value={form.Posisi_2} onChange={handleChange} className="border p-2 w-full rounded" />
        <input name="Tanggal_lahir" type="date" value={form.Tanggal_lahir} onChange={handleChange} className="border p-2 w-full rounded" />
        <input name="Alamat_Email" placeholder="Alamat Email" value={form.Alamat_Email} onChange={handleChange} className="border p-2 w-full rounded" />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Submit
        </button>
      </form>

      {pesan && <p className="mt-4 text-center text-green-600">{pesan}</p>}
    </main>
  )
}
