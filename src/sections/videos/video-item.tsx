import type { IPostItem } from 'src/types/blog';
import type { IVideoItem } from 'src/types/video';
import type { Theme, SxProps } from '@mui/material/styles';

import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';

import { fDate } from 'src/utils/format-time';
import { fShortenNumber } from 'src/utils/format-number';

import { maxLine } from 'src/theme/styles';
import { AvatarShape } from 'src/assets/illustrations';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type VideoItemProps = {
  video: IVideoItem;
};

export function VideoItem({ video }: VideoItemProps) {
  const theme = useTheme();

  const thumbnailUrl = `https://img.youtube.com/vi/${video.videoId}/0.jpg`;
  const videoUrl = `https://www.youtube.com/watch?v=${video.videoId}`;

  return (
    <Card>
      <Box sx={{ position: 'relative' }}>
        <AvatarShape
          sx={{
            left: 0,
            zIndex: 9,
            width: 88,
            height: 36,
            bottom: -16,
            position: 'absolute',
          }}
        />

        <Avatar
          alt={video.author.name}
          src={video.author.avatarUrl}
          sx={{
            left: 24,
            zIndex: 9,
            bottom: -24,
            position: 'absolute',
          }}
        />

        <CardActionArea component="a" href={videoUrl} target="_blank" rel="noopener noreferrer">
          <CardMedia component="img" image={thumbnailUrl} alt={video.title} height="140" />
        </CardActionArea>
      </Box>

      <CardContent sx={{ pt: 6 }}>
        <Typography variant="caption" component="div" sx={{ mb: 1, color: 'text.disabled' }}>
          {fDate(video.createdAt)}
        </Typography>

        <Typography
          color="inherit"
          variant="subtitle2"
          sx={{ ...maxLine({ line: 2, persistent: theme.typography.subtitle2 }) }}
        >
          {video.title}
        </Typography>

        <InfoBlock
          totalViews={video.totalViews}
          totalShares={video.totalShares}
          totalComments={video.totalComments}
        />
      </CardContent>
    </Card>
  );
}

// ----------------------------------------------------------------------

type PostItemLatestProps = {
  video: IVideoItem;
  index: number;
};

export function VideoItemLatest({ video, index }: PostItemLatestProps) {
  const theme = useTheme();

  const postSmall = index === 1 || index === 2;

  const thumbnailUrl = `https://img.youtube.com/vi/${video.videoId}/0.jpg`;
  const videoUrl = `https://www.youtube.com/watch?v=${video.videoId}`;

  return (
    <Card>
      <Avatar
        alt={video.author.name}
        src={video.author.avatarUrl}
        sx={{
          top: 24,
          left: 24,
          zIndex: 9,
          position: 'absolute',
        }}
      />

      <CardActionArea component="a" href={videoUrl} target="_blank" rel="noopener noreferrer">
        <CardMedia
          component="img"
          image={thumbnailUrl}
          alt={video.title}
          sx={{ height: 360 }}
        />
      </CardActionArea>

      <CardContent
        sx={{
          width: 1,
          zIndex: 9,
          bottom: 0,
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <Typography variant="caption" component="div" sx={{ mb: 1, opacity: 0.64 }}>
          {fDate(video.createdAt)}
        </Typography>

        <Typography
          color="inherit"
          variant={postSmall ? 'subtitle2' : 'h5'}
          sx={{
            ...maxLine({
              line: 2,
              persistent: postSmall ? theme.typography.subtitle2 : theme.typography.h5,
            }),
          }}
        >
          {video.title}
        </Typography>

        <InfoBlock
          totalViews={video.totalViews}
          totalShares={video.totalShares}
          totalComments={video.totalComments}
          sx={{ opacity: 0.64, color: 'common.white' }}
        />
      </CardContent>
    </Card>
  );
}

// ----------------------------------------------------------------------

type InfoBlockProps = Pick<IPostItem, 'totalViews' | 'totalShares' | 'totalComments'> & {
  sx?: SxProps<Theme>;
};

export function InfoBlock({ totalComments, totalViews, totalShares, sx }: InfoBlockProps) {
  return (
    <Stack
      spacing={1.5}
      direction="row"
      justifyContent="flex-end"
      sx={{
        mt: 3,
        typography: 'caption',
        color: 'text.disabled',
        ...sx,
      }}
    >
      <Stack direction="row" alignItems="center">
        <Iconify icon="eva:message-circle-fill" width={16} sx={{ mr: 0.5 }} />
        {fShortenNumber(totalComments)}
      </Stack>

      <Stack direction="row" alignItems="center">
        <Iconify icon="solar:eye-bold" width={16} sx={{ mr: 0.5 }} />
        {fShortenNumber(totalViews)}
      </Stack>

      <Stack direction="row" alignItems="center">
        <Iconify icon="solar:share-bold" width={16} sx={{ mr: 0.5 }} />
        {fShortenNumber(totalShares)}
      </Stack>
    </Stack>
  );
}
