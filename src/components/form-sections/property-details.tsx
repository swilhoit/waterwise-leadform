"use client";

import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LeadFormData } from "@/lib/types";

interface PropertyDetailsSectionProps {
  form: UseFormReturn<LeadFormData>;
}

export function PropertyDetailsSection({ form }: PropertyDetailsSectionProps) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="propertyType"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Property Type</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid grid-cols-2 gap-4"
              >
                <FormItem className="flex items-center space-x-2 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="residential" />
                  </FormControl>
                  <FormLabel className="font-normal cursor-pointer">Residential</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-2 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="commercial" />
                  </FormControl>
                  <FormLabel className="font-normal cursor-pointer">Commercial</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-2 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="agricultural" />
                  </FormControl>
                  <FormLabel className="font-normal cursor-pointer">Agricultural</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-2 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="municipal" />
                  </FormControl>
                  <FormLabel className="font-normal cursor-pointer">Municipal</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-3 gap-4">
        <FormField
          control={form.control}
          name="lotSize"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Approximate Lot Size</FormLabel>
              <FormControl>
                <Input type="number" placeholder="5000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lotSizeUnit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Unit</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="sqft">sq ft</SelectItem>
                  <SelectItem value="acres">acres</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="currentLandscape"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Current Landscape</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select your landscape type" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="lawn">Lawn</SelectItem>
                <SelectItem value="garden">Garden</SelectItem>
                <SelectItem value="orchard">Orchard</SelectItem>
                <SelectItem value="mixed">Mixed</SelectItem>
                <SelectItem value="new_construction">New Construction</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="existingIrrigation"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Do you have existing irrigation?</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-wrap gap-4"
              >
                <FormItem className="flex items-center space-x-2 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="yes" />
                  </FormControl>
                  <FormLabel className="font-normal cursor-pointer">Yes</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-2 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="no" />
                  </FormControl>
                  <FormLabel className="font-normal cursor-pointer">No</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-2 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="partial" />
                  </FormControl>
                  <FormLabel className="font-normal cursor-pointer">Partial</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
