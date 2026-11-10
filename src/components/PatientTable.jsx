import {
  Pencil,
  Trash2
} from "lucide-react";

const statusClass = {
  "Selesai": "success",
  "Dalam Penanganan": "warning",
  "Menunggu": "secondary"
};

export default function PatientTable({
  patients,
  onEdit,
  onDelete
}) {
  return (
    <div className="table-responsive">

      <table className="table align-middle patient-table">

        <thead>
          <tr>
            <th>No. RM</th>
            <th>Nama Pasien</th>
            <th>Poliklinik</th>
            <th>Dokter</th>
            <th>Tanggal Kunjungan</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {patients.map(p => (
            <tr key={p.id}>

              <td className="fw-semibold">
                {p.noRM}
              </td>

              <td>{p.nama}</td>
              <td>{p.poli}</td>
              <td>{p.dokter}</td>
              <td>{p.tanggal}</td>

              <td>
                <span
                  className={`badge rounded-pill text-bg-${statusClass[p.status] || "secondary"}`}
                >
                  {p.status}
                </span>
              </td>

              <td>
                <div className="d-flex gap-2">

                  <button
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => onEdit(p)}
                  >
                    <Pencil size={15} />
                  </button>

                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => onDelete(p.id)}
                  >
                    <Trash2 size={15} />
                  </button>

                </div>
              </td>

            </tr>
          ))}

          {patients.length === 0 && (
            <tr>
              <td
                colSpan="7"
                className="text-center py-5 text-secondary"
              >
                Data pasien tidak ditemukan.
              </td>
            </tr>
          )}

        </tbody>

      </table>

    </div>
  );
}