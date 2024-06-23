import { z as zod } from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { LoadingButton } from '@mui/lab';
import { Box, Stack, Paper, Button, Typography } from '@mui/material';

import { useAlert } from 'src/hooks/use-alert';
import { useResponsive } from 'src/hooks/use-responsive';

import { Form, Field } from 'src/components/hook-form';
import { ModalContainer } from 'src/components/Dialog/Container/container-dialog';

export type SignInSchemaType = Zod.infer<typeof EmailSchema>;
export const EmailSchema = zod.object({
  email: zod
    .string()
    .min(1, { message: 'Email é Obrigatório!' })
    .email({ message: 'Email precisa ter um formato válido!' }),
});

interface formProps {
  openModal: boolean;
  toggleModal: () => void;
}

export function ValidateEmailForm({ openModal, toggleModal }: formProps) {
  const [_errorMsg, setErrorMsg] = useState('');
  const sizeScreenMD = useResponsive('between', 'xs', 'md');
  const showAlert = useAlert();

  const methods = useForm<SignInSchemaType>({
    resolver: zodResolver(EmailSchema),
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log(data);
      toggleModal();
      showAlert(
        `Enviamos um e-mail para ${data.email}. Clique no link do e-mail para redefinir a senha.`,
        'success'
      );
    } catch (error) {
      console.error(error);
      setErrorMsg(error instanceof Error ? error.message : error);
    }
  });

  const renderForm = (
    <Stack spacing={3}>
      <Field.Text name="email" label="E-mail" InputLabelProps={{ shrink: true }} />
      <Box sx={{ display: 'flex', gap: 3 }}>
        <Button variant="contained" fullWidth onClick={toggleModal}>
          Cancelar
        </Button>
        <LoadingButton
          fullWidth
          color="info"
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          loadingIndicator="Entrando..."
        >
          Enviar
        </LoadingButton>
      </Box>
    </Stack>
  );
  return (
    <ModalContainer open={openModal} setOpen={toggleModal}>
      <Paper sx={sizeScreenMD ? styledForm.paperMB : styledForm.paper}>
        <Stack spacing={4}>
          <Box>
            <Typography variant="h6">Esqueci minha senha.</Typography>
            <Typography>Informe o endereço de e-mail cadastrado.</Typography>
          </Box>
          <Form methods={methods} onSubmit={onSubmit}>
            {renderForm}
          </Form>
        </Stack>
      </Paper>
    </ModalContainer>
  );
}

export const styledForm = {
  paper: {
    width: '40%',
    padding: 4,
  },
  paperMB: {
    width: '100%',
    padding: 4,
  },
};
