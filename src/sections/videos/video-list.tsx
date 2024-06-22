
import type { IVideoItem } from 'src/types/video';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';

import { Iconify } from 'src/components/iconify';

import { VideoItemSkeleton } from './video-skeleton';
import { VideoItem, VideoItemLatest } from './video-item';

// ----------------------------------------------------------------------

type Props = {
  videos: IVideoItem[];
  loading?: boolean;
};

export function VideoList({ videos, loading }: Props) {
  const renderLoading = (
    <Box
      gap={3}
      display="grid"
      gridTemplateColumns={{ xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
    >
      <VideoItemSkeleton />
    </Box>
  );

  const renderList = (
    <Grid container spacing={3}>
      {videos.slice(0, 3).map((video, index) => (
        <Grid
          key={video.id}
          xs={12}
          sm={6}
          md={4}
          lg={index === 0 ? 6 : 3}
          sx={{ display: { xs: 'none', lg: 'block' } }}
        >
          <VideoItemLatest video={video} index={index} />
        </Grid>
      ))}

      {videos.slice(0, 3).map((video) => (
        <Grid key={video.id} xs={12} sm={6} md={4} lg={3} sx={{ display: { lg: 'none' } }}>
          <VideoItem video={video} />
        </Grid>
      ))}

      {videos.slice(3, videos.length).map((video) => (
        <Grid key={video.id} xs={12} sm={6} md={4} lg={3}>
          <VideoItem video={video} />
        </Grid>
      ))}
    </Grid>
  );

  return (
    <>
      {loading ? renderLoading : renderList}

      {videos.length > 8 && (
        <Stack alignItems="center" sx={{ mt: 8, mb: { xs: 10, md: 15 } }}>
          <Button
            size="large"
            variant="outlined"
            startIcon={<Iconify icon="svg-spinners:12-dots-scale-rotate" width={24} />}
          >
            Carregar mais...
          </Button>
        </Stack>
      )}
    </>
  );
}
