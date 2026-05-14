import { BLOG_POSTS as CORE_BLOG_POSTS } from "./blogPosts.js"
import { INSTALLATION_BLOG_POST } from "./installationBlogPost.js"

export const BLOG_POSTS = [
  ...CORE_BLOG_POSTS,
  INSTALLATION_BLOG_POST,
]

export function getBlogPostBySlug(slug) {
  return BLOG_POSTS.find((post) => post.slug === slug)
}
