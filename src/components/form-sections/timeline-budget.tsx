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
import { Zap, Clock, CalendarDays, Search, Wallet, LucideIcon } from "lucide-react";

interface TimelineBudgetSectionProps {
  form: UseFormReturn<LeadFormData>;
}

const timelineOptions: { id: string; label: string; icon: LucideIcon }[] = [
  { id: "immediately", label: "Immediately", icon: Zap },
  { id: "1_3_months", label: "1-3 months", icon: Clock },
  { id: "3_6_months", label: "3-6 months", icon: CalendarDays },
  { id: "researching", label: "Just researching", icon: Search },
];

const budgetOptions: { id: string; label: string }[] = [
  { id: "under_1000", label: "Under $1,000" },
  { id: "1000_5000", label: "$1,000 - $5,000" },
  { id: "5000_15000", label: "$5,000 - $15,000" },
  { id: "15000_plus", label: "$15,000+" },
  { id: "unsure", label: "Unsure" },
];

export function TimelineBudgetSection({ form }: TimelineBudgetSectionProps) {
  return (
    <div className="space-y-8">
      <FormField
        control={form.control}
        name="timeline"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel className="text-base font-semibold flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              When are you looking to start?
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid grid-cols-2 gap-3"
              >
                {timelineOptions.map((option) => {
                  const Icon = option.icon;
                  const isSelected = field.value === option.id;
                  return (
                    <FormItem
                      key={option.id}
                      className={`flex items-center space-x-3 space-y-0 rounded-xl border-2 p-4 transition-all cursor-pointer ${
                        isSelected
                          ? "border-primary bg-primary/5"
                          : "hover:bg-accent/50 hover:border-accent"
                      }`}
                    >
                      <FormControl>
                        <RadioGroupItem value={option.id} />
                      </FormControl>
                      <Icon className={`h-4 w-4 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                      <FormLabel className="font-normal cursor-pointer">
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
        name="budget"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel className="text-base font-semibold flex items-center gap-2">
              <Wallet className="h-4 w-4 text-muted-foreground" />
              Estimated Budget Range
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid grid-cols-2 md:grid-cols-3 gap-3"
              >
                {budgetOptions.map((option) => {
                  const isSelected = field.value === option.id;
                  return (
                    <FormItem
                      key={option.id}
                      className={`flex items-center justify-center space-x-2 space-y-0 rounded-xl border-2 p-4 transition-all cursor-pointer ${
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
