// import { Badge } from "./ui/badge";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import image from "../assets/test.png";
// import security from "../assets/security.png";
// import services from "../assets/services.png";
//
// interface FeatureProps {
//   title: string;
//   description: string;
//   image: string;
// }
//
// const features: FeatureProps[] = [
//   {
//     title: "Cyber Security",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
//     image: security,
//   },
//   {
//     title: "Big Data",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
//     image: services,
//   },
//   {
//     title: "IT Training",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
//     image: image,
//   },
// ];
//
// const featureList: string[] = [
//   "Dark/Light theme",
//   "Reviews",
//   "Features",
//   "Pricing",
//   "Contact form",
//   "Our team",
//   "Responsive design",
//   "Newsletter",
//   "Minimalist",
// ];
//
// export const Features = () => {
//   return (
//     <section
//       id="features"
//       className="container py-24 sm:py-32 space-y-8"
//     >
//       <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
//         Many{" "}
//         <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
//           Great Features
//         </span>
//       </h2>
//
//       <div className="flex flex-wrap md:justify-center gap-4">
//         {featureList.map((feature: string) => (
//           <div key={feature}>
//             <Badge
//               variant="secondary"
//               className="text-sm"
//             >
//               {feature}
//             </Badge>
//           </div>
//         ))}
//       </div>
//
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {features.map(({ title, description, image }: FeatureProps) => (
//           <Card key={title}>
//             <CardHeader>
//               <CardTitle>{title}</CardTitle>
//             </CardHeader>
//
//             <CardContent>{description}</CardContent>
//
//             <CardFooter>
//               <img
//                 src={image}
//                 alt="About feature"
//                 className="w-[200px] lg:w-[300px] mx-auto"
//               />
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// };


import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import security from "../assets/security.png";
import services from "../assets/services.png";
import training from "../assets/test.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Cyber Security",
    description:
        "Protect your business from cyber threats with cutting-edge security solutions.",
    image: security,
  },
  {
    title: "Big Data",
    description:
        "Leverage data analytics to drive smarter business decisions and innovation.",
    image: services,
  },
  {
    title: "IT Training",
    description:
        "Empower your team with expert-led training for the latest technology trends.",
    image: training,
  },
];

const featureList: string[] = [
  "Dark/Light Theme",
  "User Reviews",
  "Advanced Security",
  "Data Analytics",
  "24/7 Support",
  "Cloud Integration",
  "AI-Powered Insights",
  "Mobile-First Design",
];

export const Features = () => {
  return (
      <section id="features" className="container py-24 sm:py-32 space-y-8">
        <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-4xl font-bold md:text-center"
        >
          Many{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Powerful Features
        </span>
        </motion.h2>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap md:justify-center gap-4"
        >
          {featureList.map((feature: string) => (
              <Badge key={feature} variant="secondary" className="text-sm">
                {feature}
              </Badge>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ title, description, image }: FeatureProps, index) => (
              <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg font-semibold">{title}</CardTitle>
                  </CardHeader>

                  <CardContent className="text-muted-foreground text-center">
                    {description}
                  </CardContent>

                  <CardFooter className="flex justify-center">
                    <img
                        src={image}
                        alt={title}
                        className="w-[200px] lg:w-[250px] mx-auto rounded-lg shadow-sm"
                    />
                  </CardFooter>
                </Card>
              </motion.div>
          ))}
        </div>
      </section>
  );
};
