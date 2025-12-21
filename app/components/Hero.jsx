import Image from "next/image";
import Link from "next/link";
import TextType from './TextType'

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center w-10/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">

        {/* LEFT IMAGE / ILLUSTRATION */}
        <div className="flex justify-center items-center order-first md:order-last">
          <div className="relative w-72 h-72 lg:w-96 lg:h-96 aspect-square">
            <Image
              src="/profile.jpg"
              alt="Profile Illustration"
              fill
              className="object-contain rounded-full z-10"
              priority
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center text-center md:text-left">

            <h2 className="text-blue-500 font-bold text-2xl md:text-3xl lg:text-4xl">Hi, I&apos;m </h2>
            <h1 className="mt-2 mb-2 text-white text-3xl md:text-4xl lg:text-5xl font-bold ">             
                Muhammad Zidni Ilma
            </h1>
            <h1 className="flex w-full items-center text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="mr-2">I am </span>
                <TextType 
                text={["Web Developer", "UI Developer"]}
                typingSpeed={150}
                pauseDuration={2000}
                showCursor={true}
                cursorCharacter="|"
                />
            </h1>


          <p className="text-gray-400 mt-6 max-w-xl mx-auto md:mx-0 text-sm md:text-lg">
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in Laravel and web development.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8 justify-center md:justify-start">
            <Link
              href="./cv.pdf"
              target="_blank"
              className="px-6 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Resume
            </Link>

            <Link
              href="mailto:muhzidnilma@gmail.com"
              className="px-6 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition"
            >
              Contact
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
