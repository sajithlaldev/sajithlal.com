import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-6">
            <form className="space-y-4">
              <div>
                <Input placeholder="Your Name" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" />
              </div>
              <div>
                <Textarea placeholder="Your Message" className="min-h-[150px]" />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </Card>
          <div className="space-y-6">
            <p className="text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="space-y-4">
              <a href="mailto:hello@example.com" className="flex items-center gap-2 text-lg hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                hello@example.com
              </a>
              <a href="#" className="flex items-center gap-2 text-lg hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
              <a href="#" className="flex items-center gap-2 text-lg hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};