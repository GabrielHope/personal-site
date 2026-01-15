import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rss from '@astrojs/rss';

export default defineConfig(async () => {
  site: 'http://localhost:4321',
  const mdxIntegration = await mdx();
  const rssIntegration = await rss();

  return {
    site: 'http://localhost:4321', 
    output: 'static',
    integrations: [mdxIntegration, rssIntegration],
  };
});
