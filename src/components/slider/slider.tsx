import * as React from 'react';

import Box from '@mui/material/Box';
import { Alert } from '@mui/material';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

const MAX = 3;
const MIN = 1;
const marks = [
  {
    value: MIN,
    label: '',
  },
  {
    value: MAX,
    label: '',
  },
];

export default function CustomMarks() {
  const [val, setVal] = React.useState<number>(MIN);
  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
  };
  const smDown = useResponsive('down', 'sm');

  const handelAlert = (value: number) =>
    value === 2 ? (
      <Alert security="info">
        O meu sintoma é moderado. Ele atrapalha minhas atividades diárias. Não consigo ir trabalhar
        ou sair de casa. Mas ainda consigo comer, tomar banho e ir ao banheiro
      </Alert>
    ) : (
      <Alert security="error">
        Meu sintoma é grave. Não consigo realizar atividades de higiene (tomar banho, ir ao
        banheiro...). comer dormir ou sair da cama por causa do que eu estou sentindo
      </Alert>
    );
  return (
    <Box sx={smDown ? styledSlider.containerMB : styledSlider.container}>
      <Box>
        <Slider
          marks={marks}
          step={1}
          value={val}
          color="info"
          valueLabelDisplay="auto"
          min={MIN}
          max={MAX}
          onChange={handleChange}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2" onClick={() => setVal(MIN)} sx={{ cursor: 'pointer' }}>
            {MIN}
          </Typography>
          <Typography variant="body2" onClick={() => setVal(MAX)} sx={{ cursor: 'pointer' }}>
            {MAX} max
          </Typography>
        </Box>
      </Box>
      <Box>{val !== 1 && handelAlert(val)}</Box>
    </Box>
  );
}

export const styledSlider = {
  container: {
    width: 340,
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  containerMB: {
    width: 250,
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
};
