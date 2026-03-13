import { Github, Linkedin, Mail, MapPin, type LucideIcon } from 'lucide-react';

export interface ContactItem {
  id: string;
  label: string;
  href?: string;
  value?: string;
  icon: LucideIcon;
  isSocial?: boolean;
  isInfo?: boolean;
}

export const CONTACT_DATA: ContactItem[] = [
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

export const SOCIAL_LINKS = CONTACT_DATA.filter((item) => item.isSocial);
export const CONTACT_INFO = CONTACT_DATA.filter((item) => item.isInfo);
