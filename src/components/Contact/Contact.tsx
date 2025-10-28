"use client";

import * as React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { useAnimate } from "framer-motion";
import { Button, buttonVariants } from "./button";
import { HighlighterItem, HighlightGroup, Particles } from "./highlighter";
import aLogo from "../../assets/icons/aLogo.png";
import LinkedIn from "../../assets/icons/linkedin.png";
import Email from '../../../src/assets/icons/email.png';
import whatsApp from '../../../src/assets/icons/whatsapp.png';
import ProBG from "../Projects/ProBG";

export default function Contact() {
  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    animate(
      [
        ["#pointer", { left: 200, top: 60 }, { duration: 0 }],
        ["#javascript", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 50, top: 102 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#javascript", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#react-js", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 224, top: 170 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#react-js", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#typescript", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 88, top: 198 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#typescript", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#next-js", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 200, top: 60 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#next-js", { opacity: 0.5 }, { at: "-0.3", duration: 0.1 }],
      ],
      {
        repeat: Number.POSITIVE_INFINITY,
      },
    );
  }, [animate]);
  return (
    <section 
    className="relative mx-auto w-full py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    id="contact">

      <ProBG />
      <HighlightGroup className="group h-full w-full">
        <div
          className="group/item h-full md:col-span-6 lg:col-span-12"
          data-aos="fade-up"
        >
          <div className="relative text-center mb-16">
            <h2 className="text-4xl font-bold text-white">CONTACT</h2>
            <div className="w-41 h-0.5 bg-[#405ed4] mx-auto mt-2"></div>
            <p className="text-gray-400 mt-4 text-lg font-semibold">
              I’d love to hear from you—reach out for any opportunities or questions!
            </p>
          </div>
          <HighlighterItem className="rounded-3xl p-6">
            <div className="relative z-20 h-full w-full overflow-hidden bg-[#040c14]">
              <Particles
                className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                quantity={500}
                color={"#555555"}
                vy={1}
              />
              <div className="flex justify-center">
                <div className="flex h-full flex-col justify-center gap-10 p-4 md:h-[300px] md:flex-row">
                  <div
                    className="relative mx-auto h-[270px] w-[300px] md:h-[270px] md:w-[300px] text-white"
                    ref={scope}
                  >
                    <img src={aLogo} 
                    alt="myLogo"
                    className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-orange-500"
                    />
                    <div
                      id="next-js"
                      className="absolute bottom-16 left-11 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-gradient-to-r from-[#348F50] to-[#A43931] text-white"
                    >
                      UI-UX Designer
                    </div>
                    <div
                      id="react-js"
                      className="absolute left-2 top-20 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-gradient-to-r from-[#144b89] to-[#12be31] text-white"
                    >
                      Graphic Design
                    </div>
                    <div
                      id="typescript"
                      className="absolute bottom-23 right-1 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-gradient-to-r from-[#c67a07] to-[#170ce8] text-white"
                    >
                      Web Application
                    </div>
                    <div
                      id="javascript"
                      className="absolute right-12 top-10 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-gradient-to-r from-[#1D4350] to-[#A43931] text-white"
                    >
                      Data Analytics
                    </div>

                    <div id="pointer" className="absolute">
                      <svg
                        width="16.8"
                        height="18.2"
                        viewBox="0 0 12 13"
                        className="fill-red-600"
                        stroke="white"
                        strokeWidth="1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="-mt-20 flex h-full flex-col justify-center p-2 md:-mt-4 md:ml-10 md:w-[400px]">
                    <div className="flex flex-col items-center">
                      <h3 className="mt-6   pb-1 font-bold ">
                        <span className="text-2xl md:text-4xl text-white">
                          Any questions about your STACK?
                        </span>
                      </h3>
                    </div>
                    <p className="mb-4 text-slate-300">
                      Feel free to reach out to me!
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Link
                        to={"https://cal.com/anil-yadav/designwithanil"}
                        target="_blank"
                      >
                        <Button className="text-white border-1 bg-[#262a29] font-medium hover:bg-gradient-to-r from-[#1D4350] to-[#A43931] hover:text-white hover:scale-105">Book a call</Button>
                      </Link>

                      <Link
                        to="https://mail.google.com/mail/?view=cm&fs=1&to=ydv85anil@gmail.com"
                        target="_blank"
                        className={cn(
                          buttonVariants({
                            variant: "gmail",
                            size: "icon",
                          }),
                        )}
                      >
                        <span className="flex items-center gap-1">
                          <img src={Email} alt="Email Button" />
                        </span>
                      </Link>

                      <Link
                        to="https://wa.me/918257003372"
                        target="_blank"
                        className={cn(
                          buttonVariants({
                            variant: "gmail",
                            size: "icon",
                          }),
                        )}
                      >
                        <span className="flex items-center gap-1">
                          <img src={whatsApp} alt="WhatsApp Button" />
                        </span>
                      </Link>

                      <Link
                        to="https://www.linkedin.com/in/anil-yadav-b12a21257"
                        target="_blank"
                        className={cn(
                          buttonVariants({
                            variant: "gmail",
                            size: "icon",
                          }),
                        )}
                      >
                        <span className="flex items-center gap-1">
                          <img src={LinkedIn} alt="LinkedIn Button" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </HighlighterItem>
        </div>
      </HighlightGroup>
    </section>
  );
};
