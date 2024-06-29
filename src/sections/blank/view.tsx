'use client';

import type { cardList } from 'src/components/card-content/card';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Paper, Avatar, TextField } from '@mui/material';

import { useResponsive } from 'src/hooks/use-responsive';

import { varAlpha } from 'src/theme/styles';
import { ListCard } from 'src/_mock/listCard';
import { DashboardContent } from 'src/layouts/dashboard';

import DiscreteSlider from 'src/components/slider/slider';
import DefaultCard from 'src/components/card-content/card';
import { DefaultButton } from 'src/components/Button/default-button';
import RadioGroupRating from 'src/components/Rating/RadioGroupRating';

import { styledPage } from './styles';

// ----------------------------------------------------------------------

type Props = {
  title?: string;
};

export function BlankView({ title = 'Blank' }: Props) {
  const [getCard, setCard] = useState<cardList | null>(null);
  const smDown = useResponsive('between', 'xs', 'xl');
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
          <Box sx={{ width: !smDown ? '80%' : '100%', pt: !smDown ? 0 : 4 }}>
            <DefaultCard arrayList={ListCard} actionfetchingcard={setCard} />
          </Box>
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
