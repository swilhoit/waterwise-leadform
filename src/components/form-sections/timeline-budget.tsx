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

interface TimelineBudgetSectionProps {
  form: UseFormReturn<LeadFormData>;
}

const timelineOptions = [
  { id: "immediately", label: "Immediately" },
  { id: "1_3_months", label: "1-3 months" },
  { id: "3_6_months", label: "3-6 months" },
  { id: "researching", label: "Just researching" },
] as const;

const budgetOptions = [
  { id: "under_1000", label: "Under $1,000" },
  { id: "1000_5000", label: "$1,000 - $5,000" },
  { id: "5000_15000", label: "$5,000 - $15,000" },
  { id: "15000_plus", label: "$15,000+" },
  { id: "unsure", label: "Unsure" },
] as const;

export function TimelineBudgetSection({ form }: TimelineBudgetSectionProps) {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="timeline"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-base">When are you looking to start?</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid grid-cols-2 gap-3"
              >
                {timelineOptions.map((option) => (
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
        name="budget"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-base">Estimated Budget Range</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid grid-cols-2 gap-3"
              >
                {budgetOptions.map((option) => (
                  <FormItem
                    key={option.id}
                    className={`flex items-center space-x-2 space-y-0 rounded-lg border p-3 hover:bg-accent/50 transition-colors cursor-pointer ${
                      option.id === "unsure" ? "col-span-2 md:col-span-1" : ""
                    }`}
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
