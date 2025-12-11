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

interface ProjectGoalsSectionProps {
  form: UseFormReturn<LeadFormData>;
}

const projectGoalOptions = [
  {
    id: "reduce_water_bills",
    label: "Reduce Water Bills",
    description: "Lower monthly water costs through efficient irrigation",
  },
  {
    id: "drought_resilience",
    label: "Drought Resilience",
    description: "Protect your landscape during water restrictions",
  },
  {
    id: "environmental_sustainability",
    label: "Environmental Sustainability",
    description: "Minimize environmental impact and conserve water resources",
  },
  {
    id: "food_production",
    label: "Food Production / Edible Garden",
    description: "Support a productive vegetable or fruit garden",
  },
  {
    id: "low_maintenance",
    label: "Low Maintenance",
    description: "Reduce time spent on landscape upkeep",
  },
  {
    id: "comply_restrictions",
    label: "Comply with Local Water Restrictions",
    description: "Meet local regulations and avoid penalties",
  },
  {
    id: "increase_property_value",
    label: "Increase Property Value",
    description: "Enhance your property's appeal and market value",
  },
] as const;

export function ProjectGoalsSection({ form }: ProjectGoalsSectionProps) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="projectGoals"
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel className="text-base">What matters most to you?</FormLabel>
              <FormDescription>
                Select all goals that apply to your project
              </FormDescription>
            </div>
            <div className="space-y-3">
              {projectGoalOptions.map((option) => (
                <FormField
                  key={option.id}
                  control={form.control}
                  name="projectGoals"
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
