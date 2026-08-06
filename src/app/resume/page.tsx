import { Download, ExternalLink } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata = { title: "Resume" };

export default function ResumePage() {
  const resumeUrl = "https://docs.google.com/document/d/1URW0U3VKQrB1ei65MZ4aqq-fwfPQ6m-v/edit?usp=sharing";
  const resumePdfUrl = "https://docs.google.com/document/d/1URW0U3VKQrB1ei65MZ4aqq-fwfPQ6m-v/export?format=pdf";

  return (
    <main className="pt-32">
      <section className="container pb-32 md:pb-40">
        <div className="max-w-2xl space-y-12">
          <div className="space-y-4">
            <h1 className="font-geist text-display-xl-mobile text-on-background-emphasis md:text-display-xl">
              Resume
            </h1>
            <p className="text-body-md text-on-surface-variant">
              AI Engineer & Product Builder | Forward Deployment | Business Discovery
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="font-geist text-headline-md text-on-background-emphasis">Download Resume</h2>
              <p className="text-body-md text-on-surface-variant">
                Download my resume as a PDF to view offline or share with your team.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="primary">
                <a href={resumePdfUrl} download="Sriharsha_Gade_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download aria-hidden="true" className="size-4" />
                  Download as PDF
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink aria-hidden="true" className="size-4" />
                  View in Google Docs
                </a>
              </Button>
            </div>
          </div>

          <div className="border-t border-outline-variant/20 pt-12">
            <div className="space-y-6">
              <div>
                <h3 className="mb-3 font-geist text-headline-sm text-on-background-emphasis">Quick Summary</h3>
                <p className="text-body-md text-on-surface-variant">
                  I specialize in bridging business challenges and AI engineering. My experience spans product discovery, AI prototyping, LLM evaluation, and technical direction—helping teams turn ambiguous problems into validated solutions.
                </p>
              </div>

              <div>
                <h3 className="mb-3 font-geist text-headline-sm text-on-background-emphasis">Get in Touch</h3>
                <p className="text-body-md text-on-surface-variant">
                  Interested in discussing opportunities? Feel free to{" "}
                  <Link className="text-primary hover:underline" href="/contact">
                    reach out
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
