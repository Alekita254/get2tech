import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#38b000] to-[#a855f7]  text-transparent bg-clip-text">
              get2Tech:
            </span>{" "}
            Innovate.
          </h1>{" "}
          Elevate. {" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Dominate.
            </span>{" "}
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          We believe in empowering individuals and businesses to embrace the future of technology.
          By turning vision into reality with next-gen Tech.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3 bg-gradient-to-r from-[#38b000] to-[#a855f7] text-white
  transition-transform transform hover:scale-105 hover:-rotate-1">
            Get Started →
          </Button>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10 animate-float">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
