export const social = {
  instagram: 'https://www.instagram.com/vic.overseaseducation/',
  linkedin: 'https://www.linkedin.com/in/vic-overseas-education-b0b16527a/',
  whatsappNumber: '919108560255',
  whatsappMessage: "Hi VIC Overseas, I'd like to know more about studying abroad.",
  phoneDisplay: '+91 91085 60255',
  phoneTel: '+919108560255',
  website: 'https://vicoverseas.com',
  counsellingEmail: 'apply@vicoverseas.com'
}

export const whatsappUrl = `https://wa.me/${social.whatsappNumber}?text=${encodeURIComponent(social.whatsappMessage)}`

export function getWhatsAppUrl(customMessage) {
  const msg = customMessage || social.whatsappMessage
  return `https://wa.me/${social.whatsappNumber}?text=${encodeURIComponent(msg)}`
}

export default social
