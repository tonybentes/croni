'use client';

import { z as zod } from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';
import { Box, Paper, Button, Typography } from '@mui/material';

import { useRouter } from 'src/routes/hooks';

import { useAlert } from 'src/hooks/use-alert';
import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import { Iconify } from 'src/components/iconify';
import { Form, Field } from 'src/components/hook-form';
import { ModalContainer } from 'src/components/Dialog/Container/container-dialog';

// ----------------------------------------------------------------------
interface formProps {
  openModal: boolean;
  toggleModal: () => void;
}
export type CreateUserSchemaType = zod.infer<typeof SignInSchema>;

export const SignInSchema = zod
  .object({
    email: zod
      .string()
      .min(1, { message: 'Email é Obrigatório!' })
      .email({ message: 'Email precisa ter um formato válido!' }),
    password: zod
      .string()
      .min(1, { message: 'Senha é obrigatória!' })
      .min(6, { message: 'Senha precisa ter no mínimo 6 caracteres!' }),
    confirmPassword: zod
      .string()
      .min(1, { message: 'Senha é obrigatória!' })
      .min(6, { message: 'Senha precisa ter no mínimo 6 caracteres!' }),
    name: zod.string().min(1, { message: 'Nome é obrigatório!' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não são iguais!',
    path: ['confirmPassword'],
  });

// ----------------------------------------------------------------------

export function CreateAccount({ openModal, toggleModal }: formProps) {
  const router = useRouter();
  const showAlert = useAlert();

  const [errorMsg, setErrorMsg] = useState('');

  const password = useBoolean();
  const sizeScreenMD = useResponsive('between', 'xs', 'md');

  const methods = useForm<CreateUserSchemaType>({
    resolver: zodResolver(SignInSchema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log(data);
      showAlert(
        `Enviamos um e-mail para ${data.email}. Clique no link do e-mail para concluir o cadastro.`,
        'success'
      );
      router.refresh();
    } catch (error) {
      console.error(error);
      setErrorMsg(error instanceof Error ? error.message : error);
    }
  });

  const renderForm = (
    <Stack spacing={3}>
      <Field.Text name="name" label="Nome" InputLabelProps={{ shrink: true }} />
      <Field.Text name="email" label="E-mail" InputLabelProps={{ shrink: true }} />

      <Stack spacing={1.5}>
        <Field.Text
          name="password"
          label="Senha"
          placeholder="6+ characters"
          type={password.value ? 'text' : 'password'}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={password.onToggle} edge="end">
                  <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack spacing={1.5}>
        <Field.Text
          name="confirmPassword"
          label="Confirme senha"
          placeholder="6+ characters"
          type={password.value ? 'text' : 'password'}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={password.onToggle} edge="end">
                  <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

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
      {!!errorMsg && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {errorMsg}
        </Alert>
      )}

      <Paper sx={sizeScreenMD ? styledForm.paperMB : styledForm.paper}>
        <Stack spacing={4}>
          <Box>
            <Typography variant="h4">Cadastre-se</Typography>
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
