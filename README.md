# Xbotics OpenClaw 机器人化项目中心（教程 / 项目 / 活动）

> [!WARNING]  
> 🦞 本仓库是 **Xbotics 社区「将 OpenClaw 部署到实体机器人上」的统一项目与文档中心**，专注于「让大模型通过 OpenClaw 控制真实机器人」，沉淀从硬件搭建 → 软件部署 → 控制与智能 → 活动 / 课程的一站式资料。当前仍在持续更新中，欢迎通过 Issue / PR 一起完善。

## 项目简介

整个项目的核心问题是：**如何把原本运行在电脑上的 OpenClaw / Picoclaw 能力，扩展到真实移动机器人 + 机械爪上，让大模型可以直接操作物理世界？**

为此，Xbotics 社区发起了本项目，主要目标是：

- 形成一套 **「OpenClaw → 实体机器人」的完整落地指南**，从硬件选型、底盘与机械臂搭建，到控制软件部署与联调；
- 提供可复现的 **HomeBot 等典型机器人平台方案**，让开发者可以快速搭建一台可控的 OpenClaw 机器人；
- 沉淀围绕该体系的 **课程、Workshop、比赛和研究项目**，方便教学和扩展。

你可以把它理解为：**「OpenClaw 机器人化（robotification）项目的官方教程 + 实战项目合集」**。

## 适用人群

本项目主要面向以下人群：

- **OpenClaw / 大模型 Agent 重度用户**：希望把已有的桌面 Agent 能力扩展到实体机器人；
- **机器人开发者 / Maker**：想要一台可复现、可改装的「具身智能实验平台」；
- **高校课程 / 研究团队**：需要一套「从 OpenClaw 到机器人」的完整教学与实验案例；
- **对 physical AI / 具身智能 感兴趣的开发者和同学**。

建议具备的基础能力（并非硬性要求）：

- 基本的 **Linux / Python** 或 **ROS / 机器人开发** 经验；
- 对机械、电路、控制理论有一定兴趣；
- 愿意阅读文档、动手调试，在遇到问题时主动提问与反馈。

## 在线阅读

- 项目文档主页：[Xbotics OpenClaw 机器人化项目文档](https://mumu-jushen.github.io/Xbotics-robot-openclaw-awesome-work/)

## 目录

下面是推荐的内容结构，你可以根据实际内容进行增删和重命名。✅ 代表已完成，🚧 代表进行中。

- **项目概览与总体方案（`docs/overview/`）**（🚧）  
  介绍为什么要做「机器人 × OpenClaw」项目与活动汇总、整个生态里常见的技术架构和组合方式，并给出如何使用本仓库（选项目、定路线、找活动）的总览指引。

- **项目与活动汇总（`docs/projects/`）**（🚧）  
  汇总优秀的「机器人 × OpenClaw / Picoclaw」项目与相关活动（awesome 风格清单）。  

  当前已包含条目示例：

  | 项目名 | 简介 |
  | ---- | ---- |
  | [HomeBot × OpenClaw：家庭服务机器人实验平台](https://github.com/choco-robot/HomeBot) | 基于宜家小推车 + Kiwi 底盘 +（可选）机械臂构建家庭服务机器人平台，通过 HomeBot 管理底盘 / 机械臂 / 视觉，并由 OpenClaw / Picoclaw 以自然语言控制。 |
  | [OpenClaw 控制 ROS2 Rover（Moe Sani 项目）](https://moesani.com/blog/openclaw-is-now-controlling-my-robot/) | 使用 Jetson Orin Nano + ROS 2 Humble 的小车，通过 OpenClaw 作为决策层，借助 ROS 2 话题和服务实现目标分解、运动控制与视觉理解。 |
  | [RosClaw：ROS2 meets OpenClaw](https://github.com/PlaiPin/rosclaw) | 提供 OpenClaw ↔ ROS2 的通用插件层，通过消息应用（Telegram/WhatsApp/Discord 等）发送指令，统一控制多种 ROS2 机器人。 |

- **活动与课程 / 赛事（`docs/events/`）**（🚧）  
  Xbotics 社区围绕本项目开展的 Workshop、课程、比赛等活动资料与经验。  
  - 已收录示例：  
    - MakerMods × OpenClaw 具身智能黑客松（详见 `docs/events/index.md`，报名链接：[Luma 活动页](https://luma.com/0z41nrkz)）

- **常见问题 / FAQ（`docs/appendix-faq.md`）**（🚧）  
  汇总在「机器人 × OpenClaw」项目实践中的常见问题、排障思路与参考资料。

> 提示：现有的《🦞+🤖：将 OpenClaw 部署到机器人上！详细开发指导【xbotics】.docx》文档，目前不直接拆入本仓库，只作为理解「HomeBot × OpenClaw」这一路线的背景材料；本仓库以「项目与活动汇总」为主。

## 项目与活动汇总概览

目前已收录的代表性项目包括（详情见 `docs/projects/`）：

- **HomeBot × OpenClaw：家庭服务机器人实验平台**（`docs/projects/index.md`）  
基于宜家小推车 + 全向轮 Kiwi 底盘 +（可选）机械臂构建移动抓取平台，通过 HomeBot 统一管理底盘 / 机械臂 / 视觉，并与 OpenClaw / Picoclaw 结合，实现「大模型控制的家庭机器人」。对应仓库：`https://github.com/choco-robot/HomeBot`。

## 贡献者名单


| 姓名        | 职责          | 简介                            |
| --------- | ----------- | ----------------------------- |
|   木木 | 项目负责人 / 总协调 | 负责 Xbotics-Robot-Claw 整体规划与统筹 |
| （示例）Bob   | 教程作者 / 文档维护 | 负责核心教程与文档内容编写与更新              |
| （示例）Carol | 硬件设计 / 结构优化 | 负责机械结构设计与迭代                   |
| （示例）Dave  | 活动组织 / 社区运营 | 负责活动策划与社群运营                   |


> 注：表头可自定义，但 **必须在名单中标明项目负责人**，便于外部同学联系和内部协作。

## 参与贡献

- **提 Issue 反馈问题 / 建议**  
  - 如果你在搭建或使用 Xbotics-Robot-Claw 的过程中遇到任何问题，欢迎通过 Issue 反馈。  
  - 反馈时尽量附上环境信息、操作步骤、日志截图或复现方式，方便大家快速定位问题。
- **提交 Pull Request 参与共建**  
  - 欢迎完善教程文档、补充案例代码、修正错别字或改进排版。  
  - 在发起 PR 前，建议先在 Issue 中简单说明你的想法，便于对齐方向。
- **参与与发起活动**  
  - 如果你希望基于本项目组织 Workshop / 课程实践 / 比赛等活动，可以先在 Issue 中发起讨论。  
  - 活动结束后，欢迎将录屏、讲义、作业题、优秀作品等沉淀回本仓库（或链接到外部资源）。
- **与 Xbotics 社区协作**  
  - 如果你希望在 Xbotics 社区内发起新的相关项目，欢迎在社区渠道（论坛、微信群、Discord 等）中发起话题并链接到本仓库。

## 关注与交流

你可以通过以下方式获取最新进展、参与交流（根据实际情况替换 / 补充）：

- Xbotics 社区主页 / 论坛链接；
- 公众号 / 社群二维码（如有）：可放在 `docs/assets` 下，并在此处引用展示；
- GitHub Issues / Discussions：用于问题反馈与方案讨论；
- 线下 / 线上活动公告：集中在「活动与赛事」文档中进行归档。

## LICENSE

本作品采用[知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/)进行许可。

*注：默认使用 CC 4.0 协议，也可根据自身项目情况选用其他协议*