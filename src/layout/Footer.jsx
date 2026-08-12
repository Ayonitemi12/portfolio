// import { Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { icon: "s", href: "#", label: "GitHub" },
  { icon: "", href: "#", label: "LinkedIn" },
  { icon: "", href: "#", label: "Twitter" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
  // { href: "https://github.com/Ayonitemi12", label: "GitHub" },
];


export function Footer() {
   const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              PM<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Ayodeji Ogunleye. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="https://github.com/Ayonitemi12" target="_blank" rel="noopener noreferrer">GitHub</a>
                {/* <social.icon className="w-5 h-5" /> */}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer





