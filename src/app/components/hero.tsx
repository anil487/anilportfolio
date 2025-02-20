import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { RiLinkedinFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io5";
import { CiSaveDown2 } from "react-icons/ci";


const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <section className="space-y-6">
          <div className="space-y-3">
            <p className="text-xl font-medium">Hi, I am</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Anil Kumar Mahato
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Frontend Developer
            </h2>
          </div>

          <p className="font-normal text-base">
            I specialize in building user-friendly and visually appealing web
            applications. Passionate about clean code and modern UI/UX, I work
            with React, Next.js, and Tailwind CSS to craft seamless digital
            experiences.
          </p>
          <div className="mt-2">
            <Link href="/docs/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button className="bg-orange-500 hover:bg-orange-700 transition-colors">
                Download Resume
                <CiSaveDown2 className="h-5 w-5 animate-bounce text-blue-600" />
              </Button>
            </Link>
          </div>
        </section>

        <div className="flex flex-col items-center md:items-end">
          <div className="relative">
            <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-blue-500">
              <Image
                src="/images/anilmahato.png"
                fill
                sizes="(max-width: 768px) 192px, 256px"
                className="object-cover"
                alt="Anil Kumar Mahato"
              />
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <Link
                href="https://github.com/anil487"
                className="bg-violet-500 hover:bg-blue-500 text-white rounded-full p-2 transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <IoLogoGithub className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/anil-kr-mahato-029175229/"
                className="bg-violet-500 hover:bg-blue-500 text-white rounded-full p-2 transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <RiLinkedinFill className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
