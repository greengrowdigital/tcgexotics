// Central business info for TCGEXOTICS. Single source of truth for copy + contact.

export const SITE = {
  name: 'TCGEXOTICS',
  phoneDisplay: '(347) 717-8232',
  phoneRaw: '+13477178232',
  instagram: 'https://www.instagram.com/tcgexotics/',
  instagramHandle: '@tcgexotics',
  email: 'book@tcgexotics.com',
}

// Coverage
export const AREAS = [
  { short: 'NYC', full: 'New York' },
  { short: 'NJ', full: 'New Jersey' },
  { short: 'CT', full: 'Connecticut' },
  { short: 'PA', full: 'Pennsylvania' },
]

// Primary navigation
export const NAV = [
  { label: 'Fleet', to: '/fleet' },
  { label: 'Rentals', to: '/pricing' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

// What you need to drive off
export const REQUIREMENTS = [
  {
    title: "Driver's license",
    body: "A valid U.S. or international driver's license, 21+ for luxury, 25+ for exotics.",
  },
  {
    title: 'Insurance',
    body: 'Full-coverage insurance or add ours at checkout — we verify in minutes.',
  },
  {
    title: 'Deposit',
    body: 'A refundable security deposit on a major card, released after inspection.',
  },
]

// Rental durations (headline conversion model)
export const DURATIONS = [
  {
    id: 'daily',
    name: 'Daily',
    kicker: 'Weekend energy',
    save: null,
    from: 'from $89 / day',
    blurb: 'Perfect for a shoot, a date, a trip out of town, or a big first impression.',
    features: ['24-hour rental', '150 miles / day included', 'Same-day pickup', 'Free cancellation'],
  },
  {
    id: 'weekly',
    name: 'Weekly',
    kicker: 'Most booked',
    save: 'Save ~20%',
    featured: true,
    from: 'from $499 / week',
    blurb: 'The sweet spot. A full week of the car you actually want, at a real discount.',
    features: ['7-day rental', '1,000 miles included', 'Priority delivery', 'Swap once mid-week'],
  },
  {
    id: 'monthly',
    name: 'Monthly',
    kicker: 'Live with it',
    save: 'Save ~35%',
    from: 'from $1,699 / month',
    blurb: 'A long-term set of keys without a lease, a loan, or a dealership.',
    features: ['30-day rental', '2,500 miles included', 'Concierge delivery', 'Maintenance handled'],
  },
]

// How it works — a real 3-step sequence (numbered markers are earned here)
export const STEPS = [
  {
    n: '01',
    title: 'Pick your car',
    body: 'Browse the fleet and choose your dates. Exotic, luxury or everyday — the price you see is the price you pay.',
  },
  {
    n: '02',
    title: 'Send your details',
    body: "Share your license, insurance and deposit. We verify fast — usually inside the hour.",
  },
  {
    n: '03',
    title: 'Get the keys',
    body: 'Pick up or we deliver across NYC, NJ, CT and PA. Then it is just you and the road.',
  },
]

// Value props
export const VALUES = [
  {
    title: 'The right car for the moment',
    body: 'From a reliable daily to a headline-grabbing exotic — one fleet, every occasion.',
  },
  {
    title: 'No games on price',
    body: 'Transparent daily, weekly and monthly rates. No mystery fees waiting at the counter.',
  },
  {
    title: 'Keys the same day',
    body: 'Message us and drive today. Fast verification, flexible pickup, delivery on request.',
  },
]

// Social proof (mock)
export const STATS = [
  { value: 500, suffix: '+', label: 'Rentals delivered' },
  { value: 30, suffix: '+', label: 'Cars in the fleet' },
  { value: 4, suffix: '', label: 'States covered' },
  { value: 5, suffix: '.0', label: 'Average rating' },
]

export const TESTIMONIALS = [
  {
    quote:
      'Booked the M3 for a weekend and had the keys in two hours. Clean car, zero drama, exactly the price they quoted.',
    name: 'Marcus D.',
    detail: 'Brooklyn, NY',
    car: 'BMW M3 Competition',
  },
  {
    quote:
      'Needed something reliable for a month between cars. The monthly rate beat every rental app and they delivered it to my door.',
    name: 'Priya S.',
    detail: 'Jersey City, NJ',
    car: 'Toyota Camry SE',
  },
  {
    quote:
      'The McLaren made my proposal unforgettable. Spotless, on time, and they walked me through everything. Worth every dollar.',
    name: 'Anthony R.',
    detail: 'Stamford, CT',
    car: 'McLaren 570S',
  },
]

export const FAQS = [
  {
    q: 'What do I need to rent?',
    a: "A valid driver's license, proof of insurance (or add ours), and a refundable deposit on a major credit card. That is it.",
  },
  {
    q: 'How old do I have to be?',
    a: 'You can rent everyday and luxury cars at 21+. Exotic and high-performance vehicles require drivers 25 or older.',
  },
  {
    q: 'Do you deliver?',
    a: 'Yes. We offer pickup at our location and delivery across New York, New Jersey, Connecticut and Pennsylvania. Delivery fees depend on distance.',
  },
  {
    q: 'Is there a mileage limit?',
    a: 'Every rental includes generous mileage — 150 miles/day, 1,000/week, 2,500/month. Extra miles are billed at a flat, disclosed rate.',
  },
  {
    q: 'What happens to my deposit?',
    a: 'The deposit is held, not charged, and released back to your card after the car is returned and inspected.',
  },
  {
    q: 'Can I extend my rental?',
    a: 'Absolutely — just message us before your return time and we will keep you rolling, subject to availability.',
  },
]
