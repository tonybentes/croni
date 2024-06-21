import { _mock } from 'src/_mock';

// ----------------------------------------------------------------------

export const JWT_SECRET = 'minimal-secret-key';

export const JWT_EXPIRES_IN = '3 days';

export const _users = [
  {
    id: '8864c717-587d-472a-929a-8e5f298024da-0',
    displayName: 'Mario Oliveira dos Santos',
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
    //
    email: 'demo@croni.com.br',
    password: '@demo1',
  },
];
