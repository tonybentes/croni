import * as React from 'react';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box, Avatar, CardActionArea } from '@mui/material';

export interface cardList {
  description: string;
  img: string;
}

export interface cardProps {
  arrayList: cardList[];
  actionfetchingcard: (value: cardList) => void;
}

export default function DefaultCard({ arrayList, actionfetchingcard }: cardProps) {
  return (
    <Box sx={styledCard.container}>
      {arrayList.length > 0 &&
        arrayList.map((item: cardList, idx: number) => (
          <Card sx={{ width: 200 }} key={idx}>
            <CardActionArea onClick={() => actionfetchingcard(item)}>
              <CardContent>
                <Box sx={styledCard.contentCard}>
                  <Avatar alt="Remy Sharp" src={item.img} sx={{ width: 56, height: 56 }} />
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      <Card sx={{ width: 200 }}>
        <CardActionArea>
          <CardContent>
            <Box sx={styledCard.contentCard}>
              <Avatar sx={styledCard.avatar}>
                <AddCircleIcon />
              </Avatar>
              <Typography variant="body2" color="text.secondary">
                Adicionar
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export const styledCard = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 2,
    width: '100%',
    overflowY: 'auto',
    height: '300px',
    padding: '10px',
  },
  contentCard: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  avatar: {
    width: 56,
    height: 56,
    bgcolor: '#009FF7',
  },
};
