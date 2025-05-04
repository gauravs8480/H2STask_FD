import React, { useEffect, useRef } from "react";
import { About1, About2, About3 } from "../assets";
import { RiArrowRightLine } from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const aboutItems = [
  {
    id: "about",
    img: About1,
    sub: "GET STARTED",
    number: "01",
    title: "What level of hiker are you?",
    text: "Whether you're a novice seeking scenic strolls or an experienced trekker craving challenging ascents, we've curated a diverse range of trails to suit every adventurer.",
  },
  {
    id: "equipment",
    img: About2,
    sub: "HIKING ESSENTIALS",
    number: "02",
    title: "Picking the right hiking gear!",
    text: "From durable footwear that conquers rugged trails to lightweight backpacks, we navigate the intricacies of gear selection to ensure you're trail-ready.",
  },
  {
    id: "blog",
    img: About3,
    sub: "WHERE YOU GO IS THE KEY",
    number: "03",
    title: "Understanding your map & timing",
    text: "Knowing when to start and anticipating conditions ensures a safe and enjoyable journey. Sync your steps with nature's rhythm.",
  },
];

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sections = sectionRef.current.querySelectorAll(".about-item");

    sections.forEach((section, index) => {
      const subtitle = section.querySelector(".subtitle");
      const title = section.querySelector(".title");
      const text = section.querySelector(".text");
      const link = section.querySelector(".link");
      const image = section.querySelector(".image");
      const number = section.querySelector(".faded-number");

      const textTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "bottom 10%",
          toggleActions: "play none none none",
        },
      });

      textTimeline.fromTo(
        subtitle,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
      textTimeline.fromTo(
        title,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      );
      textTimeline.fromTo(
        text,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      );
      textTimeline.fromTo(
        link,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      );

      gsap.fromTo(
        image,
        { opacity: 0, x: index % 2 === 0 ? 100 : -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 60%",
            end: "bottom 10%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        number,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 0.1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 60%",
            end: "bottom 10%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0a1e27] -mt-25 px-4 text-white  overflow-hidden"
    >
      <div className="max-w-[1300px] mx-auto   flex flex-col gap-12 ">
        {aboutItems.map((item, index) => (
          <div
            key={item.id}
            id={item.id}
            className={`about-item flex flex-col-reverse md:flex-row items-center gap-12  ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Content */}
            <div className="content relative w-full md:w-1/2 ">
              <h3 className="subtitle relative pl-16 sm:pl-20 text-sm sm:text-xl  lg:text-2xl whitespace-nowrap font-semibold tracking-[2px] text-[#e9c675] mb-4 before:absolute before:left-0 before:top-1/2 before:w-12 sm:w-16 before:h-[2px] before:bg-[#e9c675] before:-translate-y-1/2">
                {item.sub}
              </h3>
              <h2 className="title font-semibold text-4xl sm:text-5xl lg:text-6xl 3xl:text-7xl mb-4 z-10 relative">
                {item.title}
              </h2>
              <p className="text text-[#cbd5e1] text-base sm:text-lg lg:text-xl mb-6 leading-relaxed z-10 relative">
                {item.text}
              </p>

              <a
                href="#"
                className="link flex items-center gap-2 text-[#e9c675] font-medium sm:text-lg  hover:translate-x-2 transition-transform z-10 relative"
              >
                Read more <RiArrowRightLine />
              </a>
              {/* Faded Number*/}
              <span
                className={`faded-number absolute text-[7rem] md:text-[10rem] font-bold text-white font-playfair -top-[4rem] md:top-[-8rem] opacity-50 md:opacity-25 ${
                  index % 2 !== 0 ? " left-1 md:right-110" : "left-1 md:left-2"
                }`}
              >
                {item.number}
              </span>
            </div>

            {/* Image */}
            <div className="image flex justify-center w-full md:w-1/2">
              <img
                src={item.img}
                alt={item.title}
                className="w-full   3xl:max-w-[600px] 3xl:h-[700px] 2xl:max-w-[500px] 2xl:h-[600px] rounded shadow-lg object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
