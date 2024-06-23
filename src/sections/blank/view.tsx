'use client';

import type { cardList } from 'src/components/card-content/card';

import { useState } from 'react';

import Box from '@mui/material/Box';
import { Paper, Avatar } from '@mui/material';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';
import { ListCard } from 'src/_mock/listCard';
import { DashboardContent } from 'src/layouts/dashboard';

import DiscreteSlider from 'src/components/slider/slider';
import DefaultCard from 'src/components/card-content/card';
import { ActionCard } from 'src/components/card-content/actions-card';
import RadioGroupRating from 'src/components/Rating/RadioGroupRating';

// ----------------------------------------------------------------------

type Props = {
  title?: string;
};

export function BlankView({ title = 'Blank' }: Props) {
  const [getCard, setCard] = useState<cardList | null>(null);
  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4"> {title} </Typography>
      <Box
        sx={{
          mt: 5,
          p: 2,
          width: 1,
          height: 'auto',
          borderRadius: 2,
          bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.04),
          border: (theme) => `dashed 1px ${theme.vars.palette.divider}`,
        }}
      >
        <Typography variant="h6">Selecione seus sintomas</Typography>
        <DefaultCard arrayList={ListCard} actionfetchingcard={setCard} />
        {getCard && (
          <Box sx={styledPage.container}>
            <Paper sx={styledPage.contextPaper} elevation={3}>
              <Typography variant="h6">Selecione o nível do sintoma</Typography>
              <Box sx={styledPage.context}>
                <Avatar src={getCard.img} sx={{ width: 56, height: 56 }} />
                <Typography>{getCard.description}</Typography>
              </Box>
              <DiscreteSlider />
            </Paper>
            <Paper sx={{ ...styledPage.contextPaper, maxHeight: '237px' }} elevation={3}>
              <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h6">Não encontro meu sintoma</Typography>
                <Typography variant="inherit">Observação e imagens</Typography>
                <ActionCard handleActionCard={() => {}} />
              </Box>
            </Paper>
            <Paper sx={{ ...styledPage.contextPaper, maxHeight: '237px' }} elevation={3}>
              <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h6">Sentimentos</Typography>
                <Typography variant="inherit">Nos conte aqui como está o seu humor</Typography>
                <RadioGroupRating />
              </Box>
            </Paper>
          </Box>
        )}
      </Box>
    </DashboardContent>
  );
}

export const styledPage = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 3,
    flexWrap: 'wrap',
  },
  contextPaper: {
    mt: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    p: 2,
  },
  context: {
    display: 'flex',
    gap: 3,
    alignItems: 'center',
  },
};
