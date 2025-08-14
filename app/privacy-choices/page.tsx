import Link from 'next/link';
import { EnvelopeIcon, DevicePhoneMobileIcon, NoSymbolIcon } from '@heroicons/react/24/outline';

export default function PrivacyChoices() {
     return (
          <section className="py-12">
               <div className="container mx-auto px-4 max-w-3xl">
                    <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">Your Privacy Choices</h1>
                    <p className="text-center text-lg text-gray-700 mb-12">
                         We believe you should have full control over your data. This page provides a clear guide on how you can manage your personal information with DeliveryGo.
                    </p>

                    <div className="space-y-12">
                         <div className="flex flex-col md:flex-row items-start md:space-x-8">
                              <div className="flex-shrink-0 mb-4 md:mb-0">
                                   <EnvelopeIcon className="h-12 w-12 text-indigo-600" />
                              </div>
                              <div>
                                   <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Your Data or Delete Your Account</h2>
                                   <p className="text-gray-700">
                                        You have the right to request a copy of the data we hold about you or to ask us to permanently delete your account and all associated information.
                                   </p>
                                   <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                                        <p className="font-semibold text-gray-900">How to make a request:</p>
                                        <p className="mt-2 text-gray-700">
                                             Simply email us at <a href="mailto:privacy@deliverygo.co.uk" className="text-indigo-600 hover:underline font-medium">support@deliverygo.co.uk</a>. To help us verify your identity and protect your data, please **include the phone number linked to your DeliveryGo account** in your email.
                                        </p>
                                   </div>
                              </div>
                         </div>

                         <div className="flex flex-col md:flex-row items-start md:space-x-8">
                              <div className="flex-shrink-0 mb-4 md:mb-0">
                                   <DevicePhoneMobileIcon className="h-12 w-12 text-indigo-600" />
                              </div>
                              <div>
                                   <h2 className="text-2xl font-bold text-gray-900 mb-2">Manage Device Permissions</h2>
                                   <p className="text-gray-700">
                                        You can withdraw permissions for things like location tracking or camera access at any time through your phone’s settings. This will affect specific features, but you can continue to use the rest of the app.
                                   </p>
                                   <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                                        <p className="font-semibold text-gray-900">How to withdraw permissions:</p>
                                        <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                                             <li>Go to your device's main **Settings**.</li>
                                             <li>Find **DeliveryGo** in your list of apps.</li>
                                             <li>Tap on **Permissions** and toggle off any you no longer wish to grant.</li>
                                        </ul>
                                   </div>
                              </div>
                         </div>

                         <div className="flex flex-col md:flex-row items-start md:space-x-8">
                              <div className="flex-shrink-0 mb-4 md:mb-0">
                                   <NoSymbolIcon className="h-12 w-12 text-indigo-600" />
                              </div>
                              <div>
                                   <h2 className="text-2xl font-bold text-gray-900 mb-2">Opt Out of Marketing</h2>
                                   <p className="text-gray-700">
                                        We do not currently send marketing emails. If we ever do in the future, you will always have a clear and simple way to opt out.
                                   </p>
                                   <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                                        <p className="font-semibold text-gray-900">How to unsubscribe:</p>
                                        <p className="mt-2 text-gray-700">
                                             If you receive a marketing email from us, you can simply **reply with the word "UNSUBSCRIBE"** or click the unsubscribe link in the footer of the email.
                                        </p>
                                   </div>
                              </div>
                         </div>

                         {/* <div className="bg-white p-8 rounded-lg shadow border border-gray-200">
                              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Request Form (Placeholder)</h2>
                              <p className="text-gray-700 mb-4">
                                   For security reasons, please email us directly with the details of your request. This form is a non-functional placeholder and will not submit your information.
                              </p>
                              <form className="space-y-4">
                                   <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Account Phone Number</label>
                                        <input type="tel" id="phone" name="phone" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="e.g., +447700900123" disabled />
                                   </div>
                                   <div>
                                        <label htmlFor="requestType" className="block text-sm font-medium text-gray-700">Request Type</label>
                                        <select id="requestType" name="requestType" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" disabled>
                                             <option>Request a copy of my data</option>
                                             <option>Request account deletion</option>
                                        </select>
                                   </div>
                                   <button type="submit" className="bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded-lg cursor-not-allowed" disabled>
                                        Submit Request
                                   </button>
                              </form>
                         </div> */}
                    </div>

                    <p className="mt-12 text-center text-gray-500 text-sm">
                         For more details on what data we collect and why, please read our full <Link href="/privacy" className="text-indigo-600 hover:underline font-medium">Privacy Policy</Link>.
                    </p>
               </div>
          </section>
     );
}