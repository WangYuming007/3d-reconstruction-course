# 智能三维重建技术与实践

## 项目简介

这是南京大学"智能三维重建技术与实践"课程的官方网站，展示课程信息、教学内容、论文研读和项目实践等相关内容。

## 课程概述

在影视、游戏、制造、自动驾驶与具身智能等场景中，真实传感数据与可用三维对象之间存在显著落差，需要以数据驱动的智能方法弥合。本课程聚焦于深度学习、可微渲染与神经场（如 NeRF、3D Gaussian Splatting）在智能三维重建领域的最新发展。

## 教学内容

- **专题一** | 几何重建与三维表示
- **专题二** | 材质与外观建模  
- **专题三** | 辐射场与 3D Gaussian Splatting

## 课程信息

- **授课教师**: 过洁，李元琪
- **授课对象**: 南京大学研究生
- **授课地点**: 仙Ⅰ-116
- **授课时间**: 周一 9-10 节

## 评分构成

- 论文研读: 50%
- 项目实践: 50%

## 技术栈

- HTML5
- CSS3 (现代CSS特性，支持亮暗主题切换)
- JavaScript (ES6+)
- 响应式设计

## 在线访问

网站部署在 GitHub Pages 上，可通过以下链接访问：
[课程网站](https://wangyuming007.github.io/3d-reconstruction-course/)

## 本地运行

1. 克隆仓库到本地
```bash
git clone https://github.com/WangYuming007/3d-reconstruction-course.git
```

2. 进入项目目录
```bash
cd 3d-reconstruction-course
```

3. 使用任意HTTP服务器运行，例如：
```bash
# 使用Python
python -m http.server 8000

# 使用Node.js
npx serve .

# 或直接在浏览器中打开 index.html
```

## 项目结构

```
├── index.html          # 主页面
├── styles.css          # 样式文件
├── main.js             # JavaScript功能
├── coursewebsite/      # 课程相关资源
├── README.md           # 项目说明
└── .gitignore          # Git忽略文件
```

## 贡献

欢迎提交 Issue 和 Pull Request 来改进网站。

## 许可证

© 2025 智能三维重建技术与实践课程组
