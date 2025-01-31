import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedTitle from './AnimatedTitle';
gsap.registerPlugin(ScrollTrigger)

const About = () => {


    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })

        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0,

        })
    })

  return (
    <div id="about" className="min-h-screen w-screen ">
        <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
            <h2 className="font-general text-md uppercase md:text-[16px]">Welcome to Valorant.</h2>
            <AnimatedTitle 
                title="Join us in the adventure to <br/> c<b>o</b>nquer with all you have."
                containerClass="mt-5 !text-black text-center"
            />
            
            <div className="about-subtext">
                <p>Valorant is a First Person Shooter game that is cross-platform.</p>
                <p>Hop on online with 1,000,000+ players and start your journey.</p>
            </div>

        </div>
        <div className="h-dvh w-screen" id="clip">
            <div className="mask-clip-path about-image">
                <img 
                    src="img/about.jpg"
                    alt="Background"
                    className="absolute left-0 top-0 size-full object-cover"
                />

            </div>

        </div>
    </div>
  )
}

export default About