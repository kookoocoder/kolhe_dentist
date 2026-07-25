export const PHONE = "+91 9923387272"
export const PHONE_HREF = "tel:+919923387272"
export const ADDRESS = "Flat No 1, Santkrupa Apartment, Pipeline Road, Nalegaon, Ahmednagar - 414001"
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
  name: string
  address: string
  phone: string
  phoneHref: string
  googleMaps: string
  website?: string
  hours?: string
}

export const LOCATIONS: Location[] = [
  {
    name: "Smile Maker's – Ahmednagar",
    address:
      "Flat No 1, Santkrupa Apartment, Pipeline Road, Nalegaon, Ahmednagar - 414001 (Opposite Morya Mangal Karyalay)",
    phone: "+91 9923387272",
    phoneHref: "tel:+919923387272",
    googleMaps: "https://goo.gl/quEqiG",
    hours: "Mon–Sat: 9:00 AM – 7:00 PM, Sunday: Closed",
  },
  {
    name: "Dr. Kolhe's Dental Clinic – Viman Nagar, Pune",
    address:
      "Office No 105, Finswell, Novotel Hotel, Sakore Nagar, Viman Nagar, Pune, Maharashtra 411014",
    phone: "+91 9923387272",
    phoneHref: "tel:+919923387272",
    googleMaps: "https://g.co/kgs/vTZQgj",
    website: "http://www.fly4smiles.com/",
    hours: "Mon–Sat: 9:00 AM – 7:00 PM, Sunday: Closed",
  },
  {
    name: "Dr. Kolhe's Dental Clinic – Kharadi, Pune",
    address:
      "Office No 26, B-Wing, 3rd Floor, Cityvista Downtown, Fountain Road, Kharadi, Pune, Maharashtra 411014",
    phone: "+91 9923387272",
    phoneHref: "tel:+919923387272",
    googleMaps: "https://maps.app.goo.gl/usMnbkttiqV2dqV16?g_st=iwb",
    website: "https://drkolhesdental.com/",
    hours: "Mon–Sat: 9:00 AM – 7:00 PM, Sunday: Closed",
  },
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
    price: "From ₹500",
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
    price: "From ₹2,000",
    image: "/images/service-checkup.jpg",
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
    price: "From ₹25,000",
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
    price: "On consultation",
    image: "/images/service-checkup.jpg",
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
    price: "From ₹5,000",
    image: "/images/service-checkup.jpg",
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
    price: "From ₹5,000",
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
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    short: "Pediatric Care",
    description:
      "We see children from age 3. Our team is experienced with nervous young patients: calm, gentle, and in no rush. Building good habits early makes everything easier.",
    price: "From ₹500",
    image: "/images/service-checkup.jpg",
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
    price: "From ₹3,000",
    image: "/images/service-checkup.jpg",
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
