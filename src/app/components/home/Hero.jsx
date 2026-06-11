import React from "react";
import Image from "next/image";
const services = [
  {
    number: "01",
    title: "Building Material",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    icon: "/building.png",
  },
  {
    number: "02",
    title: "Interior Decoration",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    icon: "/interior.png",
  },
  {
    number: "03",
    title: "Flower Shop",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    icon: "/flowers.png",
  },
];

const Hero = () => {
  return (



    <section id="home" className="relative">
      <div className="bigcontainer">
        <div className="overflow-hidden rounded-[21px] bg-white shadow-[0_40px_120px_rgba(15,42,113,0.12)]">
          <div className="relative overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/hero-bg.png')",
              }}
            />
            <div className="absolute inset-0" />
            <div className="relative maincontainer pt-20 pb-44">
              {/* Changed from lg:py-28 to lg:py-32 for more height */}
              <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div className="max-w-xl">
                  <span className="font-inter font-medium text-white">
                    Seven Division One Group
                  </span>
                  <h2 className="text-white uppercase">
                    <span className="font-light">
                      Everything a
                    </span>
                    <br />
                    <span className="font-medium">
                      Home is made of, under one group
                    </span>
                  </h2>
                  <p className="text-white/80 font-montserrat font-normal mt-2">
                    From the materials that build it to the kitchen, the interiors, and the flowers on the table seven specialist divisions, working as one across the UAE.
                  </p>
                  <div className="mt-10 flex flex-wrap items-center gap-4">
                    <a
                      href="#services"
                      className="flex items-center justify-center bg-white text-primary font-medium font-poppins px-8 py-2 rounded-full text-[18px]"
                    >
                      Services
                    </a>
                    <a
                      href="#group"
                      className="font-inter font-semibold text-white text-[18px]"
                    >
                      Explore Division <span className="ml-2">→</span>
                    </a>
                  </div>
                </div>

                <div className="hidden lg:block" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative maincontainer -mt-20! grid gap-6 pb-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-[15px] bg-white p-6 shadow-xl shadow-slate-950/10 transition hover:-translate-y-1 hover:shadow-slate-950/20"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-[11px] bg-[#0f3471] text-2xl text-white shadow-lg shadow-[#0f3471]/20">
                  <Image src={service.icon} alt={service.title} width={30} height={30} />
                </div>
                <span className="font-inter font-light text-3xl text-black/50">{service.number}</span>
              </div>
              <h4 className="font-semibold text-secondary my-2">{service.title}</h4>
              <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>

              <div className="flex justify-end">
                <a
                  href="#services"
                  className="font-inter font-semibold text-[#0C1F4D] text-[17px]"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;