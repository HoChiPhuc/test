import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Heart } from 'lucide-react';
import { Link } from './ui/Link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">RB</span>
              </div>
              <span className="font-bold text-xl">WildGuardian</span>
            </div>
            <p className="text-gray-300">
              Dedicated to the preservation and protection of endangered species around the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-red-500 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-red-500 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-red-500 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-red-500 transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Species', 'Conservation', 'Take Action'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-red-500 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Conservation Tips', 'Educational Materials', 'Research Papers', 'News & Updates', 'Partners'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-red-500 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Subscribe</h3>
            <p className="text-gray-300 mb-4">
              Join our newsletter to stay updated on endangered species conservation efforts.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 bg-green-800 text-white"
              />
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-green-800 text-center text-gray-300">
          <p className="flex items-center justify-center">
            Made with <Heart size={16} className="text-red-500 mx-1" /> for endangered species © {new Date().getFullYear()} WildGuardian
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;