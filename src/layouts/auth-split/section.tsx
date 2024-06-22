import type { BoxProps } from '@mui/material/Box';
import type { Breakpoint } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/config-global';
import { varAlpha, bgGradient } from 'src/theme/styles';

import logoCroni from '../../assets/img/logoCroni.png';
import backgroundImage from '../../assets/img/login-background-Image.png';

// ----------------------------------------------------------------------

type SectionProps = BoxProps & {
  title?: string;
  method?: string;
  imgUrl?: string;
  subtitle?: string;
  layoutQuery: Breakpoint;
  methods?: {
    path: string;
    icon: string;
    label: string;
  }[];
};

export function Section({
  sx,
  method,
  layoutQuery,
  methods,
  title = undefined,
  imgUrl = `${CONFIG.site.basePath}/assets/illustrations/illustration-dashboard.webp`,
  subtitle = 'Saúde e Tecnologia para Pacientes com Câncer',
  ...other
}: SectionProps) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        ...bgGradient({
          color: `0deg, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.1)}, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.1)}`,
          imgUrl: `${CONFIG.site.basePath}${backgroundImage.src}`,
        }),
        px: 3,
        pb: 4,
        width: 1,
        maxWidth: '67%',
        display: 'none',
        position: 'relative',
        pt: 'var(--layout-header-desktop-height + 20vh)',
        [theme.breakpoints.up(layoutQuery)]: {
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        },
        ...sx,
      }}
      {...other}
    >
      <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', alignItems: 'center' }}>
        <Box
          component="img"
          alt="Dashboard illustration"
          src={logoCroni.src}
          sx={{ width: '100px', aspectRatio: '4/1', objectFit: 'cover', height: '150px' }}
        />
        <Box
          component="img"
          alt="Dashboard illustration"
          src={imgUrl}
          sx={{ width: '80%', aspectRatio: '4/1.5', objectFit: 'cover', height: 'auto' }}
        />
      </Box>
      <div>
        {title && (
          <Typography variant="h3" sx={{ textAlign: 'center' }}>
            {title}
          </Typography>
        )}

        {subtitle && (
          <Typography
            variant="h4"
            sx={{
              color: 'text.secondary',
              textAlign: 'center',
              mt: 2,
              ml: 8,
              width: '74%',
            }}
          >
            {subtitle}
          </Typography>
        )}
      </div>

      {!!methods?.length && method && (
        <Box component="ul" gap={2} display="flex">
          {methods.map((option) => {
            const selected = method === option.label.toLowerCase();

            return (
              <Box
                key={option.label}
                component="li"
                sx={{
                  ...(!selected && {
                    cursor: 'not-allowed',
                    filter: 'grayscale(1)',
                  }),
                }}
              >
                <Tooltip title={option.label} placement="top">
                  <Link
                    component={RouterLink}
                    href={option.path}
                    sx={{
                      ...(!selected && { pointerEvents: 'none' }),
                    }}
                  >
                    <Box
                      component="img"
                      alt={option.label}
                      src={option.icon}
                      sx={{ width: 32, height: 32 }}
                    />
                  </Link>
                </Tooltip>
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
}
