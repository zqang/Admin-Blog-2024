import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Blog',
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/pencil-square.svg',
          label: 'Post',
          route: '/admin/blog',
          children: [
            { label: 'Dashboard', route: '/admin/blog/dashboard' },
            { label: 'Create New Post', route: '/admin/blog/new' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'Author',
          route: '/admin/author',
          children: [{ label: 'Profile', route: '/admin/author/profile' }],
        },
        {
          icon: 'assets/icons/heroicons/outline/rectangle-group.svg',
          label: 'Content Organization',
          route: '/admin/content-organization',
          children: [
            {
              label: 'Category',
              route: '/admin/content-organization/category',
            },
            { label: 'Tag', route: '/admin/content-organization/tag' },
          ],
        },
      ],
    },
    // {
    //   group: 'Collaboration',
    //   separator: true,
    //   items: [
    //     {
    //       icon: 'assets/icons/heroicons/outline/download.svg',
    //       label: 'Download',
    //       route: '/download',
    //     },
    //     {
    //       icon: 'assets/icons/heroicons/outline/gift.svg',
    //       label: 'Gift Card',
    //       route: '/gift',
    //     },
    //     {
    //       icon: 'assets/icons/heroicons/outline/users.svg',
    //       label: 'Users',
    //       route: '/users',
    //     },
    //   ],
    // },
    {
      group: 'Config',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/cog.svg',
          label: 'Settings',
          route: '/settings',
        },
        {
          icon: 'assets/icons/heroicons/outline/bell.svg',
          label: 'Notifications',
          route: '/gift',
        },
        {
          icon: 'assets/icons/heroicons/outline/folder.svg',
          label: 'Folders',
          route: '/folders',
          children: [
            { label: 'Current Files', route: '/folders/current-files' },
            { label: 'Downloads', route: '/folders/download' },
            { label: 'Trash', route: '/folders/trash' },
          ],
        },
      ],
    },
  ];
}
