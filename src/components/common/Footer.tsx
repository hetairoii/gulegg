import React from 'react';
import { Link } from 'react-router-dom';
import { Egg, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-yellow-50 pt-12 pb-8 border-t border-yellow-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-yellow-600 mb-4">
              <Egg className="h-6 w-6" />
              <span>Gulegg</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Exploring the endless possibilities of cooking with eggs.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Instagram size={20} />} href="#" label="Instagram" />
              <SocialLink icon={<Twitter size={20} />} href="#" label="Twitter" />
              <SocialLink icon={<Facebook size={20} />} href="#" label="Facebook" />
              <SocialLink icon={<Mail size={20} />} href="#" label="Email" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/preparations">Egg Preparations</FooterLink>
              <FooterLink href="/recipes">Recipes</FooterLink>
              <FooterLink href="/posts">Community</FooterLink>
            </ul>
          </div>

          {/* Egg Resources */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Egg Nutrition</FooterLink>
              <FooterLink href="#">Cooking Tips</FooterLink>
              <FooterLink href="#">Kitchen Tools</FooterLink>
              <FooterLink href="#">Egg Storage</FooterLink>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Join Our Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to get the latest recipes and cooking tips.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent flex-grow"
              />
              <button
                type="submit"
                className="bg-yellow-500 text-white px-4 py-2 rounded-r-md hover:bg-yellow-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-yellow-100 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Gulegg. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, href, label }) => (
  <a
    href={href}
    aria-label={label}
    className="text-gray-500 hover:text-yellow-600 transition-colors p-2 rounded-full hover:bg-yellow-100"
  >
    {icon}
  </a>
);

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <li>
    <Link
      to={href}
      className="text-gray-600 hover:text-yellow-600 transition-colors"
    >
      {children}
    </Link>
  </li>
);

export default Footer;