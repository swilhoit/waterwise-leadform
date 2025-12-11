import { LeadForm } from "@/components/lead-form";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <svg
                className="h-6 w-6 text-primary-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">WaterWise</h1>
              <p className="text-sm text-muted-foreground">Sustainable Irrigation Solutions</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Get Your Free Irrigation Consultation
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tell us about your property and goals, and we&apos;ll help you design a sustainable
            irrigation system that saves water, money, and the environment.
          </p>
        </div>

        <LeadForm />

        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>
            Your information is secure and will only be used to provide you with irrigation solutions.
          </p>
        </footer>
      </main>
    </div>
  );
}
