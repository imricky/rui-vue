module.exports = {
  base: '/gulu/',
  title: 'Gulu Vue 组件',
  description: 'A Simple Vue Component library',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '导航', link: '/guide/' },
      { text: '扩展', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get-start/',
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button',
        ]
      },
    ],
    lastUpdated: 'Last Updated',
  }
}