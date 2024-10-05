import Button from "../components/ui/Button";

export default function OnBoarding() {
  return (
    <div className="container flex flex-col w-full justify-center items-center h-[calc(100vh-72px)]">
      <p className="w-full text-start uppercase text-light tracking-wider">
        You will be heard
      </p>
      <h1 className="text-4xl max-w-2xl mr-auto text-start lg:text-5xl font-extrabold">
        Onboard with the platform who send you straight to the ear!
      </h1>
      <div className="mt-8 w-full flex flex-col gap-2 md:flex-row">
        <Button as="a" onClick={() => console.log("Button clicked")}>
          Get Started
        </Button>
        <Button
          as="a"
          color="dark"
          onClick={() => console.log("Button clicked")}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}
