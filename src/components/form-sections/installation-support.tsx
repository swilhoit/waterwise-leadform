"use client";

import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { LeadFormData } from "@/lib/types";

interface InstallationSupportSectionProps {
  form: UseFormReturn<LeadFormData>;
}

const installerOptions = [
  { id: "yes", label: "Yes, I need a local installer" },
  { id: "no", label: "No, I have an installer" },
  { id: "diy", label: "DIY with guidance" },
] as const;

const maintenanceOptions = [
  { id: "yes", label: "Yes" },
  { id: "no", label: "No" },
  { id: "maybe", label: "Maybe" },
] as const;

const assessmentOptions = [
  { id: "yes_free", label: "Yes, free assessment" },
  { id: "yes_paid", label: "Yes, paid assessment" },
  { id: "no", label: "No" },
] as const;

export function InstallationSupportSection({ form }: InstallationSupportSectionProps) {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="needInstaller"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-base">Do you need a local installer?</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="space-y-2"
              >
                {installerOptions.map((option) => (
                  <FormItem
                    key={option.id}
                    className="flex items-center space-x-2 space-y-0 rounded-lg border p-3 hover:bg-accent/50 transition-colors cursor-pointer"
                  >
                    <FormControl>
                      <RadioGroupItem value={option.id} />
                    </FormControl>
                    <FormLabel className="font-normal cursor-pointer">
                      {option.label}
                    </FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="maintenancePlan"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-base">Interested in ongoing maintenance plans?</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-wrap gap-3"
              >
                {maintenanceOptions.map((option) => (
                  <FormItem
                    key={option.id}
                    className="flex items-center space-x-2 space-y-0 rounded-lg border p-3 hover:bg-accent/50 transition-colors cursor-pointer"
                  >
                    <FormControl>
                      <RadioGroupItem value={option.id} />
                    </FormControl>
                    <FormLabel className="font-normal cursor-pointer">
                      {option.label}
                    </FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="siteAssessment"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-base">Would you like a site assessment?</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="space-y-2"
              >
                {assessmentOptions.map((option) => (
                  <FormItem
                    key={option.id}
                    className="flex items-center space-x-2 space-y-0 rounded-lg border p-3 hover:bg-accent/50 transition-colors cursor-pointer"
                  >
                    <FormControl>
                      <RadioGroupItem value={option.id} />
                    </FormControl>
                    <FormLabel className="font-normal cursor-pointer">
                      {option.label}
                    </FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
