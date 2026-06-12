import Image from "next/image";

const stats = [
  { value: "7+", label: "Business Division" },
  { value: "15+", label: "Years In Operation" },
  { value: "UAE", label: "Head Quarters" },
];

const googleLetters = [
  ["G", "#4285f4"],
  ["o", "#db4437"],
  ["o", "#f4b400"],
  ["g", "#4285f4"],
  ["l", "#0f9d58"],
  ["e", "#db4437"],
];

const reviewers = [
  "bg-[#b78a62]",
  "bg-[#d6b08a]",
  "bg-[#9fb5c8]",
  "bg-[#ecd0ae]",
  "bg-[#8e9fb5]",
];

export default function AboutUs() {
  return (
    <section id="about" className="relative overflow-hidden bigcontainer  py-44">


      <div className="maincontainer relative grid gap-12 lg:grid-cols-[1.03fr_1fr] lg:items-center">
        <div className="relative min-h-90 sm:min-h-107.5 lg:min-h-128.75">
          <div  >
            <Image
              src="/aboutus.svg"
              alt="Modern skyline towers"
              fill
              priority
              sizes="(min-width: 1024px) 43vw, 78vw"
              className="object-cover object-center rounded-[21px] "
            />
          </div>
          <h1 className="pointer-events-none absolute -top-22 -left-8   select-none font-bold leading-none text-transparent [-webkit-text-stroke:1px_rgba(17,43,109,0.5)]">
            About Us
          </h1>

        </div>

        <div >
          <h2 className="font-medium">
            Who We Are
          </h2>
          <p className="text-[16px] font-normal font-montserrat text-black/70 my-2 mb-8">

            Khan Home Group is a dynamic business conglomerate operating across multiple industries. Through our diverse portfolio of companies, we provide high-quality products, professional services, and innovative solutions that contribute.
          </p>

          <div>

            <div className="flex justify-between my-2 flex-wrap">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <h2>
                    {stat.value}
                  </h2>
                  <p className="text-black/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="h-[0.5px] w-full bg-secondary/50"></div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <div className="leading-none">
              <span className="text-[32px] font-medium tracking-normal">
                {googleLetters.map(([letter, color], index) => (
                  <span key={`${letter}-${index}`} style={{ color }}>
                    {letter}
                  </span>
                ))}
              </span>
              <span className="ml-1 align-baseline text-[11px] text-[#5f6368]">
                Reviews
              </span>
              <span className="ml-1 text-[11px] tracking-[1px] text-[#f4b400]">
                ★★★★★
              </span>
            </div>

            <div className="flex -space-x-3">
              {reviewers.map((color, index) => (
                <span
                  key={color}
                  className={`grid h-9 w-9 place-items-center rounded-full border-2 border-white text-[15px] font-semibold text-white shadow-sm ${color}`}
                  aria-label={`Reviewer ${index + 1}`}
                >
                  {String.fromCharCode(65 + index)}
                </span>
              ))}
            </div>
          </div>

          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full bg-primary px-8 py-3 text-[13px] font-semibold text-white shadow-[0_10px_24px_rgba(17,43,109,0.18)] transition hover:bg-[#0b2259]"
          >
            Read More
          </a>
        </div>
      </div>
    </section >
  );
}
