import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const CONTACT_DATA = [
  {
    id: 'github',
    label: 'Github',
    href: 'https://github.com/rivascode-dev',
    icon: Github,
    isSocial: true,
  },
  {
    id: 'linkedin',
    label: 'Linkedin',
    href: 'https://www.linkedin.com/in/rivascode/',
    icon: Linkedin,
    isSocial: true,
  },
  {
    id: 'email',
    label: 'Email',
    value: 'rivascode.dev@gmail.com',
    href: 'mailto:rivascode.dev@gmail.com',
    icon: Mail,
    isSocial: true,
    isInfo: true,
  },
  {
    id: 'location',
    label: 'Ubicación',
    value: 'Santiago, Chile',
    icon: MapPin,
    isInfo: true,
  },
];

export const socialLinks = CONTACT_DATA.filter((item) => item.isSocial);
export const contactInfo = CONTACT_DATA.filter((item) => item.isInfo);
