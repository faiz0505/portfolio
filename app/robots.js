export default function robots() {
  const baseUrl = 'https://faiz-ali-dev.vercel.app';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Disallow crawling of any private or system directories if needed
      // disallow: '/private/', 
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
