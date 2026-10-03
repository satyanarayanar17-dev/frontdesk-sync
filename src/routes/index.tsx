import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowDown, ArrowRight, ClipboardList, Phone, Stethoscope, UserRoundCheck, Wrench } from "lucide-react";
import { Marketing, Meta, Action, RequestSection, pageHead } from "@/components/Marketing";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => pageHead("FrontDesk | AI reception support for dental practices and trades", "FrontDesk AI is being developed to capture enquiries and callback details for UK dental practices and trades businesses when the team can’t answer. 7-day free pilot, zero setup fee."),
  component: Home,
});

const examples = {
  dental: [["Enquiry", "New-patient appointment request"], ["Callback preference", "Tuesday afternoon"], ["Next step", "Reception to call back"], ["Status", "Appointment not confirmed"]],
  trades: [["Enquiry", "Boiler service request"], ["Callback preference", "Tomorrow morning"], ["Next step", "Team to call back"], ["Status", "Visit not confirmed"]],
} as const;
type Tab = keyof typeof examples;
const tabs: { id: Tab; label: string }[] = [{ id: "dental", label: "Dental" }, { id: "trades", label: "Trades" }];
const flow = [{ icon: Phone, label: "Enquiry" }, { icon: ClipboardList, label: "Details" }, { icon: UserRoundCheck, label: "Team follow-up" }];

function SummaryPanel() {
  const [tab, setTab] = useState<Tab>("dental");
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const onKey = (e: KeyboardEvent, i: number) => {
    let n = -1;
    if (e.key === "ArrowRight") n = (i + 1) % tabs.length;
    else if (e.key === "ArrowLeft") n = (i - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = tabs.length - 1;
    if (n < 0) return;
    e.preventDefault();
    setTab(tabs[n]!.id);
    refs.current[n]?.focus();
  };
  return <figure className="border border-border bg-card shadow-xl shadow-primary/10">
    <div className="flex items-center justify-between gap-3 bg-brand-ink px-5 py-4 text-primary-foreground sm:px-6">
      <figcaption className="text-xs font-bold uppercase tracking-[0.1em]">Illustrative example — live demos in preparation</figcaption>
    </div>
    <div className="p-5 sm:p-6">
      <ol aria-label="How an enquiry is handled" className="flex items-center gap-2 text-sm font-semibold">
        {flow.map(({ icon: Icon, label }, i) => <li key={label} className="flex min-w-0 items-center gap-2">{i > 0 && <ArrowRight className="size-4 shrink-0 text-muted-foreground" aria-hidden />}<span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand"><Icon className="size-4" aria-hidden /></span><span className="truncate">{label}</span></li>)}
      </ol>
      <div role="tablist" aria-label="Example sector" className="mt-6 inline-flex border border-border bg-muted/50 p-1">
        {tabs.map((t, i) => <button key={t.id} ref={(el) => { refs.current[i] = el; }} id={`tab-${t.id}`} role="tab" type="button" aria-selected={tab === t.id} aria-controls="example-panel" tabIndex={tab === t.id ? 0 : -1} onKeyDown={(e) => onKey(e, i)} onClick={() => setTab(t.id)} className={`px-4 py-1.5 text-sm font-semibold transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${tab === t.id ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>{t.label}</button>)}
      </div>
      <div id="example-panel" role="tabpanel" aria-labelledby={`tab-${tab}`} className="mt-4 border border-border bg-background p-4 sm:p-5">
        <p className="font-display text-sm font-bold">Callback summary</p>
        <dl className="mt-3 space-y-2.5 text-sm">{examples[tab].map(([k, v]) => <div key={k} className="grid grid-cols-[130px_1fr] gap-2 sm:grid-cols-[160px_1fr]"><dt className="text-muted-foreground">{k}</dt><dd className="font-semibold">{v}</dd></div>)}</dl>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">Fictional example — not a real customer or patient record.</p>
    </div>
  </figure>;
}

function Home() {
  return <Marketing>
    <section className="border-b border-border"><div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-2 lg:gap-14">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand">AI reception support for dental practices and trades</p>
        <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-[3.4rem]">Busy team.<br />Keep the enquiry.</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">We’re developing FrontDesk AI to capture enquiries and callback details when your team can’t answer. Your team stays in control of appointments, visits and follow-up.</p>
        <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center"><Action to="/demo">Request Demo Access</Action><a href="#sectors" className="inline-flex items-center gap-1 self-start rounded-sm text-sm font-semibold text-brand underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:self-auto">Explore your business <ArrowDown className="size-4" aria-hidden /></a></div>
        <p className="mt-6 text-sm font-semibold">7-day free pilot · Zero setup fee</p>
        <p className="mt-1 text-sm text-muted-foreground">Pilot access follows call-flow agreement and testing.</p>
      </div>
      <SummaryPanel />
    </div></section>

    <section id="sectors" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-14 sm:px-8"><Meta eyebrow="Who it's for" title="Built around your business." /><div className="mt-8 grid gap-5 md:grid-cols-2">
      {[
        { icon: Stethoscope, title: "For dental practices", copy: "Explore administrative enquiry capture for busy reception teams. Staff confirm appointments and handle clinical questions.", extra: null, to: "/dental" as const, cta: "Explore Dental" },
        { icon: Wrench, title: "For trades businesses", copy: "Explore job-enquiry and callback capture while your team is on site. Staff confirm visits, quotes and availability.", extra: "Plumbing · Heating/HVAC · Electrical", to: "/trades" as const, cta: "Explore Trades" },
      ].map(({ icon: Icon, title, copy, extra, to, cta }) => <article key={title} className="flex flex-col justify-between border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-lg hover:shadow-primary/10 motion-reduce:transition-none sm:p-8"><div><span className="flex size-11 items-center justify-center bg-brand-ink text-primary-foreground"><Icon className="size-5" aria-hidden /></span><h3 className="mt-6 text-2xl font-bold">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{copy}</p>{extra && <p className="mt-3 text-sm font-semibold">{extra}</p>}</div><div className="mt-8"><Action to={to}>{cta}</Action></div></article>)}
    </div></section>

    <section className="border-y border-border bg-muted/40"><div className="mx-auto max-w-7xl px-5 py-14 sm:px-8"><Meta eyebrow="How a pilot works" title="Agree. Test. Follow up." /><ol className="mt-8 grid gap-8 md:grid-cols-3">{["Agree the enquiries and questions to capture.", "Test the call flow and summary destination.", "Let your team review enquiries and follow up."].map((t, i) => <li key={t}><span className="text-sm font-bold text-brand">0{i + 1}</span><p className="mt-3 text-lg font-semibold">{t}</p></li>)}</ol><div className="mt-8"><Link to="/how-it-works" className="inline-flex items-center gap-1 rounded-sm text-sm font-semibold text-brand underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">See how it works <ArrowRight className="size-4" aria-hidden /></Link></div></div></section>

    <div id="pilot"><RequestSection source="home" title="Explore a pilot for your business." buttonText="Request Pilot Access" /></div>
  </Marketing>;
}
