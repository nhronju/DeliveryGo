import Link from 'next/link';
import React from 'react';

const Header = () => {
     return (
          <header className="bg-white border-b border-gray-200">
               <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold text-gray-900">
                         DeliveryGo – Delivery Driver
                    </Link>
                    <nav>
                         <ul className="flex space-x-6">
                              <li>
                                   <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">
                                        Home
                                   </Link>
                              </li>
                              <li>
                                   <Link href="/support" className="text-gray-600 hover:text-gray-900 font-medium">
                                        Support
                                   </Link>
                              </li>
                              <li>
                                   <Link href="/privacy" className="text-gray-600 hover:text-gray-900 font-medium">
                                        Privacy
                                   </Link>
                              </li>
                              <li>
                                   <Link href="/privacy-choices" className="text-gray-600 hover:text-gray-900 font-medium">
                                        Privacy Choices
                                   </Link>
                              </li>
                         </ul>
                    </nav>
               </div>
          </header>
     );
};

export default Header;