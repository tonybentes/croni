import axios, { endpoints } from 'src/utils/axios';

export async function getVideos() {
  const res = await axios.get(endpoints.video.list);

  return res.data;
}
