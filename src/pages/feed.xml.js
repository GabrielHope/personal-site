// src/pages/feed.xml.js (replace the whole file)
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt();

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  return rss({
    title: "Gabriel's Webpage",
    description: "Learning front-end development slowly and quietly on the internet.",
    site: context.site || 'http://localhost:4321',  // ← automatically uses your deployed domain (or localhost in dev)
    items: posts.map(post => ({
      link: `/posts/${post.id}/`,
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description || '',
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'h1', 'h2', 'h3']),      }),
    })),
    customData: `<language>en-us</language>`,
  });
}
