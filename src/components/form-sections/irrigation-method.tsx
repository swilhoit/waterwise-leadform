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

interface IrrigationMethodSectionProps {
  form: UseFormReturn<LeadFormData>;
}

const irrigationOptions = [
  {
    id: "drip",
    label: "Drip Irrigation",
    description: "Delivers water directly to plant roots, minimizing evaporation",
  },
  {
    id: "micro_sprinklers",
    label: "Micro-Sprinklers",
    description: "Low-volume sprinklers for targeted watering",
  },
  {
    id: "soaker_hoses",
    label: "Soaker Hoses",
    description: "Porous hoses that release water slowly along their length",
  },
  {
    id: "smart_controllers",
    label: "Smart Controllers",
    description: "Weather-based automated irrigation scheduling",
  },
  {
    id: "not_sure",
    label: "Not Sure — Need Guidance",
    description: "We'll help you choose the best option for your property",
  },
] as const;

export function IrrigationMethodSection({ form }: IrrigationMethodSectionProps) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="irrigationMethod"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <div className="mb-2">
              <FormLabel className="text-base">Preferred Irrigation Method</FormLabel>
              <FormDescription>
                Select the irrigation method you&apos;re most interested in
              </FormDescription>
            </div>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="space-y-3"
              >
                {irrigationOptions.map((option) => (
                  <FormItem
                    key={option.id}
                    className="flex items-start space-x-3 space-y-0 rounded-lg border p-4 hover:bg-accent/50 transition-colors cursor-pointer"
                  >
                    <FormControl>
                      <RadioGroupItem value={option.id} />
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
