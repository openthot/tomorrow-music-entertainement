import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <SmoothScroll />
      <CustomCursor />
      <Nav />
      
      <div className="mx-auto max-w-4xl px-6 pt-40 pb-20 md:px-10">
        <h1 className="font-display text-5xl font-bold tracking-tight md:text-7xl">
          Privacy <span className="text-[var(--violet)]">Policy.</span>
        </h1>
        
        <div className="mt-16 space-y-12 text-foreground/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground uppercase tracking-wider">Introduction</h2>
            <p className="mt-4">
              At Tomorrow Music Entertainment, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground uppercase tracking-wider">Data Collection</h2>
            <p className="mt-4">
              We may collect personal information such as your name, email address, and contact details when you interact with our site, sign up for our newsletter, or contact us through our forms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground uppercase tracking-wider">Use of Information</h2>
            <p className="mt-4">
              Your information is used to provide and improve our services, communicate with you, and ensure a personalized experience. We do not sell your personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground uppercase tracking-wider">Cookies</h2>
            <p className="mt-4">
              Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some functionality of the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground uppercase tracking-wider">Contact Us</h2>
            <p className="mt-4">
              If you have any questions about this Privacy Policy, please contact us at support@tomorrowmusic.us.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
