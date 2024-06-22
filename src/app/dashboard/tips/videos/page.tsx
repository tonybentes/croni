import { CONFIG } from 'src/config-global';
import { getVideos } from 'src/actions/video-ssr';

import { VideoListHomeView } from 'src/sections/videos/view/video-list-home-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Videos educativos | Dashboard - ${CONFIG.site.name}` };

export default async function Page() {
  const { videos } = await getVideos();
  return <VideoListHomeView videos={videos} />;
}
