
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SponsorProps {
  image: string;
  name: string;
  description: string;
}

const sponsors: SponsorProps[] = [
  {
    image: "/alexMurimi.png",
    name: "Alex Murimi",
    description: "A visionary in AI and automation.",
  },
  {
    image: "/sponsor2.png",
    name: "Sponsor 2",
    description: "Revolutionizing green energy tech.",
  },
  {
    image: "/sponsor3.png",
    name: "Sponsor 3",
    description: "Investor in next-gen cybersecurity.",
  },
  {
    image: "/sponsor4.png",
    name: "Sponsor 4",
    description: "Innovating in blockchain solutions.",
  },
  {
    image: "/sponsor5.png",
    name: "Sponsor 5",
    description: "Leading in smart agriculture tech.",
  },
  {
    image: "/sponsor6.png",
    name: "Sponsor 6",
    description: "Pioneering space exploration AI.",
  },
];

export const Sponsors = () => {
  return (
      <section
          id="sponsors"
          className="relative flex flex-col items-center justify-center py-24 sm:py-32 overflow-hidden"
      >
        {/* Moving Background Glow */}
        <motion.div
            className="absolute inset-0 rounded-full bg-green-500/20 dark:bg-green-400/15 blur-[120px]"
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 3, opacity: 0.15 }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
        />

        <h2 className="text-lg lg:text-2xl font-bold mb-8 text-foreground uppercase tracking-wide relative z-10">
          Investors & Founders
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 relative z-10">
          {sponsors.map(({ image, name, description }: SponsorProps) => (
              <motion.div
                  key={name}
                  className={cn(
                      "w-52 h-52 md:w-60 md:h-60 flex flex-col items-center justify-center rounded-xl cursor-pointer",
                      "bg-card shadow-lg backdrop-blur-md relative group",
                      "hover:shadow-green-500/50 dark:hover:shadow-green-400/30"
                  )}
                  initial={{ rotateY: 360 }}
                  animate={{ rotateY: 0 }}
                  transition={{ duration: 3, ease: "easeOut" }} // Slower Rotation Speed
                  whileHover={{ rotateY: 180, transition: { duration: 1.5 } }} // Slower Flip
              >
                {/* Front Side */}
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-all group-hover:opacity-0">
                  <Avatar className="w-24 h-24 sm:w-28 sm:h-28 border border-green-500 shadow-lg">
                    <AvatarImage src={image} alt={name} />
                    <AvatarFallback className="text-foreground bg-green-700 text-xl">
                      {name[0]}
                    </AvatarFallback>
                  </Avatar>

                  <h3 className="text-lg font-semibold text-foreground mt-2">
                    {name}
                  </h3>
                </div>

                {/* Back Side (Revealed on Hover) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity px-4">
                  <p className="text-sm text-foreground">{description}</p>
                </div>
              </motion.div>
          ))}
        </div>
      </section>
  );
};


