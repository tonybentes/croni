import { _mock } from 'src/_mock';

// To get the user from the <AuthContext/>, you can use

// Change:
// import { useMockedUser } from 'src/auth/hooks';
// const { user } = useMockedUser();

// To:
// import { useAuthContext } from 'src/auth/hooks';
// const { user } = useAuthContext();

// ----------------------------------------------------------------------

export function useMockedUser() {
  const user = {
    id: '8864c717-587d-472a-929a-8e5f298024da-0',
    displayName: 'Mario Oliveira dos Santos',
    email: 'demo@croni.com.br',
    photoURL: _mock.image.avatar(24),
    phoneNumber: _mock.phoneNumber(1),
    country: _mock.countryNames(1),
    address: '90210 Avenida Eduardo Ribeiro',
    state: 'Amazonas',
    city: 'Manaus',
    zipCode: '69010-001',
    about: 'Praesent turpis. Phasellus viverra nulla ut metus varius laoreet. Phasellus tempus.',
    role: 'admin',
    isPublic: true,
  };

  return { user };
}
