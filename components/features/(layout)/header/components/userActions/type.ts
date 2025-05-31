export type MenuItem = {
  label: string;
  href: string;
  icon: string;
};

type LinkAction = {
  type: 'link';
  href: string;
  icon: string;
  label: string;
};

type MenuAction = {
  type: 'menu';
  href: string;
  icon: string;
  label: string;
  menu: MenuItem[];
};

export type UserAction = (LinkAction | MenuAction)[];
