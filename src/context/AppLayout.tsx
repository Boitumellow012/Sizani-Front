import NavbarMenu from "../components/NavbarMenu";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarMenu />
      <div className="absolute top-[72px] left-0 w-full min-h-[100vh-72px]">
        {children}
      </div>
    </>
  );
}
