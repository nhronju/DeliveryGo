import Link from 'next/link';
import { EnvelopeIcon, DevicePhoneMobileIcon, NoSymbolIcon, InformationCircleIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function PrivacyChoices() {
     return (
          <section className="py-12 bg-white dark:bg-gray-900">
               <div className="container mx-auto px-4 max-w-3xl">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-8">
                         Your Privacy Choices
                    </h1>
                    <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-12">
                         You control your data with DeliveryGo. Use the options below to request your data,
                         delete your account, or change device permissions.
                    </p>

                    <div className="space-y-12">

                         {/* Request data / Delete account */}
                         <div className="flex flex-col md:flex-row items-start md:space-x-8">
                              <div className="flex-shrink-0 mb-4 md:mb-0">
                                   <EnvelopeIcon className="h-12 w-12 text-indigo-600 dark:text-indigo-300" />
                              </div>
                              <div>
                                   <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                        Request Your Data or Delete Your Account
                                   </h2>
                                   <p className="text-gray-700 dark:text-gray-300">
                                        You can request a copy of your data or ask us to permanently delete your account and associated data.
                                   </p>
                                   <div className="mt-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60">
                                        <p className="font-semibold text-gray-900 dark:text-white">How to make a request:</p>
                                        <p className="mt-2 text-gray-700 dark:text-gray-300">
                                             Email us at{' '}
                                             <a href="mailto:privacy@deliverygo.co.uk" className="text-indigo-600 dark:text-indigo-300 hover:underline font-medium">
                                                  privacy@deliverygo.co.uk
                                             </a>. To verify your identity, please <strong>include the phone number linked to your DeliveryGo account</strong>.
                                        </p>
                                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                             Prefer support? Contact{' '}
                                             <a href="mailto:support@deliverygo.co.uk" className="text-indigo-600 dark:text-indigo-300 hover:underline">
                                                  support@deliverygo.co.uk
                                             </a>.
                                        </p>
                                   </div>
                              </div>
                         </div>

                         {/* Manage permissions */}
                         <div className="flex flex-col md:flex-row items-start md:space-x-8">
                              <div className="flex-shrink-0 mb-4 md:mb-0">
                                   <DevicePhoneMobileIcon className="h-12 w-12 text-indigo-600 dark:text-indigo-300" />
                              </div>
                              <div>
                                   <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Manage Device Permissions</h2>
                                   <p className="text-gray-700 dark:text-gray-300">
                                        You can withdraw access to Location or Camera at any time in your device settings. Some features will be limited without these permissions.
                                   </p>
                                   <div className="mt-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60">
                                        <p className="font-semibold text-gray-900 dark:text-white">iOS steps:</p>
                                        <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300 space-y-1">
                                             <li>Open <strong>Settings</strong> → <strong>Privacy &amp; Security</strong>.</li>
                                             <li>For Location: <strong>Location Services</strong> → <strong>DeliveryGo</strong> → choose permission.</li>
                                             <li>For Camera: <strong>Camera</strong> → enable/disable for <strong>DeliveryGo</strong>.</li>
                                        </ul>
                                   </div>
                              </div>
                         </div>

                         {/* Marketing */}
                         <div className="flex flex-col md:flex-row items-start md:space-x-8">
                              <div className="flex-shrink-0 mb-4 md:mb-0">
                                   <NoSymbolIcon className="h-12 w-12 text-indigo-600 dark:text-indigo-300" />
                              </div>
                              <div>
                                   <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Opt Out of Marketing</h2>
                                   <p className="text-gray-700 dark:text-gray-300">
                                        We don’t send marketing emails today. If we ever do, you’ll be able to opt out easily.
                                   </p>
                                   <div className="mt-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60">
                                        <p className="font-semibold text-gray-900 dark:text-white">How to unsubscribe:</p>
                                        <p className="mt-2 text-gray-700 dark:text-gray-300">
                                             Click the unsubscribe link in the email footer, or reply with <strong>“UNSUBSCRIBE”</strong>.
                                        </p>
                                   </div>
                              </div>
                         </div>

                         {/* Rights summary */}
                         <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 p-6">
                              <div className="flex items-start gap-3">
                                   <ShieldCheckIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-300 mt-0.5" />
                                   <div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Your Rights (UK/EU summary)</h3>
                                        <p className="mt-2 text-gray-700 dark:text-gray-300">
                                             Depending on your location, you may have the right to access, correct, delete, or restrict the use of your data;
                                             object to certain processing; and request data portability. You can also withdraw consent for permissions (Location, Camera) in your device settings at any time.
                                        </p>
                                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                             For details, see our{' '}
                                             <Link href="/privacy" className="text-indigo-600 dark:text-indigo-300 hover:underline font-medium">Privacy Policy</Link>.
                                        </p>
                                   </div>
                              </div>
                         </div>

                         {/* Info note */}
                         <div className="flex items-start gap-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4">
                              <InformationCircleIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-300 mt-0.5" />
                              <p className="text-sm text-gray-700 dark:text-gray-300">
                                   We don’t use third-party ads or data brokers, and we don’t do cross-app tracking. Your data is used only to provide and improve DeliveryGo.
                              </p>
                         </div>
                    </div>

                    <p className="mt-12 text-center text-gray-500 dark:text-gray-400 text-sm">
                         For more details on what data we collect and why, see our{' '}
                         <Link href="/privacy" className="text-indigo-600 dark:text-indigo-300 hover:underline font-medium">Privacy Policy</Link>.
                    </p>
               </div>
          </section>
     );
}
