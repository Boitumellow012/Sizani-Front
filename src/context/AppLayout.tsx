import { Outlet } from "react-router";
import NavbarMenu from "../components/NavbarMenu";

export default function AppLayout() {
  return (
    <>
      <NavbarMenu />
      <div className="absolute top-[72px] left-0 w-full">
        <Outlet />
      </div>
    </>
  );
}
