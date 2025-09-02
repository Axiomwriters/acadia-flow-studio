import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Shield, 
  HelpCircle, 
  FileText, 
  Cookie,
  Users,
  MessageCircle
} from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { title: "Features", href: "#features", icon: Users },
      { title: "Pricing", href: "#pricing", icon: FileText },
      { title: "Updates", href: "#updates", icon: MessageCircle },
    ],
    support: [
      { title: "Help Center", href: "/help", icon: HelpCircle },
      { title: "FAQ", href: "/faq", icon: MessageCircle },
      { title: "Contact Us", href: "/contact", icon: Mail },
    ],
    legal: [
      { title: "Privacy Policy", href: "/privacy", icon: Shield },
      { title: "Terms of Service", href: "/terms", icon: FileText },
      { title: "Cookie Policy", href: "/cookies", icon: Cookie },
    ],
    social: [
      { title: "GitHub", href: "https://github.com", icon: Github },
      { title: "Twitter", href: "https://twitter.com", icon: Twitter },
      { title: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    ]
  }

  return (
    <footer className="hidden lg:block mt-20 border-t bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <NavLink to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-xl">AcademiaFlow</span>
            </NavLink>
            <p className="text-muted-foreground max-w-md">
              Streamline your academic journey with our comprehensive learning management platform. 
              Designed for students, researchers, and educators.
            </p>
            <div className="flex items-center gap-2">
              {footerLinks.social.map((social) => (
                <Button
                  key={social.title}
                  variant="ghost"
                  size="icon"
                  className="hover-glow"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <link.icon className="h-4 w-4" />
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.title}>
                  <NavLink
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <link.icon className="h-4 w-4" />
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.title}>
                  <NavLink
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <link.icon className="h-4 w-4" />
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} AcademiaFlow. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Made with ❤️ for academics</span>
            <Separator orientation="vertical" className="h-4" />
            <NavLink to="/status" className="hover:text-primary transition-colors">
              System Status
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  )
}