import Footer from "@/components/Footer";
import Image from "next/image";
import { bigShoe1 } from "@/assets/images";
import Waitlist from "@/components/Waitlist";

export default function Home() {
  return (
    <main>
      <section className="w-full flex xl:flex-row flex-col justify-center gap-10 py-8 z-10 sm:px-16 px-8">
        <div className="xl:w-2/5 flex flex-col justify-center items-start w-full">
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] font-bold">
            <span className="xl:bg-coral-red xl:whitespace-nowrap z-10 pr-10">
              Build
            </span>
            <br />
            <span className="text-coral-red inline-block mt-3">Your </span>{" "}
            Dream
          </h1>
          <p className="py-10 text-xl font-montserrat text-coral-red">
            In a world of floating cities.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center bg-center bg-cover">
          <Image
            src={bigShoe1}
            alt="laputa game"
            width={610}
            height={500}
            className="object-contain rounded-xl"
          />
        </div>
      </section>
      {/*  <section className="sm:px-16 px-8 sm:py-24 py-12">
        <Services />
      </section> */}
      <Footer />
    </main>
  );
}
