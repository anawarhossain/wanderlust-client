import { Mail, Phone, Send } from "lucide-react";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-gray-400 px-6 md:px-12 lg:px-16 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Top Branding Section */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
            Wanderlust<span className="text-cyan-500">.</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed font-light">
            Your gateway to extraordinary travel experiences around the world.
            Discover hidden gems and create memories that last a lifetime.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Newsletter */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-semibold tracking-widest text-sm uppercase">
              Newsletter
            </h3>
            <p className="text-sm leading-relaxed">
              Subscribe for exclusive travel deals and weekly inspiration
              directly to your inbox.
            </p>
            <form className="flex items-center bg-white/5 border border-white/10 focus-within:border-cyan-500/50 transition-all rounded-sm overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none flex-1 px-4 py-3 text-sm text-white placeholder:text-gray-600"
              />
              <button
                type="submit"
                className="bg-white text-black p-3 hover:bg-cyan-500 hover:text-white transition-colors"
                aria-label="Subscribe"
              >
                <Send size={18} />
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold tracking-widest text-sm uppercase mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-cyan-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations"
                  className="hover:text-cyan-500 transition-colors"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  href="/bookings"
                  className="hover:text-cyan-500 transition-colors"
                >
                  My Bookings
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="hover:text-cyan-500 transition-colors"
                >
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold tracking-widest text-sm uppercase mb-6">
              Support
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/help"
                  className="hover:text-cyan-500 transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-cyan-500 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-cyan-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-cyan-500 transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold tracking-widest text-sm uppercase mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-cyan-500" />
                <span className="hover:text-white transition-colors">
                  +1 (786) 901 1622
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-cyan-500" />
                <span className="hover:text-white transition-colors">
                  hello@wanderlust.com
                </span>
              </li>
              <li className="pt-2 text-xs leading-relaxed italic">
                Available 24/7 for our premium members.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs tracking-wide">
            © {currentYear} WANDERLUST TRAVEL GROUP. MADE WITH PASSION FOR
            EXPLORERS.
          </p>

          <div className="flex gap-6 items-center">
            <Link
              href="#"
              className="text-gray-500 hover:text-white transition-all transform hover:-translate-y-1"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-white transition-all transform hover:-translate-y-1"
            >
              <FaLinkedin size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-white transition-all transform hover:-translate-y-1"
            >
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
