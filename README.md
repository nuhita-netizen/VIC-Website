# VIC Overseas website

A responsive React + Vite + Tailwind CSS starter implementation for VIC Overseas, a study abroad consultancy based in Secunderabad, Telangana.

## Included
- Home page with hero, factual service/destination counts, services, destination cards, 8-stage journey, testimonial placeholder, event placeholder, office location details and lead form
- Country overview and six country detail routes
- Services, Exams, Universities, Scholarships, Blog, About and Contact pages
- Responsive navigation, WhatsApp shortcut, page-specific SEO metadata and motion effects
- The supplied VIC Overseas logo, used as the only company logo

## Requirements
- Node.js 18.18+ (Node 20 LTS recommended)
- npm

## Run locally
```bash
npm install
cp .env.example .env
npm run dev
```
Open the local URL printed by Vite.

## Production build
```bash
npm run build
npm run preview
```

## Lead form behaviour
By default, the enquiry form validates the phone number and opens WhatsApp with the student's details prefilled. It does not store submissions in a database.

To connect a backend, set `VITE_LEAD_API_URL` in `.env` to your secure lead-capture endpoint. The endpoint should accept a JSON POST containing `name`, `phone`, `email`, `country`, `intake` and `testScore`. Add server-side validation, spam protection, consent handling and secure storage before production use.

Set `VITE_WHATSAPP_NUMBER` to the business number in international format with digits only.

## Before public launch
1. Confirm the exact office street address and map pin.
2. Add verified company statistics only if available.
3. Add real student testimonials only with permission.
4. Add actual webinar/event details when scheduled.
5. Confirm social media profile URLs and business email address.
6. Review all country, exam, scholarship and visa information against current official sources.
7. Configure the lead API, privacy policy, cookie/consent requirements and production domain.
8. Run Lighthouse and accessibility tests on the deployed production build.

## Notes
Images are remote placeholder photography from Unsplash and can be replaced with licensed, brand-approved assets. The 8-stage journey is an illustrative guide, not a guaranteed timeline or outcome. No fabricated student results, university partnerships or years-of-experience claims are included.
