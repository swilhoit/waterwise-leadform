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
import {
  DollarSign,
  Shield,
  Leaf,
  Apple,
  Clock,
  Scale,
  TrendingUp,
  LucideIcon,
} from "lucide-react";

interface ProjectGoalsSectionProps {
  form: UseFormReturn<LeadFormData>;
}

type ProjectGoalId = LeadFormData["projectGoals"][number];

const projectGoalOptions: {
  id: ProjectGoalId;
  label: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    id: "reduce_water_bills",
    label: "Reduce Water Bills",
    description: "Lower monthly water costs through efficient irrigation",
    icon: DollarSign,
  },
  {
    id: "drought_resilience",
    label: "Drought Resilience",
    description: "Protect your landscape during water restrictions",
    icon: Shield,
  },
  {
    id: "environmental_sustainability",
    label: "Environmental Sustainability",
    description: "Minimize environmental impact and conserve water resources",
    icon: Leaf,
  },
  {
    id: "food_production",
    label: "Food Production / Edible Garden",
    description: "Support a productive vegetable or fruit garden",
    icon: Apple,
  },
  {
    id: "low_maintenance",
    label: "Low Maintenance",
    description: "Reduce time spent on landscape upkeep",
    icon: Clock,
  },
  {
    id: "comply_restrictions",
    label: "Comply with Local Water Restrictions",
    description: "Meet local regulations and avoid penalties",
    icon: Scale,
  },
  {
    id: "increase_property_value",
    label: "Increase Property Value",
    description: "Enhance your property's appeal and market value",
    icon: TrendingUp,
  },
];

export function ProjectGoalsSection({ form }: ProjectGoalsSectionProps) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="projectGoals"
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel className="text-base font-semibold">What matters most to you?</FormLabel>
              <FormDescription>
                Select all goals that apply to your project
              </FormDescription>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {projectGoalOptions.map((option) => (
                <FormField
                  key={option.id}
                  control={form.control}
                  name="projectGoals"
                  render={({ field }) => {
                    const Icon = option.icon;
                    const isChecked = field.value?.includes(option.id);
                    return (
                      <FormItem
                        key={option.id}
                        className={`flex flex-row items-start space-x-3 space-y-0 rounded-xl border-2 p-4 transition-all cursor-pointer ${
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
                        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                          isChecked ? "bg-primary/10" : "bg-muted"
                        }`}>
                          <Icon className={`h-4 w-4 ${isChecked ? "text-primary" : "text-muted-foreground"}`} />
                        </div>
                        <div className="space-y-0.5 leading-none min-w-0">
                          <FormLabel className="font-medium cursor-pointer text-sm">
                            {option.label}
                          </FormLabel>
                          <FormDescription className="text-xs text-muted-foreground line-clamp-2">
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
