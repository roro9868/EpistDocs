// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Epist Docs',
  tagline: 'World\'s first answer-to-earn knowledge economy empowering the global community of knowledge seekers',
  url: 'https://docs.epist.xyz/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon2.png',
  organizationName: 'Epist', // Usually your GitHub org/user name.
  projectName: 'Epist Documentation', // Usually your repo name.
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: ['@easyops-cn/docusaurus-search-local',],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Epist',
        logo: {
          alt: 'Epist Logo',
          src: 'img/logo2.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'overview',
            position: 'left',
            label: 'Docs',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // { to: '/team', label: 'Team', position: 'right' },
          {
            href: 'https://epist.xyz/',
            label: 'Home',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'About',
            items: [
              {
                label: 'Website',
                to: 'https://epist.xyz/',
              },
              {
                label: 'Docs',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/JgRnsWTHXP',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/epist_xyz',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/epist/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Contact',
                to: 'mailto:admin@epist.xyz',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/epist-xyz',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Epist, Inc.`,
      },
      prism: {
        theme: darkCodeTheme,
        lightTheme: lightCodeTheme,
      },
    }),
};

module.exports = config;
