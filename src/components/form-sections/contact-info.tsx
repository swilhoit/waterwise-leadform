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
import { LeadFormData } from "@/lib/types";
import { User, Mail, Phone, MapPin, Building2, MessageSquare } from "lucide-react";

interface ContactInfoSectionProps {
  form: UseFormReturn<LeadFormData>;
}

export function ContactInfoSection({ form }: ContactInfoSectionProps) {
  return (
    <div className="space-y-5">
      <FormField
        control={form.control}
        name="fullName"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              Full Name
            </FormLabel>
            <FormControl>
              <Input placeholder="John Smith" className="h-11" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                Email Address
              </FormLabel>
              <FormControl>
                <Input type="email" placeholder="john@example.com" className="h-11" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                Phone Number
              </FormLabel>
              <FormControl>
                <Input type="tel" placeholder="(555) 123-4567" className="h-11" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="street"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              Street Address
            </FormLabel>
            <FormControl>
              <Input placeholder="123 Main Street" className="h-11" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="col-span-2 md:col-span-2">
              <FormLabel className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-muted-foreground" />
                City
              </FormLabel>
              <FormControl>
                <Input placeholder="Austin" className="h-11" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State</FormLabel>
              <FormControl>
                <Input placeholder="TX" className="h-11" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="zip"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ZIP Code</FormLabel>
              <FormControl>
                <Input placeholder="78701" className="h-11" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="preferredContact"
        render={({ field }) => (
          <FormItem className="space-y-3 pt-2">
            <FormLabel className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
              Preferred Contact Method
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-wrap gap-3"
              >
                <FormItem className="flex items-center space-x-2 space-y-0 rounded-lg border px-4 py-3 hover:bg-accent/50 transition-colors cursor-pointer">
                  <FormControl>
                    <RadioGroupItem value="email" />
                  </FormControl>
                  <FormLabel className="font-normal cursor-pointer flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    Email
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-2 space-y-0 rounded-lg border px-4 py-3 hover:bg-accent/50 transition-colors cursor-pointer">
                  <FormControl>
                    <RadioGroupItem value="phone" />
                  </FormControl>
                  <FormLabel className="font-normal cursor-pointer flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    Phone
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-2 space-y-0 rounded-lg border px-4 py-3 hover:bg-accent/50 transition-colors cursor-pointer">
                  <FormControl>
                    <RadioGroupItem value="text" />
                  </FormControl>
                  <FormLabel className="font-normal cursor-pointer flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    Text
                  </FormLabel>
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
