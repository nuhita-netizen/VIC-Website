/**
 * Student Testimonials Data Configuration
 *
 * Each entry schema:
 * {
 *   id: string,                 // Unique identifier e.g. "student-1"
 *   name: string,               // Full student name
 *   photo: string | undefined,  // Optional path in /public/testimonials/ e.g. "/testimonials/alex.jpg"
 *   country: string,            // Destination country e.g. "Canada", "United Kingdom", "USA", "Australia", "New Zealand", "Ireland"
 *   university: string,         // Admitted university name
 *   course: string,             // Enrolled course/programme name
 *   intake: string,             // Enrolled intake e.g. "Fall 2026"
 *   quote: string,              // Verified student feedback / testimonial
 *   rating: number | undefined, // 1-5 optional rating
 *   consent: boolean,           // STRICT CONSENT GATE: Must be explicitly true to display publicly
 *   date: string | undefined    // Optional ISO date string e.g. "2026-09-01"
 * }
 *
 * TEMPLATE EXAMPLE (Do not uncomment without verified student consent):
 * /*
 * {
 *   id: 'template-example-01',
 *   name: 'Template Student Name',
 *   photo: undefined,
 *   country: 'Canada',
 *   university: 'University of Toronto',
 *   course: 'Programme Name',
 *   intake: 'Fall 2026',
 *   quote: 'Authentic student statement regarding counselling and application journey with VIC Overseas.',
 *   rating: 5,
 *   consent: false,
 *   date: '2026-09-01'
 * }
 * *\/
 */

export const testimonials = []

export default testimonials
