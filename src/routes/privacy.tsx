import { createFileRoute } from "@tanstack/react-router";
import { Marketing, pageHead } from "@/components/Marketing";
export const Route = createFileRoute("/privacy")({ head: () => pageHead("Privacy | FrontDesk", "How FrontDesk handles enquiry data submitted through this website and information involved in configured call handling."), component: Privacy });
const sections: [string, string][] = [
  ["What we collect on this website", "When you request a demo or pilot, we collect the details you enter: your name, business name, email, phone number and, if provided, your website, location, call volume and notes."],
  ["Why we collect it", "We use these details only to respond to your enquiry, arrange a demo or pilot, and discuss a suitable setup. We don't sell your information."],
  ["Calls handled by FrontDesk", "When FrontDesk answers calls for a business, calls may involve information that business has configured, such as opening hours or services, and details the caller provides. Where configured by the business, calls may be recorded and transcribed to produce summaries for the business's team."],
  ["Responsibilities of businesses using FrontDesk", "Each business using FrontDesk remains responsible for its own operational and legal requirements, including informing its callers and patients about how calls are handled."],
  ["Privacy enquiries", "To ask about or request deletion of information you've submitted, reply to any email from us or send a request through the demo form, marked \"Privacy\"."],
];
function Privacy() {
  return <Marketing>
    <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20"><p className="text-xs font-bold uppercase tracking-[0.14em] text-brand">Privacy</p><h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">How we handle information.</h1><p className="mt-6 text-lg leading-relaxed text-muted-foreground">A plain-language summary. This page doesn't replace any agreement between FrontDesk and a customer business.</p>
      <div className="mt-12 space-y-10">{sections.map(([h, p]) => <div key={h}><h2 className="text-xl font-bold">{h}</h2><p className="mt-3 leading-relaxed text-muted-foreground">{p}</p></div>)}</div>
      {/*
        LAUNCH-BLOCKING PRIVACY TODO — do not invent these details.
        Add the confirmed controller/legal name and contact details; registered or
        correspondence address where applicable; lawful basis for each processing
        purpose; recipients/processors; international transfers and safeguards;
        retention periods; applicable data-subject rights and ICO complaint wording;
        the call recording/transcription policy; and the approach to any
        special-category health data before production customer call handling.
      */}
    </section>
  </Marketing>;
}
