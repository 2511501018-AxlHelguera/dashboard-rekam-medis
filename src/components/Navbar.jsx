import {
  Bell,
  CircleUserRound
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="topbar">

      <div>
        <span className="eyebrow">
          Sistem Informasi Klinik
        </span>

        <h1>Dashboard Rekam Medis</h1>

        <p>
          Kelola data pasien dan kunjungan dengan mudah.
        </p>
      </div>

      <div className="profile">
        <Bell size={19} />
        <CircleUserRound size={27} />
        <span>Administrator</span>
      </div>

    </header>
  );
}