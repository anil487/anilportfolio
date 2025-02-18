import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { AiOutlineInstagram } from "react-icons/ai";

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
            <Button className="bg-orange-500 hover:bg-orange-700">
              Hire me
            </Button>
          </div>
        </section>

        <div className="flex flex-col items-center md:items-end">
          <div className="w-40 h-40 md:w-48 md:h-48 relative rounded-full overflow-hidden border-4 border-blue-500">
            <Image
              src="/images/anilmahato.png"
              fill
              className="object-cover"
              alt="Anil Kumar Mahato"
            />
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <Link
              href="https://www.linkedin.com/in/anil-kr-mahato-029175229/"
              className="text-violet-500 hover:text-blue-500"
            >
              <FaLinkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/anil487"
              className="text-violet-500 hover:text-blue-500"
            >
              <IoLogoGithub className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-violet-500 hover:text-blue-500">
              <AiOutlineInstagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-violet-500 hover:text-blue-500">
              <FaTwitterSquare className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
