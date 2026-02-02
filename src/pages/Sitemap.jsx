import { useEffect } from 'react';

export default function Sitemap() {
  useEffect(() => {
    // Set content type to XML
    const metaContentType = document.querySelector('meta[http-equiv="Content-Type"]');
    if (metaContentType) {
      metaContentType.setAttribute('content', 'application/xml');
    }
  }, []);

  const baseUrl = 'https://summitautocaretx.com';
  const today = new Date().toISOString().split('T')[0];

  const pages = [
    { url: '', priority: '1.0', changefreq: 'weekly' },
    { url: '/Services', priority: '0.9', changefreq: 'weekly' },
    { url: '/WhyUs', priority: '0.8', changefreq: 'monthly' },
    { url: '/Reviews', priority: '0.8', changefreq: 'weekly' },
    { url: '/Contact', priority: '0.9', changefreq: 'monthly' },
    { url: '/Blog', priority: '0.7', changefreq: 'daily' },
    { url: '/Fleet', priority: '0.8', changefreq: 'monthly' },
  ];

  const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return (
    <pre style={{ 
      fontFamily: 'monospace', 
      fontSize: '12px',
      whiteSpace: 'pre-wrap',
      wordWrap: 'break-word',
      padding: '20px',
      backgroundColor: '#f5f5f5'
    }}>
      {sitemapXML}
    </pre>
  );
}