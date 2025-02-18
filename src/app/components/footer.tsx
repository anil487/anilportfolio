import Link from "next/link"
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin, } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";


const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Projects", href: "/projects" },
  
  { label: "Contact", href: "/contact" },
]

const socialLinks = [
  { icon: IoLogoGithub, href: "https://github.com/anil487", label: "Github" },
  { icon: FaTwitterSquare, href: "#", label: "Twitter" },
  { icon: AiOutlineInstagram , href: "#", label: "Instagram" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/anil-kr-mahato-029175229/", label: "LinkedIn" },
]

export default function Footer() {
  return (
    <footer className="sticky bottom-0 w-full bg-zinc-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col items-center gap-8">
      
        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex gap-6 mt-4">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>

        
        <div className="text-center text-gray-400 text-sm mt-4">
          <p>&copy; {new Date().getFullYear()} Anil Kumar Mahato | Web Developer All Rights Reserved, Inc.</p>
        </div>
      </div>
    </footer>
  )
}

