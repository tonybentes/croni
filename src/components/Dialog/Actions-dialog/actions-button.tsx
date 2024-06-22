import type { ReactNode } from 'react';

import { Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';

interface actions {
  handleSubmit: () => void;
  handleCancel: () => void;
  nameButton?: string;
}
interface actionsProps {
  nameAction: string;
  component: ReactNode;
}

export const ActionsCloseModal = ({ handleCancel, handleSubmit, nameButton }: actions) => {
  const components: actionsProps[] = [
    {
      nameAction: 'cancel',
      component: <Button onClick={handleCancel}>Cancelar</Button>,
    },
    {
      nameAction: nameButton || 'Delete',
      component: (
        <LoadingButton loading={false} onClick={handleSubmit}>
          {nameButton || 'Delete'}
        </LoadingButton>
      ),
    },
  ];
  return components;
};
