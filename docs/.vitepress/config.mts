import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/DigitalForensicsExperiments/',
  title: 'Digital Forensics Experiments',
  description: 'Course notes and hands-on labs in digital forensics',

  themeConfig: {
    search: { provider: 'local' }
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: [{ text: 'Home', link: '/' }],
        sidebar: [
          { text: 'Home', link: '/' },
          { text: 'Lab 2 — File Recovery', link: '/lab2/' },
          { text: 'Lab 3 — Disk Imaging', link: '/lab3/' },
          { text: 'Lab 4 — Autopsy Analysis', link: '/lab4/' },
          { text: 'Lab 5 — Evidence Forms', link: '/lab5/' },
          { text: 'Lab 6 — Network Traffic Analysis', link: '/lab6/' },
          {
            text: 'Lab 7 — Windows Incident Response',
            items: [
              { text: 'Lab Notes', link: '/lab7/' },
              { text: 'Registry Analysis', link: '/lab7/register-analysis' }
            ]
          }
        ]
      }
    },

    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: '数字取证实验',
      description: '数字取证课程笔记与实验操作指南',
      themeConfig: {
        nav: [{ text: '首页', link: '/zh/' }],
        sidebar: [
          { text: '首页', link: '/zh/' },
          { text: 'Lab 2 — 文件恢复', link: '/zh/lab2/' },
          { text: 'Lab 3 — 磁盘镜像', link: '/zh/lab3/' },
          { text: 'Lab 4 — Autopsy 分析', link: '/zh/lab4/' },
          { text: 'Lab 5 — 证据表格', link: '/zh/lab5/' },
          { text: 'Lab 6 — 网络流量分析', link: '/zh/lab6/' },
          {
            text: 'Lab 7 — Windows 应急响应',
            items: [
              { text: '实验笔记', link: '/zh/lab7/' },
              { text: '注册表分析', link: '/zh/lab7/register-analysis' }
            ]
          }
        ]
      }
    }
  }
})
