import { Helmet } from 'react-helmet-async'
import { officeContact } from '../data/contact'

export default function SEO({ title, description }) {
  const fullTitle = `${title} | VIC Overseas`
  const desc = description || 'Get personalised study abroad guidance from VIC Overseas in Devarayamjal, Telangana.'
  return <Helmet>
    <title>{fullTitle}</title>
    <meta name="description" content={desc} />
    <meta property="og:title" content={fullTitle} />
    <meta property="og:description" content={desc} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/images/vic-emblem-512.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="/images/vic-emblem-512.png" />
    <script type="application/ld+json">
      {JSON.stringify(officeContact.schema)}
    </script>
  </Helmet>
}