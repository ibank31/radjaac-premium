import { BLOG_POSTS as CORE_BLOG_POSTS } from "./blogPosts.js"
import { BANYUMAS_BLOG_POST } from "./banyumasBlogPost.js"
import { FREON_EDUCATION_BLOG_POST } from "./freonEducationBlogPost.js"
import { INSTALLATION_BLOG_POST } from "./installationBlogPost.js"
import { KOST_BLOG_POST } from "./kostBlogPost.js"
import { LOW_WATT_ELECTRICITY_BLOG_POST } from "./lowWattElectricityBlogPost.js"

const ALL_BLOG_POSTS = [
  ...CORE_BLOG_POSTS,
  FREON_EDUCATION_BLOG_POST,
  KOST_BLOG_POST,
  BANYUMAS_BLOG_POST,
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
