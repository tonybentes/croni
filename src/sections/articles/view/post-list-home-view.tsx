'use client';

import type { IPostItem } from 'src/types/blog';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';

import { PostList } from '../post-list';

// ----------------------------------------------------------------------

type Props = {
  posts: IPostItem[];
};

export function PostListHomeView({ posts }: Props) {
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

      <PostList posts={posts} />
    </DashboardContent>
  );
}
