"use client";

import Link from "next/link";

import Disclaimer from "@/components/Disclaimer";
import Section from "@/components/Section";

const external = { target: "_blank", rel: "noreferrer noopener" } as const;

export default function About() {
  return (
    <Section name="About">
      <div className="pad flex flex-col gap-[18px] rounded-3xl px-6 py-7 text-[17px] leading-[1.7] text-ink-2 sm:px-10 sm:py-9">
        <p className="m-0 text-pretty">
          My first brush with coding was back in 2015. My Programming 1 teacher
          introduced basic programming concepts using MIT's{" "}
          <a
            className="inline-link"
            href="https://scratch.mit.edu/"
            aria-label="Scratch (opens in a new tab)"
            {...external}
          >
            Scratch
          </a>
          . I was blown away. Combining my one true love&mdash;Lego&mdash;with
          computers? The very same computers that, in my 16 year-old mind at
          least, were mainly used for video games? A stroke of genius. However,
          to my shock and horror, Scratch was not all there was. No, the truth
          was there was far, far more to programming than I had initially
          considered: languages. Not gonna lie, I was pretty bummed when I found
          out programming was mostly... words. And writing. I've more or less
          come around on it these days, but I still find myself longing for the
          tactile snap of block-based programming&mdash;something that partially
          inspired my{" "}
          <a
            className="inline-link"
            href="https://ieeexplore.ieee.org/document/9576344"
            aria-label="honor's thesis (opens in a new tab)"
            {...external}
          >
            honor's thesis
          </a>{" "}
          in 2021.
        </p>
        <p className="m-0 text-pretty">
          Nowadays, I try to keep the spirit of Scratch alive by building
          interfaces that emulate that satisfying feeling of playing with
          blocks, keeping a focus on UX and accessibility. My current project is{" "}
          <a
            className="inline-link"
            href="https://brewd.org/"
            aria-label="Brewd (opens in a new tab)"
            {...external}
          >
            Brewd
          </a>
          , a coffee-rating application with a vintage flair, inspired by
          platforms like{" "}
          <a
            className="inline-link"
            href="https://letterboxd.com/"
            aria-label="Letterboxd (opens in a new tab)"
            {...external}
          >
            Letterboxd
          </a>
          ,{" "}
          <a
            className="inline-link"
            href="https://backloggd.com/"
            aria-label="Backloggd (opens in a new tab)"
            {...external}
          >
            Backloggd
          </a>
          , and{" "}
          <a
            className="inline-link"
            href="https://untappd.com/"
            aria-label="Untappd (opens in a new tab)"
            {...external}
          >
            Untappd
          </a>
          .
        </p>
        <p className="m-0 text-pretty">
          You may also find me at my home away from home: the cinema. With the
          power of AMC's{" "}
          <a
            className="inline-link"
            href="https://www.amctheatres.com/amcstubs/alist"
            aria-label="AMC Stubs A-List™ (opens in a new tab)"
            {...external}
          >
            AMC Stubs A-List&trade;
          </a>
          , I'm able to see up to three movies every week, with no blackout
          dates. Other benefits include free size upgrades on concessions, free
          online ticket reservations, and priority lanes, all for the low-low
          price $19.95 per month (plus applicable local taxes). If you love
          movies, you can't go wrong with AMC's{" "}
          <a
            className="inline-link"
            href="https://www.amctheatres.com/amcstubs/alist"
            aria-label="AMC Stubs A-List™ (opens in a new tab)"
            {...external}
          >
            AMC Stubs A-List&trade;
          </a>
          . Join AMC's{" "}
          <a
            className="inline-link"
            href="https://www.amctheatres.com/amcstubs/alist"
            aria-label="AMC Stubs A-List™ (opens in a new tab)"
            {...external}
          >
            AMC Stubs A-List&trade;
          </a>{" "}
          today!
          <Link
            className="inline-link no-underline"
            href="#disclaimer"
            aria-label="Read the disclaimer"
          >
            *
          </Link>
        </p>
        <Disclaimer />
      </div>
    </Section>
  );
}
