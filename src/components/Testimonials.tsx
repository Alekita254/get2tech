import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe",
    comment: "This landing page is awesome!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Jane Smith Vue",
    userName: "@jane_smith",
    comment: "Super clean UI and smooth user experience. Love it!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Michael NextJS",
    userName: "@michael_next",
    comment:
        "A game-changer for developers and businesses looking for a sleek, modern landing page.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Emily Angular",
    userName: "@emily_angular",
    comment:
        "It's fast, responsive, and well-designed. Highly recommend this template!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "David Svelte",
    userName: "@david_svelte",
    comment:
        "The best decision I made for my startup. Easy to customize and deploy.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          People Love{" "}
        </span>
       Our Products & Services
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Trusted by students, jobseekers, and business owners worldwide. Here’s what they say.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
