import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';
import { varAlpha, bgGradient } from 'src/theme/styles';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  title?: string;
  description?: string;
  img?: React.ReactNode;
  action?: React.ReactNode;
};

export function TreatmentWelcome({ title, description, action, img, sx, ...other }: Props) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: `to right, ${theme.vars.palette.grey[900]} 25%, ${varAlpha(theme.vars.palette.primary.darkerChannel, 0.88)}`,
          imgUrl: `${CONFIG.site.basePath}/assets/background/background-6.webp`,
        }),
        pt: 5,
        pb: 5,
        pr: 3,
        gap: 5,
        borderRadius: 2,
        display: 'flex',
        height: { md: 1 },
        position: 'relative',
        pl: { xs: 3, md: 5 },
        alignItems: 'center',
        color: 'common.white',
        textAlign: { xs: 'center', md: 'left' },
        flexDirection: { xs: 'column', md: 'row' },
        border: `solid 1px ${theme.vars.palette.grey[800]}`,
        ...sx,
      }}
      {...other}
    >
      <Box
        sx={{
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          gap: '4px',
          alignItems: { xs: 'center', md: 'flex-start' },
        }}
      >
        <Typography variant="h4" sx={{ whiteSpace: 'pre-line', mb: 1 }}>
          {title}
        </Typography>

        <Typography variant="body1" sx={{ opacity: 0.64, mb: 1 }}>
          {description}
        </Typography>

        <Typography
          variant="body2"
          component="pre"
          sx={{ opacity: 0.9, textWrap: 'wrap', textAlign: 'justify' }}
        >
          Passo 1 - Carregue os documentos entregues pelo seu médico.
        </Typography>
        <Typography
          variant="body2"
          component="pre"
          sx={{ opacity: 0.9, textWrap: 'wrap', textAlign: 'justify' }}
        >
          Passo 2 - Aguarde enquando nossa inteligência artificial monta seu cronograma.
        </Typography>
        <Typography
          variant="body2"
          component="pre"
          sx={{ opacity: 0.9, textWrap: 'wrap', textAlign: 'justify' }}
        >
          Passo 3 - Agora você já possui uma linha do tempo com tudo que precisa, além de
          notificações e agenda automática.
        </Typography>
      </Box>

      {img && <Box sx={{ maxWidth: 260 }}>{img}</Box>}
    </Box>
  );
}
