export const PHONE = "+91 9923387272"
export const PHONE_HREF = "tel:+919923387272"
export const ADDRESS =
  "Flat No 1, Santkrupa Apartment, Pipeline Road, Nalegaon, Ahmednagar - 414001"
export const EMAIL = "info@drkolhesdental.com"

export const HOURS = [
  { day: "Monday", time: "9:00 – 19:00" },
  { day: "Tuesday", time: "9:00 – 19:00" },
  { day: "Wednesday", time: "9:00 – 19:00" },
  { day: "Thursday", time: "9:00 – 19:00" },
  { day: "Friday", time: "9:00 – 19:00" },
  { day: "Saturday", time: "9:00 – 19:00" },
  { day: "Sunday", time: "Closed" },
]

export type Location = {
  slug: string
  name: string
  address: string
  phone: string
  phoneHref: string
  googleMaps: string
  website?: string
  hours?: string
  page?: {
    eyebrow: string
    headline: string
    intro: string
    highlights: string[]
    serviceSlugs: string[]
    audiences?: string[]
    reasons?: string[]
    process?: string[]
    services?: string[]
    commitment?: string[]
  }
}

export const LOCATIONS: Location[] = [
  {
    slug: "ahmednagar",
    name: "Smile Maker's – Ahmednagar",
    address:
      "Flat No 1, Santkrupa Apartment, Pipeline Road, Nalegaon, Ahmednagar - 414001 (Opposite Morya Mangal Karyalay)",
    phone: "+91 98346 22525",
    phoneHref: "tel:+919834622525",
    googleMaps: "https://goo.gl/quEqiG",
    hours: "Mon–Sat: 9:00 AM – 7:00 PM, Sunday: Closed",
    page: {
      eyebrow: "Trusted Dental Care for Ahilyanagar & Across Maharashtra",
      headline: "Advanced Dental Care with 16+ Years of Experience",
      intro:
        "Welcome to Dr Kolhe’s Dental Clinic – Ahilyanagar, one of the trusted destinations for advanced dental treatment in Maharashtra. For over 16 years, we have been helping patients from Ahilyanagar district and across Maharashtra restore healthy, confident smiles with modern and personalized dental care.",
      highlights: [
        "16+ Years of Clinical Experience",
        "Led by Dr Kunal Kolhe, MDS Prosthodontist & Implantologist",
        "Advanced Dental Implants & Smile Designing",
        "Modern Digital Dental Technology",
        "Personalized Treatment Plans",
        "Comfortable & Patient-Friendly Environment",
        "Transparent Treatment Planning",
        "Easy Appointment Booking",
        "Trusted by Patients Across Maharashtra",
      ],
      serviceSlugs: [
        "dental-implants",
        "full-mouth-rehabilitation",
        "digital-smile-designing",
        "root-canal",
        "zirconia-ceramic-crowns",
        "teeth-cleaning-gum-care",
        "paediatric-care",
        "teeth-whitening",
        "emergency-care",
      ],
      reasons: [
        "Experienced dental specialists",
        "Advanced treatment options under one roof",
        "Modern technology and high standards of care",
        "Clear communication and personalized treatment plans",
        "Long-term follow-up and patient support",
      ],
      process: [
        "Book your appointment.",
        "Get a detailed dental examination.",
        "Receive a personalized treatment plan.",
        "Complete your treatment comfortably.",
        "Return for regular follow-up to maintain your oral health.",
      ],
    },
  },
  {
    slug: "viman-nagar",
    name: "Dr. Kolhe's Dental Clinic – Viman Nagar, Pune",
    address:
      "Office No 105, Finswell, Novotel Hotel, Sakore Nagar, Viman Nagar, Pune, Maharashtra 411014",
    phone: "+91 96396 39950",
    phoneHref: "tel:+919639639950",
    googleMaps: "https://g.co/kgs/vTZQgj",
    page: {
      eyebrow: "International Dental Tourism – Dr Kolhe’s Dental Clinic, Viman Nagar, Pune",
      headline: "World-Class Dental Care for International Patients in India",
      intro:
        "Welcome to Dr Kolhe’s Dental Clinic – Viman Nagar, Pune, a trusted destination for international patients seeking high-quality, affordable, and advanced dental treatment in India. Located just 10–15 minutes from Pune International Airport, our branch combines internationally accepted treatment protocols, modern technology, and personalized care.",
      highlights: [
        "Dedicated International Patient Coordinator",
        "Online Video Consultation Before Travel",
        "Personalized Treatment Plan & Cost Estimate",
        "Assistance with Travel Planning",
        "Airport Pick-up Guidance (on request)",
        "Help with Hotel & Local Accommodation",
        "Flexible Appointment Scheduling",
        "Priority Treatment for Overseas Patients",
        "English, Hindi & Marathi Speaking Team",
        "Digital Treatment Records",
        "Post-Treatment Online Follow-up",
        "Sterilization Following International Infection Control Protocols",
      ],
      serviceSlugs: [
        "dental-implants",
        "full-mouth-rehabilitation",
        "smile-makeovers",
        "fixed-teeth-solutions",
        "advanced-prosthodontics",
        "complex-restorative-dentistry",
      ],
      audiences: [
        "USA, UK, Canada, Australia and New Zealand",
        "UAE, Oman, Qatar, Saudi Arabia, Bahrain and Kuwait",
        "Singapore, Africa, Europe and overseas patients worldwide",
      ],
      process: [
        "Online consultation: Share your concerns, photographs, X-rays, or CBCT scans via WhatsApp or email.",
        "Personalized treatment plan: Receive options, an estimated timeline, and transparent cost estimate.",
        "Travel to Pune with support from our team regarding appointments and local arrangements.",
        "Receive treatment in a modern, comfortable clinical environment.",
        "Stay connected through online consultations after returning home.",
      ],
      commitment: [
        "Ethical Treatment Planning",
        "Patient-Centred Care",
        "Evidence-Based Dentistry",
        "Transparent Communication",
        "Comfortable Clinical Experience",
        "Long-Term Oral Health",
      ],
    },
    website: "http://www.fly4smiles.com/",
    hours: "Mon–Sat: 9:00 AM – 7:00 PM, Sunday: Closed",
  },
  {
    slug: "kharadi",
    name: "Dr. Kolhe's Dental Clinic – Kharadi, Pune",
    address:
      "Office No 26, B-Wing, 3rd Floor, Cityvista Downtown, Fountain Road, Kharadi, Pune, Maharashtra 411014",
    phone: "+91 72196 47495",
    phoneHref: "tel:+917219647495",
    googleMaps: "https://maps.app.goo.gl/usMnbkttiqV2dqV16?g_st=iwb",
    page: {
      eyebrow: "Corporate & Family Dental Care in Kharadi",
      headline: "Trusted Dental Clinic for IT Professionals, Corporate Employees & Families",
      intro:
        "Welcome to Dr Kolhe’s Dental Clinic – Kharadi, your neighborhood dental clinic offering modern, comfortable, and personalized dental care. Conveniently located near EON IT Park, World Trade Center (WTC), Zensar Park, and major residential communities, we make it easy to fit dental care into your busy schedule.",
      highlights: [
        "16+ Years of Experience",
        "Experienced Implant & Smile Design Specialists",
        "Convenient Location Near IT Parks",
        "Evening & Saturday Appointments",
        "Digital X-rays & Modern Technology",
        "Painless Dental Treatments",
        "Personalized Treatment Plans",
        "Easy Online Appointment Booking",
        "Family-Friendly Environment",
      ],
      serviceSlugs: [
        "dental-implants",
        "digital-smile-designing",
        "root-canal",
        "teeth-cleaning-gum-care",
        "zirconia-ceramic-crowns",
        "clear-aligners-braces",
        "paediatric-care",
        "teeth-whitening",
        "emergency-care",
      ],
      audiences: [
        "Employees of EON IT Park and WTC professionals",
        "IT, software and corporate employees",
        "Families and residents of Riverdale, Panchshil Towers, Gera and Nyati",
        "Patients from Wagholi, Chandan Nagar, Hadapsar, Mundhwa and Viman Nagar",
      ],
      process: [
        "Book your appointment online or by phone.",
        "Get a detailed dental check-up.",
        "Receive a personalized treatment plan.",
        "Complete your treatment comfortably.",
        "Enjoy regular follow-up care for a healthy smile.",
      ],
    },
    website: "https://drkolhesdental.com/",
    hours: "Mon–Sat: 9:00 AM – 7:00 PM, Sunday: Closed",
  },
]

export type Service = {
  slug: string
  title: string
  short: string
  description: string
  image: string
  overview: string[]
  benefits: string[]
  expect: string[]
  fit: string
}

const ADDITIONAL_SERVICES: Service[] = [
  ["zirconia-ceramic-crowns", "Zirconia & Ceramic Crowns"],
  ["teeth-cleaning-gum-care", "Teeth Cleaning & Gum Care"],
  ["smile-makeovers", "Smile Makeovers"],
  ["fixed-teeth-solutions", "Fixed Teeth Solutions"],
  ["advanced-prosthodontics", "Advanced Prosthodontics"],
  ["complex-restorative-dentistry", "Complex Restorative Dentistry"],
  ["clear-aligners-braces", "Clear Aligners & Braces"],
].map(([slug, title]) => ({
  slug,
  title,
  short: title,
  description: `Personalized ${title.toLowerCase()} planned around your needs, comfort, and long-term oral health.`,
  image: "/images/clinic-room.jpg",
  overview: [
    `Our ${title.toLowerCase()} service is planned after a detailed examination and a clear discussion of your goals.`,
    "We explain the available options, expected timeline, and costs before treatment begins.",
  ],
  benefits: [
    "Personalized treatment planning",
    "Clear explanation of every step",
    "Modern techniques and materials",
    "Comfort-focused clinical care",
  ],
  expect: [
    "We begin with an examination and discuss your concerns, priorities, and desired outcome.",
    "You receive a clear plan and can ask questions before deciding how to proceed.",
  ],
  fit: `This service may suit patients who need ${title.toLowerCase()} or want to understand their treatment options.`,
}))

export const SERVICES: Service[] = [
  {
    slug: "general-check-up",
    title: "General Check-up & Cleaning",
    short: "General Check-up",
    description:
      "A thorough examination and professional clean. We check everything, explain what we find, and keep records so you can track your dental health over time.",
    image: "/images/service-checkup.jpg",
    overview: [
      "A complete examination of your teeth, gums, and mouth, followed by a professional clean and polish, all in a single visit.",
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
    slug: "laser-dentistry",
    title: "Laser Dentistry",
    short: "Laser Dentistry",
    description:
      "Advanced, minimally invasive laser treatments that reduce pain, speed healing, and eliminate the need for traditional drills in many procedures.",
    image: "/images/clinic-room.jpg",
    overview: [
      "Our clinic is equipped with advanced dental lasers that allow for precise, minimally invasive treatments across a wide range of procedures.",
      "Laser dentistry often means less pain, reduced bleeding, faster healing, and in many cases, no need for anaesthetic injections.",
    ],
    benefits: [
      "Minimally invasive with faster recovery",
      "Often no anaesthetic injections required",
      "Reduced bleeding and swelling",
      "Precise treatment with minimal discomfort",
    ],
    expect: [
      "During a laser procedure you may feel gentle warmth or a slight tingling, but most patients report significantly less discomfort than traditional methods.",
      "Healing is typically faster than conventional treatment, and you can return to your normal routine the same day in most cases.",
    ],
    fit: "Laser dentistry is suitable for patients of all ages. Ask us during your check-up whether laser treatment could benefit your specific needs.",
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    short: "Dental Implants",
    description:
      "The most natural-looking, long-lasting tooth replacement available. A permanent solution that looks, feels, and functions like a real tooth.",
    image: "/images/service-implants.jpg",
    overview: [
      "A dental implant is a permanent replacement tooth anchored directly into the jaw. It looks, feels, and functions like a real tooth.",
      "Dr. Kunal Kolhe has extensive training in implantology with over 1,000 successful implant and full mouth rehabilitation cases.",
    ],
    benefits: [
      "The most natural-looking replacement available",
      "Permanent, no removal or adhesives",
      "Protects the jawbone from deterioration",
      "Expert care from a specialist implantologist",
    ],
    expect: [
      "Treatment happens in stages over a few months: placement, healing, and finally the crown. We plan everything with digital imaging first.",
      "Most patients are surprised how manageable each stage is. We'll give you a full written plan and timeline before anything begins.",
    ],
    fit: "If you're missing a tooth or facing an extraction, an implant is usually the best long-term solution. We'll assess your suitability at a consultation.",
  },
  {
    slug: "full-mouth-rehabilitation",
    title: "Full Mouth Rehabilitation",
    short: "Full Mouth Rehab",
    description:
      "A comprehensive treatment plan to restore the function, health, and appearance of your entire mouth. Customised to each patient's unique needs.",
    image: "/images/practice-lounge.jpg",
    overview: [
      "Full mouth rehabilitation is a customised plan that combines multiple treatments to restore all teeth in both jaws, improving function and aesthetics.",
      "With over 1,000 completed cases, Dr. Kunal Kolhe brings deep expertise in planning and executing complex rehabilitation cases.",
    ],
    benefits: [
      "Restores full chewing function and comfort",
      "Improves facial aesthetics and smile",
      "Tailored plan combining implants, crowns, and bridges",
      "Transformative results from a specialist prosthodontist",
    ],
    expect: [
      "We begin with a detailed assessment including digital scans and imaging. Your personalised plan is explained step by step before treatment starts.",
      "Treatment is typically carried out over multiple visits. We work with you to prioritise comfort and convenience throughout the process.",
    ],
    fit: "If you have multiple damaged, worn, or missing teeth and want a comprehensive solution, full mouth rehabilitation may be the ideal approach.",
  },
  {
    slug: "digital-smile-designing",
    title: "Digital Smile Designing",
    short: "Smile Design",
    description:
      "See your new smile before treatment begins. Digital technology lets us design and preview your ideal smile, so you know exactly what to expect.",
    image: "/images/whitening-hero.jpg",
    overview: [
      "Digital Smile Designing uses advanced imaging software to create a visual preview of your ideal smile before any treatment begins.",
      "This technology allows us to plan precise changes to tooth shape, size, and alignment, and share the expected outcome with you upfront.",
    ],
    benefits: [
      "Preview your new smile before committing",
      "Precise, predictable results",
      "Collaborative planning with your input",
      "Tailored to your facial features and preferences",
    ],
    expect: [
      "We take photographs and digital scans of your teeth, then design your new smile on screen. You can see and approve the plan before treatment starts.",
      "Depending on the plan, treatment may involve veneers, bonding, whitening, or alignment, and is typically completed in two to four visits.",
    ],
    fit: "If you want to improve the appearance of your smile with certainty about the outcome, Digital Smile Designing gives you full control over the result.",
  },
  {
    slug: "root-canal",
    title: "Root Canal Treatment",
    short: "Root Canal",
    description:
      "Modern root canal treatment is nothing like its reputation. We work slowly and carefully, and you're in control throughout.",
    image: "/images/service-rootcanal.jpg",
    overview: [
      "Modern root canal treatment is nothing like its reputation. With today's techniques and anaesthetics, most patients describe it as no worse than a filling.",
      "We work slowly and carefully, explain each step, and you're in control throughout. If you need a break, we stop.",
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
    slug: "paediatric-care",
    title: "Pediatric Dentistry",
    short: "Pediatric Care",
    description:
      "We see children from age 3. Our team is experienced with nervous young patients: calm, gentle, and in no rush. Building good habits early makes everything easier.",
    image: "/images/service-paediatric.jpg",
    overview: [
      "We see children from age 3, and we specialise in making their early dental visits calm and even fun.",
      "Our team is experienced with nervous young patients: no rushing, no pressure, and plenty of patience. Building good habits early makes everything easier later.",
    ],
    benefits: [
      "Gentle first visits from age 3",
      "A team trained for nervous children",
      "Focus on prevention and good habits",
      "Convenient locations across Ahmednagar and Pune",
    ],
    expect: [
      "First visits are short and gentle, often just a look around and a chat, so your child leaves feeling good about the dentist.",
      "We'll show you and your child simple brushing techniques and build up to full check-ups at their pace.",
    ],
    fit: "Every child benefits from early, positive dental visits. If your child is anxious or has had a bad experience elsewhere, we're especially happy to help.",
  },
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    short: "Cosmetic",
    description:
      "Enhance your smile with professional whitening, veneers, and cosmetic bonding. Subtle changes that make a big difference in confidence.",
    image: "/images/smile-closeup.jpg",
    overview: [
      "Our cosmetic treatments include professional whitening, porcelain veneers, and tooth-coloured bonding, designed to enhance your natural smile.",
      "Every cosmetic plan is personalised. We focus on natural-looking results that complement your facial features and personality.",
    ],
    benefits: [
      "Professional-grade whitening for a brighter smile",
      "Veneers and bonding for shape and alignment fixes",
      "Natural-looking, personalised results",
      "Confidence-boosting smile transformations",
    ],
    expect: [
      "We start with a consultation to understand your goals. Digital imaging lets you preview the expected result before any treatment.",
      "Many cosmetic treatments are completed in one to three visits, depending on the plan we create together.",
    ],
    fit: "If you want to brighten, reshape, or refine your smile, our cosmetic treatments can help you achieve natural, lasting results.",
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    short: "Teeth Whitening",
    description:
      "Professional whitening for a brighter, more confident smile, with results tailored to your goals.",
    image: "/images/service-whitening.jpg",
    overview: [
      "We use professional whitening to safely lift stains and brighten your natural smile.",
      "Your treatment is planned around your sensitivity, schedule, and desired shade.",
    ],
    benefits: [
      "Noticeably brighter smile",
      "Professional, controlled treatment",
      "Plan tailored to your goals",
      "Advice for maintaining results",
    ],
    expect: [
      "We check your teeth and gums first, then recommend the safest whitening approach for you.",
      "Some temporary sensitivity is possible, and we provide clear aftercare guidance.",
    ],
    fit: "Whitening is suitable for most adults with healthy teeth and gums. We will check your suitability first.",
  },
  {
    slug: "digital-x-rays",
    title: "Digital X-Rays",
    short: "Digital X-Rays",
    description:
      "Fast, clear digital imaging that helps us see what is happening beneath the surface and plan treatment precisely.",
    image: "/images/service-xray2.jpg",
    overview: [
      "Digital X-rays give us a detailed view of teeth, roots, bone, and areas hidden from a visual examination.",
      "They help us diagnose concerns early and explain findings clearly to you.",
    ],
    benefits: [
      "Fast, high-quality images",
      "Supports accurate diagnosis",
      "Lower exposure than traditional film",
      "Better treatment planning",
    ],
    expect: [
      "The scan takes only a few minutes and is completely painless.",
      "We review the images with you and explain what they show before recommending next steps.",
    ],
    fit: "X-rays are recommended when needed to investigate symptoms, monitor changes, or plan treatment safely.",
  },
  {
    slug: "dental-fillings",
    title: "Dental Fillings",
    short: "Dental Fillings",
    description:
      "Tooth-coloured fillings that repair decay and restore the strength, shape, and function of your tooth.",
    image: "/images/service-fillings.jpg",
    overview: [
      "We remove decay carefully and restore the tooth with a durable, natural-looking filling.",
      "Treating a cavity early helps prevent pain and more extensive treatment later.",
    ],
    benefits: [
      "Preserves your natural tooth",
      "Tooth-coloured materials",
      "Comfortable, precise treatment",
      "Usually completed in one visit",
    ],
    expect: [
      "We numb the area, remove the decay, and shape the filling to fit your bite.",
      "The tooth can usually be used normally as soon as the numbness wears off.",
    ],
    fit: "A filling is suitable for a tooth with mild to moderate decay or a small area of damage.",
  },
  {
    slug: "emergency-care",
    title: "Emergency Care",
    short: "Emergency Care",
    description:
      "Prompt, practical help for toothache, swelling, broken teeth, and other dental problems that cannot wait.",
    image: "/images/clinic-talk.jpg",
    overview: [
      "We prioritise urgent dental problems and focus first on relieving pain and protecting your health.",
      "After an examination, we explain your options and arrange follow-up care when needed.",
    ],
    benefits: [
      "Same-day slots when available",
      "Pain and swelling assessment",
      "Clear next-step advice",
      "Calm care when you need it most",
    ],
    expect: [
      "Call us first so we can find the earliest appropriate appointment.",
      "We assess the problem, provide immediate care where possible, and explain any further treatment.",
    ],
    fit: "Contact us promptly for severe toothache, swelling, trauma, a broken tooth, or bleeding that will not stop.",
  },
  ...ADDITIONAL_SERVICES,
]

export const TESTIMONIALS = [
  {
    quote:
      "Dr. Kunal Kolhe did my full mouth rehabilitation and the results are incredible. I can eat and smile confidently for the first time in years. Truly life-changing.",
    name: "Rajesh P.",
    date: "March 2025",
  },
  {
    quote:
      "My daughter was terrified of dental visits, but Dr. Kirti was so patient and gentle. Now she looks forward to her check-ups. We couldn't be happier.",
    name: "Sneha M.",
    date: "January 2025",
  },
  {
    quote:
      "I was nervous about dental implants, but the team at Viman Nagar made the whole process smooth and painless. The laser treatment was a game changer — almost no swelling.",
    name: "Amit Sharma",
    date: "November 2024",
  },
  {
    quote:
      "We visited the Kharadi clinic for the first time. Modern, clean, and the doctors took the time to explain everything. Highly recommended for families.",
    name: "Priya Deshpande",
    date: "September 2024",
  },
]

export const TEAM = [
  {
    name: "Dr. Kirti Kolhe",
    role: "Consultant Dental Surgeon | Laser Dentist",
    bio: "Co-Founder & Director with advanced training in Laser Dentistry. Passionate about preventive care and community oral health initiatives.",
    image: "/images/dr-kirti-kolhe-standing.jpg",
  },
  {
    name: "Dr. Kunal Kolhe",
    role: "Consultant Prosthodontist | Implantologist",
    bio: "Founder & Director with 16+ years of experience and over 1,000 full mouth rehabilitation cases. Specialist in implants and advanced prosthodontics.",
    image: "/images/dr-kunal-kolhe-standing.png",
  },
]

export const WHY_US = [
  {
    n: "01",
    title: "Laser Dentistry Expertise",
    text: "Advanced, minimally invasive laser treatments that reduce pain and speed healing.",
  },
  {
    n: "02",
    title: "16+ Years Experience",
    text: "Trusted by thousands of patients across Ahmednagar and Pune.",
  },
  {
    n: "03",
    title: "Multiple Locations",
    text: "3 conveniently located clinics in Ahmednagar and Pune for easy access.",
  },
  {
    n: "04",
    title: "Evidence-Based Care",
    text: "Modern, ethical dentistry using the latest technology and proven techniques.",
  },
]

export const FAQS = [
  {
    q: "Do I need a referral to visit?",
    a: "No referral is needed. You can book directly by phone or visit any of our three locations. We're always welcoming new patients.",
  },
  {
    q: "Which locations do you have?",
    a: "We have three clinics: Smile Maker's in Ahmednagar, and Dr. Kolhe's Dental Clinic in Viman Nagar and Kharadi, Pune. All clinics are open Mon–Sat, 9 AM to 7 PM.",
  },
  {
    q: "What if I have dental anxiety?",
    a: "You're in good company — many of our patients came to us anxious. Our laser treatments are often painless and needle-free, and our team takes the time to make you feel comfortable.",
  },
  {
    q: "Do you offer dental implants?",
    a: "Yes. Dr. Kunal Kolhe is a specialist implantologist with extensive experience in basal implantology and immediate loading implants. Book a consultation for a personalised assessment.",
  },
  {
    q: "Is laser dentistry really painless?",
    a: "Laser dentistry significantly reduces discomfort compared to traditional methods. Many procedures require no anaesthetic injection at all. It's one of the key advantages of our clinic.",
  },
  {
    q: "What are your working hours?",
    a: "All three locations are open Monday to Saturday, 9:00 AM to 7:00 PM. We are closed on Sundays.",
  },
]
