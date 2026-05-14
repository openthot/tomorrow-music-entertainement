import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/terms")({
  component: TermsAndConditions,
});

function TermsAndConditions() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <SmoothScroll />
      <CustomCursor />
      <Nav />
      
      <div className="mx-auto max-w-4xl px-6 pt-40 pb-20 md:px-10">
        <div className="flex flex-col gap-4">
          <h1 className="font-display text-5xl font-bold tracking-tight md:text-7xl">
            Terms <span className="text-[var(--violet)]">of Use.</span>
          </h1>
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/40">
            Effective Date: May 14, 2026
          </p>
        </div>
        
        <div className="mt-16 space-y-12 text-foreground/70 leading-relaxed text-sm md:text-base">
          <section>
            <p>
              <strong>Tomorrow Music Entertainment Pty Ltd</strong><br />
              Website: <a href="http://tomorrowmusic.us" className="text-[var(--violet)] hover:underline">http://tomorrowmusic.us</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground uppercase tracking-wider">1. Agreement to Terms</h2>
            <p className="mt-4">
              By accessing or using <a href="http://tomorrowmusic.us" className="text-[var(--violet)] hover:underline">http://tomorrowmusic.us</a> ("Site"), you agree to be bound by these Terms of Use ("Terms"). This Site is owned and operated by Tomorrow Music Entertainment Pty Ltd ("Company," "we," "us," or "our"). If you do not agree to these Terms, do not use the Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground uppercase tracking-wider">2. Changes to Terms</h2>
            <p className="mt-4">
              We may revise these Terms at any time. Updated versions will be posted on this page with a new "Effective Date." Your continued use of the Site after changes constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground uppercase tracking-wider">3. Eligibility</h2>
            <p className="mt-4">
              You must be at least 13 years old to use the Site. If you are under 18, you represent that your parent or legal guardian has reviewed and agreed to these Terms on your behalf.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground uppercase tracking-wider">4. Intellectual Property</h2>
            <div className="mt-4 space-y-4">
              <p>
                <strong>4.1 Ownership:</strong> All content on the Site, including text, graphics, logos, artwork, audio, video, software, and other materials ("Content"), is owned by Tomorrow Music Entertainment Pty Ltd or its licensors and is protected by copyright, trademark, and other intellectual property laws of Australia and other jurisdictions.
              </p>
              <p>
                <strong>4.2 License to You:</strong> We grant you a limited, non-exclusive, non-transferable, revocable license to access and view Content for personal, non-commercial use only.
              </p>
              <p>
                <strong>4.3 Restrictions:</strong> You may not copy, reproduce, republish, upload, post, transmit, distribute, modify, or create derivative works from any Content without our prior written consent, except as expressly permitted under these Terms or applicable law.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground uppercase tracking-wider">5. User Submissions</h2>
            <div className="mt-4 space-y-4">
              <p>
                <strong>5.1 License Grant:</strong> If you submit or post any materials including music, lyrics, comments, or feedback ("User Content"), you grant Tomorrow Music Entertainment Pty Ltd a worldwide, perpetual, irrevocable, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform such User Content in connection with the Site and our business.
              </p>
              <p>
                <strong>5.2 Your Responsibility:</strong> You represent and warrant that: (i) you own or control all rights to your User Content; (ii) your User Content does not infringe or violate the rights of any third party; and (iii) your User Content complies with these Terms and all applicable laws.
              </p>
              <p>
                <strong>5.3 Monitoring:</strong> We have no obligation to monitor User Content but reserve the right to remove or edit any User Content at our sole discretion.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground uppercase tracking-wider">6. Prohibited Conduct</h2>
            <p className="mt-4">You agree not to:</p>
            <ul className="mt-4 list-decimal pl-5 space-y-2">
              <li>Use the Site for any unlawful purpose or in violation of any applicable law</li>
              <li>Infringe any intellectual property, privacy, or other rights of the Company or third parties</li>
              <li>Upload or transmit viruses, malware, or other harmful code</li>
              <li>Attempt to interfere with, compromise, or decipher any transmissions to or from the servers running the Site</li>
              <li>Use any robot, spider, scraper, or other automated means to access the Site</li>
              <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground uppercase tracking-wider">7. Copyright Infringement Notice</h2>
            <p className="mt-4">
              We respect intellectual property rights. Pursuant to the U.S. Digital Millennium Copyright Act and the Australian Copyright Act 1968, if you believe that any Content infringes your copyright, please send a written notice to:
            </p>
            <div className="mt-4 p-6 border border-white/10 bg-white/5 rounded-lg">
              <p className="font-semibold text-foreground italic">Copyright Agent</p>
              <p>Tomorrow Music Entertainment Pty Ltd</p>
              <p>Email: <a href="mailto:copyright@tomorrowmusic.us" className="text-[var(--violet)] hover:underline">copyright@tomorrowmusic.us</a></p>
              <p>Address: 7 Castalis Street, Atlantis, 7349, Cape Town, South Africa</p>
            </div>
            <p className="mt-4">
              Your notice must include: (i) identification of the copyrighted work; (ii) identification of the infringing material; (iii) your contact information; (iv) a statement of good faith belief; (v) a statement of accuracy under penalty of perjury; and (vi) your physical or electronic signature.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground uppercase tracking-wider">8. Third-Party Links</h2>
            <p className="mt-4">
              The Site may contain links to third-party websites. We do not endorse and are not responsible for any third-party content, products, services, or privacy practices. Accessing third-party sites is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground uppercase tracking-wider">9. Disclaimer of Warranties</h2>
            <p className="mt-4 font-medium text-foreground/90">
              THE SITE AND ALL CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, TOMORROW MUSIC ENTERTAINMENT PTY LTD DISCLAIMS ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground uppercase tracking-wider">10. Limitation of Liability</h2>
            <p className="mt-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, TOMORROW MUSIC ENTERTAINMENT PTY LTD SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SITE. OUR TOTAL LIABILITY FOR ALL CLAIMS SHALL NOT EXCEED AUD 00.
            </p>
            <p className="mt-4 italic">
              Nothing in these Terms excludes liability that cannot be excluded under Australian Consumer Law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground uppercase tracking-wider">11. Indemnification</h2>
            <p className="mt-4">
              You agree to indemnify, defend, and hold harmless Tomorrow Music Entertainment Pty Ltd, its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or in any way connected with your access to or use of the Site or your violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground uppercase tracking-wider">12. Governing Law and Jurisdiction</h2>
            <p className="mt-4">
              These Terms are governed by the laws of New South Wales, Australia. You irrevocably submit to the exclusive jurisdiction of the courts located in New South Wales for any dispute arising out of or relating to these Terms or the Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground uppercase tracking-wider">13. Termination</h2>
            <p className="mt-4">
              We may suspend or terminate your access to the Site at any time, without notice, for any reason, including if you breach these Terms. Upon termination, all licenses granted to you will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground uppercase tracking-wider">14. General Provisions</h2>
            <div className="mt-4 space-y-4">
              <p><strong>14.1 Entire Agreement:</strong> These Terms constitute the entire agreement between you and the Company regarding the Site.</p>
              <p><strong>14.2 Severability:</strong> If any provision is found unenforceable, the remaining provisions will remain in full force.</p>
              <p><strong>14.3 Waiver:</strong> Our failure to enforce any provision is not a waiver of our right to do so later.</p>
              <p><strong>14.4 Assignment:</strong> You may not assign these Terms. We may assign our rights and obligations without restriction.</p>
            </div>
          </section>

          <section className="pb-20">
            <h2 className="text-xl font-semibold text-foreground uppercase tracking-wider">15. Contact</h2>
            <div className="mt-4 p-6 border border-white/10 bg-white/5 rounded-lg">
              <p className="font-semibold text-foreground">Tomorrow Music Entertainment Pty Ltd</p>
              <p className="mt-2">Email: <a href="mailto:legal@tomorrowmusic.us" className="text-[var(--violet)] hover:underline">legal@tomorrowmusic.us</a></p>
              <p>Website: <a href="http://tomorrowmusic.us" className="text-[var(--violet)] hover:underline">http://tomorrowmusic.us</a></p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
