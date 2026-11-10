import {
  useEffect,
  useState
} from "react";

import { X } from "lucide-react";

const empty = {
  noRM: "",
  nama: "",
  poli: "Poli Umum",
  dokter: "",
  tanggal: "",
  status: "Menunggu"
};

export default function PatientModal({
  patient,
  onClose,
  onSave,
  existing
}) {
  const [form, setForm] = useState(patient || empty);
  const [error, setError] = useState("");

  useEffect(() => {
    setForm(patient || empty);
    setError("");
  }, [patient]);

  function change(e) {
    setForm(f => ({
      ...f,
      [e.target.name]: e.target.value
    }));
  }

  function submit(e) {
    e.preventDefault();

    const duplicate = existing.some(
      p =>
        p.noRM.toLowerCase() ===
        form.noRM.trim().toLowerCase() &&
        p.id !== patient?.id
    );

    if (duplicate) {
      setError("Nomor rekam medis sudah digunakan.");
      return;
    }

    onSave({
      ...form,
      noRM: form.noRM.trim(),
      nama: form.nama.trim(),
      dokter: form.dokter.trim()
    });
  }

  return (
    <div
      className="modal-backdrop-custom"
      onMouseDown={e => {
        if (e.target === e.currentTarget) onClose();
      }}
    >

      <div
        className="patient-modal"
        role="dialog"
        aria-modal="true"
      >

        <div className="modal-heading">

          <h2>
            {patient
              ? "Edit Data Pasien"
              : "Tambah Pasien Baru"}
          </h2>

          <button
            className="btn btn-light"
            onClick={onClose}
          >
            <X size={20} />
          </button>

        </div>

        <form onSubmit={submit}>

          <div className="row g-3">

            <div className="col-md-6">
              <label className="form-label">
                Nomor Rekam Medis
              </label>

              <input
                className="form-control"
                name="noRM"
                value={form.noRM}
                onChange={change}
                required
                placeholder="RM-0004"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">
                Nama Pasien
              </label>

              <input
                className="form-control"
                name="nama"
                value={form.nama}
                onChange={change}
                required
                placeholder="Nama lengkap"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">
                Poliklinik Tujuan
              </label>

              <select
                className="form-select"
                name="poli"
                value={form.poli}
                onChange={change}
              >
                {[
                  "Poli Umum",
                  "Poli Gigi",
                  "Poli Anak",
                  "Poli Penyakit Dalam",
                  "Poli Mata"
                ].map(x => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label">
                Dokter Penanggung Jawab
              </label>

              <input
                className="form-control"
                name="dokter"
                value={form.dokter}
                onChange={change}
                required
                placeholder="dr. ..."
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">
                Tanggal Kunjungan
              </label>

              <input
                className="form-control"
                type="date"
                name="tanggal"
                value={form.tanggal}
                onChange={change}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">
                Status Penanganan
              </label>

              <select
                className="form-select"
                name="status"
                value={form.status}
                onChange={change}
              >
                <option>Menunggu</option>
                <option>Dalam Penanganan</option>
                <option>Selesai</option>
              </select>
            </div>

          </div>

          {error && (
            <div className="alert alert-danger mt-3">
              {error}
            </div>
          )}

          <div className="modal-actions">

            <button
              type="button"
              className="btn btn-light"
              onClick={onClose}
            >
              Batal
            </button>

            <button
              type="submit"
              className="btn btn-primary"
            >
              Simpan Data
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}