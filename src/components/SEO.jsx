import { Helmet } from 'react-helmet-async'
export default function SEO({ title, description }) {
  const fullTitle = `${title} | VIC Overseas`
  const desc = description || 'Get personalised study abroad guidance from VIC Overseas in Secunderabad, Telangana.'
  return <Helmet>
    <title>{fullTitle}</title>
    <meta name="description" content={desc} />
    <meta property="og:title" content={fullTitle} />
    <meta property="og:description" content={desc} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
  </Helmet>
}