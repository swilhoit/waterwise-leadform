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
import { BadgeDollarSign, Search, CreditCard, Sparkles, CheckCircle, XCircle } from "lucide-react";

interface RebatesIncentivesSectionProps {
  form: UseFormReturn<LeadFormData>;
}

const yesNoOptions = [
  { id: "yes", label: "Yes", icon: CheckCircle },
  { id: "no", label: "No", icon: XCircle },
];

export function RebatesIncentivesSection({ form }: RebatesIncentivesSectionProps) {
  const city = form.watch("city");
  const state = form.watch("state");
  const location = city && state ? `${city}, ${state}` : "your area";

  return (
    <div className="space-y-8">
      <div className="p-5 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Many water utilities in <span className="font-medium text-foreground">{state || "your state"}</span> offer rebates for sustainable irrigation systems.
            We can help you identify and apply for available incentives in <span className="font-medium text-foreground">{location}</span>.
          </p>
        </div>
      </div>

      <FormField
        control={form.control}
        name="awareOfRebates"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel className="text-base font-semibold flex items-center gap-2">
              <BadgeDollarSign className="h-4 w-4 text-muted-foreground" />
              Are you aware of water utility rebates in {location}?
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex gap-4"
              >
                {yesNoOptions.map((option) => {
                  const isSelected = field.value === option.id;
                  return (
                    <FormItem
                      key={option.id}
                      className={`flex items-center space-x-2 space-y-0 rounded-xl border-2 px-6 py-3 transition-all cursor-pointer ${
                        isSelected
                          ? "border-primary bg-primary/5"
                          : "hover:bg-accent/50 hover:border-accent"
                      }`}
                    >
                      <FormControl>
                        <RadioGroupItem value={option.id} />
                      </FormControl>
                      <FormLabel className="font-medium cursor-pointer">
                        {option.label}
                      </FormLabel>
                    </FormItem>
                  );
                })}
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
          <FormItem className="space-y-4">
            <div>
              <FormLabel className="text-base font-semibold flex items-center gap-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                Would you like help identifying rebates in {location}?
              </FormLabel>
              <FormDescription className="mt-1.5">
                We&apos;ll research available {city ? `${city} and ${state}` : "local"} incentives and include them in your consultation
              </FormDescription>
            </div>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex gap-4"
              >
                {yesNoOptions.map((option) => {
                  const isSelected = field.value === option.id;
                  return (
                    <FormItem
                      key={option.id}
                      className={`flex items-center space-x-2 space-y-0 rounded-xl border-2 px-6 py-3 transition-all cursor-pointer ${
                        isSelected
                          ? "border-primary bg-primary/5"
                          : "hover:bg-accent/50 hover:border-accent"
                      }`}
                    >
                      <FormControl>
                        <RadioGroupItem value={option.id} />
                      </FormControl>
                      <FormLabel className="font-medium cursor-pointer">
                        {option.label}
                      </FormLabel>
                    </FormItem>
                  );
                })}
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
          <FormItem className="space-y-4">
            <div>
              <FormLabel className="text-base font-semibold flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-muted-foreground" />
                Are you interested in financing options?
              </FormLabel>
              <FormDescription className="mt-1.5">
                We partner with lenders who offer competitive rates for sustainable projects
              </FormDescription>
            </div>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex gap-4"
              >
                {yesNoOptions.map((option) => {
                  const isSelected = field.value === option.id;
                  return (
                    <FormItem
                      key={option.id}
                      className={`flex items-center space-x-2 space-y-0 rounded-xl border-2 px-6 py-3 transition-all cursor-pointer ${
                        isSelected
                          ? "border-primary bg-primary/5"
                          : "hover:bg-accent/50 hover:border-accent"
                      }`}
                    >
                      <FormControl>
                        <RadioGroupItem value={option.id} />
                      </FormControl>
                      <FormLabel className="font-medium cursor-pointer">
                        {option.label}
                      </FormLabel>
                    </FormItem>
                  );
                })}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
