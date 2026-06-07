export default function robots() {
  const baseUrl = 'https://www.faizali.dev'; // Update with actual domain when ready

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
