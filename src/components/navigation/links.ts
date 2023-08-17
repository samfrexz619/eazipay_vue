import { uid } from "uid"

export type Links = {
  path: string;
  name: string;
  id: number | string;
}

export const links: Links[] = [
  {
    path: '#',
    name: 'Individual',
    id: 1
  },
  {
    path: '#',
    name: 'Business',
    id: 2
  },
  {
    path: '#',
    name: 'Pricing',
    id: 3
  },
  {
    path: '#',
    name: 'Set your payroll',
    id: 4
  },
]

export const resources:Links[] = [
  {
    path: '#',
    name: 'FAQs',
    id: 5
  },
  {
    path: '#',
    name: 'Blog',
    id: 6
  },
  {
    path: '#',
    name: 'Career',
    id: 7
  },
  {
    path: '#',
    name: 'Customer Stories',
    id: 8
  },
]

export const dashboardLinks: Links[] = [
  {
    path: 'dashboard',
    name: 'dashboard',
    id: uid(4)
  },
  {
    path: 'wallet',
    name: 'wallet',
    id: uid(4)
  },
  {
    path: 'wallet',
    name: 'employment management',
    id: uid(4)
  },
  {
    path: 'payroll',
    name: 'payroll',
    id: uid(4)
  },
  {
    path: 'wallet',
    name: 'compliance',
    id: uid(4)
  },
  {
    path: 'wallet',
    name: 'quick loan',
    id: uid(4)
  },
  {
    path: 'wallet',
    name: 'book keeping',
    id: uid(4)
  },
  {
    path: 'wallet',
    name: 'support',
    id: uid(4)
  },
  {
    path: 'wallet',
    name: 'settings',
    id: uid(4)
  },
]