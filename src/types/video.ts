import type { IDateValue } from './common';

// ----------------------------------------------------------------------

export type IVideoFilters = {
  publish: string;
};

export type IVideoHero = {
  title: string;
  coverUrl: string;
  createdAt?: IDateValue;
  author?: { name: string; avatarUrl: string };
};

export type IVideoComment = {
  id: string;
  name: string;
  avatarUrl: string;
  message: string;
  postedAt: IDateValue;
  users: { id: string; name: string; avatarUrl: string }[];
  replyComment: {
    id: string;
    userId: string;
    message: string;
    tagUser?: string;
    postedAt: IDateValue;
  }[];
};

export type IVideoItem = {
  id: string;
  videoId: string;
  title: string;
  tags: string[];
  publish: string;
  content: string;
  coverUrl: string;
  metaTitle: string;
  totalViews: number;
  totalShares: number;
  description: string;
  totalComments: number;
  totalFavorites: number;
  metaKeywords: string[];
  metaDescription: string;
  comments: IVideoComment[];
  createdAt: IDateValue;
  favoritePerson: { name: string; avatarUrl: string }[];
  author: { name: string; avatarUrl: string };
};
