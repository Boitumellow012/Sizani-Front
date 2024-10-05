import NavbarMenu from "../components/NavbarMenu";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarMenu />
      <div className="">{children}</div>
    </>
  );
}
