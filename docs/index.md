---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Xbotics 社区"
  text: "OpenClaw 机器人化项目（Xbotics）"
  tagline: 让 OpenClaw 走下电脑、登上真实机器人的一站式教程 / 项目 / 活动中心
  image:
    src: /learning.GIF
    alt: Xbotics OpenClaw 机器人化项目
  actions:
    - theme: brand
      text: 项目概览与总体方案
      link: /chapter1/

features:
  - title: 🤖 OpenClaw 机器人化
    details: 从桌面 Agent 到实体机器人，让大模型经由 OpenClaw 控制真实世界
  - title: 📚 部署教程 + 实战项目
    details: 提供从硬件搭建、软件部署到任务设计的完整链路，适合作为课程与自学材料
  - title: 🧑‍🤝‍🧑 Xbotics 社区
    details: 通过活动与赛事链接开发者、学生与研究者，共建开放的机器人生态
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/Sm1les.png',
    name: '（示例）Alice',
    title: 'Xbotics-Robot-Claw 项目负责人',
    links: [
      { icon: 'github', link: 'https://github.com/Sm1les' },
    ]
  },
  {
    avatar: 'https://www.github.com/Sm1les.png',
    name: '（示例）Bob',
    title: '教程与文档维护',
    links: [
      { icon: 'github', link: 'https://github.com/Sm1les' },
    ]
  }
]
</script>


<h2 align="center">Team</h2>
<VPTeamMembers size="small" :members />