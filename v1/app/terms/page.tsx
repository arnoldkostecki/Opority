import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <section className="flex-1 py-12 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              Last updated: 14/02/2026
            </p>

            {/* 1. Introduction */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to OPORITY LIMITED (Company Number: 15783178), registered in England and Wales.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service (&quot;Terms&quot;) govern your use of our website (
                <Link href="https://opority.com" className="text-primary hover:underline">https://opority.com</Link>
                ) and all services provided by OPORITY LIMITED (&quot;Opority&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By accessing our website or engaging our services, you agree to these Terms and our{" "}
                <Link href="/refund-policy" className="text-primary hover:underline">Refund &amp; Cancellation Policy</Link>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you do not agree, you must not use our services.
              </p>
            </section>

            {/* 2. Services */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">2. Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                We provide professional digital services including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Paid advertising management</li>
                <li>Website design and development</li>
                <li>Consulting and advisory services</li>
                <li>Custom services</li>
                <li>Monthly retainers</li>
                <li>One-time project services</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify, suspend, or discontinue services at any time.
              </p>
            </section>

            {/* 3. Formation of Contract */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">3. Formation of Contract</h2>
              <p className="text-muted-foreground leading-relaxed">
                A legally binding agreement is formed when:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>You accept a proposal in writing, OR</li>
                <li>You sign a service agreement, OR</li>
                <li>You submit payment for services</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                By submitting payment, you confirm that you have read and agree to these Terms and our{" "}
                <Link href="/refund-policy" className="text-primary hover:underline">Refund &amp; Cancellation Policy</Link>.
              </p>
            </section>

            {/* 4. Payment Terms */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">4. Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>All prices are quoted in GBP unless otherwise stated.</li>
                <li>Deposits may be required prior to commencement.</li>
                <li>Deposits are non-refundable.</li>
                <li>Final payment is due before delivery of final assets unless otherwise agreed.</li>
                <li>Late payments may result in suspension of services.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Accepted payment methods may include Stripe, bank transfer, PayPal, cryptocurrency, or other agreed methods.
              </p>
            </section>

            {/* 5. Refunds & Cancellations */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">5. Refunds &amp; Cancellations</h2>
              <p className="text-muted-foreground leading-relaxed">
                Refunds, cancellations, store credit, and termination terms are governed by our{" "}
                <Link href="/refund-policy" className="text-primary hover:underline">Refund &amp; Cancellation Policy</Link>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                That policy forms part of these Terms.
              </p>
            </section>

            {/* 6. Client Responsibilities */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">6. Client Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed">
                Clients agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide required materials, access, and approvals in a timely manner</li>
                <li>Cooperate with agreed strategies</li>
                <li>Maintain clear communication</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Failure to provide required materials does not entitle the client to a refund.
              </p>
            </section>

            {/* 7. Cooling-Off & Immediate Service Commencement */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">7. Cooling-Off &amp; Immediate Service Commencement</h2>
              <p className="text-muted-foreground leading-relaxed">
                Where applicable under consumer protection laws, clients expressly request immediate commencement of services upon payment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By engaging our services, clients acknowledge that once service delivery begins, any statutory right to cancel may be waived to the extent permitted by law.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nothing in these Terms removes mandatory legal rights where applicable.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                See our{" "}
                <Link href="/refund-policy" className="text-primary hover:underline">Refund &amp; Cancellation Policy</Link>{" "}
                for full details.
              </p>
            </section>

            {/* 8. No Performance Guarantees */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">8. No Performance Guarantees</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not guarantee specific financial results, advertising performance, revenue outcomes, or return on ad spend.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Marketing performance depends on external variables beyond our control.
              </p>
            </section>

            {/* 9. Intellectual Property */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">9. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                Upon full payment, clients own final deliverables created specifically for them.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We retain rights to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Pre-existing frameworks</li>
                <li>Internal systems</li>
                <li>Methodologies</li>
                <li>Portfolio usage (unless otherwise agreed)</li>
              </ul>
            </section>

            {/* 10. Limitation of Liability */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">10. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, our total liability for any claim shall not exceed the amount paid for the service giving rise to the claim in the 12 months preceding the claim.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are not liable for indirect, incidental, or consequential damages.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nothing excludes liability that cannot legally be excluded under English law.
              </p>
            </section>

            {/* 11. Termination */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">11. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may suspend or terminate services for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Non-payment</li>
                <li>Breach of agreement</li>
                <li>Fraudulent or abusive behaviour</li>
                <li>Unjustified chargebacks</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Termination does not entitle the client to a refund unless required by law.
              </p>
            </section>

            {/* 12. Governing Law */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">12. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms are governed by the laws of England and Wales.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section className="bg-primary/5 border-l-4 border-primary p-4 rounded-r mt-8">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> These Terms of Service were last updated on 14/02/2026.
                By using our website and services, you acknowledge that you have read, understood, and agree to be bound
                by these Terms.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
