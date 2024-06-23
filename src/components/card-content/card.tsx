import * as React from 'react';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Box, Avatar, CardActionArea } from '@mui/material';

import { ActionCard } from './actions-card';

export interface cardList {
  description: string;
  img: string;
}

export interface cardProps {
  arrayList: cardList[];
  actionfetchingcard: (value: cardList) => void;
}

export default function DefaultCard({ arrayList, actionfetchingcard }: cardProps) {
  const [selectedCardIndex, setSelectedCardIndex] = React.useState<number | null>(null);

  const handleCardClick = (index: number, item: cardList) => {
    setSelectedCardIndex(index);
    actionfetchingcard(item);
  };

  return (
    <Box sx={styledCard.container}>
      {arrayList.length > 0 &&
        arrayList.map((item: cardList, idx: number) => (
          <Card
            sx={{
              width: 200,
              backgroundColor: selectedCardIndex === idx ? 'lightblue' : 'white',
            }}
            key={idx}
          >
            <CardActionArea onClick={() => handleCardClick(idx, item)}>
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
      <ActionCard handleActionCard={() => {}} />
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
};
