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
import { Droplet, SprayCan, Waves, Cpu, HelpCircle, LucideIcon } from "lucide-react";

interface IrrigationMethodSectionProps {
  form: UseFormReturn<LeadFormData>;
}

const irrigationOptions: {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    id: "drip",
    label: "Drip Irrigation",
    description: "Delivers water directly to plant roots, minimizing evaporation",
    icon: Droplet,
  },
  {
    id: "micro_sprinklers",
    label: "Micro-Sprinklers",
    description: "Low-volume sprinklers for targeted watering",
    icon: SprayCan,
  },
  {
    id: "soaker_hoses",
    label: "Soaker Hoses",
    description: "Porous hoses that release water slowly along their length",
    icon: Waves,
  },
  {
    id: "smart_controllers",
    label: "Smart Controllers",
    description: "Weather-based automated irrigation scheduling",
    icon: Cpu,
  },
  {
    id: "not_sure",
    label: "Not Sure — Need Guidance",
    description: "We'll help you choose the best option for your property",
    icon: HelpCircle,
  },
];

export function IrrigationMethodSection({ form }: IrrigationMethodSectionProps) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="irrigationMethod"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <div className="mb-2">
              <FormLabel className="text-base font-semibold">Preferred Irrigation Method</FormLabel>
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
                {irrigationOptions.map((option) => {
                  const Icon = option.icon;
                  const isSelected = field.value === option.id;
                  return (
                    <FormItem
                      key={option.id}
                      className={`flex items-start space-x-4 space-y-0 rounded-xl border-2 p-4 transition-all cursor-pointer ${
                        isSelected
                          ? "border-primary bg-primary/5"
                          : "hover:bg-accent/50 hover:border-accent"
                      }`}
                    >
                      <FormControl>
                        <RadioGroupItem value={option.id} className="mt-1" />
                      </FormControl>
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                        isSelected ? "bg-primary/10" : "bg-muted"
                      }`}>
                        <Icon className={`h-5 w-5 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
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
