'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function Header() {
     const [open, setOpen] = React.useState(false);
     const panelRef = React.useRef<HTMLDivElement | null>(null);
     const btnRef = React.useRef<HTMLButtonElement | null>(null);

     // Close on ESC
     React.useEffect(() => {
          function onKey(e: KeyboardEvent) {
               if (e.key === 'Escape') setOpen(false);
          }
          window.addEventListener('keydown', onKey);
          return () => window.removeEventListener('keydown', onKey);
     }, []);

     // Close when clicking outside the panel
     React.useEffect(() => {
          function onClick(e: MouseEvent) {
               if (!open) return;
               const target = e.target as Node;
               if (
                    panelRef.current &&
                    !panelRef.current.contains(target) &&
                    btnRef.current &&
                    !btnRef.current.contains(target)
               ) {
                    setOpen(false);
               }
          }
          document.addEventListener('mousedown', onClick);
          return () => document.removeEventListener('mousedown', onClick);
     }, [open]);

     // Prevent body scroll when menu is open (mobile)
     React.useEffect(() => {
          if (open) {
               document.body.style.overflow = 'hidden';
          } else {
               document.body.style.overflow = '';
          }
     }, [open]);

     const NavLinks = () => (
          <>
               <li>
                    <Link
                         href="/"
                         className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50 font-medium transition-colors"
                         onClick={() => setOpen(false)}
                    >
                         Home
                    </Link>
               </li>
               <li>
                    <Link
                         href="/support"
                         className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50 font-medium transition-colors"
                         onClick={() => setOpen(false)}
                    >
                         Support
                    </Link>
               </li>
               <li>
                    <Link
                         href="/privacy"
                         className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50 font-medium transition-colors"
                         onClick={() => setOpen(false)}
                    >
                         Privacy
                    </Link>
               </li>
               <li>
                    <Link
                         href="/privacy-choices"
                         className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50 font-medium transition-colors"
                         onClick={() => setOpen(false)}
                    >
                         Privacy Choices
                    </Link>
               </li>
          </>
     );

     return (
          <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
               <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="flex h-16 items-center justify-between">

                         {/* Left: Logo + Name */}
                         <Link href="/" className="flex items-center gap-2">
                              <Image
                                   src="/logo.png"
                                   alt="DeliveryGo Logo"
                                   width={36}
                                   height={36}
                                   className="h-9 w-auto"
                                   priority
                              />
                              <span className="text-lg sm:text-xl font-bold text-gray-900">DeliveryGo</span>
                         </Link>

                         {/* Desktop nav */}
                         <nav className="hidden md:block">
                              <ul className="flex items-center gap-2">
                                   <NavLinks />
                              </ul>
                         </nav>

                         {/* Mobile menu button */}
                         <button
                              ref={btnRef}
                              type="button"
                              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
                              aria-label="Open main menu"
                              aria-controls="mobile-menu"
                              aria-expanded={open}
                              onClick={() => setOpen((v) => !v)}
                         >
                              {/* Hamburger / Close icons (pure SVG) */}
                              <svg
                                   className={`h-6 w-6 ${open ? 'hidden' : 'block'}`}
                                   viewBox="0 0 24 24"
                                   fill="none"
                                   stroke="currentColor"
                                   strokeWidth={2}
                                   strokeLinecap="round"
                                   strokeLinejoin="round"
                              >
                                   <line x1="3" y1="6" x2="21" y2="6" />
                                   <line x1="3" y1="12" x2="21" y2="12" />
                                   <line x1="3" y1="18" x2="21" y2="18" />
                              </svg>
                              <svg
                                   className={`h-6 w-6 ${open ? 'block' : 'hidden'}`}
                                   viewBox="0 0 24 24"
                                   fill="none"
                                   stroke="currentColor"
                                   strokeWidth={2}
                                   strokeLinecap="round"
                                   strokeLinejoin="round"
                              >
                                   <line x1="18" y1="6" x2="6" y2="18" />
                                   <line x1="6" y1="6" x2="18" y2="18" />
                              </svg>
                         </button>
                    </div>
               </div>

               {/* Mobile menu panel */}
               <div
                    id="mobile-menu"
                    ref={panelRef}
                    className={`md:hidden overflow-hidden border-t border-gray-200 transition-[max-height] duration-300 ${open ? 'max-h-96' : 'max-h-0'
                         }`}
               >
                    <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-2 bg-white">
                         <ul className="flex flex-col py-2">
                              <NavLinks />
                         </ul>
                    </nav>
               </div>
          </header>
     );
}
