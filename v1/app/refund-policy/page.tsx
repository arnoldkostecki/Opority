import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <section className="flex-1 py-12 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            Refund &amp; Cancellation Policy
          </h1>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              Last updated: 14/02/2026
            </p>

            <p className="text-muted-foreground leading-relaxed">
              This policy applies to all services provided by Opority Ltd.
            </p>

            {/* 1. No Cash Refunds */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">1. No Cash Refunds</h2>
              <p className="text-muted-foreground leading-relaxed">
                All payments are final and non-refundable once processed.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Due to the custom and time-based nature of our services, strategic planning and work begin immediately upon payment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We do not offer cash refunds.
              </p>
            </section>

            {/* 2. Service Credit */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">2. Service Credit</h2>
              <p className="text-muted-foreground leading-relaxed">
                At our sole discretion, we may issue service credit instead of a refund.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Service credit:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Must be used within 180 days</li>
                <li>Is non-transferable</li>
                <li>Cannot be exchanged for cash</li>
                <li>May only be applied toward future services</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Issuance of service credit is not guaranteed.
              </p>
            </section>

            {/* 3. Retainers */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">3. Retainers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Monthly retainers operate on a minimum 1-month term unless otherwise agreed.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Cancellation must be provided in writing before the next billing cycle.</li>
                <li>Once a billing cycle begins, that month is non-refundable.</li>
                <li>Early cancellation does not entitle the client to refund or credit.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Clients who cancel early are not eligible for store credit.
              </p>
            </section>

            {/* 4. Deposits & Project Work */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">4. Deposits &amp; Project Work</h2>
              <p className="text-muted-foreground leading-relaxed">
                Deposits secure project scheduling and are non-refundable.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Failure to pay remaining balances may result in suspension or termination.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Work completed up to termination remains billable.
              </p>
            </section>

            {/* 5. Client Unresponsiveness */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">5. Client Unresponsiveness</h2>
              <p className="text-muted-foreground leading-relaxed">
                Clients must provide required materials and communication in a timely manner.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If a client is unresponsive for <strong>5 or more business days</strong>, we may pause the project without refund.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If a client is unresponsive for <strong>30 or more business days</strong>, we may terminate the project without refund or credit.
              </p>
            </section>

            {/* 6. Breach of Agreement */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">6. Breach of Agreement</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to terminate services without refund or credit if a client:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Initiates unjustified chargebacks</li>
                <li>Fails to pay invoices</li>
                <li>Breaches agreements</li>
                <li>Misuses intellectual property</li>
                <li>Engages in abusive or unlawful conduct</li>
              </ul>
            </section>

            {/* 7. No Guarantees */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">7. No Guarantees</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not guarantee specific financial results, performance metrics, or revenue outcomes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Marketing outcomes depend on external factors beyond our control.
              </p>
            </section>

            {/* 8. Disputes */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">8. Disputes</h2>
              <p className="text-muted-foreground leading-relaxed">
                Clients agree to contact us directly to resolve concerns before initiating chargebacks.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Unwarranted chargebacks may result in legal recovery action.
              </p>
            </section>

            <section className="bg-primary/5 border-l-4 border-primary p-4 rounded-r mt-8">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> This Refund &amp; Cancellation Policy was last updated on 14/02/2026 and forms
                part of our{" "}
                <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link>.
                By using our services, you acknowledge that you have read, understood, and agree to be bound by this policy.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
