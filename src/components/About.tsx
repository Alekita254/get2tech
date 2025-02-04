import { Statistics } from "./Statistics";
// import about from "../assets/about.png"
import about from "/alexMe.png"

export const  About = () => {
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
                Alex Murimi
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                As a full-stack developer in Nairobi, Kenya, I craft user-focused, high-performance web applications that are both intuitive and responsive.

                Driven by precision and a problem-solving mindset, I transform ideas into seamless digital experiences that elevate brands and engage users
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
