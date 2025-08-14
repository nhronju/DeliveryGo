import Link from 'next/link';
import React from 'react';

const Footer = () => {
     const currentYear = new Date().getFullYear();

     return (
          <footer className="bg-gray-50 border-t border-gray-200 mt-12 py-8">
               <div className="container mx-auto px-4 text-sm text-gray-500 flex flex-col sm:flex-row justify-between items-center">
                    <p className="mb-4 sm:mb-0">
                         © {currentYear} Asionis Technology Ltd. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                         <Link href="/privacy" className="hover:text-gray-900">
                              Privacy Policy
                         </Link>
                         <Link href="/privacy-choices" className="hover:text-gray-900">
                              Privacy Choices
                         </Link>
                         <Link href="/support" className="hover:text-gray-900">
                              Support
                         </Link>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;