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
          { text: 'Lab 4 — Autopsy Analysis', link: '/lab4/' }
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
          { text: 'Lab 4 — Autopsy 分析', link: '/zh/lab4/' }
        ]
      }
    }
  }
})
