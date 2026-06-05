"use client";

interface Logo {
  id: string;
  name: string;
  image: string;
}

interface LogosMarqueeProps {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const LogosMarquee = ({
  heading = "TRUSTED BY INDUSTRY LEADERS",
  logos = [
    { id: "1", name: "Adani", image: "/logos/Adani.png" },
    { id: "2", name: "L&T", image: "/logos/l&t.png" },
    { id: "3", name: "GR Infra", image: "/logos/gr.png" },
    { id: "4", name: "Ashoka", image: "/logos/abl.png" },
    { id: "5", name: "APCO", image: "/logos/apcoipl.png" },
    { id: "6", name: "Shirke", image: "/logos/shirkee.png" },
    { id: "7", name: "Polo Infra", image: "/logos/poloinfra.png" },
    { id: "8", name: "MHADA", image: "/logos/mhadaa.png" },
    { id: "9", name: "Gangamai Sugar Industries", image: "/logos/giacl.png" },
    { id: "10", name: "Om Constructions and Interiors", image: "/logos/om.png" },
    { id: "11", name: "Nirmal Build Infra", image: "/logos/nirmal.png" },
    { id: "12", name: "NAC", image: "/logos/nac.png" },
    { id: "13", name: "Shapoorji Palloji & Co. Pvt Ltd.", image: "/logos/sp.png" },
    { id: "14", name: "Suraksha Smart City", image: "/logos/suraksha.png" },
    { id: "15", name: "Simplex Infrastructres", image: "/logos/simplex.png" },
    { id: "16", name: "Mumbai Railway Vikas Corporation Ltd.", image: "/logos/mumbai.png" },
    { id: "17", name: "CIDCO", image: "/logos/cidco.png" },
    { id: "18", name: "NG Projects", image: "/logos/ng.png" },
    { id: "19", name: "Ahluwalia Contracts (India) Ltd.", image: "/logos/ahluwalia.png" },
    { id: "20", name: "Relcon", image: "/logos/relcon.png" },
    { id: "21", name: "RE Infra Pvt. Ltd.", image: "/logos/re.png" },
    { id: "22", name: "Inox Air Products", image: "/logos/inox.png" },
    { id: "23", name: "Maharashtra Jeevan Pradikaran", image: "/logos/mjp.png" },
    { id: "24", name: "Ajmera Group", image: "/logos/ajmera.png" },
    { id: "25", name: "T & T Infra Limited", image: "/logos/tt.png" },
    { id: "26", name: "Sai Dutt Real Infra Private Limited", image: "/logos/sai.png" },
    { id: "27", name: "Sunteck", image: "/logos/suntech.png" },
    { id: "28", name: "DGS Group", image: "/logos/DGS.png" },
    { id: "29", name: "Viva Group", image: "/logos/viva.png" },
    { id: "30", name: "Aarti Industries Limited", image: "/logos/aarti.png" },
    { id: "31", name: "Ashtech", image: "/logos/ashtech.png" },
    { id: "32", name: "Sonam", image: "/logos/sonam.png" },
    { id: "33", name: "VMC Private Limited", image: "/logos/vmc.png" },
    { id: "34", name: "MVR", image: "/logos/mvr.png" },
    { id: "35", name: "AG Infra", image: "/logos/ag.png" },
    { id: "36", name: "GAP", image: "/logos/gap.png" },
    { id: "37", name: "Bitcon India Infrastructure Developers", image: "/logos/bitcon.png" },
    { id: "38", name: "Meher Foundations and Civil Emgineers Pvt. Ltd.", image: "/logos/meher.png" },
    { id: "39", name: "Bedrock", image: "/logos/bedrock.png" },
    { id: "40", name: "EarthStone Infra Pvt. Ltd.", image: "/logos/earthstone.png" },
    { id: "41", name: "ION Exchange", image: "/logos/ion.png" }
  ],
  className,
}: LogosMarqueeProps) => {

  // duplicate for seamless infinite scroll
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className={`py-24 bg-[#05070a] ${className || ""}`}>

      {/* Heading */}
      <div className="container mx-auto text-center">
        <h2 className="text-sm font-bold tracking-[0.2em] text-blue-400 uppercase">
          {heading}
        </h2>
      </div>

      {/* Marquee */}
      <div className="mt-12 overflow-hidden">
        <div className="flex w-max animate-marquee">

          {marqueeLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-6"
            >
              <div className="bg-white rounded-xl w-[220px] h-[120px] flex items-center justify-center shadow-md">
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="max-h-[80px] w-[85%] object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default LogosMarquee;
