"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Navbar from "@/components/navbar";

export default function PendaftaranPage() {
  const kampusOptions = ["Margonda", "Jatiwaringin", "Rawamangun"];
  const tipeKelasOptions = ["Reguler", "Karyawan"];
  const departmentOptions = ["Humas", "PSDM", "PUBDOC", "BIKRAF", "LITBANG"];
  const posisiOptions = ["Koordinator", "Staf"];

  const [form, setForm] = useState({
    Nama: "",
    NIM: "",
    Semester: "",
    Asal_Kampus: "",
    Tipe_kelas: "",
    No_telp: "",
    Department_1: "",
    Department_2: "",
    Posisi_1: "",
    Posisi_2: "",
    Tanggal_lahir: "",
    Alamat_Email: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState<"success" | "error" | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from("pendaftar_himsi").insert([form]);
    if (error) {
      setPopupType("error");
    } else {
      setPopupType("success");
      setForm({
        Nama: "",
        NIM: "",
        Semester: "",
        Asal_Kampus: "",
        Tipe_kelas: "",
        No_telp: "",
        Department_1: "",
        Department_2: "",
        Posisi_1: "",
        Posisi_2: "",
        Tanggal_lahir: "",
        Alamat_Email: "",
      });
    }
    setShowPopup(true);
  };

  return (
    <main
      className="min-h-screen relative bg-center bg-no-repeat bg-contain"
      style={{
        backgroundImage: "url('/logohimsi.png')",
        backgroundSize: "38%",
      }}
    >
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
      <div className="relative z-10">
        <Navbar isScrolled={false} />
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
          Form Pendaftaran HIMSI
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 max-w-md mx-auto bg-white/90 p-6 rounded-2xl shadow-lg"
        >
          <input
            name="Nama"
            placeholder="Nama Lengkap"
            value={form.Nama}
            onChange={handleChange}
            className="border p-2 w-full rounded font-normal"
          />
          <input
            name="NIM"
            placeholder="NIM"
            value={form.NIM}
            onChange={handleChange}
            className="border p-2 w-full rounded font-normal"
          />
          <input
            name="Semester"
            placeholder="Semester"
            value={form.Semester}
            onChange={handleChange}
            className="border p-2 w-full rounded font-normal"
          />

          <select
            name="Asal_Kampus"
            value={form.Asal_Kampus}
            onChange={handleChange}
            className="border p-2 w-full rounded bg-white/50 backdrop-blur-sm font-normal text-gray-700"
          >
            <option value="" className="text-gray-400 font-normal">
              Pilih Asal Kampus
            </option>
            {kampusOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            name="Tipe_kelas"
            value={form.Tipe_kelas}
            onChange={handleChange}
            className="border p-2 w-full rounded bg-white/50 backdrop-blur-sm font-normal text-gray-700"
          >
            <option value="" className="text-gray-400 font-normal">
              Pilih Tipe Kelas
            </option>
            {tipeKelasOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <input
            name="No_telp"
            placeholder="No. Telepon"
            value={form.No_telp}
            onChange={handleChange}
            className="border p-2 w-full rounded font-normal"
          />

          <select
            name="Department_1"
            value={form.Department_1}
            onChange={handleChange}
            className="border p-2 w-full rounded bg-white/50 backdrop-blur-sm font-normal text-gray-700"
          >
            <option value="" className="text-gray-400 font-normal">
              Pilih Department 1
            </option>
            {departmentOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            name="Department_2"
            value={form.Department_2}
            onChange={handleChange}
            className="border p-2 w-full rounded bg-white/50 backdrop-blur-sm font-normal text-gray-700"
          >
            <option value="" className="text-gray-400 font-normal">
              Pilih Department 2
            </option>
            {departmentOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            name="Posisi_1"
            value={form.Posisi_1}
            onChange={handleChange}
            className="border p-2 w-full rounded bg-white/50 backdrop-blur-sm font-normal text-gray-700"
          >
            <option value="" className="text-gray-400 font-normal">
              Pilih Posisi 1
            </option>
            {posisiOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            name="Posisi_2"
            value={form.Posisi_2}
            onChange={handleChange}
            className="border p-2 w-full rounded bg-white/50 backdrop-blur-sm font-normal text-gray-700"
          >
            <option value="" className="text-gray-400 font-normal">
              Pilih Posisi 2
            </option>
            {posisiOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <input
            name="Tanggal_lahir"
            type="date"
            value={form.Tanggal_lahir}
            onChange={handleChange}
            className="border p-2 w-full rounded font-normal text-gray-700"
          />
          <input
            name="Alamat_Email"
            placeholder="Alamat Email"
            value={form.Alamat_Email}
            onChange={handleChange}
            className="border p-2 w-full rounded font-normal"
          />

          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:shadow-lg transition-shadow"
          >
            Submit
          </button>
        </form>

        {showPopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center max-w-sm">
              {popupType === "success" ? (
                <>
                  <h2 className="text-xl font-semibold text-green-600 mb-2">
                    Pendaftaran Berhasil 🎉
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Terima kasih telah mendaftar! Data kamu sudah disimpan.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-xl font-semibold text-red-600 mb-2">
                    Gagal Menyimpan Data
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Silakan periksa koneksi internet atau coba lagi.
                  </p>
                </>
              )}
              <button
                onClick={() => setShowPopup(false)}
                className={`px-4 py-2 ${
                  popupType === "success"
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-red-600 hover:bg-red-700"
                } text-white rounded-lg transition-all`}
              >
                Tutup
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
