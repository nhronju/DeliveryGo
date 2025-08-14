import Link from "next/link";

const lastUpdatedDate = new Date().toLocaleDateString("en-GB", {
     day: "numeric",
     month: "long",
     year: "numeric",
});

export default function PrivacyPolicy() {
     return (
          <section className="py-12 bg-white dark:bg-gray-900">
               <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-2">
                         Privacy Policy
                    </h1>
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-8">
                         Last Updated: {lastUpdatedDate}
                    </p>

                    <div className="space-y-6 text-gray-800 dark:text-gray-200">
                         <p>
                              At <strong>DeliveryGo</strong>, we are committed to protecting your
                              privacy. This policy explains what information we collect, why we
                              collect it, and how we use it. We do{" "}
                              <strong>not</strong> use third-party advertising, we do{" "}
                              <strong>not</strong> sell your data to brokers, and we do{" "}
                              <strong>not</strong> engage in cross-app tracking.
                         </p>

                         <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                              1. Who We Are
                         </h2>
                         <p>
                              DeliveryGo is a product of{" "}
                              <strong>Asionis Technology Ltd.</strong>, a company registered in
                              the United Kingdom. We act as the <em>data controller</em> for
                              personal data processed in connection with the DeliveryGo app and
                              this website.
                         </p>

                         <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                              2. Data We Collect and Why
                         </h2>
                         <ul className="list-disc pl-5 space-y-2">
                              <li>
                                   <strong>Phone Number</strong> — Used for secure authentication
                                   (OTP) and to identify your account.
                              </li>
                              <li>
                                   <strong>Precise Location</strong> — With permission, used for
                                   driver tracking and to calculate mileage for wage reports. You can
                                   withdraw permission at any time in device settings.
                              </li>
                              <li>
                                   <strong>Photos</strong> — If you use “Find Address by Photo”, we
                                   process delivery slip/address images for OCR. Images may be stored
                                   with the associated delivery record if you save them.
                              </li>
                              <li>
                                   <strong>Identifiers &amp; Usage Data</strong> — Account IDs,
                                   interaction logs, crash and performance data to maintain
                                   reliability and security.
                              </li>
                              <li>
                                   <strong>Business/Operational Data</strong> — Driver names,
                                   right-to-work status, shifts, deliveries, expenses, wages, and
                                   reports.
                              </li>
                         </ul>

                         <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                              3. How We Use Your Data
                         </h2>
                         <ul className="list-disc pl-5 space-y-2">
                              <li>To provide core app functionality and manage your account.</li>
                              <li>To calculate wages, track deliveries, and generate reports.</li>
                              <li>To maintain security and prevent fraud.</li>
                              <li>To improve features and respond to support requests.</li>
                         </ul>

                         <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                              4. Lawful Bases (GDPR)
                         </h2>
                         <ul className="list-disc pl-5 space-y-2">
                              <li>
                                   <strong>Contract</strong> — To deliver the service you signed up
                                   for.
                              </li>
                              <li>
                                   <strong>Legitimate Interests</strong> — Service improvement and
                                   fraud prevention.
                              </li>
                              <li>
                                   <strong>Consent</strong> — For permissions like Location and
                                   Camera.
                              </li>
                              <li>
                                   <strong>Legal Obligations</strong> — Where required by law.
                              </li>
                         </ul>

                         <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                              5. Your Rights
                         </h2>
                         <p>
                              Under UK/EU law, you can request access, correction, deletion, or
                              restriction of your data, and object to certain processing. See our{" "}
                              <Link
                                   href="/privacy-choices"
                                   className="text-indigo-600 dark:text-indigo-400 hover:underline"
                              >
                                   Privacy Choices
                              </Link>{" "}
                              for details.
                         </p>

                         <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                              6. Contact Us
                         </h2>
                         <ul className="list-disc pl-5 space-y-2">
                              <li>
                                   <strong>Email:</strong>{" "}
                                   <a
                                        href="mailto:privacy@deliverygo.co.uk"
                                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                                   >
                                        privacy@deliverygo.co.uk
                                   </a>
                              </li>
                              <li>
                                   <strong>Support:</strong>{" "}
                                   <a
                                        href="mailto:support@deliverygo.co.uk"
                                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                                   >
                                        support@deliverygo.co.uk
                                   </a>
                              </li>
                              <li>
                                   <strong>Postal Address:</strong> Asionis Technology Ltd., London,
                                   UK
                              </li>
                         </ul>
                    </div>
               </div>
          </section>
     );
}
