# Anban 智能创作助手 OpenClaw 插件

> 微信公众号 & 小红书 AI 内容创作插件，支持 OpenClaw 平台的原生插件集成。

## 快速开始

### 1. 安装插件

克隆插件仓库并安装：

```bash
git clone https://github.com/anbanai/anbanwriter-openclaw.git
cd anbanwriter-openclaw
openclaw plugins install .
```

### 2. 连接平台账号

安装后需要在 [Anban Web 管理端](https://creator.anbanai.com) 注册并创建 API Key，插件会通过 MCP 自动连接平台服务。

> 前往 [https://creator.anbanai.com/settings](https://creator.anbanai.com/settings) 创建 API Key。

### 3. 初始化配置

安装完成后，运行初始化命令，完成配置验证：

```
/init
```

### 4. 开始使用

用斜杠命令快速启动创作，或直接用自然语言描述：

```
/article AI Agent 入门指南          → 微信公众号图文
/rednote 降噪耳机种草笔记            → 小红书笔记
/xls 春日穿搭图片帖                  → 小绿书图片帖
/flower 春日鲜花摄影                  → 鲜花图片
```

## 创作引擎

| 引擎 | 触发关键词 | 说明 |
|-------|-----------|------|
| wechat-article | "写文章"、"写一篇"、"发文章" | 微信公众号图文（选题研究 → AI 写作 → 去痕优化 → SEO → 封面配图 → 草稿发布） |
| wechat-xls | "小绿书"、"图片帖"、"newspic" | 微信图片帖（选题研究 → 视觉风格 → 图片生成 → 草稿发布） |
| rednote | "小红书"、"种草"、"仿写" | 小红书图文（选题研究 → 内容创作 → 封面 + 配图 → 合规 → 归档） |
| flower | "鲜花"、"花卉图片" | 鲜花图片生成（花卉研究 → 提示词 → 批量生成 → 总结） |

## 开发

```bash
npm install
npm run build    # TypeScript 编译
npm run dev      # 监听模式
npm run lint     # 类型检查
```

## 项目结构

```
├── src/
│   ├── index.ts            # 插件入口
│   ├── lib.ts              # 共享工具
│   ├── commands/           # 命令注册
│   └── hooks/              # 质量检查钩子
├── skills/                 # 专业技能（18 个 SKILL.md）
├── themes/                 # 排版主题 (YAML)
├── writers/                # 写作风格 (YAML)
├── package.json
└── tsconfig.json
```

## 其他版本

- [Claude Code 插件](https://github.com/anbanai/anbanwriter-claudecode) — Claude Code Agent+Skill+MCP 插件版本
- [Web 管理端](https://creator.anbanai.com) — 在线管理后台，支持任务管理、积分充值等

## 加入社群

扫码加入 **Anban 智能创作助手讨论群**，获取使用技巧、功能更新和问题解答：

<img src="community-qr.jpg" alt="Anban 智能创作助手讨论群" width="200">

## License

MIT
