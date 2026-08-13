import  Button from "../components/Button";
import  DownloadCv from "../components/DownloadCV";
import {
  ArrowRight,
  ChevronDown,
//   Github,
//   Linkedin,
//   Twitter,
  // Download,
} from "lucide-react";
// import AnimatedBorderButton  from "../components/AnimatedBorderButton";

const skills = [
  "React",
  "ReactNative",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "SQL",
  "Python",
  "Vercel",
  "Tailwind CSS",
  "Figma",
  "PhotoShop",
  "CorelDraw",
  "Excel",
  "PowerBi",
  "Git",
  "GitHub Actions",
];

function Hero() {
    return (
       <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/backgrounds/bg2.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
       
      </div>

      {/* Content */}
      <div className="container mx-auto my-2 px-10 pt-30 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-5">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-3 px-3 py-1 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • React Specialist
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-primary glow-text">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-secondary-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Ayodeji Ogunleye — a software engineer specializing in
                React, Node.js, React Native, and TypeScript. I build scalable, performance web
                applications that users love.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
             <a href="#contact"> <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              </a>
               <DownloadCv />
              {/* <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton> */}
            </div>
              

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me:</span><a href="https://github.com/Ayonitemi12" target="_blank" rel="noopener noreferrer">GitHub</a>
              {[
                // { icon: Github, href: "#" },
                // { icon: Linkedin, href: "#" },
                // { icon: Twitter, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relatice animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-linear-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/backgrounds/myself.jpg"
                  alt="Ayodeji Ogunleye"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm text-primary-foreground font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-xs text-primary-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-linear-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-linear-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-secondary-foreground/80 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
    )
}

export default Hero
