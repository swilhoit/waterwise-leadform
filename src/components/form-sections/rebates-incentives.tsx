"use client";

import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { LeadFormData } from "@/lib/types";

interface RebatesIncentivesSectionProps {
  form: UseFormReturn<LeadFormData>;
}

const yesNoOptions = [
  { id: "yes", label: "Yes" },
  { id: "no", label: "No" },
] as const;

export function RebatesIncentivesSection({ form }: RebatesIncentivesSectionProps) {
  return (
    <div className="space-y-6">
      <div className="p-4 bg-accent/30 rounded-lg">
        <p className="text-sm text-muted-foreground">
          Many water utilities offer rebates for sustainable irrigation systems.
          We can help you identify and apply for available incentives in your area.
        </p>
      </div>

      <FormField
        control={form.control}
        name="awareOfRebates"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-base">Are you aware of local water utility rebates?</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex gap-4"
              >
                {yesNoOptions.map((option) => (
                  <FormItem
                    key={option.id}
                    className="flex items-center space-x-2 space-y-0 rounded-lg border p-3 px-6 hover:bg-accent/50 transition-colors cursor-pointer"
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
        name="helpIdentifyRebates"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-base">Would you like help identifying rebates in your area?</FormLabel>
            <FormDescription>
              We&apos;ll research available incentives and include them in your consultation
            </FormDescription>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex gap-4"
              >
                {yesNoOptions.map((option) => (
                  <FormItem
                    key={option.id}
                    className="flex items-center space-x-2 space-y-0 rounded-lg border p-3 px-6 hover:bg-accent/50 transition-colors cursor-pointer"
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
        name="interestedInFinancing"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-base">Are you interested in financing options?</FormLabel>
            <FormDescription>
              We partner with lenders who offer competitive rates for sustainable projects
            </FormDescription>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex gap-4"
              >
                {yesNoOptions.map((option) => (
                  <FormItem
                    key={option.id}
                    className="flex items-center space-x-2 space-y-0 rounded-lg border p-3 px-6 hover:bg-accent/50 transition-colors cursor-pointer"
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
