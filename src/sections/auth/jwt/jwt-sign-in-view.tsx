'use client';

import { z as zod } from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/use-boolean';

import { Iconify } from 'src/components/iconify';
import { Form, Field } from 'src/components/hook-form';

import { useAuthContext } from 'src/auth/hooks';
import { signInWithPassword } from 'src/auth/context/jwt';

import { CreateAccount } from './create-account';
import { ValidateEmailForm } from './request-email-validation';

// ----------------------------------------------------------------------

export type SignInSchemaType = zod.infer<typeof SignInSchema>;

export const SignInSchema = zod.object({
  email: zod
    .string()
    .min(1, { message: 'Email é Obrigatório!' })
    .email({ message: 'Email precisa ter um formato válido!' }),
  password: zod
    .string()
    .min(1, { message: 'Senha é obrigatória!' })
    .min(6, { message: 'Senha precisa ter no mínimo 6 caracteres!' }),
});

// ----------------------------------------------------------------------

export function JwtSignInView() {
  const router = useRouter();

  const { checkUserSession } = useAuthContext();

  const [errorMsg, setErrorMsg] = useState('');
  const [typeModal, setTypeModal] = useState<{ resetPassword: boolean; createAccount: boolean }>({
    resetPassword: false,
    createAccount: false,
  });

  const password = useBoolean();

  const defaultValues = {
    email: 'demo@croni.com.br',
    password: '@demo1',
  };

  const methods = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await signInWithPassword({ email: data.email, password: data.password });
      await checkUserSession?.();

      router.refresh();
    } catch (error) {
      console.error(error);
      setErrorMsg(error instanceof Error ? error.message : error);
    }
  });

  const renderHead = (
    <Stack spacing={1.5} sx={{ mb: 5 }}>
      <Typography variant="h3">Bem-vindo</Typography>
    </Stack>
  );

  const closeAllModal = () => {
    setTypeModal({ createAccount: false, resetPassword: false });
  };

  const renderForm = (
    <Stack spacing={3}>
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
        <Stack flexDirection="row" justifyContent="space-between">
          <Button
            variant="text"
            onClick={() => setTypeModal({ createAccount: false, resetPassword: true })}
            type="button"
          >
            <Typography variant="caption" sx={styledForm.typography}>
              Esqueci minha senha
            </Typography>
          </Button>
          <Button
            variant="text"
            onClick={() => setTypeModal({ createAccount: true, resetPassword: false })}
          >
            <Typography variant="caption" sx={styledForm.typography}>
              Não tenho cadastro
            </Typography>
          </Button>
        </Stack>
      </Stack>

      <LoadingButton
        fullWidth
        color="info"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        loadingIndicator="Entrando..."
      >
        Entrar
      </LoadingButton>
    </Stack>
  );
  return (
    <>
      {renderHead}

      {!!errorMsg && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {errorMsg}
        </Alert>
      )}

      <Form methods={methods} onSubmit={onSubmit}>
        {renderForm}
      </Form>
      <ValidateEmailForm openModal={typeModal.resetPassword} toggleModal={closeAllModal} />
      <CreateAccount openModal={typeModal.createAccount} toggleModal={closeAllModal} />
    </>
  );
}

export const styledForm = {
  typography: {
    color: '#919EAB',
    '&:hover': { textDecoration: 'underline', cursor: 'pointer' },
  },
};
