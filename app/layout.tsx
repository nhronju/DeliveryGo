import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  metadataBase: new URL('https://deliverygo.co.uk'),
  title: 'DeliveryGo – Delivery Driver Management for UK Takeaways',
  description: 'Track driver hours, wages, mileage, deliveries, and performance. Replace paperwork with DeliveryGo.',
  openGraph: {
    title: 'DeliveryGo – Delivery Driver Management for UK Takeaways',
    description: 'Track driver hours, wages, mileage, deliveries, and performance. Replace paperwork with DeliveryGo.',
    url: 'https://deliverygo.co.uk',
    siteName: 'DeliveryGo',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DeliveryGo',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeliveryGo – Delivery Driver Management for UK Takeaways',
    description: 'Track driver hours, wages, mileage, deliveries, and performance. Replace paperwork with DeliveryGo.',
    images: ['https://deliverygo.co.uk/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "name": "Asionis Technology Ltd.",
                  "url": "https://deliverygo.co.uk",
                  "logo": "https://deliverygo.co.uk/logo.png"
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "DeliveryGo – Delivery Driver",
                  "url": "https://deliverygo.co.uk",
                  "operatingSystem": "iOS",
                  "applicationCategory": "BusinessApplication"
                }
              ]
            })
          }}
        />
      </head>
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics debug={false} />
      </body>
    </html>
  );
}