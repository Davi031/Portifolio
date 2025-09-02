"use client";

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projetos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/3 mb-12 md:mb-0">
            <h1 className="stacked-text text-4xl md:text-5xl font-bold tracking-wider my-6 leading-[1.8] animate-textCycle">
              D A V I<br />M . A I R E S
            </h1>

            <h1 className="stacked-text text-3xl md:text-4xl font-bold tracking-wider leading-[2] animate-textCycle delay-2000">
              F R O N T -<br />
              E N D<br />
              D E V E L O<br />
              P E R
            </h1>
          </div>

          {/* Foto + planeta rosa */}
          <div className="w-full md:w-1/3 relative flex justify-center">
            <img
              src="/images/poeira cósmica.svg"
              alt="Poeira cósmica"
              className="w-64 absolute bottom-10 right-0 opacity-70 animate-slideFromRight delay-800"
            />
            <div className="relative z-10">
              <img
                src="/images/fotoPcurriculo.png"
                alt="Davi M. Aires"
                className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            <img
              src="/images/planetPink.svg"
              alt="Planeta rosa"
              className="md:w-24 w-16 absolute bottom-0 left-0 animate-planetPulse"
            />
          </div>

          {/* Planeta laranja */}
          <div className="w-full md:w-1/6 relative">
            <img
              src="/images/planet.svg"
              alt="Planeta laranja"
              className="w-1/3 mx-auto md:mx-0 md:ml-auto animate-planetPulse my-8"
            />
          </div>
        </div>

        {/* Botão explorar */}
        <div className="flex flex-col items-center mt-16">
          <p className="text-xl font-semibold mb-4">Explore</p>
          <button onClick={scrollToProjects} className="animate-bounce">
            <img
              src="/images/down-arrow.png"
              alt="Seta para baixo"
              className="w-8 h-8 filter invert"
            />
          </button>
        </div>
      </div>

      {/* Nuvem/vetor que se move lentamente */}
      <div
        className="absolute bottom-0 right-0 w-96 h-40 bg-cover bg-no-repeat opacity-50 animate-cloudDrift"
        style={{ backgroundImage: "url('/images/vetoresBaixo.svg')" }}
      ></div>

      {/* Animações extras */}
      <style jsx>{`
        /* Texto que some e volta */
        @keyframes textCycle {
          0% {
            opacity: 0;
            transform: translateX(-60px);
          }
          20% {
            opacity: 1;
            transform: translateX(0);
          }
          80% {
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(-60px);
          }
        }

        /* Slide in da direita (1x só) */
        @keyframes slideFromRight {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Planetas respirando */
        @keyframes planetPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
        }

        /* Nuvem balançando no eixo X */
        @keyframes cloudDrift {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(40px);
          }
          100% {
            transform: translateX(0);
          }
        }

        /* Classes utilitárias */
        .animate-textCycle {
          animation: textCycle 8s ease-in-out infinite;
        }

        .animate-slideFromRight {
          animation: slideFromRight 2.5s ease-out forwards;
        }

        .animate-planetPulse {
          animation: planetPulse 8s ease-in-out infinite;
        }

        .animate-cloudDrift {
          animation: cloudDrift 18s ease-in-out infinite;
        }

        .delay-2000 {
          animation-delay: 2s;
        }

        .delay-800 {
          animation-delay: 0.8s;
        }
      `}</style>
    </div>
  )
}

export default HeroSection