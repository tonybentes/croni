/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Breakpoint } from '@mui/material';
import type { TransitionProps } from '@mui/material/transitions';

import * as React from 'react';

import { Box } from '@mui/material';
import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import { styledModal } from './styles';

interface modalProps {
  open: boolean;
  setOpen: () => void;
  children: React.ReactNode;
  maxWidth?: Breakpoint;
}

const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
  ) => <Slide direction="up" ref={ref} {...props} />
);

export function ModalContainer({ open, children, setOpen, maxWidth }: modalProps) {
  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth={maxWidth || 'lg'}
      TransitionComponent={Transition}
      keepMounted
      sx={styledModal.container}
      onClose={() => setOpen}
      aria-describedby="alert-dialog-slide-description"
    >
      <Box sx={styledModal.context}>
        <DialogContent
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            gap: 1,
          }}
        >
          {children}
        </DialogContent>
      </Box>
    </Dialog>
  );
}
