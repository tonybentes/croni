import React from 'react';
import Slider from 'react-slick';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Paper, Avatar, IconButton, CardActionArea } from '@mui/material';

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
  const sliderRef = React.useRef<any>(null); // Referência para o slider

  const handleCardClick = (index: number, item: cardList) => {
    setSelectedCardIndex(index);
    actionfetchingcard(item);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Paper sx={styledCard.container} elevation={3}>
      <IconButton sx={styledCard.prevButton} onClick={() => sliderRef.current.slickPrev()}>
        <ArrowBackIosIcon />
      </IconButton>
      {arrayList.length > 0 && (
        <Slider ref={sliderRef} {...settings}>
          {arrayList.map((item: cardList, idx: number) => (
            <div key={idx}>
              <Card
                sx={{
                  width: 200,
                  margin: '0 auto',
                  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;',
                  ...(selectedCardIndex === idx && {
                    border: '2px solid',
                    borderColor: 'primary.main',
                  }),
                }}
              >
                <CardActionArea onClick={() => handleCardClick(idx, item)}>
                  <CardContent>
                    <Box sx={styledCard.contentCard}>
                      <Avatar
                        alt={item.description}
                        src={item.img}
                        sx={{ width: 56, height: 56 }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))}
        </Slider>
      )}
      <IconButton sx={styledCard.nextButton} onClick={() => sliderRef.current.slickNext()}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Paper>
  );
}

export const styledCard = {
  container: {
    width: '100%',
    position: 'relative', // Para posicionar os botões sobre o carrossel
    padding: '40px',
  },
  contentCard: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  prevButton: {
    position: 'absolute',
    top: '50%',
    left: '1%',
    transform: 'translateY(-50%)',
    zIndex: 1,
  },
  nextButton: {
    position: 'absolute',
    top: '50%',
    right: '1%',
    transform: 'translateY(-50%)',
    zIndex: 1,
  },
};
