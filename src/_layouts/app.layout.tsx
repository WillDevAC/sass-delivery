import { MenuBar } from "@/components/ui/menu-bar";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <>
      <div className="h-screen w-screen grid place-items-start justify-center">
        <section className="bg-white w-screen max-w-[700px]">
          <Outlet />
          <MenuBar />
        </section>
      </div>
    </>
  );
}
