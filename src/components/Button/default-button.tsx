import { LoadingButton } from '@mui/lab';

interface buttonProps {
  nameButton: string;
  variant?: 'text' | 'outlined' | 'contained';
  size?: 'small' | 'medium' | 'large';
  loading: boolean;
}

export function DefaultButton({ nameButton, variant, size, loading }: buttonProps) {
  return (
    <LoadingButton
      loading={loading}
      variant={variant ?? 'contained'}
      size={size ?? 'medium'}
      sx={{ borderRadius: '30px' }}
    >
      {nameButton}
    </LoadingButton>
  );
}
