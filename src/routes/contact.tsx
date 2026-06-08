import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { MapPin, Mail, Phone, Send, Check, Loader2 } from "lucide-react";
import { PageHero, Reveal } from "@/components/Section";
import { zodResolver } from "@hookform/resolvers/zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Outsstrip — Plan Your Trip" },
      { name: "description", content: "Get in touch with Outsstrip to plan your next holiday. WZ-14 B-74 Rajnagar, Palam, Dwarka, New Delhi." },
      { property: "og:title", content: "Contact Outsstrip" },
      { property: "og:description", content: "We'd love to plan your next trip with you." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(80),
  email: z.string().trim().email("Valid email required").max(120),
  phone: z.string().trim().min(7, "Valid phone required").max(20),
  destination: z.string().trim().min(2, "Where to?").max(80),
  message: z
  .string()
  .trim()
  .optional()
  .refine((val) => !val || val.length >= 5, {
    message: "Tell us a bit more",
  }),
});
type FormValues = z.infer<typeof schema>;

function Contact() {
 const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
  resolver: zodResolver(schema),
});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = async (raw: FormValues) => {
  const parsed = schema.safeParse(raw);

  if (!parsed.success) return;

  setLoading(true);

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbynXDh05JJMOw8Rtk7eoZnHyziOg5BBv91g4bdiv8AzRiwlE-cctjGdnhNUYGaI-VlE/exec",
      {
        method: "POST",
        body: JSON.stringify(parsed.data),
      }
    );

    const result = await response.json();

    if (result.success) {
      setSent(true);
      reset();

      setTimeout(() => {
        setSent(false);
      }, 4000);
    }
  } catch (error) {
    console.error("Form submit error:", error);
    alert("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      <PageHero kicker="Contact" title="Let's Plan Your Next Trip" subtitle="Reach out — we usually reply within a few hours." />

      <section className="py-20 container mx-auto px-6 grid lg:grid-cols-5 gap-10">
        <Reveal className="lg:col-span-2 space-y-5">
          {[
            { icon: MapPin, title: "Visit", text: "WZ-14 B-74 Rajnagar Street No 7\nPalam, Dwarka, New Delhi" },
            { icon: Mail, title: "Email", text: "outtstrip@gmail.com" },
            { icon: Phone, title: "Call", text: "+91 89293 14069" },
          ].map((c) => (
            <motion.div key={c.title} whileHover={{ x: 6 }} className="p-6 rounded-3xl bg-gradient-card border border-border shadow-card flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-primary text-white flex items-center justify-center shrink-0">
                <c.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold mb-1">{c.title}</div>
                <div className="text-sm text-muted-foreground whitespace-pre-line">{c.text}</div>
              </div>
            </motion.div>
          ))}
        </Reveal>

        <Reveal className="lg:col-span-3" delay={0.1}>
          <form onSubmit={handleSubmit(onSubmit)} className="p-8 rounded-3xl bg-card border border-border shadow-elegant space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" error={errors.name?.message}>
                <input {...register("name")} className="input" placeholder="Your full name" />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input type="email" {...register("email")} className="input" placeholder="you@example.com" />
              </Field>
              <Field label="Phone" error={errors.phone?.message}>
                <input {...register("phone")} className="input" placeholder="+91 ..." />
              </Field>
              <Field label="Destination" error={errors.destination?.message}>
  <input
    {...register("destination")}
    className="input"
    placeholder="Bali, Dubai... (Custom destinations available)"
  />
</Field>
            </div>
            <Field label="Message" error={errors.message?.message}>
              <textarea {...register("message")} rows={5} className="input resize-none" placeholder="Tell us about your dream trip..." />
            </Field>

            <motion.button type="submit"
              whileTap={{ scale: 0.97 }}
              disabled={loading}
              className="w-full bg-gradient-primary text-primary-foreground py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-glow transition-shadow disabled:opacity-70"
            >
              <AnimatePresence mode="wait">
                {loading ? (
                  <motion.span key="l" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                  </motion.span>
                ) : sent ? (
                  <motion.span key="s" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                    <Check className="w-5 h-5" /> Message Sent!
                  </motion.span>
                ) : (
                  <motion.span key="d" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                    Send Message <Send className="w-4 h-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </form>
        </Reveal>
      </section>

      <section className="container mx-auto px-6 pb-20">
        <Reveal>
          <motion.div whileHover={{ scale: 1.005 }} className="rounded-3xl overflow-hidden shadow-elegant border border-border h-[420px]">
           <iframe
  title="Outsstrip location"
  src="https://www.google.com/maps?q=28.5849686,77.085434&hl=en&z=16&output=embed"
  className="w-full h-full border-0"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
          </motion.div>
        </Reveal>
      </section>

      <style>{`
        .input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.875rem;
          background: var(--muted);
          border: 1px solid var(--border);
          font-size: 0.9rem;
          outline: none;
          transition: all .2s;
        }
        .input:focus { border-color: var(--primary); background: white; box-shadow: 0 0 0 4px rgba(56,100,145,0.1); }
      `}</style>
    </>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-xs text-destructive mt-1 block">{error}</motion.span>}
    </label>
  );
}
