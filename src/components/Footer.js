import React from "react";
import { copyrightSign } from "@/assets/icons";
import { footerLogo } from "@/assets/images";
import { footerLinks, socialMedia } from "@/constants";

import Image from "next/image";



const Footer = () => {
  return (
    <footer className="bg-black mx-auto my-0 sm:px-16 px-8 sm:py-24 py-12 mt-10">
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href='/'>
            <Image src={footerLogo} alt='nike logo' width={150} height={46} />
          </a>
          <p className='mt-6 text-base text-white-400 sm:max-w-sm leading-7 font-montserrat'>
          Build spectacular floating cities together in an on-chain massive multiplayer game. 
          Featuring a unique in-game economy that is both Free to Play & Play to Earn. Collaboratively build your kingdom, vye for resources and trade.
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div
                key={icon.alt}
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                <Image src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-wrap flex-1 gap-20 lg:gap-10 justify-between'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='text-white font-montserrat text-2xl leading-normal font-medium mb-6'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className='text-white-400 text-base mt-3 font-montserrat leading-normal hover:text-slate-gray cursor-pointer'>
                    <a href={link.link} target={link.blank === true? "_blank" :""}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='font-montserrat flex flex-1 justify-start items-center gap-2 cursor-pointer'>
          <Image
            src={copyrightSign}
            alt='Open Source'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p><a href="https://github.com/Cygnusfear/laputa" target="_blank">Open Source. All on GitHub.</a></p>
        </div>
        <p className='font-montserrat cursor-pointer'><a href="https://ethglobal.com/showcase/laputa-fg9ku" target="_blank"> Made at EthGlobal Online 2023.</a></p>
      </div>
    </footer>
  )
};

export default Footer;
