import Link from 'next/link';
import { EnvelopeIcon, PhoneIcon, ShieldCheckIcon, CameraIcon, GlobeAltIcon, CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function Support() {
     return (
          <section className="py-12 bg-white dark:bg-gray-900">
               <div className="container mx-auto px-4 max-w-3xl">
                    {/* Quick help banner */}
                    <div className="mb-6 rounded-lg border border-indigo-200 bg-indigo-50 px-4 py-3 text-indigo-900 dark:border-indigo-900 dark:bg-indigo-900/30 dark:text-indigo-200">
                         <p className="text-sm">
                              <strong>Need help fast?</strong> Email <a className="underline" href="mailto:support@deliverygo.co.uk">support@deliverygo.co.uk</a>. We aim to reply within <strong>2 business days</strong>.
                         </p>
                    </div>

                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-4">How Can We Help?</h1>
                    <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-10">
                         We’re here to help you get the most out of DeliveryGo. The quickest way to get assistance is to send us a message.
                    </p>

                    {/* Contact tiles */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-12">
                         <a
                              href="mailto:support@deliverygo.co.uk"
                              className="group rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-sm flex items-start gap-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition"
                              aria-label="Email support"
                         >
                              <EnvelopeIcon className="h-10 w-10 text-indigo-600 dark:text-indigo-300" />
                              <div>
                                   <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Email Support</h2>
                                   <p className="text-gray-700 dark:text-gray-300">support@deliverygo.co.uk</p>
                                   <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Typical response within 2 business days</p>
                              </div>
                         </a>

                         <a
                              href="tel:+447707771599"
                              className="group rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-sm flex items-start gap-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition"
                              aria-label="Call support"
                         >
                              <PhoneIcon className="h-10 w-10 text-indigo-600 dark:text-indigo-300" />
                              <div>
                                   <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Phone</h2>
                                   <p className="text-gray-700 dark:text-gray-300">+44 7707 7715 99</p>
                                   <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Mon–Fri, 10:00–17:00 (UK)</p>
                              </div>
                         </a>
                    </div>

                    {/* Lightweight status strip (non-dynamic placeholder) */}
                    <div className="mb-12 flex items-center gap-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-3">
                         <CheckCircleIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                         <p className="text-sm text-gray-700 dark:text-gray-300">
                              Services operational. If you’re experiencing an outage, email <a className="underline" href="mailto:support@deliverygo.co.uk">support@deliverygo.co.uk</a>.
                         </p>
                    </div>

                    {/* Troubleshooting */}
                    <div className="space-y-6 mb-12">
                         <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">Common Questions & Troubleshooting</h2>

                         {/* Sign-in */}
                         <div className="flex items-start gap-4 rounded-lg bg-white dark:bg-gray-900 p-6 shadow border border-gray-200 dark:border-gray-700">
                              <PhoneIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-300 mt-1" />
                              <div>
                                   <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Sign-in with Phone & OTP</h3>
                                   <ul className="mt-2 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                                        <li>Check your phone number format and signal.</li>
                                        <li>Wait a moment; OTPs can take up to 30 seconds.</li>
                                        <li>If you recently changed numbers, sign out and sign in again.</li>
                                        <li>If you still can’t sign in, contact support and include your phone number.</li>
                                   </ul>
                              </div>
                         </div>

                         {/* Location */}
                         <div className="flex items-start gap-4 rounded-lg bg-white dark:bg-gray-900 p-6 shadow border border-gray-200 dark:border-gray-700">
                              <GlobeAltIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-300 mt-1" />
                              <div>
                                   <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Location Permissions for Driver Tracking</h3>
                                   <p className="mt-1 text-gray-700 dark:text-gray-300">
                                        Driver tracking requires location access. You can change this any time in iOS Settings → Privacy &amp; Security → Location Services.
                                        Without permission, tracking and mileage features are unavailable.
                                   </p>
                              </div>
                         </div>

                         {/* Camera */}
                         <div className="flex items-start gap-4 rounded-lg bg-white dark:bg-gray-900 p-6 shadow border border-gray-200 dark:border-gray-700">
                              <CameraIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-300 mt-1" />
                              <div>
                                   <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Camera Permissions for Slip Photos</h3>
                                   <p className="mt-1 text-gray-700 dark:text-gray-300">
                                        The “Find Address by Photo” feature needs camera access. Enable/disable in iOS Settings → Privacy &amp; Security → Camera.
                                   </p>
                              </div>
                         </div>
                    </div>

                    {/* Data & privacy */}
                    <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-8 shadow border border-gray-200 dark:border-gray-700">
                         <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Data Export &amp; Deletion</h2>
                         <p className="text-gray-700 dark:text-gray-300">
                              To request a copy or deletion of your data, email <a className="underline" href="mailto:support@deliverygo.co.uk">support@deliverygo.co.uk</a>.
                              Please include the phone number linked to your account so we can verify your identity.
                         </p>
                         <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                              For details about how we collect and use data, see our{' '}
                              <Link href="/privacy" className="text-indigo-600 dark:text-indigo-300 hover:underline font-medium">Privacy Policy</Link>{' '}
                              and{' '}
                              <Link href="/privacy-choices" className="text-indigo-600 dark:text-indigo-300 hover:underline font-medium">Privacy Choices</Link>.
                         </p>
                    </div>

                    {/* Optional note to reviewers / users */}
                    <div className="mt-8 flex items-start gap-3 text-sm text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg px-4 py-3">
                         <ExclamationTriangleIcon className="h-5 w-5 mt-0.5" />
                         <p>
                              If you encounter issues that block sign-in or setup, email us with your phone number and device model so we can help quickly.
                         </p>
                    </div>
               </div>
          </section>
     );
}
