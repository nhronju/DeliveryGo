import Link from 'next/link';
import { EnvelopeIcon, PhoneIcon, ShieldCheckIcon, CameraIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function Support() {
     return (
          <section className="py-12">
               <div className="container mx-auto px-4 max-w-3xl">
                    <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">How Can We Help?</h1>
                    <p className="text-center text-lg text-gray-700 mb-12">
                         We’re here to help you get the most out of DeliveryGo. The quickest way to get assistance is to send us a message.
                    </p>

                    {/* Contact Methods Section */}
                    <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-200 text-center mb-12">
                         <EnvelopeIcon className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
                         <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Us Directly</h2>
                         <p className="text-gray-700">
                              Send us an email, and we'll get back to you within **2 business days**. We appreciate your patience!
                         </p>
                         <a
                              href="mailto:support@deliverygo.co.uk"
                              className="mt-6 inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-indigo-700 transition-colors duration-200"
                         >
                              Email Support
                         </a>
                    </div>

                    {/* Troubleshooting and FAQs */}
                    <div className="space-y-10">
                         <div>
                              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Common Questions & Troubleshooting</h2>
                              <div className="space-y-6">
                                   {/* Sign-in Section */}
                                   <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow border border-gray-200">
                                        <PhoneIcon className="h-8 w-8 text-indigo-600 flex-shrink-0 mt-1" />
                                        <div>
                                             <h3 className="font-semibold text-lg text-gray-900">Sign-in with Phone & OTP</h3>
                                             <p className="mt-1 text-gray-700">
                                                  When you sign in, we send a one-time passcode (OTP) to your phone. If you’re not receiving the OTP, please check your signal and confirm your phone number is correct. If the issue persists, contact us directly.
                                             </p>
                                        </div>
                                   </div>

                                   {/* Location Permissions */}
                                   <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow border border-gray-200">
                                        <GlobeAltIcon className="h-8 w-8 text-indigo-600 flex-shrink-0 mt-1" />
                                        <div>
                                             <h3 className="font-semibold text-lg text-gray-900">Location Permissions for Driver Tracking</h3>
                                             <p className="mt-1 text-gray-700">
                                                  The driver tracking feature requires access to your device’s location. You can enable or disable this permission at any time via your device settings. Without this permission, the tracking feature will be unavailable.
                                             </p>
                                        </div>
                                   </div>

                                   {/* Camera Permissions */}
                                   <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow border border-gray-200">
                                        <CameraIcon className="h-8 w-8 text-indigo-600 flex-shrink-0 mt-1" />
                                        <div>
                                             <h3 className="font-semibold text-lg text-gray-900">Camera Permissions for Slip Photos</h3>
                                             <p className="mt-1 text-gray-700">
                                                  Our "Find Address by Photo" feature requires camera access. You can manage this permission in your device’s settings.
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         {/* Data Management Section */}
                         <div className="bg-gray-50 p-8 rounded-lg shadow border border-gray-200">
                              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Export & Deletion</h2>
                              <p className="text-gray-700">
                                   To request a copy of your data or to have your account and data deleted, please email us at **support@deliverygo.co.uk**. To help us verify your request, please be sure to include the phone number associated with your account.
                              </p>
                              <p className="mt-4 text-sm text-gray-500">
                                   For more details on how we handle your data, please see our <Link href="/privacy" className="text-indigo-600 hover:underline font-medium">Privacy Policy</Link> and <Link href="/privacy-choices" className="text-indigo-600 hover:underline font-medium">Privacy Choices</Link>.
                              </p>
                         </div>

                         {/* Contact Form Placeholder */}
                         {/* <div className="bg-white p-8 rounded-lg shadow border border-gray-200">
                              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Form (Placeholder)</h2>
                              <p className="text-gray-700 mb-4">
                                   For now, please email us directly at <a href="mailto:support@deliverygo.co.uk" className="text-indigo-600 hover:underline">support@deliverygo.co.uk</a>. This form is a non-functional placeholder and will not send your message.
                              </p>
                              <form className="space-y-4">
                                   <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                        <input type="text" id="name" name="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" disabled />
                                   </div>
                                   <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                        <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" disabled />
                                   </div>
                                   <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                        <textarea id="message" name="message" rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" disabled></textarea>
                                   </div>
                                   <button type="submit" className="bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded-lg cursor-not-allowed" disabled>
                                        Send Message
                                   </button>
                              </form>
                         </div> */}
                    </div>
               </div>
          </section>
     );
}