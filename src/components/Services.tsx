// import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
// import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
// import cubeLeg from "../assets/centric.png";
//
// interface ServiceProps {
//   title: string;
//   description: string;
//   icon: JSX.Element;
// }
//
// const serviceList: ServiceProps[] = [
//   {
//     title: "Code Collaboration",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
//     icon: <ChartIcon />,
//   },
//   {
//     title: "Project Management",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
//     icon: <WalletIcon />,
//   },
//   {
//     title: "Task Automation",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
//     icon: <MagnifierIcon />,
//   },
// ];
//
// export const Services = () => {
//   return (
//     <section className="container py-24 sm:py-32">
//       <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
//         <div>
//           <h2 className="text-3xl md:text-4xl font-bold">
//             <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
//               Client-Centric{" "}
//             </span>
//             Services
//           </h2>
//
//           <p className="text-muted-foreground text-xl mt-4 mb-8 ">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
//             dolor.
//           </p>
//
//           <div className="flex flex-col gap-8">
//             {serviceList.map(({ icon, title, description }: ServiceProps) => (
//               <Card key={title}>
//                 <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
//                   <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
//                     {icon}
//                   </div>
//                   <div>
//                     <CardTitle>{title}</CardTitle>
//                     <CardDescription className="text-md mt-2">
//                       {description}
//                     </CardDescription>
//                   </div>
//                 </CardHeader>
//               </Card>
//             ))}
//           </div>
//         </div>
//
//         <img
//           src={cubeLeg}
//           className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
//           alt="About services"
//         />
//       </div>
//     </section>
//   );
// };

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/centric.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Code Collaboration",
    description:
        "Enhance teamwork with real-time code sharing, version control, and seamless integrations.",
    icon: <ChartIcon />,
  },
  {
    title: "Project Management",
    description:
        "Streamline workflows with task assignments, progress tracking, and smart automation.",
    icon: <WalletIcon />,
  },
  {
    title: "Task Automation",
    description:
        "Automate repetitive tasks and optimize productivity with AI-driven workflows.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
      <section className="container py-24 sm:py-32">
        <div className="grid lg:grid-cols-[1fr,1fr] gap-12 place-items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-primary">Client-Centric </span> Services
            </h2>

            <p className="text-muted-foreground text-lg mt-4 mb-8">
              We provide tailored solutions to enhance collaboration, management, and automation.
            </p>

            {/*<div className="flex flex-col gap-6">*/}
            {/*  {serviceList.map(({ icon, title, description }: ServiceProps) => (*/}
            {/*      <Card key={title} className="bg-white">*/}
            {/*        <CardHeader className="flex md:flex-row justify-start items-start gap-4">*/}
            {/*          <div className="p-2 rounded-lg bg-gray-100">{icon}</div>*/}
            {/*          <div>*/}
            {/*            <CardTitle>{title}</CardTitle>*/}
            {/*            <CardDescription className="text-gray-600 mt-2">*/}
            {/*              {description}*/}
            {/*            </CardDescription>*/}
            {/*          </div>*/}
            {/*        </CardHeader>*/}
            {/*      </Card>*/}
            {/*  ))}*/}
            {/*</div>*/}
            <div className="flex flex-col gap-8">
              {serviceList.map(({ icon, title, description }: ServiceProps) => (
                  <Card key={title}>
                    <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                      <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                        {icon}
                      </div>
                      <div>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription className="text-md mt-2">
                          {description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
              ))}
            </div>
          </div>

          <img
              src={cubeLeg}
              className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
              alt="About services"
          />
        </div>
      </section>
  );
};
