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

interface WaterCollectionSectionProps {
  form: UseFormReturn<LeadFormData>;
}

const waterCollectionOptions = [
  {
    id: "rainwater",
    label: "Rainwater Harvesting",
    description: "Roof collection, storage tanks, first-flush diverters",
  },
  {
    id: "greywater",
    label: "Greywater Recycling",
    description: "Laundry, shower, or sink water reuse",
  },
] as const;

export function WaterCollectionSection({ form }: WaterCollectionSectionProps) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="waterCollectionMethods"
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel className="text-base">Water Collection Methods</FormLabel>
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
                    return (
                      <FormItem
                        key={option.id}
                        className="flex flex-row items-start space-x-3 space-y-0 rounded-lg border p-4 hover:bg-accent/50 transition-colors"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(option.id)}
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
                        <div className="space-y-1 leading-none">
                          <FormLabel className="font-medium cursor-pointer">
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
