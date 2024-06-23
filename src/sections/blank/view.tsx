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
          <Paper sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 3, p: 2 }}>
            <Typography variant="h6">Selecione o nível do sintoma</Typography>
            <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
              <Avatar src={getCard.img} sx={{ width: 56, height: 56 }} />
              <Typography>{getCard.description}</Typography>
            </Box>
            <DiscreteSlider />
          </Paper>
        )}
      </Box>
    </DashboardContent>
  );
}
