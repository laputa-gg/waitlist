import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";

import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";


export const navLinks = [
  { href: "#joinwaitlist", label: "Beta" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "900k+", label: "Installs" },
  { value: "700+", label: "NFTs" },
  { value: "850k+", label: "Users" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Build Cities",
    subtext: "Earn to Build.",
  },
  {
    imgURL: shieldTick,
    label: "On Chain",
    subtext:
      "Experience worry-free transactions.",
  },
  {
    imgURL: support,
    label: "Easy",
    subtext: "Click Click Done.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Vitalik",
    rating: 4.8,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "oxwintr",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Resources",
    links: [
      { name: "NFT", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Terms and Conditions", link: "/" },
    ],
  },
   {
    title: "Help",
    links: [
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "https://docs.google.com/document/d/1ITkXf_4CMTa4ngvNXF3QfDrGIo8TD9fn6oXTxfSThxY/" },
      { name: "Open Source", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "hi@laputa.gg", link: "mailto:hi@laputa.gg" },
      { name: "Discord", link: "https://discord.gg/auN3RtAX8X" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
//  { src: twitter, alt: "twitter logo" },
//  { src: instagram, alt: "instagram logo" },
];