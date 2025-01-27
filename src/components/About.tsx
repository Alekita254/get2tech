import { Statistics } from "./Statistics";
import about from "../assets/about.png"

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={about}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Ghetto Tech
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Ghetto Tech started with a simple idea—turning challenges into opportunities.
                From urban communities where resources are scarce to the minds of people who won’t settle for less,
                we’ve been creating practical solutions that make a difference.
                What began as small-scale projects aimed at tackling safety risks has grown into impactful products that work in real life,
                not just in theory. We’re not waiting for change to come—we’re building it, and we’re inviting you to be part of this journey
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
