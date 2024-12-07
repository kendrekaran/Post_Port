"use client"

import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import {motion} from 'framer-motion'
import { HeroScrollDemo } from "./Post";

const reviews = [
  {
    id:1,
    name: "Karan⚡️",
    username: "kendrekaran_",
    body: "Learning TypeScript and Advanced TypeScript APIs  ",
    img: "https://pbs.twimg.com/profile_images/1852061272352919553/pkW1ua9A_400x400.jpg",
  },
  {
    id:2,
    name: "Karan⚡️",
    username: "kendrekaran_",
    body: "Learning about Web Sockets ",
    img: "https://pbs.twimg.com/profile_images/1852061272352919553/pkW1ua9A_400x400.jpg",
  },
  {
    id:3,
    name: "Karan⚡️",
    username: "kendrekaran_",
    body: "Learning Postgresql  ",
    img: "https://pbs.twimg.com/profile_images/1852061272352919553/pkW1ua9A_400x400.jpg",
  },
  {
    id:4,
    name: "Karan⚡️",
    username: "kendrekaran_",
    body: "Covered React Hooks  ",
    img: "https://pbs.twimg.com/profile_images/1852061272352919553/pkW1ua9A_400x400.jpg",
  },
  {
    id:5,
    name: "Karan⚡️",
    username: "@kendrekaran_",
    body: "Completed Learning Tailwind Css ",
    img: "https://pbs.twimg.com/profile_images/1852061272352919553/pkW1ua9A_400x400.jpg",
  },
  {
    id:6,
    name: "Karan⚡️",
    username: "@kendrekaran_",
    body: "Learning UIUX Designing",
    img: "https://pbs.twimg.com/profile_images/1852061272352919553/pkW1ua9A_400x400.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  id,
  img,
  name,
  username,
  body,
}: {
  id:number
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl h-36 border p-4",
        // light styles
        " bg-black hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
       
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex items-center justify-center h-full md:py-20  bg-black flex-col  overflow-hidden rounded-lg  ">
      <motion.h2
          className="text-4xl lg:text-7xl font-bold sm:-mb-20  text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Twitter <span className="text-blue-500">Timeline</span>
        </motion.h2>
      <div className="hidden sm:inline-block" ><HeroScrollDemo/></div>

      <Marquee pauseOnHover className="[--duration:20s] sm:w-[70vw]">
        {firstRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s] sm:w-[70vw]">
        {secondRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute "></div>
      <div className="pointer-events-none absolute  "></div>
    </div>
  );
}
