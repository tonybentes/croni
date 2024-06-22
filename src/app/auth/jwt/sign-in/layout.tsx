import { AuthSplitLayout } from 'src/layouts/auth-split';

import { GuestGuard } from 'src/auth/guard';

import logoCroni from '../../../../assets/img/Croni.png';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <GuestGuard>
      <AuthSplitLayout section={{ imgUrl: logoCroni.src }}>{children}</AuthSplitLayout>
    </GuestGuard>
  );
}
