# slishy 的公开日记

Astro 静态博客，搭配 Pages CMS 可视化写作后台。桌面和手机均适配。

## 本地预览

需要 Node.js 24（也可先执行 `nvm use`）。

```sh
npm install
npm run dev
```

浏览器打开终端显示的地址。生产构建使用 `npm run build`，产物在 `dist/`。

## 第一次上线（GitHub 用户名：Sslishy）

1. 在 GitHub 新建 **公开** 仓库 `Sslishy.github.io`。如果已有这个仓库和网站，先确认如何合并，不要覆盖旧网站。
2. 将这个文件夹的源码提交到该仓库的 `main` 分支。需要包含隐藏文件 `.pages.yml`、`.github/workflows/deploy.yml` 和 `package-lock.json`；不上传 `node_modules` 或 `dist`。
3. 仓库进入 **Settings → Pages → Build and deployment → Source**，选择 **GitHub Actions**。
4. 进入 **Actions → Publish journal → Run workflow**。等待 build 和 deploy 都成功。
5. 网站地址为 `https://sslishy.github.io/`。本项目按账户主页根路径配置；如果改用普通项目仓库，需要同步调整 Astro base、页面链接和 CMS 图片路径。

## 连接写作后台（只做一次）

1. 打开 <https://app.pagescms.org/>，使用 **Sslishy** 的 GitHub 账号登录。
2. 按提示安装 Pages CMS GitHub App，仅选择博客仓库。
3. 选择 `Sslishy.github.io` 仓库和 `main` 分支。
4. 后台会读取 `.pages.yml`，显示「我的日记」「个人资料」和图片管理。

后台是独立服务，首次登录和仓库授权需要账号本人完成。源码配置完成不代表后台已经连接。

## 以后如何写日记

1. 在后台进入「我的日记」，新建一篇。
2. 填标题、日期、分类和摘要；封面可以不填。
3. 在「正文」可视化编辑器内写作，使用标题、粗体、引用、列表、链接、图片等工具。
4. 没写完就保留「暂不在网站展示」开启并保存。
5. 想公开展示时关闭这个开关，再保存。保存会写入 GitHub 并触发部署；在 Actions 确认绿色成功后刷新网站。
6. 想改文章，就打开原文章编辑并再次保存。文件名保持不变时，文章链接也保持不变。

注意：草稿只是不生成公开网页，**公开仓库里的文章原文仍可被查看**。本站用于公开分享。

### 排版小建议

- 日记标题填在标题字段，正文用二级/三级标题组织内容。
- 一段写一个意思，段落之间留一个空行。
- 照片直接使用图片工具上传，图片宽度和手机适配由网站处理。
- 引用使用引用块，重点用加粗，避免每段都突出。
- 图片上传前适当压缩，建议单张约 1–2 MB 以内。图片文件保存在仓库中。
- 可视化编辑器用于编辑内容结构，网站的最终字体、行距和布局由页面样式统一控制。

## 改自己的资料

后台打开「个人资料」，可修改昵称、简介、头像、关于页和公开联系方式。留空头像会显示昵称首字母。留空邮箱不会显示邮箱链接。

当前简介是可替换的起始文案，三篇文章都标为「示例」。可以在后台修改成自己的内容并关闭「示例文章」，或直接删除它们。示例照片位于 `public/images/`，出处见 `ASSETS.md`。

## 文件位置

- `src/content/diary/`：日记 Markdown 文件
- `src/data/site.json`：个人资料
- `public/images/`：封面、头像和正文图片
- `src/styles/global.css`：全站排版与配色
- `.pages.yml`：写作后台字段
- `.github/workflows/deploy.yml`：自动部署

英文使用参考站同款 Josefin Slab，字体文件已保存在 `public/fonts/`，无需访问 Google 即可显示。中文使用轻字重 Noto Sans SC，在线字体不可用时回退到设备中文字体。

## 参考文档

- Pages CMS：<https://pagescms.org/docs/quick-start/>
- 写作编辑器：<https://pagescms.org/docs/configuration/fields/rich-text/>
- Astro 部署：<https://docs.astro.build/en/guides/deploy/github/>
