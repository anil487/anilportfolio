import type React from "react"
import { Code, Globe, Zap, Palette, Database, Server, BarChart3, Rocket } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-background p-6 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="w-12 h-12 flex items-center justify-center text-orange-600 bg-orange-100 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

export default function Services() {
  const services = [
    {
      title: "Frontend Development",
      description: "Building modern, responsive UIs with Next.js, React, and Tailwind CSS.",
      icon: <Code className="w-8 h-8" />,
    },
    {
      title: "Full-Stack Web Apps",
      description: "Developing scalable applications with Next.js, Express, and MongoDB.",
      icon: <Server className="w-8 h-8" />,
    },
    {
      title: "API Development",
      description: "Creating and integrating RESTful & GraphQL APIs for seamless data exchange.",
      icon: <Database className="w-8 h-8" />,
    },
    {
      title: "Performance & SEO",
      description: "Optimizing websites for speed, accessibility, and search engine visibility.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "UI/UX & Web Design",
      description: "Crafting intuitive and engaging designs with Tailwind and Figma.",
      icon: <Palette className="w-8 h-8" />,
    },
    {
      title: "Dashboard & Tool Development",
      description: "Building analytics dashboards and automation tools like UTM builders.",
      icon: <BarChart3 className="w-8 h-8" />,
    },
    {
      title: "Domain & Hosting Setup",
      description: "Helping businesses register domains and deploy web applications.",
      icon: <Globe className="w-8 h-8" />,
    },
    {
      title: "Scaling & Deployment",
      description: "Deploying applications using Vercel, Netlify, and Docker-based hosting.",
      icon: <Rocket className="w-8 h-8" />,
    },
  ]

  return (
    <section className="py-16 px-4 md:py-24">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">My Services</h2>
          <p className="text-muted-foreground">
            I specialize in building modern web applications with a focus on performance, user experience, and scalability.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}
