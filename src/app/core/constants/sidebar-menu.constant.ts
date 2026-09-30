export interface SidebarItem {
  label: string;
  icon: string;
  route: string;
  role?: string;
}

export const SIDEBAR_MENU: SidebarItem[] = [
  {
    label: 'Início',
    icon: 'home',
    route: '/home',
  },
  {
    label: 'Produtos',
    icon: 'add_shopping_cart',
    route: '/product',
    role: 'PRODUCT',
  },
  {
    label: 'Categorias',
    icon: 'category',
    route: '/category',
    role: 'CATEGORY',
  },
  {
    label: 'Clientes',
    icon: 'person',
    route: '/client',
    role: 'CLIENT',
  },
  {
    label: 'Usuários',
    icon: 'person',
    route: '/user/grid',
    role: 'USER',
  },
  {
    label: 'Atendimentos',
    icon: 'support_agent',
    route: '/atendimentos',
    role: 'ATTENDANCE',
  },
  {
    label: 'Consumo de Internet',
    icon: 'language',
    route: '/consumo',
    role: 'INTERNET_USAGE',
  },
];
