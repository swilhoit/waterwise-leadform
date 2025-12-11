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
import { Checkbox } from "@/components/ui/checkbox";
import { LeadFormData } from "@/lib/types";
import { CloudRain, Recycle, LucideIcon } from "lucide-react";

interface WaterCollectionSectionProps {
  form: UseFormReturn<LeadFormData>;
}

const waterCollectionOptions: {
  id: "rainwater" | "greywater";
  label: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    id: "rainwater",
    label: "Rainwater Harvesting",
    description: "Roof collection, storage tanks, first-flush diverters",
    icon: CloudRain,
  },
  {
    id: "greywater",
    label: "Greywater Recycling",
    description: "Laundry, shower, or sink water reuse",
    icon: Recycle,
  },
];

export function WaterCollectionSection({ form }: WaterCollectionSectionProps) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="waterCollectionMethods"
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel className="text-base font-semibold">Water Collection Methods</FormLabel>
              <FormDescription>
                Select all methods that interest you
              </FormDescription>
            </div>
            <div className="space-y-4">
              {waterCollectionOptions.map((option) => (
                <FormField
                  key={option.id}
                  control={form.control}
                  name="waterCollectionMethods"
                  render={({ field }) => {
                    const Icon = option.icon;
                    const isChecked = field.value?.includes(option.id);
                    return (
                      <FormItem
                        key={option.id}
                        className={`flex flex-row items-start space-x-4 space-y-0 rounded-xl border-2 p-5 transition-all cursor-pointer ${
                          isChecked
                            ? "border-primary bg-primary/5"
                            : "hover:bg-accent/50 hover:border-accent"
                        }`}
                      >
                        <FormControl>
                          <Checkbox
                            checked={isChecked}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, option.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== option.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                          isChecked ? "bg-primary/10" : "bg-muted"
                        }`}>
                          <Icon className={`h-5 w-5 ${isChecked ? "text-primary" : "text-muted-foreground"}`} />
                        </div>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="font-medium cursor-pointer text-base">
                            {option.label}
                          </FormLabel>
                          <FormDescription className="text-sm text-muted-foreground">
                            {option.description}
                          </FormDescription>
                        </div>
                      </FormItem>
                    );
                  }}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
