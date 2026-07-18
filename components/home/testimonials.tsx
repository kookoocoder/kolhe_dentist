"use client"

import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Star, UserRound } from "lucide-react"
import { Container, Reveal, SectionLabel } from "@/components/site/ui"
import { TESTIMONIALS } from "@/lib/data"
import { cn } from "@/lib/utils"

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  })
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanPrev(emblaApi.canScrollPrev())
    setCanNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section id="reviews" className="bg-white pb-20 md:pb-28">
      <Container>
        <Reveal>
          <SectionLabel>Patient Stories</SectionLabel>
          <h2 className="mt-4 text-[32px] font-medium tracking-tight md:text-[40px]">
            What patients say
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 overflow-hidden" ref={emblaRef}>
            <div className="-ml-5 flex touch-pan-y">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.name}
                  className="min-w-0 flex-[0_0_100%] pl-5 md:flex-[0_0_50%]"
                >
                  <figure className="flex h-full flex-col rounded-[18px] bg-cream p-7 md:p-8">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="size-3.5 fill-sage text-sage"
                          strokeWidth={1.5}
                        />
                      ))}
                    </div>
                    <blockquote className="mt-5 text-[14px] leading-relaxed text-ink">
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-auto flex items-center gap-3 border-t border-line pt-5">
                      <span className="flex size-9 items-center justify-center rounded-full bg-sage/30">
                        <UserRound className="size-4 text-sage-dark" strokeWidth={2} />
                      </span>
                      <span>
                        <span className="block text-[13px] font-semibold">
                          {t.name}
                        </span>
                        <span className="block text-[12px] text-body">
                          {t.date}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              aria-label="Previous"
              onClick={() => emblaApi?.scrollPrev()}
              className={cn(
                "flex size-9 items-center justify-center rounded-full bg-cream transition-colors hover:bg-cream-dark",
                !canPrev && "opacity-50"
              )}
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              aria-label="Next"
              onClick={() => emblaApi?.scrollNext()}
              className={cn(
                "flex size-9 items-center justify-center rounded-full bg-cream transition-colors hover:bg-cream-dark",
                !canNext && "opacity-50"
              )}
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
