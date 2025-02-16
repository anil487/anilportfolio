'use client';

import { Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-lg text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Let&apos;s Connect</h2>
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
      
      <div className="mt-6 flex flex-col md:flex-row items-center gap-4 justify-center">
        <Input placeholder="Enter Your Email" className="w-64" />
        <Button className="bg-orange-500 text-white px-6 py-2 rounded-lg">Contact Me</Button>
      </div>
    </div>
  );
};

export default Contact;
