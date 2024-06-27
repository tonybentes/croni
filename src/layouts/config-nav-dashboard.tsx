import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`${CONFIG.site.basePath}/assets/icons/navbar/${name}.svg`} />
);

const ICONS = {
  star: icon('ic-star'),
  job: icon('ic-job'),
  blog: icon('ic-blog'),
  chat: icon('ic-chat'),
  mail: icon('ic-mail'),
  user: icon('ic-user'),
  file: icon('ic-file'),
  lock: icon('ic-lock'),
  tour: icon('ic-tour'),
  order: icon('ic-order'),
  label: icon('ic-label'),
  blank: icon('ic-blank'),
  kanban: icon('ic-kanban'),
  folder: icon('ic-folder'),
  course: icon('ic-course'),
  banking: icon('ic-banking'),
  booking: icon('ic-booking'),
  invoice: icon('ic-invoice'),
  product: icon('ic-product'),
  calendar: icon('ic-calendar'),
  disabled: icon('ic-disabled'),
  external: icon('ic-external'),
  menuItem: icon('ic-menu-item'),
  ecommerce: icon('ic-ecommerce'),
  analytics: icon('ic-analytics'),
  dashboard: icon('ic-dashboard'),
  parameter: icon('ic-parameter'),
};

// ----------------------------------------------------------------------

export const navData = [
  /**
   * Overview
   */
  {
    subheader: 'Croni 1.0',
    items: [
      { title: 'Tratamento', path: paths.dashboard.root, icon: ICONS.kanban },
      { title: 'Diário', path: paths.dashboard.daily, icon: ICONS.file },
      { title: 'Agenda', path: paths.dashboard.calendar, icon: ICONS.calendar },
      { title: 'Comunidade', path: paths.dashboard.chat, icon: ICONS.chat },
      {
        title: 'Dicas',
        path: paths.dashboard.tips.articles,
        icon: ICONS.course,
        children: [
          { title: 'Cuidados e Bem ester', path: paths.dashboard.tips.articles },
          { title: 'Videos educativos', path: paths.dashboard.tips.videos },
        ]
      },
    ],
  },
];
