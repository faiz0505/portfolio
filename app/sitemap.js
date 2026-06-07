export default function sitemap() {
  const baseUrl = 'https://www.faizali.dev'; // Update with actual domain when ready

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
