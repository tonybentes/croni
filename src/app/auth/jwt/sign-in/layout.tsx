import { AuthSplitLayout } from 'src/layouts/auth-split';

import { GuestGuard } from 'src/auth/guard';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <GuestGuard>
      <AuthSplitLayout section={{ title: 'Olá, bem vindo de volta' }}>{children}</AuthSplitLayout>
    </GuestGuard>
  );
}
