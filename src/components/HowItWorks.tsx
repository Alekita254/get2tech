//
// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";
// import { motion } from "framer-motion";
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
//     title: "Web Design",
//     description:
//         "Crafting visually stunning and user friendly websites that leave a lasting impression.",
//   },
//   {
//     icon: <MapIcon />,
//     title: "Frontend & Backend",
//     description:
//         "Designing and building softwares solutions to address your specific business challenge and enhance effeciency.",
//   },
//   {
//     icon: <PlaneIcon />,
//     title: "UX/UI",
//     description:
//         "We have a team of UX designers who do a very good job when it comes to making really awesome UI and User experiences.",
//   },
//   {
//     icon: <GiftIcon />,
//     title: "Consulations",
//     description:
//         "Providing expert guidance and training in web design, data analysis, and technology strategy",
//   },
// ];
//
// export const HowItWorks = () => {
//   return (
//       <section id="howItWorks" className="container text-center py-24 sm:py-32">
//         <h2 className="text-3xl md:text-4xl font-bold">
//           How It{" "}
//           <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
//           Works{" "}
//         </span>
//         </h2>
//         <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
//           We take real-world challenges and turn them into powerful solutions. Here’s how:
//         </p>
//
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map(({ icon, title, description }: FeatureProps, index) => (
//               <motion.div
//                   key={title}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.2 }}
//               >
//                 <Card className="bg-muted/50 hover:scale-105 transition-transform duration-300">
//                   <CardHeader className="flex flex-col items-center gap-2">
//                     <span className="text-primary">{icon}</span>
//                     <CardTitle>{title}</CardTitle>
//                   </CardHeader>
//                   <CardContent className="text-muted-foreground">{description}</CardContent>
//                 </Card>
//               </motion.div>
//           ))}
//         </div>
//       </section>
//   );
// };

// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// import { PaintBrushIcon, CodeIcon, LayoutIcon, ChatBubbleIcon } from "../components/Icons";
// import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { BrushIcon, Code2Icon, PenToolIcon, MessagesSquareIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureProps {
    icon: JSX.Element;
    title: string;
    description: string;
}

const features: FeatureProps[] = [
    {
        icon: <BrushIcon />,
        title: "Web Design",
        description:
            "Creating visually striking, user-friendly websites that captivate and engage audiences.",
    },
    {
        icon: <Code2Icon />,
        title: "Full-Stack Development",
        description:
            "Building robust, scalable software solutions that streamline business operations and enhance efficiency.",
    },
    {
        icon: <PenToolIcon />,
        title: "UX/UI Design",
        description:
            "Designing seamless, intuitive user experiences that enhance usability and customer satisfaction.",
    },
    {
        icon: < MessagesSquareIcon />,
        title: "Consultations",
        description:
            "Offering expert advice and tailored training in web development, UX/UI, and technology strategies.",
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
                We transform challenges into powerful, innovative solutions. Here’s how:
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
                                <span className="text-primary text-4xl">{icon}</span>
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
