import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

/**
 * join 是單純把指定的路徑連結在一起
 * process.cwd()：獲得當前執行 node 指令時候的檔案夾目錄名
 **/
const postsDirectory = path.join(process.cwd(), '/pages/posts')
console.log("postsDirectory",postsDirectory)

export function getSortedPostsData() {
    // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  console.log("fileNames",fileNames) // [ 'first-post.js', 'pre-rendering.md', 'ssg-ssr.md' ]
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')
    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}

