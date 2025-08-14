import Link from 'next/link';
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const features = [
  { name: 'Weekly Wages Calculation', icon: 'calculator' },
  { name: 'Start & Finish Time + Shift Allocation', icon: 'clock' },
  { name: 'Delivery Time Average', icon: 'chart' },
  { name: 'Search Restaurant/Driver', icon: 'search' },
  { name: 'Per-Mile Calculations & Amounts', icon: 'car' },
  { name: 'Call the Customer (one-tap)', icon: 'phone' },
  { name: 'Delivery Status: Ongoing/Delivered', icon: 'status' },
  { name: 'Daily Deliveries, Expenses & Petrol Costs', icon: 'receipt' },
  { name: 'Hourly Rate & Price per Mile setup', icon: 'settings' },
  { name: 'Find Address by Photo (OCR)', icon: 'camera' },
  { name: 'Driver Tracking (GPS)', icon: 'map' },
  { name: 'Authorize Driver to Work / Right-to-Work Check', icon: 'check' },
  { name: 'Driver Performance', icon: 'performance' },
  { name: 'Detailed Reports', icon: 'report' },
  { name: 'Due Payments', icon: 'payment' },
];

const faqs = [
  { question: 'How do drivers sign in?', answer: 'Drivers sign in securely using their phone number and a one-time passcode (OTP).' },
  { question: 'Do I need an ePOS system to use DeliveryGo?', answer: 'No, DeliveryGo works independently. It’s designed to be a standalone solution for managing your delivery drivers.' },
  { question: 'Is location tracking required?', answer: 'Location permissions are only needed for live driver tracking; you can still use all other features without it.' },
  { question: 'How are wages calculated?', answer: 'You set an hourly rate and a price per mile, and the app automatically calculates weekly totals for each driver.' },
  { question: 'Can I export my data?', answer: 'Yes. Simply email our support team at support@deliverygo.co.uk to request a data export.' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 py-20 lg:py-24">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Manage delivery drivers. <br className="hidden md:inline" />Save time. Pay accurately.
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Takeaways use till/ePOS for orders, but most still manage drivers on paper—tracking hours, mileage, deliveries, and wages by hand. It’s slow, error-prone, and stressful. DeliveryGo brings driver management into one place—track shifts and deliveries, calculate wages automatically, and get clear performance reports.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-4 sm:space-y-0">
            <AppStoreBadge />
            <Link href="/support" className="border border-gray-300 text-gray-700 font-bold py-3 px-6 rounded-lg text-lg hover:bg-gray-200 transition-colors duration-200 focus-visible:outline-indigo-600">
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">All the Tools You Need in One App</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start bg-gray-50 p-6 rounded-lg shadow-sm">
                <CheckCircleIcon className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" aria-hidden="true" />
                <p className="ml-4 text-lg text-gray-700">{feature.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow">
              <span className="text-5xl font-bold text-indigo-600">1</span>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Set Your Rates</h3>
              <p className="mt-2 text-gray-600">Easily configure hourly rates and a price per mile for your drivers.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <span className="text-5xl font-bold text-indigo-600">2</span>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Track Shifts & Deliveries</h3>
              <p className="mt-2 text-gray-600">Drivers use the app to track their shifts, deliveries, and mileage in real-time.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <span className="text-5xl font-bold text-indigo-600">3</span>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Auto-Calculate Wages & Reports</h3>
              <p className="mt-2 text-gray-600">DeliveryGo automatically calculates wages and generates detailed performance reports for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Built for UK Takeaways Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Built for UK Takeaways</h2>
          <p className="text-lg text-gray-700">
            DeliveryGo is designed specifically for the UK market. We adhere to **GDPR and UK data protection laws**, ensuring your data is kept private and secure. We focus on providing a simple, reliable solution so you can focus on your business. We never use third-party ads, data brokers, or cross-app tracking.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// App Store Badge Component for a clean CTA
const AppStoreBadge = () => (
  <Link href="#" aria-label="Get the iOS App on the App Store" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600 rounded-lg">
    <Image
      src="/app-store-badge.png"
      alt="Download on the App Store"
      width={160}
      height={50}
      className="h-[50px] w-auto"
      priority
    />
  </Link>
);