/**
 * Single Source of Truth for VIC Overseas Contact & Office Location Data
 */

export const officeContact = {
  name: 'VIC Overseas Education',
  tagline: 'Best Guidance for Bright Future',
  legalName: 'Vidya International Consultants',
  area: 'Devarayamjal',
  state: 'Telangana',
  postalCode: '500078',
  country: 'IN',
  countryName: 'India',
  displayAddress: 'Devarayamjal, Telangana 500078',
  fullAddress: 'VIC Overseas Education, Devarayamjal, Telangana 500078, India',

  // Google Maps link opening in new tab
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=VIC+Overseas+Education,+Devarayamjal,+Telangana+500078',
  
  // Responsive embed URL for iframe
  mapsEmbedUrl: 'https://maps.google.com/maps?q=Devarayamjal,+Telangana+500078&t=&z=14&ie=UTF8&iwloc=&output=embed',

  phone: '+91 91085 60255',
  phoneTel: '+919108560255',
  email: 'apply@vicoverseas.com',
  whatsappUrl: 'https://wa.me/919108560255?text=Hi%20VIC%20Overseas,%20I%20would%20like%20to%20visit%20your%20office%20in%20Devarayamjal.',

  // Editable Office Hours
  hours: {
    weekdays: 'Monday – Friday: 10:00 AM – 6:30 PM',
    saturday: 'Saturday: 10:00 AM – 4:00 PM',
    sunday: 'Sunday: Closed (Virtual Consultations Available)',
    summary: 'Mon – Sat: 10:00 AM – 6:30 PM'
  },

  // Structured Schema.org LocalBusiness Data
  schema: {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'VIC Overseas Education',
    image: 'https://vicoverseas.com/images/vic-emblem-512.png',
    telephone: '+919108560255',
    email: 'apply@vicoverseas.com',
    url: 'https://vicoverseas.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Devarayamjal',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500078',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '17.5600',
      longitude: '78.5000'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '18:30'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '10:00',
        closes: '16:00'
      }
    ]
  }
}

export default officeContact
