import { createFileRoute } from "@tanstack/react-router";
import { Marketing, DemoPanel, RequestSection, pageHead, DENTAL_PROMPTS, DENTAL_PROMPT_NOTE, TRADES_PROMPTS } from "@/components/Marketing";
export const Route = createFileRoute("/demo")({ head: () => pageHead("FrontDesk Demo Early Access | Dental and trades", "Register interest in FrontDesk Dental or Trades demo access. The demo lines are currently in preparation."), component: Demo });
function Demo() {
  return <Marketing>
    <section className="border-b border-border"><div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20"><p className="text-xs font-bold uppercase tracking-[0.14em] text-brand">Demo early access</p><h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.08] sm:text-6xl">Hear FrontDesk before you decide.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">The demo lines are in preparation. See what you'll be able to ask, then register for access below.</p></div></section>
    <section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_1fr]">
      <DemoPanel vertical="dental" primary prompts={DENTAL_PROMPTS} note={DENTAL_PROMPT_NOTE} />
      <DemoPanel vertical="trades" prompts={TRADES_PROMPTS} note="Urgent jobs like leaks are flagged for priority follow-up under your rules." />
    </section>
    <div id="request-demo"><RequestSection title="Tell us which demo you'd like to hear." source="demo" kind="demo" buttonText="Request Demo Access" /></div>
  </Marketing>;
}
