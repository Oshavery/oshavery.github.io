const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Oshavery Documents',
  tagline: 'Discordライクなチャットアプリケーション',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Undecided-discord', // Usually your GitHub org/user name.
  projectName: 'Oshavery', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/undecided-discord/oshavery',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Oshavery Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {          
            type: 'docsVersionDropdown', 
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Oshaveryについて',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Oshaveryとは？',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Repos',
            items: [
              {
                label: 'レポジトリ(全体)',
                href: 'https://github.com/undecided-discord/oshavery',
              },
              {
                label: 'レポジトリ(クライアント)',
                href: 'https://github.com/undecided-discord/oshavery-front',
              },
              {
                label: 'レポジトリ(サーバー)',
                href: 'https://github.com/undecided-discord/oshavery-server',
              },
              {
                label: '共同開発鯖公式Twitter',
                href: 'https://twitter.com/Undecided_disc',
              },
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Oshavery HQ Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
