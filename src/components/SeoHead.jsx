import { Helmet } from "react-helmet-async"
import { buildCanonicalUrl } from "../utils/seoUtils"

export default function SeoHead({ title, description, canonicalPath = "/" }) {
  const canonical = buildCanonicalUrl(canonicalPath)

  return (
    <Helmet>
      <title>{title}</title>
      {description ? <meta name="description" content={description} /> : null}
      {canonical ? <link rel="canonical" href={canonical} /> : null}
    </Helmet>
  )
}
