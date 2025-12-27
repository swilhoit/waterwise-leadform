import Image from "next/image";
import { LeadForm } from "@/components/lead-form";

export default function FormPage() {
  return (
    <div className="min-h-screen bg-background">
      <header>
        <div className="container mx-auto px-4 py-4 flex justify-center">
          <Image
            src="/Water_Wise_logo.png"
            alt="Water Wise Group"
            width={200}
            height={60}
            priority
          />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tell us about your property and goals, and we&apos;ll help you design a sustainable
            irrigation system while identifying local rebates that can cover part of the cost.
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
