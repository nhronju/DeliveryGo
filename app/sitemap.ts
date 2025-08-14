import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
     return [
          {
               url: 'https://deliverygo.co.uk',
               lastModified: new Date(),
               changeFrequency: 'weekly',
               priority: 1,
          },
          {
               url: 'https://deliverygo.co.uk/support',
               lastModified: new Date(),
               changeFrequency: 'monthly',
               priority: 0.8,
          },
          {
               url: 'https://deliverygo.co.uk/privacy',
               lastModified: new Date(),
               changeFrequency: 'yearly',
               priority: 0.5,
          },
          {
               url: 'https://deliverygo.co.uk/privacy-choices',
               lastModified: new Date(),
               changeFrequency: 'yearly',
               priority: 0.5,
          },
     ];
}