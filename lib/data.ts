export const PHONE = "+358 40 123 4567"
export const PHONE_HREF = "tel:+358401234567"
export const ADDRESS = "14 Maple Street, Helsinki 00100"
export const EMAIL = "hello@northgate.com"

export const HOURS = [
  { day: "Monday", time: "8:00 – 18:00" },
  { day: "Tuesday", time: "8:00 – 18:00" },
  { day: "Wednesday", time: "8:00 – 18:00" },
  { day: "Thursday", time: "8:00 – 18:00" },
  { day: "Friday", time: "8:00 – 17:00" },
  { day: "Saturday", time: "9:00 – 14:00" },
  { day: "Sunday", time: "Closed" },
]

export type Service = {
  slug: string
  title: string
  short: string
  description: string
  price: string
  image: string
  overview: string[]
  benefits: string[]
  expect: string[]
  fit: string
}

export const SERVICES: Service[] = [
  {
    slug: "general-check-up",
    title: "General Check-up & Cleaning",
    short: "General Check-up",
    description:
      "A thorough examination and professional clean. We check everything, explain what we find, and keep records so you can track your dental health over time.",
    price: "From €75",
    image: "/images/service-checkup.jpg",
    overview: [
      "A complete examination of your teeth, gums, and mouth, followed by a professional clean and polish, all in a single unhurried visit.",
      "We keep detailed records at every visit, so you can see how your dental health develops over time and catch small issues before they grow.",
    ],
    benefits: [
      "Full examination, clean, and polish in one visit",
      "Plain-language explanation of everything we find",
      "A written record you can track over time",
      "Gentle approach for nervous patients",
    ],
    expect: [
      "Your first appointment is mostly conversation. We want to understand your history and concerns before we examine anything.",
      "The examination and clean typically take 45 to 60 minutes. You leave with a clear picture of your dental health and a plan, if one is needed.",
    ],
    fit: "Everyone benefits from a regular check-up. We recommend a visit every six to twelve months, depending on your dental health.",
  },
  {
    slug: "digital-x-rays",
    title: "Digital X-Rays",
    short: "Digital X-Rays",
    description:
      "Fast, accurate digital imaging that uses up to 90% less radiation than traditional X-rays. Essential for catching issues early, before they become painful or expensive.",
    price: "From €45",
    image: "/images/service-xray.jpg",
    overview: [
      "Our digital X-ray system produces detailed images instantly, using up to 90% less radiation than traditional film X-rays.",
      "Images appear on screen within seconds, so we can walk you through exactly what we see, together, during the same appointment.",
    ],
    benefits: [
      "Up to 90% less radiation than film X-rays",
      "Instant results, reviewed together on screen",
      "Catches issues before they become painful",
      "Digital records stored securely for comparison",
    ],
    expect: [
      "The imaging itself takes only a few minutes and is completely painless. You simply bite gently on a small sensor.",
      "We review the images with you immediately and explain anything we find in plain language.",
    ],
    fit: "X-rays are recommended for new patients and periodically after that. We only take them when there is a clear clinical reason.",
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    short: "Teeth Whitening",
    description:
      "Professional-grade whitening that delivers real, lasting results. Several shades lighter in a single 60-minute session, calibrated to your enamel sensitivity.",
    price: "From €290",
    image: "/images/service-whitening.jpg",
    overview: [
      "Our professional whitening lightens teeth by several shades in a single 60-minute session, using a gel calibrated to your enamel sensitivity for an even, comfortable result.",
      "Unlike over-the-counter kits, professional whitening is applied precisely and monitored throughout, so you get a brighter, natural-looking result without the patchiness or sensitivity that DIY treatments can cause.",
    ],
    benefits: [
      "Noticeable results in a single visit",
      "A shade matched to look natural, not artificial",
      "Gel strength adjusted to your sensitivity",
      "A take-home kit available to maintain your results",
    ],
    expect: [
      "We start by protecting your gums, then apply the whitening gel and let you relax in the chair. You'll see the difference the same day, and there's no downtime afterwards.",
      "Results typically last 12 to 18 months with normal care. Easing off coffee, red wine, and smoking in the first few days helps the colour settle and last longer.",
    ],
    fit: "Whitening works best on natural teeth and won't change the colour of crowns or fillings. We'll check your teeth first and give you an honest view of the result you can expect before you commit.",
  },
  {
    slug: "dental-fillings",
    title: "Dental Fillings",
    short: "Dental Fillings",
    description:
      "Tooth-coloured composite fillings that look natural and last. We match the shade to your existing teeth, so most patients can't spot them afterwards.",
    price: "From €120",
    image: "/images/service-fillings.jpg",
    overview: [
      "We use modern tooth-coloured composite materials that bond to your tooth and blend in with your natural shade.",
      "Most fillings are completed in a single visit, and we take the time to make sure your bite feels completely natural before you leave.",
    ],
    benefits: [
      "Colour-matched to your natural teeth",
      "Completed in a single visit",
      "Durable, modern composite materials",
      "Comfortable, carefully checked bite",
    ],
    expect: [
      "We numb the area gently, remove the decay, and place the filling, usually in under an hour.",
      "You may feel some numbness for a few hours afterwards, but you can return to your day right away.",
    ],
    fit: "If you have a cavity, a chipped tooth, or an old filling that needs replacing, a composite filling is usually the simplest and most natural-looking solution.",
  },
  {
    slug: "root-canal",
    title: "Root Canal Treatment",
    short: "Root Canal",
    description:
      "Modern root canal treatment is nothing like its reputation. We work slowly and carefully, and you're in control throughout.",
    price: "From €490",
    image: "/images/service-rootcanal.jpg",
    overview: [
      "Modern root canal treatment is nothing like its reputation. With today's techniques and anaesthetics, most patients describe it as no worse than a filling.",
      "We work slowly and carefully, explain each step, and you're in control throughout, if you need a break, we stop.",
    ],
    benefits: [
      "Saves your natural tooth",
      "Modern anaesthetics keep you comfortable",
      "Clear explanation at every step",
      "You control the pace, always",
    ],
    expect: [
      "Treatment usually takes one or two visits. We remove the infected tissue, clean and seal the canal, and protect the tooth.",
      "Mild soreness for a day or two afterwards is normal, and easily managed with over-the-counter pain relief.",
    ],
    fit: "If you have a deep infection or persistent toothache, a root canal can save the tooth and end the pain. We'll always explain your options honestly first.",
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    short: "Dental Implants",
    description:
      "The most natural-looking, long-lasting tooth replacement available. A permanent solution that looks, feels, and functions like a real tooth.",
    price: "From €1,200",
    image: "/images/service-implants.jpg",
    overview: [
      "A dental implant is a permanent replacement tooth anchored directly into the jaw. It looks, feels, and functions like a real tooth.",
      "Dr. Lindgren has advanced training in implant dentistry and will walk you through every stage, from planning to the final crown.",
    ],
    benefits: [
      "The most natural-looking replacement available",
      "Permanent, no removal or adhesives",
      "Protects the jawbone from deterioration",
      "Care from a dentist with advanced implant training",
    ],
    expect: [
      "Treatment happens in stages over a few months: placement, healing, and finally the crown. We plan everything with digital imaging first.",
      "Most patients are surprised how manageable each stage is. We'll give you a full written plan and timeline before anything begins.",
    ],
    fit: "If you're missing a tooth or facing an extraction, an implant is usually the best long-term solution. We'll assess your suitability honestly at a consultation.",
  },
  {
    slug: "paediatric-care",
    title: "Paediatric Dentistry",
    short: "Paediatric Care",
    description:
      "We see children from age 3. Our team is experienced with nervous young patients: calm, gentle, and in no rush. Building good habits early makes everything easier.",
    price: "From €65",
    image: "/images/service-paediatric.jpg",
    overview: [
      "We see children from age 3, and we specialise in making their early dental visits calm and even fun.",
      "Our team is experienced with nervous young patients: no rushing, no pressure, and plenty of patience. Building good habits early makes everything easier later.",
    ],
    benefits: [
      "Gentle first visits from age 3",
      "A team trained for nervous children",
      "Focus on prevention and good habits",
      "Saturday appointments for busy families",
    ],
    expect: [
      "First visits are short and gentle, often just a look around and a chat, so your child leaves feeling good about the dentist.",
      "We'll show you and your child simple brushing techniques and build up to full check-ups at their pace.",
    ],
    fit: "Every child benefits from early, positive dental visits. If your child is anxious or has had a bad experience elsewhere, we're especially happy to help.",
  },
  {
    slug: "emergency-care",
    title: "Emergency Care",
    short: "Emergency Care",
    description:
      "Toothache, a broken tooth, or a lost filling? We keep same-day slots for urgent situations. Call us first and we'll get you in as quickly as possible.",
    price: "Same-day",
    image: "/images/clinic-room.jpg",
    overview: [
      "Toothache, a broken tooth, or a lost filling? We keep same-day slots for urgent situations, including Saturday mornings.",
      "Call us first and we'll get you in as quickly as possible, usually within hours.",
    ],
    benefits: [
      "Same-day slots reserved for emergencies",
      "Open Saturday mornings",
      "Honest pricing, no emergency surcharge surprises",
      "Immediate pain relief prioritised",
    ],
    expect: [
      "Call us and describe what's happening. We'll tell you honestly how urgent it is and get you in as soon as we can.",
      "The first visit focuses on stopping the pain and stabilising the problem. Any further treatment is planned with you, never rushed.",
    ],
    fit: "If you're in pain, don't wait. Even if you're not sure it's an emergency, call us, we'd rather tell you it can wait than have you suffer over a weekend.",
  },
]

export const TESTIMONIALS = [
  {
    quote:
      "I've been terrified of dentists my whole life. Dr. Lindgren's team changed that completely. I actually look forward to my cleanings now.",
    name: "Maria K.",
    date: "March 2025",
  },
  {
    quote:
      "We've brought our whole family here for four years. The way they handle our kids, patient, gentle, never a big deal, is exactly what we needed.",
    name: "Thomas R.",
    date: "January 2025",
  },
  {
    quote:
      "I had an emergency on a Saturday morning. They fit me in within two hours, fixed the problem, and didn't overcharge me.",
    name: "Aino P.",
    date: "November 2024",
  },
  {
    quote:
      "Booked online in minutes and got a same-week appointment. Modern, calm, and genuinely friendly staff.",
    name: "Petri M.",
    date: "September 2024",
  },
]

export const TEAM = [
  {
    name: "Emma Virtanen",
    role: "Practice Manager",
    bio: "The first face you'll see. Emma remembers everyone's name, and their dog's too.",
    image: "/images/team-emma.jpg",
  },
  {
    name: "Mikko Hämäläinen",
    role: "Dental Hygienist",
    bio: "Makes cleans feel genuinely relaxing. Our go-to for gentle deep cleans and gum care.",
    image: "/images/team-mikko.jpg",
  },
  {
    name: "Anika Salminen",
    role: "Dental Assistant",
    bio: "Keeps everything running smoothly, the reason our appointments never run late.",
    image: "/images/team-anika.jpg",
  },
  {
    name: "Lauri Korhonen",
    role: "Dental Hygienist",
    bio: "Specialises in paediatric care. Exceptional with nervous children, patient and calm.",
    image: "/images/team-lauri.jpg",
  },
]

export const WHY_US = [
  {
    n: "01",
    title: "Gentle Approach",
    text: "We move at your pace. No rushing, no pressure, ever.",
  },
  {
    n: "02",
    title: "Your Time Matters",
    text: "We run on schedule. If we are ever more than 10 minutes late, we will tell you.",
  },
  {
    n: "03",
    title: "Saturday Hours",
    text: "Open Saturdays since 2011, because weekday mornings do not suit everyone.",
  },
  {
    n: "04",
    title: "Modern Technology",
    text: "Digital X-rays, same-day crowns, and paperless check-in.",
  },
]

export const FAQS = [
  {
    q: "Do you accept new patients?",
    a: "Yes, we're always welcoming new patients and their families. You don't need a referral, just book online or give us a call.",
  },
  {
    q: "Do I need a referral to book?",
    a: "No referral is needed. You can book directly online or by phone, and we'll take it from there.",
  },
  {
    q: "What if I have dental anxiety?",
    a: "You're in good company, many of our patients came to us anxious. Tell us when you book, and we'll schedule extra time so nothing feels rushed. You control the pace at every visit.",
  },
  {
    q: "How long does a first appointment take?",
    a: "Plan for about an hour. Your first visit is mostly conversation and a gentle examination, we want to understand your history before anything else.",
  },
  {
    q: "Is parking available?",
    a: "Yes, free parking is available in the rear car park. We're also 2 minutes from Kallio metro station.",
  },
  {
    q: "Do you see children?",
    a: "We see children from age 3, and our team is especially good with nervous young patients. Gentle, patient, and never in a rush.",
  },
]
