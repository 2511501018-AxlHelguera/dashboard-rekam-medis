import { useEffect, useState } from "react";
import $ from "jquery";
import {
  Users, Clock3, Stethoscope,
  CheckCircle2, Plus, Search
} from "lucide-react";

import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";
import PatientTable from "./components/PatientTable.jsx";
import PatientModal from "./components/PatientModal.jsx";

const initialPatients = [
  {
    id: 1,
    noRM: "RM-0001",
    nama: "Andi Pratama",
    poli: "Poli Umum",
    dokter: "dr. Budi Santoso",
    tanggal: "2026-11-10",
    status: "Selesai"
  },
  {
    id: 2,
    noRM: "RM-0002",
    nama: "Siti Rahma",
    poli: "Poli Gigi",
    dokter: "drg. Maya Putri",
    tanggal: "2026-11-10",
    status: "Dalam Penanganan"
  },
  {
    id: 3,
    noRM: "RM-0003",
    nama: "Rina Amelia",
    poli: "Poli Anak",
    dokter: "dr. Dinda Laras",
    tanggal: "2026-11-10",
    status: "Menunggu"
  }
];

export default function App() {
  const [patients, setPatients] = useState(initialPatients);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [notice, setNotice] = useState("");

  // Implementasi jQuery untuk animasi notifikasi
  useEffect(() => {
    if (!notice) return;

    const el = $(".toast-notice");
    el.stop(true, true).hide().fadeIn(250);

    return () => {
      el.stop(true, true);
    };
  }, [notice]);

  // Membuka form tambah pasien
  function openAdd() {
    setEditing(null);
    setModalOpen(true);
  }

  // Membuka form edit pasien
  function openEdit(patient) {
    setEditing(patient);
    setModalOpen(true);
  }

  // Menyimpan data pasien
  function savePatient(data) {
    if (editing) {
      setPatients(old =>
        old.map(p =>
          p.id === editing.id
            ? { ...data, id: editing.id }
            : p
        )
      );

      setNotice("Data pasien berhasil diperbarui.");
    } else {
      setPatients(old => [
        ...old,
        { ...data, id: Date.now() }
      ]);

      setNotice("Pasien baru berhasil ditambahkan.");
    }

    setModalOpen(false);
  }

  // Menghapus data pasien
  function deletePatient(id) {
    if (window.confirm("Yakin ingin menghapus data pasien ini?")) {
      setPatients(old =>
        old.filter(p => p.id !== id)
      );

      setNotice("Data pasien berhasil dihapus.");
    }
  }

  // Fitur pencarian pasien
  const filtered = patients.filter(p =>
    [
      p.noRM,
      p.nama,
      p.poli,
      p.dokter,
      p.status
    ].some(v =>
      v.toLowerCase().includes(search.toLowerCase())
    )
  );

  // Statistik dashboard
  const stats = [
    {
      title: "Total Pasien",
      value: patients.length,
      icon: Users,
      tone: "blue"
    },
    {
      title: "Menunggu",
      value: patients.filter(
        p => p.status === "Menunggu"
      ).length,
      icon: Clock3,
      tone: "orange"
    },
    {
      title: "Dalam Penanganan",
      value: patients.filter(
        p => p.status === "Dalam Penanganan"
      ).length,
      icon: Stethoscope,
      tone: "purple"
    },
    {
      title: "Selesai",
      value: patients.filter(
        p => p.status === "Selesai"
      ).length,
      icon: CheckCircle2,
      tone: "green"
    }
  ];

  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main-content">
        <Navbar />

        {notice && (
          <div className="alert alert-success toast-notice d-flex justify-content-between align-items-center">
            {notice}

            <button
              className="btn-close"
              onClick={() => setNotice("")}
            />
          </div>
        )}

        {/* Statistik */}
        <div className="row g-3 mb-4">
          {stats.map(s => (
            <div
              className="col-12 col-sm-6 col-xl-3"
              key={s.title}
            >
              <div className="stat-card shadow-sm">
                <div>
                  <p>{s.title}</p>
                  <h2>{s.value}</h2>
                </div>

                <div className={`stat-icon ${s.tone}`}>
                  <s.icon size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabel Pasien */}
        <section className="data-panel shadow-sm">
          <div className="panel-header">
            <div>
              <h2>Daftar Pasien</h2>
              <p>
                Informasi pasien dan status kunjungan klinik.
              </p>
            </div>

            <button
              className="btn btn-primary d-flex align-items-center gap-2"
              onClick={openAdd}
            >
              <Plus size={18} />
              Tambah Pasien
            </button>
          </div>

          {/* Pencarian */}
          <div className="search-wrap">
            <Search size={18} />

            <input
              placeholder="Cari nama, nomor RM, poliklinik, dokter..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <PatientTable
            patients={filtered}
            onEdit={openEdit}
            onDelete={deletePatient}
          />

          <div className="table-footer">
            Menampilkan {filtered.length} dari {patients.length} pasien
          </div>
        </section>

        <footer className="page-footer">
          © 2026 MediCare Dashboard • Responsi 1 Pemrograman Fullstack
        </footer>
      </main>

      {modalOpen && (
        <PatientModal
          patient={editing}
          existing={patients}
          onClose={() => setModalOpen(false)}
          onSave={savePatient}
        />
      )}
    </div>
  );
}