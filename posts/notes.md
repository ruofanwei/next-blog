---
title: 'Use Next build a blog'
date: '2020-06-11'
---
## Structure

```javascript
components
├── data.tsx
├── layout.module.css
└── layout.tsx

lib
└── posts.ts

pages
├── api
│   ├── archive.js
│   ├── index.js
│   ├── log.js
│   └── tags.js
├── posts
│   └── [id].tsx
│
└── _app.tsx
└── index.tsx

posts
└── post.md

styles
├── global.css
└── utils.module.css

```


### Notes node Path Module :fire:
```javascript

// join 是單純把指定的路徑連結在一起
const postsDirectory = path.join(process.cwd(), 'posts')

// 獲得當前執行 node 指令時候的檔案夾目錄名
process.cwd(): /Users/ruofan/Projects
```


### Reference :full_moon_with_face:
- [for Next.js](https://nextjs.org/learn/basics/deploying-nextjs-app)

- [for Using Prism.js in Next.js](https://frendly.dev/posts/using-prism-js-in-next-js)