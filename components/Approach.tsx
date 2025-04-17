"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading text-center text-4xl">
        My <span className="text-purple-300">approach</span>
      </h1>

      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-6">
        <Card title="Planning & Strategy" icon={<AceternityIcon order="Phase 1"/>}
            des="We'll collaborate to map out your website's goals, target audience, 
            and key functionalities. We'll discuss things like site structure, 
            navigation, and content requirements."
        >
          <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900" />
        </Card>

        <Card title="Development & Progress Update" icon={<AceternityIcon order="Phase 2"/>}
            des="Once we agree on the plan, I cue my lofi playlist and dive into
            coding. From initial sketches to polished code, I keep you updated
            every step of the way."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" /> */}
        </Card>

        <Card title="Development & Launch" icon={<AceternityIcon order="Phase 3"/>}
            des="This is where the magic happens! Based on the approved design, 
            I'll translate everything into functional code, building your website
            from the ground up."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="relative group w-full max-w-sm lg:h-[35rem] mx-auto border border-neutral-300 dark:border-neutral-700 overflow-hidden rounded-3xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background Reveal */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full transition-all duration-300">
        {/* ICON */}
        <div
          className={`transition-all absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] duration-300 ${
            hovered ? "opacity-0 -translate-y-4" : "opacity-100"
          }`}
        >
          {icon}
        </div>

        {/* TITLE */}
        <h2
          className={`mt-4 text-3xl font-bold transition-all duration-300 ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } text-black dark:text-white text-center px-6`}
        >
          {title}
        </h2>
        <p
          className={`text-sm  mt-4 font-bold transition-all duration-300 ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } text-black dark:text-white text-center px-6`}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({order}: {order: string}) => {
  return (
    <div>
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-2xl font-medium text-white backdrop-blur-3xl">
    {order}
  </span>
</button>
    </div>
  );
};

export default Approach;
