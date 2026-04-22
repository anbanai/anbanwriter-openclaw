# 案板创作助手 OpenClaw 插件

微信公众号 & 小红书 AI 内容创作插件，支持 OpenClaw 平台的原生插件集成。

## 安装

```bash
git clone https://github.com/anbanai/anbanwriter-openclaw.git
cd anbanwriter-openclaw
openclaw plugins install .
```

## 创作引擎

| 引擎 | 触发关键词 | 说明 |
|-------|-----------|------|
| wechat-article | "写文章"、"写一篇"、"发文章" | 微信公众号图文 |
| wechat-xls | "小绿书"、"图片帖"、"newspic" | 微信图片帖 |
| rednote | "小红书"、"种草"、"仿写" | 小红书图文 |
| flower | "鲜花"、"花卉图片" | 鲜花图片生成 |

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
├── themes/                 # 排版主题 (YAML)
├── writers/                # 写作风格 (YAML)
├── package.json
└── tsconfig.json
```

## License

MIT
