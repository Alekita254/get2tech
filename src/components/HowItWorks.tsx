// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";
//
// interface FeatureProps {
//   icon: JSX.Element;
//   title: string;
//   description: string;
// }
//
// const features: FeatureProps[] = [
//   {
//     icon: <MedalIcon />,
//     title: "Accessibility",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
//   },
//   {
//     icon: <MapIcon />,
//     title: "Community",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
//   },
//   {
//     icon: <PlaneIcon />,
//     title: "Scalability",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
//   },
//   {
//     icon: <GiftIcon />,
//     title: "Gamification",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
//   },
// ];
//
// export const HowItWorks = () => {
//   return (
//     <section
//       id="howItWorks"
//       className="container text-center py-24 sm:py-32"
//     >
//       <h2 className="text-3xl md:text-4xl font-bold ">
//         How It{" "}
//         <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
//           Works{" "}
//         </span>
//         Step-by-Step Guide
//       </h2>
//       <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
//         dolor pariatur sit!
//       </p>
//
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {features.map(({ icon, title, description }: FeatureProps) => (
//           <Card
//             key={title}
//             className="bg-muted/50"
//           >
//             <CardHeader>
//               <CardTitle className="grid gap-4 place-items-center">
//                 {icon}
//                 {title}
//               </CardTitle>
//             </CardHeader>
//             <CardContent>{description}</CardContent>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// };


import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";
import { motion } from "framer-motion";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Accessibility",
    description:
        "Designed for everyone—our technology ensures ease of use, no matter where you are.",
  },
  {
    icon: <MapIcon />,
    title: "Community",
    description:
        "Built for impact—our solutions are shaped by real problems in real communities.",
  },
  {
    icon: <PlaneIcon />,
    title: "Scalability",
    description:
        "From small beginnings to big impact—our innovations grow with demand.",
  },
  {
    icon: <GiftIcon />,
    title: "Gamification",
    description:
        "Innovation meets engagement—making tech adoption easier and more fun.",
  },
];

export const HowItWorks = () => {
  return (
      <section id="howItWorks" className="container text-center py-24 sm:py-32">
        <h2 className="text-3xl md:text-4xl font-bold">
          How It{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        </h2>
        <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
          We take real-world challenges and turn them into powerful solutions. Here’s how:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon, title, description }: FeatureProps, index) => (
              <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="bg-muted/50 hover:scale-105 transition-transform duration-300">
                  <CardHeader className="flex flex-col items-center gap-2">
                    <span className="text-primary">{icon}</span>
                    <CardTitle>{title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">{description}</CardContent>
                </Card>
              </motion.div>
          ))}
        </div>
      </section>
  );
};
