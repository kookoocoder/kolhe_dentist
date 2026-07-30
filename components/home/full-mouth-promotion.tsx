import { Container, PillButton, Reveal, SectionLabel } from "@/components/site/ui"
import { ArrowUpRight } from "lucide-react"

export function FullMouthPromotion() {
  return (
    <section className="bg-white py-8 md:py-12" aria-labelledby="full-mouth-promotion-title">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[28px] bg-[#102b61] px-6 py-8 text-white shadow-[0_20px_50px_rgba(16,43,97,0.18)] sm:px-10 sm:py-10 md:px-14 md:py-12">
            <div className="pointer-events-none absolute -right-16 -top-20 size-64 rounded-full border border-[#e7bc57]/20 sm:size-80" />
            <div className="pointer-events-none absolute -right-7 -top-11 size-48 rounded-full border border-[#e7bc57]/15 sm:size-60" />
            <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-12">
              <div className="max-w-2xl">
                <SectionLabel className="text-[#f1c866]">Advanced Implant Care</SectionLabel>
                <h2
                  id="full-mouth-promotion-title"
                  className="mt-4 max-w-xl text-[28px] font-medium leading-[1.05] tracking-[-0.02em] sm:text-[36px] md:text-[44px]"
                >
                  Full Mouth Rehabilitation
                  <span className="block text-[#f1c866]">with Basal Implants</span>
                </h2>
                <p className="mt-4 max-w-lg text-[13px] leading-relaxed text-white/70 sm:text-[14px]">
                  A focused treatment pathway for suitable patients who want a complete, confident
                  smile with advanced implant care and immediate-loading options.
                </p>
                <PillButton href="/services/full-mouth-rehabilitation" className="mt-7 bg-[#f1c866] text-[#102b61] hover:bg-[#ffe09a]">
                  Explore the treatment
                </PillButton>
              </div>

              <div className="flex items-center gap-4 md:flex-col md:gap-3 md:pr-4">
                <div className="relative flex size-28 shrink-0 items-center justify-center rounded-full border-[3px] border-[#f1c866] bg-[#0b2350] shadow-[0_0_0_8px_rgba(241,200,102,0.08)] sm:size-36">
                  <div className="absolute inset-3 rounded-full border border-[#f1c866]/35" />
                  <div className="relative text-center">
                    <span className="block text-[43px] font-semibold leading-none tracking-[-0.06em] text-[#f1c866] sm:text-[54px]">
                      72
                    </span>
                    <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-white sm:text-[11px]">
                      hours
                    </span>
                  </div>
                  <span className="absolute right-[22%] top-[22%] size-2 rounded-full bg-[#f1c866]" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f1c866]">
                    Immediate-loading options
                  </p>
                  <p className="mt-1 max-w-[220px] text-[12px] leading-relaxed text-white/60">
                    Timing depends on your examination and treatment plan.
                  </p>
                  <a
                    href="/book"
                    className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:text-[#f1c866]"
                  >
                    Book a consultation
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
