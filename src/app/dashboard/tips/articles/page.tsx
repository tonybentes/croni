import { CONFIG } from 'src/config-global';
import { getPosts } from 'src/actions/blog-ssr';

import { PostListHomeView } from 'src/sections/articles/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Cuidados e Bem ester | Dashboard - ${CONFIG.site.name}` };

export default async function Page() {
  const { posts } = await getPosts();
  return <PostListHomeView posts={posts} />;
}
