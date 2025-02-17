import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <section className="space-y-6">
          <div className="space-y-3">
            <p className="text-xl font-medium text-gray-700">Hi, I am</p>
            <h1 className="text-6xl font-bold tracking-tight text-gray-900 ">
              Anil Kumar Mahato
            </h1>
            <h2 className="text-6xl font-bold text-gray-800">
              Frontend Developer
            </h2>
          </div>

          <p className="font-normal text-base text-gray-600">
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

        <div className="flex justify-center md:justify-end">
          <div className="w-40 h-40 md:w-48 md:h-48 relative rounded-full overflow-hidden border-4 border-blue-500">
            <Image
              src="/images/anilmahato.jpg"
              fill
              className="object-cover"
              alt="anil"
            />
          </div>
        </div>
      </div>
      <div className=" flex justify-end gap-4 mr-14 mt-1">
        <Link
          href="https://www.linkedin.com/in/anil-kr-mahato-029175229/"
          className="text-violet-500 hover:text-gray-900"
        >
          <FaLinkedin className="w-6 h-6" />
          <span className="sr-only">linkden</span>
        </Link>
        <Link
          href="https://github.com/anil487"
          className="text-violet-500 hover:text-gray-900"
        >
          <IoLogoGithub className="w-6 h-6" />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link href="#" className="text-violet-500 hover:text-gray-900">
          <AiOutlineInstagram className="w-6 h-6" />
          <span className="sr-only">Instagram</span>
        </Link>
        <Link href="#" className="text-violet-500 hover:text-gray-900">
          <FaTwitterSquare className="w-6 h-6" />
          <span className="sr-only">Twitter</span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
