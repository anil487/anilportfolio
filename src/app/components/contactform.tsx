"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Mail, Phone } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import emailjs from "@emailjs/browser"
import toast, { Toaster } from "react-hot-toast"
import Container from "./container"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSending, setIsSending] = useState(false)
  const [canSendEmail, setCanSendEmail] = useState(true)

  useEffect(() => {
    checkEmailSendStatus()
  }, [])

  const checkEmailSendStatus = async () => {
    try {
      const response = await fetch("/api/check-email-status")
      const data = await response.json()
      setCanSendEmail(data.canSendEmail)
    } catch (error) {
      console.error("Error checking email status:", error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!canSendEmail) {
      toast.error("You've already sent an email. Please try again later.")
      return
    }

    setIsSending(true)

    const templateParams = {
      to_name: "Anil Kumar Mahato",
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    }

    try {
      await emailjs.send(
        "service_e3r39do", // Service ID
        "template_jcqq2f2", // Template ID
        templateParams,
        "ocNMvI_rPilI6i8iN", // Your Public Key
      )

      // Update the email send status on the server
      await fetch("/api/update-email-status", { method: "POST" })

      toast.success("Email sent successfully! I will get back to you soon.")
      setFormData({ name: "", email: "", message: "" })
      setCanSendEmail(false)
    } catch (error) {
      console.error("Email sending failed:", error)
      toast.error("Failed to send email. Please try again.")
    } finally {
      setIsSending(false)
    }
  }

  return (
    <Container>
      <div className="p-8 bg-white text-center mt-5 mb-24 lg:mb-32">
        <Toaster position="top-center" reverseOrder={false} />
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Let&apos;s Connect</h2>
        <p className="text-gray-600 mb-4">Have a project in mind? Reach out to me!</p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-gray-700">
            <Mail className="text-blue-500" />
            <span>anilmahatoanil95659@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Phone className="text-blue-500" />
            <span>9823524880</span>
          </div>
        </div>

        <form
          onSubmit={handleSendEmail}
          className="mt-6 flex flex-col items-center gap-4 justify-center w-full max-w-md mx-auto"
        >
          <div className="w-full">
            <Label className="text-base font-semibold" htmlFor="name">
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Enter Your Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full">
            <Label className="text-base font-semibold" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full">
            <Label className="text-base font-semibold" htmlFor="message">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Enter Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <Button
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white px-6 py-2 rounded-lg"
            disabled={isSending || !canSendEmail}
          >
            {isSending ? "Sending..." : canSendEmail ? "Send Me" : "Email Sent"}
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default ContactForm

