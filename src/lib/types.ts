import { z } from "zod";

export const leadFormSchema = z.object({
  // Section 1: Contact Information
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  street: z.string().min(5, "Please enter your street address"),
  city: z.string().min(2, "Please enter your city"),
  state: z.string().min(2, "Please enter your state"),
  zip: z.string().min(5, "Please enter a valid ZIP code"),
  preferredContact: z.enum(["email", "phone", "text"]),

  // Section 2: Water Collection Method
  waterCollectionMethods: z.array(z.enum(["rainwater", "greywater"])).min(1, "Please select at least one option"),

  // Section 3: Irrigation Method
  irrigationMethod: z.enum(["drip", "micro_sprinklers", "soaker_hoses", "smart_controllers", "not_sure"]),

  // Section 4: Project Goals
  projectGoals: z.array(z.enum([
    "reduce_water_bills",
    "drought_resilience",
    "environmental_sustainability",
    "food_production",
    "low_maintenance",
    "comply_restrictions",
    "increase_property_value"
  ])).min(1, "Please select at least one goal"),

  // Section 5: Timeline & Budget
  timeline: z.enum(["immediately", "1_3_months", "3_6_months", "researching"]),
  budget: z.enum(["under_1000", "1000_5000", "5000_15000", "15000_plus", "unsure"]),

  // Section 6: Installation & Support
  needInstaller: z.enum(["yes", "no", "diy"]),
  maintenancePlan: z.enum(["yes", "no", "maybe"]),
  siteAssessment: z.enum(["yes_free", "yes_paid", "no"]),

  // Section 7: Rebates & Incentives
  awareOfRebates: z.enum(["yes", "no"]),
  helpIdentifyRebates: z.enum(["yes", "no"]),
  interestedInFinancing: z.enum(["yes", "no"]),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;

export const FORM_STEPS = [
  { id: 1, title: "Contact Info", description: "Your contact details" },
  { id: 2, title: "Water Collection", description: "Collection methods" },
  { id: 3, title: "Irrigation", description: "Irrigation method" },
  { id: 4, title: "Goals", description: "Project goals" },
  { id: 5, title: "Timeline", description: "Timeline & budget" },
  { id: 6, title: "Support", description: "Installation support" },
  { id: 7, title: "Rebates", description: "Rebates & incentives" },
] as const;
