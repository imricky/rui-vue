module.exports = {
  title: 'Rui-Vue',
  description: 'The Way to Explore Vue Components',
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean最后更新时间
    sidebar: [
      {
        title: '介绍',
        collapsable: false,
        children: [
          '/getstart/',
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/input',
          '/components/row',
          '/components/popover',
          '/components/toast',
          '/components/pagebar',
        ]
      },
    ],
    // sidebar: [
    //   '/',
    //   '/about',
    // ],
    nav: [
      { text: 'Home', link: '/' },
      { text: '博客', link: 'http://blogv2.rickyer.com' },
      { text: '短链接', link: 'http://su.rickyer.com' },
      { text: 'Github', link: 'https://github.com/imricky' },
    ]
  }
}
