module.exports = {
  title: 'NFE-W`S BLOG',
  description: 'Just a study note for myself',
  head: [
    ['link', { rel: 'icon', href: '/assets/avatar.jpg' }], // 增加一个自定义的 favicon
  ],
  base: '/',
  markdown: {
    lineNumbers: true // 代码块显示行数
  },
  plugins: ['permalink-pinyin', ['autobar', {'pinyinNav': true}], 'rpurl'],
  themeConfig: {
    repo: 'https://github.com/nfe-w',
    repoLabel: 'GitHub',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Repo', link: 'https://github.com/nfe-w/my-note' },
    ],
  }
}