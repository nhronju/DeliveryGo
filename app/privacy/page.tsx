import Link from "next/link";

const lastUpdatedDate = new Date().toLocaleDateString('en-GB', {
     day: 'numeric',
     month: 'long',
     year: 'numeric'
});

export default function PrivacyPolicy() {
     return (
          <section className="py-12">
               <div className="container mx-auto px-4 max-w-4xl prose prose-indigo">
                    <h1 className="text-4xl font-bold text-gray-900 text-center mb-2">Privacy Policy</h1>
                    <p className="text-center text-sm text-gray-500 mb-8">Last Updated: {lastUpdatedDate}</p>

                    <p>
                         At DeliveryGo, we are committed to protecting the privacy of your data. This policy explains what information we collect, why we collect it, and what we do with it. We believe in being transparent and straightforward.
                    </p>
                    <p>
                         We do not use third-party advertising, and we do not sell your data to brokers. The information we collect is used solely to provide our service to you.
                    </p>

                    <h2>1. Who We Are</h2>
                    <p>
                         DeliveryGo is a product of Asionis Technology Ltd., a company registered in the UK.
                    </p>

                    <h2>2. Data We Collect and Why We Collect It</h2>
                    <p>
                         We only collect data that is essential for the DeliveryGo app to function. Here’s a breakdown of the information we collect and the purpose behind it:
                    </p>
                    <ul>
                         <li><strong>Phone Number:</strong> We collect your phone number for secure authentication and to identify your account. This is our primary way of ensuring only you can access your data.</li>
                         <li><strong>Precise Location:</strong> If you give us permission, we use this data for the driver tracking feature and to accurately calculate mileage for wage reports. You can turn this permission off at any time in your device settings.</li>
                         <li><strong>Photos:</strong> The app uses photos (delivery slips, addresses) for the "Find Address by Photo" feature, which requires camera access. We process these photos to extract information and then discard them; we do not store them.</li>
                         <li><strong>User IDs and Usage Data:</strong> We use unique IDs to manage your account and collect anonymous usage and performance logs. This helps us find and fix bugs, and improve the overall app experience.</li>
                         <li><strong>Business Data:</strong> This includes information you input, such as driver names, shift times, delivery details, expenses, and wage rates. This is the core data required to provide our driver management service.</li>
                    </ul>

                    <h2>3. How We Use and Share Your Data</h2>
                    <p>
                         Your data is used exclusively to provide and improve the DeliveryGo service. We do not share your personal information with any third parties for advertising or marketing purposes.
                    </p>
                    <p>
                         We may share data with a small number of trusted **service providers** to help us operate the app. These providers are contractually bound to protect your data and are not allowed to use it for any other purpose. This includes:
                    </p>
                    <ul>
                         <li><strong>Hosting Services:</strong> To securely store our data.</li>
                         <li><strong>SMS/OTP Providers:</strong> To send you one-time passcodes for authentication.</li>
                         <li><strong>Error Logging Services:</strong> To help us identify and fix app crashes and bugs.</li>
                    </ul>

                    <h2>4. Lawful Basis for Processing (GDPR)</h2>
                    <p>
                         For our UK and EU customers, we process your personal data based on the following legal grounds under the GDPR:
                    </p>
                    <ul>
                         <li><strong>Contractual Necessity:</strong> We process data like shift and delivery details to provide the service you signed up for.</li>
                         <li><strong>Legitimate Interests:</strong> We have a legitimate interest in improving our service and ensuring its security.</li>
                         <li><strong>Consent:</strong> We get your explicit consent for certain permissions, such as location and camera access. You have the right to withdraw this consent at any time.</li>
                    </ul>

                    <h2>5. Data Retention and Security</h2>
                    <p>
                         We keep your personal data for as long as your account is active. If you request account deletion, we will remove your data in line with legal requirements.
                    </p>
                    <p>
                         We use commercially acceptable security measures to protect your data, but please remember that no method of transmission over the internet is 100% secure.
                    </p>

                    <h2>6. Your Rights</h2>
                    <p>
                         Under UK and EU law, you have rights over your personal data. You can:
                    </p>
                    <ul>
                         <li>Request a copy of the data we hold about you.</li>
                         <li>Ask us to correct any inaccurate information.</li>
                         <li>Request that we delete your data (the "right to erasure").</li>
                         <li>Object to certain types of processing.</li>
                    </ul>
                    <p>
                         For more details on how to exercise these rights, please visit our <Link href="/privacy-choices" className="text-indigo-600 hover:underline">Privacy Choices</Link> page.
                    </p>

                    <h2>7. Children's Privacy</h2>
                    <p>
                         The DeliveryGo app is not intended for use by children under the age of 16. We do not knowingly collect personal data from anyone under this age.
                    </p>

                    <h2>8. Contact Us</h2>
                    <p>
                         If you have any questions or concerns about this policy or your data, please contact our dedicated privacy team:
                    </p>
                    <ul>
                         <li><strong>Email:</strong> <a href="mailto:privacy@deliverygo.co.uk" className="text-indigo-600 hover:underline">support@deliverygo.co.uk</a></li>
                         <li><strong>Postal Address:</strong> Asionis Technology Ltd., Placeholder, London, UK</li>
                    </ul>
               </div>
          </section>
     );
}