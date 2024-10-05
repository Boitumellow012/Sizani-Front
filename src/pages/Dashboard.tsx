import Button from "../components/ui/Button";

export default function Dashboard() {
  return (
    <div className="container w-full h-full py-8">
      <div className="pb-6 border-b-2 border-neutral-400 flex justify-between items-center">
        <h1 className="w-1/2">Welcome, Username</h1>
        <Button onClick={() => console.log("Button clicked")}>
          Add New Document
        </Button>
      </div>
    </div>
  );
}
