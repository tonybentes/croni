'use client';


import type { IVideoItem } from 'src/types/video';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';

import { VideoList } from '../video-list';

// ----------------------------------------------------------------------

type Props = {
  videos: IVideoItem[];
};

export function VideoListHomeView({ videos }: Props) {
  const flexProps = { flex: '1 1 auto', display: 'flex', flexDirection: 'column' };

  return (
    <DashboardContent maxWidth="xl" sx={{ ...flexProps }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: { xs: 3, md: 5 } }}
      >
        <Typography variant="h4">
          Cuidado e Bem estar
        </Typography>
      </Stack>
      <VideoList videos={videos} />
    </DashboardContent>
  );
}
