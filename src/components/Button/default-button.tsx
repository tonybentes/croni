import { LoadingButton } from '@mui/lab';

interface buttonProps {
  nameButton: string;
  variant?: 'text' | 'outlined' | 'contained';
  size?: 'small' | 'medium' | 'large';
  loading: boolean;
  onClick?: () => void;
  type: 'submit' | 'reset' | 'button';
}

export function DefaultButton({ nameButton, variant, size, loading, onClick, type }: buttonProps) {
  return (
    <LoadingButton
      loading={loading}
      variant={variant ?? 'contained'}
      size={size ?? 'medium'}
      sx={{ borderRadius: '30px' }}
      onClick={onClick}
      type={type}
    >
      {nameButton}
    </LoadingButton>
  );
}
