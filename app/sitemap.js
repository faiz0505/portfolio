export default function sitemap() {
  const baseUrl = 'https://faiz-ali-dev.vercel.app';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Add additional routes here if you add separate pages (e.g., /blog, /projects)
  ];
}
