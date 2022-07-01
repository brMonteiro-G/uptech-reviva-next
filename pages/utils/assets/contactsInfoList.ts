
interface IContacts {
  urlImage: string;
  title: string;
  info?: string;
}

export const contactsInfoList: IContacts[] = [
  {
    title: 'WhatsApp',
    urlImage: '/images/whatsapp.png',
  },
  {
    title: 'Telephone',
    info: '(11) 2123-3321',
    urlImage: '/images/telephone-call.png'
  },
];
