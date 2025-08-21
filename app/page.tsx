'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  CurrencyPoundIcon,
  ClockIcon,
  ChartBarIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  PhoneIcon,
  CheckBadgeIcon,
  ReceiptPercentIcon,
  Cog6ToothIcon,
  CameraIcon,
  MapIcon,
  ShieldCheckIcon,
  DocumentChartBarIcon,
  BanknotesIcon,
} from '@heroicons/react/24/outline';

const features = [
  { name: 'Weekly Wages Calculation', icon: CurrencyPoundIcon },
  { name: 'Start & Finish Time + Shift Allocation', icon: ClockIcon },
  { name: 'Delivery Time Average', icon: ChartBarIcon },
  { name: 'Search Restaurant/Driver', icon: MagnifyingGlassIcon },
  { name: 'Per-Mile Calculations & Amounts', icon: MapPinIcon },
  { name: 'Call the Customer (one-tap)', icon: PhoneIcon },
  { name: 'Delivery Status: Ongoing/Delivered', icon: CheckBadgeIcon },
  { name: 'Daily Deliveries, Expenses & Petrol Costs', icon: ReceiptPercentIcon },
  { name: 'Hourly Rate & Price per Mile setup', icon: Cog6ToothIcon },
  { name: 'Find Address by Photo (OCR)', icon: CameraIcon },
  { name: 'Driver Tracking (GPS)', icon: MapIcon },
  { name: 'Right-to-Work Checks', icon: ShieldCheckIcon },
  { name: 'Driver Performance', icon: ChartBarIcon },
  { name: 'Detailed Reports', icon: DocumentChartBarIcon },
  { name: 'Due Payments', icon: BanknotesIcon },
];

const faqs = [
  { q: 'How do drivers sign in?', a: 'Drivers sign in securely using their phone number and a one-time passcode (OTP).' },
  { q: 'Do I need an ePOS system to use DeliveryGo?', a: 'No. DeliveryGo works independently. It’s a standalone solution for managing delivery drivers.' },
  { q: 'Is location tracking required?', a: 'Only for live driver tracking; all other features work without it.' },
  { q: 'How are wages calculated?', a: 'Set an hourly rate and price per mile. The app calculates weekly totals per driver.' },
  { q: 'Can I export my data?', a: 'Yes. Email support@deliverygo.co.uk to request a data export.' },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900" />
        <div className="container mx-auto px-6 relative py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-indigo-200 dark:border-indigo-900 bg-white/70 dark:bg-gray-800/70 px-3 py-1 text-sm text-indigo-700 dark:text-indigo-300">
                Built for UK takeaways <span className="text-indigo-400">•</span> GDPR aware
              </p>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                Manage delivery drivers.<br className="hidden md:inline" /> Save time. Pay accurately.
              </h1>
              <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-xl">
                Replace paper timesheets with one simple app. Track shifts & deliveries, calculate wages automatically,
                and see clear performance reports—without changing your till or ePOS.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <AppStoreBadge />
                <Link
                  href="/support"
                  className="border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  Contact Support
                </Link>
              </div>

              {/* Trust / stats */}
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  No ads • No data brokers • No cross-app tracking
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  Setup in minutes
                </div>
              </div>
            </div>

            <div className="relative order-2 lg:order-2">
              <div className="rounded-2xl bg-center shadow-sm bg-white dark:bg-gray-900 p-4">
                <Image
                  src="/dashboard.png"
                  alt="DeliveryGo iOS app screenshot"
                  width={1200}
                  height={800}
                  className="mx-auto h-auto max-h-[650px] w-auto rounded-xl"
                />
              </div>
              <div className="pointer-events-none absolute -bottom-10 -left-10 -z-10 h-64 w-64 rounded-full bg-indigo-100 dark:bg-indigo-900 blur-3xl opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">All the tools you need in one app</h2>
          <p className="mt-3 text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you track on paper—now automated, accurate, and ready to report.
          </p>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ name, icon: Icon }, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 shadow-sm"
              >
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900/40">
                  <Icon className="h-5 w-5 text-indigo-700 dark:text-indigo-300" />
                </div>
                <p className="text-gray-800 dark:text-gray-100">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXTRA CONTENT BLOCK (image + copy) */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Image first on desktop to complement the previous section */}
            <div className="order-1">
              <div className="rounded-2xl  shadow-sm bg-white dark:bg-gray-900 p-4">
                <Image
                  src="/report.png"
                  alt="DeliveryGo workflow example"
                  width={1200}
                  height={800}
                  className="mx-auto h-auto max-h-[650px] w-auto rounded-xl"
                />
              </div>
            </div>

            <div className="order-2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Optimised for Real-World Deliveries</h2>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                DeliveryGo is designed for busy takeaway teams. Keep everything in one place—from shift start to proof of delivery—so you
                can move faster and pay accurately without the spreadsheets.
              </p>
              <ul className="mt-6 space-y-3 text-gray-800 dark:text-gray-100">
                <li className="flex gap-2">
                  <ChartBarIcon className="h-5 w-5 text-indigo-700 dark:text-indigo-300 mt-1" />
                  Live stats: delivery time averages and deliveries per hour
                </li>
                <li className="flex gap-2">
                  <MapIcon className="h-5 w-5 text-indigo-700 dark:text-indigo-300 mt-1" />
                  Mileage tracking that feeds directly into wages
                </li>
                <li className="flex gap-2">
                  <BanknotesIcon className="h-5 w-5 text-indigo-700 dark:text-indigo-300 mt-1" />
                  Clear due payments and weekly totals for every driver
                </li>
              </ul>

              <div className="mt-8 flex items-center gap-4">
                <AppStoreBadge />
                <Link href="/support" className="text-indigo-700 dark:text-indigo-300 font-semibold hover:underline">
                  Need help? Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* HOW IT WORKS */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">How it works</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Step num="1" title="Set your rates">
              Configure hourly rates and price per mile for each driver.
            </Step>
            <Step num="2" title="Track shifts & deliveries">
              Drivers clock in/out, log deliveries and mileage—live or after.
            </Step>
            <Step num="3" title="Auto-calculate wages & reports">
              Weekly totals and detailed reports are generated automatically.
            </Step>
          </div>
        </div>
      </section>

      {/* PROOF / SCREENSHOT */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Built for UK takeaways</h2>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                GDPR-aware by design. Your data stays private and is used only to provide the service.
                No third-party ads, data brokers, or cross-app tracking—ever.
              </p>
              <ul className="mt-6 space-y-3 text-gray-800 dark:text-gray-100">
                <li className="flex gap-2"><ShieldCheckIcon className="h-5 w-5 text-indigo-700 dark:text-indigo-300 mt-1" /> Role-based access & right-to-work checks</li>
                <li className="flex gap-2"><ClockIcon className="h-5 w-5 text-indigo-700 dark:text-indigo-300 mt-1" /> Accurate shifts and delivery time averages</li>
                <li className="flex gap-2"><CurrencyPoundIcon className="h-5 w-5 text-indigo-700 dark:text-indigo-300 mt-1" /> Clear due payments and weekly wages</li>
              </ul>
              <div className="mt-8 flex items-center gap-4">
                <AppStoreBadge />
                <Link href="/support" className="text-indigo-700 dark:text-indigo-300 font-semibold hover:underline">Need help? Contact Support</Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              {/* Replace with your real screenshot: /public/dashboard.png */}
              <div className="rounded-2xl shadow-sm bg-white dark:bg-gray-900 p-4">
                <Image
                  src="/delivery.png"
                  alt="DeliveryGo dashboard preview"
                  width={1200}
                  height={800}
                  className="mx-auto h-auto max-h-[650px] w-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Frequently asked questions</h2>
          <div className="mt-10 max-w-3xl mx-auto divide-y divide-gray-200 dark:divide-gray-700 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            {faqs.map((item, i) => (
              <div key={i} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.q}</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Ready to replace paperwork?</h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300">Track, pay, and report—accurately and effortlessly.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <AppStoreBadge />
            <Link
              href="/support"
              className="border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* Reusable step card */
function Step({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-sm">
      <span className="text-5xl font-bold text-indigo-600 dark:text-indigo-300">{num}</span>
      <h3 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-gray-700 dark:text-gray-300">{children}</p>
    </div>
  );
}

/* App Store badge (use your App Store URL when live) */
function AppStoreBadge() {
  return (
    <Link
      href="https://apps.apple.com/us/app/deliverygo-delivery-driver/id6751056501"
      aria-label="Download DeliveryGo on the App Store"
      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600 rounded-lg"
    >
      <Image
        src="/app-store-badge.png" // file should be at /public/app-store-badge.png
        alt="Download on the App Store"
        width={160}
        height={50}
        className="h-[50px] w-auto"
        priority
      />
    </Link>
  );
}
