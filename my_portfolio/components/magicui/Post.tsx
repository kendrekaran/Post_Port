"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
        
          </>
        }
      >
        <img
          src="https://i.imgur.com/nssZ5VF.png"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-center-top " 
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
