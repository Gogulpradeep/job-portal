import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { src: assets.facebook_icon, alt: "Facebook", link: "https://facebook.com" },
    { src: assets.twitter_icon, alt: "Twitter", link: "https://twitter.com" },
    { src: assets.instagram_icon, alt: "Instagram", link: "https://instagram.com" },
  ];

  return (
    <div className='bg-gray-100 mt-20 border-t border-gray-300'>
      <div className='container px-4 2xl:px-20 mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>

        {/* Logo & Tagline */}
        <div className='flex flex-col gap-4'>
          <img width={160} src={assets.logo} alt="Logo" />
          <p className='text-gray-600 text-sm'>
            InsiderJibs helps you stay ahead with expert insights and innovative solutions.
          </p>
          <div className='flex gap-3 mt-2'>
            {socialLinks.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <img width={38} src={item.src} alt={item.alt} className='cursor-pointer hover:opacity-80 transition' />
              </motion.a>
            ))}
          </div>
        </div>

        {/* About / Mission */}
        <div>
          <h3 className='font-semibold mb-4'>About InsiderJibs</h3>
          <p className='text-gray-600 text-sm'>
            We are dedicated to providing cutting-edge insights, tools, and strategies that empower businesses and individuals to succeed in a fast-changing world.
          </p>
        </div>

        {/* Recent Highlights */}
        <div>
          <h3 className='font-semibold mb-4'>Recent Highlights</h3>
          <ul className='flex flex-col gap-2 text-gray-600 text-sm'>
            <li>Launched new AI-powered analytics tool</li>
            <li>Featured in Tech Innovators Magazine 2025</li>
            <li>Expanded services to 5 new countries</li>
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div>
          <h3 className='font-semibold mb-4'>Contact & Newsletter</h3>
          <p className='text-gray-600 text-sm mb-2'>123 Insider Street, Suite 456, New York, NY 10001</p>
          <p className='text-gray-600 text-sm mb-2'>Email: info@insiderjibs.com | Phone: +1 234 567 890</p>
          <p className='text-gray-600 text-sm mb-2'>Subscribe for updates and insights:</p>
          <div className='flex gap-2'>
            <input
              type="email"
              placeholder="Enter your email"
              className='flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400'
            />
            <button className='px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition'>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='container px-4 2xl:px-20 mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 py-3 border-t border-gray-300'>
        <p className='text-gray-500 text-sm text-center sm:text-left'>
          © {new Date().getFullYear()} InsiderJibs | All rights reserved.
        </p>

        <motion.button
          onClick={scrollToTop}
          className='flex items-center gap-2 px-4 py-2 bg-gray-800 text-white text-sm rounded-2xl shadow-md hover:bg-gray-700 transition mx-auto sm:mx-0'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp size={16} /> Back to top
        </motion.button>
      </div>
    </div>
  );
};

export default Footer;
