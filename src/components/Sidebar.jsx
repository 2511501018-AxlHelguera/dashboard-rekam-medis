import {
  Activity,
  LayoutDashboard,
  Users,
  Stethoscope
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="brand">
        <Activity size={25} />
        MediCare
        <span>Admin</span>
      </div>

      <div className="menu-label">
        MENU UTAMA
      </div>

      <div className="menu-item active">
        <LayoutDashboard size={19} />
        Dashboard
      </div>

      <div className="menu-item">
        <Users size={19} />
        Data Pasien
      </div>

      <div className="menu-item">
        <Stethoscope size={19} />
        Rekam Medis
      </div>

      <div className="sidebar-footer">
        Sistem Klinik • Responsi Fullstack
      </div>

    </aside>
  );
}