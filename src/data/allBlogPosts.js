import { BLOG_POSTS as CORE_BLOG_POSTS } from "./blogPosts.js"
import { INSTALLATION_BLOG_POST } from "./installationBlogPost.js"
import { LOW_WATT_ELECTRICITY_BLOG_POST } from "./lowWattElectricityBlogPost.js"

const ALL_BLOG_POSTS = [
  ...CORE_BLOG_POSTS,
  LOW_WATT_ELECTRICITY_BLOG_POST,
  INSTALLATION_BLOG_POST,
]

export const BLOG_POSTS = [...ALL_BLOG_POSTS].sort(
  (firstPost, secondPost) =>
    new Date(secondPost.updatedAt).getTime() - new Date(firstPost.updatedAt).getTime()
)

export function getBlogPostBySlug(slug) {
  return BLOG_POSTS.find((post) => post.slug === slug)
}
