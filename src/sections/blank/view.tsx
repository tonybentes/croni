'use client';

import type { cardList } from 'src/components/card-content/card';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Paper, Avatar, TextField } from '@mui/material';

import { varAlpha } from 'src/theme/styles';
import { ListCard } from 'src/_mock/listCard';
import { DashboardContent } from 'src/layouts/dashboard';

import DiscreteSlider from 'src/components/slider/slider';
import DefaultCard from 'src/components/card-content/card';
import { DefaultButton } from 'src/components/Button/default-button';
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
        <Box sx={styledPage.containerTitle}>
          <Box sx={styledPage.contextTitle}>
            <Typography variant="h6">Sintomas</Typography>
            <Typography variant="subtitle2">Como você está se sentindo?</Typography>
            <DefaultButton nameButton="Estou bem !" loading={false} size="large" />
          </Box>
          <DefaultCard arrayList={ListCard} actionfetchingcard={setCard} />
        </Box>
        {getCard && (
          <Box sx={styledPage.container}>
            <Paper
              sx={{ ...styledPage.contextPaper, maxHeight: '237px', width: 300 }}
              elevation={3}
            >
              <Box sx={{ display: 'flex', gap: 3, flexDirection: 'column' }}>
                <Typography variant="h6">Observações</Typography>
                <TextField
                  id="outlined-textarea"
                  label="Descreva o seu sintoma"
                  multiline
                  fullWidth
                  rows={4}
                />
              </Box>
            </Paper>
            <Paper sx={styledPage.contextPaper} elevation={3}>
              <Typography variant="h6">Selecione o nível do sintoma</Typography>
              <Box sx={styledPage.context}>
                <Avatar src={getCard.img} sx={{ width: 56, height: 56 }} />
                <Typography>{getCard.description}</Typography>
              </Box>
              <DiscreteSlider />
            </Paper>
            <Paper sx={{ ...styledPage.contextPaper, maxHeight: '237px' }} elevation={3}>
              <Box sx={{ display: 'flex', gap: 3, flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography variant="h6">Sentimentos</Typography>
                  <Typography variant="inherit">Nos conte aqui como está o seu humor</Typography>
                </Box>
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
  containerTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  contextTitle: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
};
