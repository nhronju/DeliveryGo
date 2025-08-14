import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Header = () => {
     return (
          <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
               <div className="container mx-auto px-4 py-4 flex justify-between items-center">

                    {/* Logo + Name */}
                    <Link href="/" className="flex items-center gap-2">
                         <Image
                              src="/logo.png"
                              alt="DeliveryGo Logo"
                              width={40}
                              height={40}
                              className="h-10 w-auto"
                              priority
                         />
                         <span className="text-xl font-bold text-gray-900">
                              DeliveryGo
                         </span>
                    </Link>

                    {/* Navigation */}
                    <nav>
                         <ul className="flex space-x-6">
                              <li>
                                   <Link href="/" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">
                                        Home
                                   </Link>
                              </li>
                              <li>
                                   <Link href="/support" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">
                                        Support
                                   </Link>
                              </li>
                              <li>
                                   <Link href="/privacy" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">
                                        Privacy
                                   </Link>
                              </li>
                              <li>
                                   <Link href="/privacy-choices" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">
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
