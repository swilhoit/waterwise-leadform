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
import { HardHat, UserCheck, Hammer, Settings, ClipboardCheck, MapPin, LucideIcon } from "lucide-react";

interface InstallationSupportSectionProps {
  form: UseFormReturn<LeadFormData>;
}

const installerOptions: { id: string; label: string; icon: LucideIcon }[] = [
  { id: "yes", label: "Yes, I need a local installer", icon: HardHat },
  { id: "no", label: "No, I have an installer", icon: UserCheck },
  { id: "diy", label: "DIY with guidance", icon: Hammer },
];

const maintenanceOptions: { id: string; label: string }[] = [
  { id: "yes", label: "Yes" },
  { id: "no", label: "No" },
  { id: "maybe", label: "Maybe" },
];

const assessmentOptions: { id: string; label: string; icon: LucideIcon }[] = [
  { id: "yes_free", label: "Yes, free assessment", icon: ClipboardCheck },
  { id: "yes_paid", label: "Yes, paid assessment", icon: ClipboardCheck },
  { id: "no", label: "No thanks", icon: ClipboardCheck },
];

export function InstallationSupportSection({ form }: InstallationSupportSectionProps) {
  const city = form.watch("city");
  const state = form.watch("state");
  const location = city && state ? `${city}, ${state}` : "your area";

  return (
    <div className="space-y-8">
      <FormField
        control={form.control}
        name="needInstaller"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel className="text-base font-semibold flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              Do you need a local installer in {location}?
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="space-y-3"
              >
                {installerOptions.map((option) => {
                  const Icon = option.icon;
                  const isSelected = field.value === option.id;
                  return (
                    <FormItem
                      key={option.id}
                      className={`flex items-center space-x-4 space-y-0 rounded-xl border-2 p-4 transition-all cursor-pointer ${
                        isSelected
                          ? "border-primary bg-primary/5"
                          : "hover:bg-accent/50 hover:border-accent"
                      }`}
                    >
                      <FormControl>
                        <RadioGroupItem value={option.id} />
                      </FormControl>
                      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                        isSelected ? "bg-primary/10" : "bg-muted"
                      }`}>
                        <Icon className={`h-4 w-4 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                      </div>
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
        name="maintenancePlan"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel className="text-base font-semibold flex items-center gap-2">
              <Settings className="h-4 w-4 text-muted-foreground" />
              Interested in ongoing maintenance plans?
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-wrap gap-3"
              >
                {maintenanceOptions.map((option) => {
                  const isSelected = field.value === option.id;
                  return (
                    <FormItem
                      key={option.id}
                      className={`flex items-center space-x-2 space-y-0 rounded-xl border-2 px-5 py-3 transition-all cursor-pointer ${
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
        name="siteAssessment"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel className="text-base font-semibold flex items-center gap-2">
              <ClipboardCheck className="h-4 w-4 text-muted-foreground" />
              Would you like a site assessment?
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="space-y-3"
              >
                {assessmentOptions.map((option) => {
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
