import { useEffect, useRef } from "react";
import heroVideo from "../assets/herovideo.mp4";
import heroVideo2 from "../assets/herovideo2.mp4";

const projects = [
  {
    video: heroVideo,
    name: "Project Alpha",
    description: "Brand identity redesign for a luxury label",
  },
  {
    video: heroVideo2,
    name: "Project Beta",
    description: "Motion campaign for a global sports brand",
  },
  {
    video: heroVideo,
    name: "Project Gamma",
    description: "Social content strategy for a fashion startup",
  },
  {
    video: heroVideo2,
    name: "Project Delta",
    description: "Product launch film for a tech company",
  },
  {
    video: heroVideo,
    name: "Project Epsilon",
    description: "Visual storytelling for an emerging artist",
  },
  {
    video: heroVideo2,
    name: "Project Zeta",
    description: "Documentary-style reel for a lifestyle brand",
  },
];

function VideoBlock({
  video,
  name,
  description,
}: {
  video: string;
  name: string;
  description: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transform = "scale(1.10)";
        } else {
          el.style.transform = "scale(1)";
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col gap-3 ">
      {/* Video container with overflow hidden for zoom clipping */}
      <div className="overflow-hidden rounded-[10px]">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-[200px] sm:h-[250px] md:h-[290px] lg:h-[320px] xl:h-[360px] object-cover rounded-[10px]"
          style={{
            transform: "scale(1)",
            transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            willChange: "transform",
          }}
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>

      {/* Project info */}
      <div className="px-1">
        <h3 className="text-black font-semibold text-[15px] sm:text-[16px] tracking-tight">
          {name}
        </h3>
        <p className="text-gray-500 text-[13px] sm:text-[14px] mt-0.5 leading-snug">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="w-full overflow-hidden bg-white mt-10">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 lg:pt-20">

        {/* Heading */}
        <div className="text-center">
          <h1 className="font-semibold tracking-[-0.06em] leading-[0.9] text-black">
            <span className="block text-[40px] sm:text-[70px] md:text-[80px] lg:text-[95px]">
              Look like you've
            </span>
            <span className="block">
              <span
                className="italic font-normal tracking-[-0.06em] text-black text-[38px] sm:text-[50px] md:text-[68px] lg:text-[90px]"
                style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
              >
                already
              </span>
              <span className="ml-2 text-[#FF1616] font-extrabold tracking-[-0.06em] text-[42px] sm:text-[56px] md:text-[80px] lg:text-[110px]">
                won.
              </span>
            </span>
          </h1>
        </div>

        {/* Video Grid — 2 cols, 3 rows */}
        <div className="mt-10 pb-4 sm:pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8">
            {projects.map((project, i) => (
              <VideoBlock key={i} {...project} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}