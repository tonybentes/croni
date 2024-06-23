'use client';

import { Box, Grid, Paper, Stack, Typography, LinearProgress, linearProgressClasses } from "@mui/material";
import { Timeline, TimelineDot, TimelineItem, TimelineContent, TimelineConnector, TimelineSeparator, TimelineOppositeContent } from "@mui/lab";

import { fPercent } from "src/utils/format-number";

import { _mock } from "src/_mock";
import { varAlpha } from "src/theme/styles";
import { DashboardContent } from "src/layouts/dashboard";
import MotivationIllustration from "src/assets/illustrations/motivation-illustration";

import { Iconify } from "src/components/iconify";
import { UploadBox } from "src/components/upload";

import { useMockedUser } from "src/auth/hooks";

import { ComponentBlock } from "../component-block";
import { AnalyticsTasks } from "../analytics-tasks";
import { TreatmentWelcome } from "../treatment-welcome";

type TimelineType = {
  key: number;
  title: string;
  des: string;
  time: string;
  color?: 'primary' | 'info' | 'success' | 'warning' | 'error' | 'inherit' | 'grey' | 'secondary';
  icon: React.ReactElement;
  date: string;
};

const TIMELINES: TimelineType[] = [
  {
    key: 1,
    title: 'Avaliação Pré-Quimioterapia',
    des: 'Realização de avaliação médica para verificar as condições do paciente antes do início da quimioterapia.',
    time: '08:00',
    color: "grey",
    icon: <Iconify icon="eva:clipboard-outline" width={24} />,
    date: '11/06/2024',
  },
  {
    key: 2,
    title: 'Quimioterapia R-CHOP (3º Ciclo)',
    des: 'Administração do 3º ciclo da quimioterapia R-CHOP, que consiste em uma combinação de medicamentos para tratar o LNHGCB.',
    time: '10:00',
    color: "info",
    icon: <Iconify icon="mdi:injection" width={24} />,
    date: '11/06/2024',
  },
  {
    key: 3,
    title: 'Filgrastim',
    des: 'Aplicação do medicamento Filgrastim para estimular a produção de glóbulos brancos, que podem diminuir após a quimioterapia.',
    time: '10:00',
    color: "primary",
    icon: <Iconify icon="mdi:medicine" width={24} />,
    date: '12/06/2024',
  },
  {
    key: 4,
    title: 'Filgrastim',
    des: 'Aplicação do medicamento Filgrastim para estimular a produção de glóbulos brancos.',
    time: '10:00',
    color: "primary",
    icon: <Iconify icon="mdi:medicine" width={24} />,
    date: '13/06/2024',
  },
  {
    key: 5,
    title: 'Filgrastim',
    des: 'Aplicação do medicamento Filgrastim para estimular a produção de glóbulos brancos.',
    time: '10:00',
    color: "secondary",
    icon: <Iconify icon="mdi:medicine" width={24} />,
    date: '14/06/2024',
  },
  {
    key: 6,
    title: 'Hemograma e Bioquímica',
    des: 'Realização de exames de sangue para avaliar a contagem de células sanguíneas e o funcionamento de órgãos como fígado e rins.',
    time: '14:00',
    color: "success",
    icon: <Iconify icon="mdi:test-tube" width={24} />,
    date: '15/06/2024',
  },
  {
    key: 7,
    title: 'Filgrastim',
    des: 'Aplicação do medicamento Filgrastim para estimular a produção de glóbulos brancos.',
    time: '10:00',
    color: "success",
    icon: <Iconify icon="mdi:medicine" width={24} />,
    date: '16/06/2024',
  },
  {
    key: 8,
    title: 'Filgrastim',
    des: 'Aplicação do medicamento Filgrastim para estimular a produção de glóbulos brancos.',
    time: '10:00',
    color: "grey",
    icon: <Iconify icon="mdi:medicine" width={24} />,
    date: '17/06/2024',
  },
  {
    key: 9,
    title: 'Filgrastim',
    des: 'Aplicação do medicamento Filgrastim para estimular a produção de glóbulos brancos.',
    time: '10:00',
    color: "info",
    icon: <Iconify icon="mdi:medicine" width={24} />,
    date: '18/06/2024',
  },
  {
    key: 10,
    title: 'Avaliação Pós-Quimioterapia',
    des: 'Realização de avaliação médica para verificar as condições do paciente após a quimioterapia e discutir os próximos passos do tratamento.',
    time: '08:00',
    color: "primary",
    icon: <Iconify icon="eva:clipboard-outline" width={24} />,
    date: '19/06/2024',
  },
]

export const _analyticTasks = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.tasks(index),
}));

export function TreatmentView() {
  const { user } = useMockedUser();

  const flexProps = { flex: '1 1 auto', display: 'flex', flexDirection: 'column' };

  return (
    <DashboardContent maxWidth="xl" sx={{ ...flexProps }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TreatmentWelcome
            title={`Seja bem-vindo 🎉  \n ${user?.displayName}`}
            description="Aqui começa a jornada para seu tratamento contra co câncer."
            img={<MotivationIllustration hideBackground />}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Stack direction="row" spacing={2}>
            <UploadBox
              placeholder={
                <Stack spacing={0.5} alignItems="center">
                  <Iconify icon="eva:cloud-upload-fill" width={40} />
                  <Typography variant="body2">Carregar arquivos</Typography>
                </Stack>
              }
              sx={{ py: 2.5, flexGrow: 1, height: 'auto' }}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={8}>
          <ComponentBlock>
            <Box sx={{ gap: 2, display: 'flex', alignItems: 'center', mb: 3, width: "100%" }}>
              <LinearProgress
                color="warning"
                variant="determinate"
                value={50}
                sx={{
                  width: 1,
                  height: 20,
                  bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.16),
                  [` .${linearProgressClasses.bar}`]: { bgcolor: 'success.main' },
                }}
              />
              <Box
                component="span"
                sx={{
                  width: 40,
                  typography: 'caption',
                  color: 'text.primary',
                  fontWeight: 'fontWeightMedium',
                }}
              >
                {fPercent(50)}
              </Box>
            </Box>
            <Timeline position="alternate">
              {TIMELINES.map((item) => (
                <TimelineItem key={item.key}>
                  <TimelineOppositeContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item.time} - {item.date}
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color={item.color}>{item.icon}</TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper
                      sx={{
                        p: 3,
                        bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.12),
                      }}
                    >
                      <Typography variant="subtitle2">{item.title}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {item.des}
                      </Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </ComponentBlock>
        </Grid>
        <Grid item xs={12} md={4}>
            <AnalyticsTasks title="Tarefas" list={_analyticTasks} />
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
