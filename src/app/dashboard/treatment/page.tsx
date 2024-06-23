'use client';

import { Box, Typography } from '@mui/material';

import { varAlpha } from 'src/theme/styles';
import { DashboardContent } from 'src/layouts/dashboard';

// ----------------------------------------------------------------------
type Props = {
  title?: string;
};

export default function Page({ title = 'Tratamento' }: Props) {
  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4"> {title} </Typography>

      <Box
        sx={{
          mt: 5,
          width: 1,
          height: 320,
          borderRadius: 2,
          bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.04),
          border: (theme) => `dashed 1px ${theme.vars.palette.divider}`,
        }}
      />
    </DashboardContent>
  );
}
