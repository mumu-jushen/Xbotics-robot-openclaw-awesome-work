import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config

// 1. 获取环境变量并判断
// 如果环境变量 EDGEONE 等于 '1'，说明在 EdgeOne 环境，使用根路径 '/'
// 否则默认是 GitHub Pages 环境，使用仓库子路径 '/easy-vecdb/'
const isEdgeOne = process.env.EDGEONE === '1'
const baseConfig = isEdgeOne ? '/' : '/repo-template/'

export default defineConfig({
  lang: 'zh-CN',
  title: "Xbotics OpenClaw 机器人化项目文档",
  description: "Xbotics 社区「将 OpenClaw 部署到实体机器人上」的完整项目文档与实战教程",
  base: baseConfig,
  markdown: {
    math: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/datawhale-logo.png',
    nav: [
      { text: '项目主页（GitHub）', link: 'https://github.com/datawhalechina/repo-template' },
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },
    sidebar: [
      {
        items: [
          { text: '项目概览与快速上手', link: '/chapter1/' },
          { text: '示例项目与实战案例', link: '/chapter5/' },
          { text: '活动与赛事', link: '/chapter6/' },
          { text: '常见问题 / FAQ', link: '/appendix-faq' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/datawhalechina/repo-template' }
    ],

    editLink: {
      pattern: 'https://github.com/datawhalechina/repo-template/blob/main/docs/:path'
    }
  }
})
