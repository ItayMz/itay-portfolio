import { useEffect } from "react";
import { Outlet } from "react-router";
import { useLocation } from "react-router";
import { Navbar } from "@/components/layout/Navbar";

export function SiteLayout() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const targetId = location.hash.slice(1);
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ block: "start" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.hash, location.pathname]);

  return (
    <div className="page-shell">
      <Navbar />
      <Outlet />
    </div>
  );
}
