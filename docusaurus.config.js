// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */

async function createConfig(){
  const katex = (await import('rehype-katex')).default;
  const math = (await import('remark-math')).default;
  const config = {
    title: 'ETM/P | Powerful, Fast, Low Cost For Web3',
    tagline: 'ETM/P',
    url: 'https://etm.network',
    baseUrl: '/',
    onBrokenLinks: 'log',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.svg',
    organizationName: 'ETM/P', // Usually your GitHub org/user name.
    projectName: 'ETM/P', // Usually your repo name.
    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            editUrl: '/',
            remarkPlugins: [math],
            rehypePlugins: [katex],
          },
          // blog: {
          //   showReadingTime: true,
          //   // Please change this to your repo.
          //   editUrl:
          //     '/',
          // },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],
    stylesheets: [
      {
        href: '/katex/katex.min.css',
        type: 'text/css'
      },
    ],
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: '',
          logo: {
            alt: 'ETM/P',
            src: 'img/logo.svg',
            srcDark: 'img/logo-dark.svg',
            width: '80px'
          },
          items: [
            {
              type: 'doc',
              docId: 'basics/blockchain',
              position: 'left',
              label: 'Basics',
            },
            {
              type: 'doc',
              docId: 'whitepaper/synopsis',
              position: 'left',
              label: 'Whitepaper',
            },
            {
              type: 'doc',
              docId: 'develop/getting-started',
              position: 'left',
              label: 'Develop',
            },
            // {to: '/blog', label: 'Blog', position: 'left'},
            {
              href: 'https://github.com/ETM-Proterozoic/etmp-docs',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  };
  return config
}

module.exports = createConfig;
