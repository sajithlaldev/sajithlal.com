import { Button } from "@/components/ui/button";
import { ArrowRight, Home, FolderKanban, Briefcase, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';

export const Hero = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize Rive animation for the button hover effect with error handling
  const { RiveComponent: ButtonAnimation, rive } = useRive({
    src: "https://public.rive.app/community/runtime-files/2244-4437-button-hover.riv",
    stateMachines: "State Machine 1",
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
    autoplay: true,
    onLoadError: (err) => {
      console.warn("Rive animation failed to load:", err);
    }
  });

  useEffect(() => {
    // Smooth parallax scroll effect
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const getMobileContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="p-2 text-center">
            <h3 className="text-sm font-semibold mb-1 text-gray-900">John Doe</h3>
            <p className="text-xs text-gray-700">Full Stack Developer</p>
          </div>
        );
      case 'projects':
        return (
          <div className="p-2">
            <h3 className="text-sm font-semibold mb-1.5 text-gray-900">Featured Projects</h3>
            <div className="space-y-1.5">
              <div className="bg-white rounded-lg p-1.5 shadow-sm">
                <h4 className="text-xs font-medium mb-0.5 text-gray-800">E-commerce Platform</h4>
                <p className="text-[10px] text-gray-700">React, Node.js, MongoDB</p>
              </div>
              <div className="bg-white rounded-lg p-1.5 shadow-sm">
                <h4 className="text-xs font-medium mb-0.5 text-gray-800">Task Management App</h4>
                <p className="text-[10px] text-gray-700">Next.js, TypeScript</p>
              </div>
            </div>
          </div>
        );
      case 'experience':
        return (
          <div className="p-2">
            <h3 className="text-sm font-semibold mb-1.5 text-gray-900">Work Experience</h3>
            <div className="space-y-1.5">
              <div className="bg-white rounded-lg p-1.5 shadow-sm">
                <h4 className="text-xs font-medium mb-0.5 text-gray-800">Senior Developer</h4>
                <p className="text-[10px] text-gray-700">Tech Corp • 2020-Present</p>
              </div>
              <div className="bg-white rounded-lg p-1.5 shadow-sm">
                <h4 className="text-xs font-medium mb-0.5 text-gray-800">Full Stack Developer</h4>
                <p className="text-[10px] text-gray-700">Dev Inc • 2018-2020</p>
              </div>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="p-2">
            <h3 className="text-sm font-semibold mb-1.5 text-gray-900">Contact Info</h3>
            <div className="bg-white rounded-xl p-2 shadow-sm">
              <div className="space-y-1">
                <p className="flex items-center gap-1 text-xs text-gray-800">
                  <Mail className="h-3 w-3 text-primary" />
                  hello@example.com
                </p>
                <p className="text-[10px] text-gray-700">
                  Available for freelance work
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      className={`relative min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6 md:px-18 lg:px-24 py-20 md:py-24 gap-16 overflow-hidden transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      style={{
        transform: `translateY(${scrollY * 0.1}px)`,
      }}
    >
      <div
        className="flex-1 relative z-10"
        style={{
          transform: `translateY(${-scrollY * 0.2}px)`,
          opacity: Math.max(1 - scrollY * 0.002, 0),
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
          Hi, I'm <span className="text-primary hover:text-opacity-80 transition-colors duration-300">Sajith Lal</span>
        </h1>
        <p
          className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-up opacity-90"
          style={{ animationDelay: "0.2s" }}
        >
          A passionate developer crafting top-tier mobile apps and Artificial Intelligence solutions.
        </p>
        <div
          className="flex gap-4 animate-fade-up justify-center md:justify-start"
          style={{
            animationDelay: "0.4s",
            transform: `translateY(${-scrollY * 0.15}px)`,
          }}
        >
          <div className="relative group">
            <Button
              size="lg"
              className="group relative overflow-hidden transition-transform hover:scale-105"
              onClick={() => setActiveTab('projects')}
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            {rive && (
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <ButtonAnimation />
              </div>
            )}
          </div>
          <Button
            size="lg"
            variant="outline"
            onClick={() => setActiveTab('contact')}
            className="hover:scale-105 transition-transform"
          >
            Contact Me
          </Button>
        </div>
      </div>

      <div
        className="flex-1 animate-fade-up relative z-10 transition-all duration-700"
        style={{
          animationDelay: "0.6s",
          transform: `translateY(${scrollY * 0.3}px) scale(${1 - scrollY * 0.0003})`,
          opacity: Math.max(1 - scrollY * 0.0015, 0),
        }}
      >
        <div className="relative mx-auto w-[260px] h-[540px] bg-black rounded-[45px] border-[5px] border-black overflow-hidden shadow-xl">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 h-4 w-16 bg-black rounded-2xl z-20"></div>

          <div className="relative h-full w-full bg-gray-50 overflow-hidden">
            <div className="h-full flex flex-col ">
              <div className="mt-6"> {getMobileContent()}</div>
              <div className="mt-auto bg-white shadow-xl mb-3 rounded-3xl py-2 mx-3">
                <div className="flex justify-around py-1 px-1">
                  {[
                    { icon: Home, label: 'Home', id: 'home' },
                    { icon: FolderKanban, label: 'Projects', id: 'projects' },
                    { icon: Briefcase, label: 'Experience', id: 'experience' },
                    { icon: Mail, label: 'Contact', id: 'contact' }
                  ].map(({ icon: Icon, label, id }) => (
                    <button
                      key={id}
                      onClick={() => setActiveTab(id)}
                      className={`flex flex-col items-center gap-0.5 transition-colors duration-300 ${activeTab === id ? 'text-primary' : 'text-gray-600'}`}
                    >
                      <Icon className="h-2.5 w-2.5" />
                      <span className="text-[7px] font-medium">{label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};