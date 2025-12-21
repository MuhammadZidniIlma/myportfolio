import Shuffle from "../components/Shuffle ";
import { FocusCards } from "../components/FocusCard";

const cards = [
{
    title: "Certificate Magang",
    src: "./cert1.jpg",
},
{
    title: "Certificate Microsoft Office",
    src: "./cert2.jpg",
},
{
    title: "Certificate Web Development",
    src: "./cert3.png",
},
{
    title: "Certificate Data Analysis With AI",
    src: "./cert4.png",
},
{
    title: "Piagam Cumlaude",
    src: "./piagam.jpg",
},
];

export default function Sertificates () {
  return (
    <>      
      <div className="mx-auto w-10/12">
        <div className="text-center mt-10 mb-10">
          <Shuffle
            text="Cert"
            shuffleDirection="right"
            duration={0.35}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={true}
            respectReducedMotion={true}
          />
        </div>  

        <div className=" w-full">                      
            <FocusCards cards={cards}/>
        </div>
      </div>

      <div className="mt-60"></div>
    </>
  );
};
