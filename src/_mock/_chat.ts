import cloneDeep from 'lodash/cloneDeep';

import uuidv4 from 'src/utils/uuidv4';
import { fSub } from 'src/utils/format-time';

import { _mock } from './_mock';
import { _files } from './_files';

// ----------------------------------------------------------------------

const MY_CONTACT = {
  status: 'online',
  id: '8864c717-587d-472a-929a-8e5f298024da-0',
  role: 'admin',
  email: 'demo@croni.com.br',
  name: 'Mario Oliveira dos Santos',
  lastActivity: fSub({ days: 0 }),
  address: '90210 Avenida Eduardo Ribeiro',
  avatarUrl: _mock.image.avatar(24),
  phoneNumber: '+55 92777666555',
};

// ----------------------------------------------------------------------

export const _contacts = [...Array(20)].map((_, index) => {
  const status =
    (index % 2 && 'online') || (index % 3 && 'offline') || (index % 4 && 'alway') || 'busy';

  return {
    status,
    id: _mock.id(index),
    role: _mock.role(index),
    email: _mock.email(index),
    name: _mock.fullName(index),
    lastActivity: _mock.time(index),
    address: _mock.fullAddress(index),
    avatarUrl: _mock.image.avatar(index),
    phoneNumber: _mock.phoneNumber(index),
  };
});

const _conversations = [
  {
    id: `${_mock.id(2)}gr`,
    participants: [MY_CONTACT, _contacts[1], _contacts[2], _contacts[4], _contacts[3]],
    type: 'GROUP',
    unreadCount: 0,
    messages: [
      {
        id: uuidv4(),
        body: _mock.communityConversation(1),
        contentType: 'text',
        attachments: _files.slice(0, 5),
        createdAt: fSub({ days: 3, hours: 2, minutes: 30 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.communityConversation(2),
        contentType: 'text',
        attachments: _files.slice(5, 6),
        createdAt: fSub({ days: 3, hours: 2, minutes: 29 }),
        senderId: _contacts[1].id,
      },
      {
        id: uuidv4(),
        body: _mock.communityConversation(3),
        contentType: 'text',
        attachments: _files.slice(6, 7),
        createdAt: fSub({ days: 3, hours: 2, minutes: 28 }),
        senderId: _contacts[2].id,
      },
      {
        id: uuidv4(),
        body: _mock.communityConversation(4),
        contentType: 'text',
        attachments: _files.slice(7, 8),
        createdAt: fSub({ days: 3, hours: 2, minutes: 27 }),
        senderId: _contacts[4].id,
      },
      {
        id: uuidv4(),
        body: _mock.communityConversation(5),
        contentType: 'text',
        attachments: _files.slice(8, 9),
        createdAt: fSub({ days: 3, hours: 2, minutes: 26 }),
        senderId: MY_CONTACT.id,
      },
      {
        id: uuidv4(),
        body: _mock.communityConversation(6),
        contentType: 'text',
        attachments: _files.slice(9, 10),
        createdAt: fSub({ days: 3 }),
        senderId: _contacts[3].id,
      },
    ],
  },
];

// ----------------------------------------------------------------------

let data = _conversations;

export function getData() {
  return cloneDeep(data);
}

export function saveData(newData: Record<string, any>[]) {
  const reduceItems = Object.values(
    newData.reduce((accumulator: Record<string, any>, current: any) => {
      if (!accumulator[current.id]) {
        accumulator[current.id] = current;
      } else {
        accumulator[current.id] = { ...accumulator[current.id], ...current };
      }
      return accumulator;
    }, {})
  );

  data = reduceItems;
}
