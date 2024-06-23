import type { ReactNode } from 'react';

import { Box, Paper, Typography } from '@mui/material';

import { typography } from 'src/theme/core/typography';

import { styledModal } from './styles';
import { ModalContainer } from '../Container/container-dialog';

export interface actionsProps {
  nameAction: string;
  component: ReactNode;
}

interface modalProps {
  title: string;
  description: string;
  isOpenModal: boolean;
  closeModal: () => void;
  actions: actionsProps[] | null;
}

export function DefaultModal({ actions, closeModal, description, isOpenModal, title }: modalProps) {
  return (
    <ModalContainer open={isOpenModal} setOpen={closeModal} maxWidth="xs">
      <Paper sx={{ height: 'auto' }}>
        <Box sx={styledModal.container}>
          <Box sx={styledModal.textContainer}>
            <Typography sx={typography.h5}>{title}</Typography>
            <Typography>{description}</Typography>
          </Box>
          <Box sx={styledModal.buttonContainer}>
            {actions &&
              actions.map((item: actionsProps, idx: number) => (
                <Box key={idx}>{item.component}</Box>
              ))}
          </Box>
        </Box>
      </Paper>
    </ModalContainer>
  );
}
