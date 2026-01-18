// astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rss from '@astrojs/rss';


export default defineConfig(async () => {
  const mdxIntegration = await mdx();
  const rssIntegration = await rss();

  return {
    site: 'http://localhost:4321',  // ← moved inside the returned object
    output: 'static',
    integrations: [
     mdx(),
     rss(),
     ],
  };
});
