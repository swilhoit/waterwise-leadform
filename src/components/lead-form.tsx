"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Form } from "@/components/ui/form";
import { leadFormSchema, type LeadFormData, FORM_STEPS } from "@/lib/types";
import { ContactInfoSection } from "./form-sections/contact-info";
import { WaterCollectionSection } from "./form-sections/water-collection";
import { IrrigationMethodSection } from "./form-sections/irrigation-method";
import { ProjectGoalsSection } from "./form-sections/project-goals";
import { TimelineBudgetSection } from "./form-sections/timeline-budget";
import { InstallationSupportSection } from "./form-sections/installation-support";
import { RebatesIncentivesSection } from "./form-sections/rebates-incentives";
import {
  User,
  Droplets,
  Sprout,
  Target,
  Calendar,
  Wrench,
  BadgeDollarSign,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Send,
} from "lucide-react";

const STEP_ICONS = [User, Droplets, Sprout, Target, Calendar, Wrench, BadgeDollarSign];

export function LeadForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const leadIdRef = useRef<string | null>(null);

  const savePartialLead = async (data: Partial<LeadFormData>, step: number) => {
    try {
      const payload = {
        ...data,
        leadId: leadIdRef.current,
        completedStep: step,
        isComplete: step === FORM_STEPS.length,
      };

      // Send to your backend API
      const response = await fetch("/api/leads", {
        method: leadIdRef.current ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.leadId && !leadIdRef.current) {
          leadIdRef.current = result.leadId;
        }
      }
    } catch (error) {
      console.error("Failed to save lead:", error);
    }
  };

  const form = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      zip: "",
      preferredContact: "email",
      waterCollectionMethods: [],
      irrigationMethod: "not_sure",
      projectGoals: [],
      timeline: "researching",
      budget: "unsure",
      needInstaller: "yes",
      maintenancePlan: "maybe",
      siteAssessment: "yes_free",
      awareOfRebates: "no",
      helpIdentifyRebates: "yes",
      interestedInFinancing: "no",
    },
    mode: "onChange",
  });

  const progress = (currentStep / FORM_STEPS.length) * 100;

  const validateCurrentStep = async () => {
    const fieldsToValidate = getFieldsForStep(currentStep);
    const result = await form.trigger(fieldsToValidate as (keyof LeadFormData)[]);
    return result;
  };

  const getFieldsForStep = (step: number): (keyof LeadFormData)[] => {
    switch (step) {
      case 1:
        return ["fullName", "email", "phone", "city", "state", "zip", "preferredContact"];
      case 2:
        return ["waterCollectionMethods"];
      case 3:
        return ["irrigationMethod"];
      case 4:
        return ["projectGoals"];
      case 5:
        return ["timeline", "budget"];
      case 6:
        return ["needInstaller", "maintenancePlan", "siteAssessment"];
      case 7:
        return ["awareOfRebates", "helpIdentifyRebates", "interestedInFinancing"];
      default:
        return [];
    }
  };

  const handleNext = async () => {
    const isValid = await validateCurrentStep();
    if (isValid && currentStep < FORM_STEPS.length) {
      // Save partial lead data after each step (non-blocking)
      const currentData = form.getValues();
      savePartialLead(currentData, currentStep);
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: LeadFormData) => {
    // Save final complete submission
    await savePartialLead(data, FORM_STEPS.length);
    setIsSubmitted(true);
  };

  const renderCurrentSection = () => {
    switch (currentStep) {
      case 1:
        return <ContactInfoSection form={form} />;
      case 2:
        return <WaterCollectionSection form={form} />;
      case 3:
        return <IrrigationMethodSection form={form} />;
      case 4:
        return <ProjectGoalsSection form={form} />;
      case 5:
        return <TimelineBudgetSection form={form} />;
      case 6:
        return <InstallationSupportSection form={form} />;
      case 7:
        return <RebatesIncentivesSection form={form} />;
      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto border-0 bg-gradient-to-b from-card to-card/80">
        <CardHeader className="text-center pt-10 pb-6">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 ring-4 ring-primary/10">
            <CheckCircle2 className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Thank You!
          </CardTitle>
          <CardDescription className="text-base mt-3 max-w-md mx-auto">
            Your sustainable irrigation consultation request has been submitted successfully.
            We&apos;ll be in touch within 1-2 business days.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center pb-10">
          <p className="text-muted-foreground">
            In the meantime, check your email for helpful resources about sustainable water management.
          </p>
        </CardContent>
      </Card>
    );
  }

  const StepIcon = STEP_ICONS[currentStep - 1];

  return (
    <Card className="w-full max-w-2xl mx-auto border-0 bg-gradient-to-b from-card to-card/80 overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-4 mb-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
            <StepIcon className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-semibold">
                {FORM_STEPS[currentStep - 1].title}
              </CardTitle>
              <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                {currentStep} of {FORM_STEPS.length}
              </span>
            </div>
            <CardDescription className="mt-1">{FORM_STEPS[currentStep - 1].description}</CardDescription>
          </div>
        </div>
        <Progress value={progress} className="h-2" />
      </CardHeader>
      <CardContent className="pt-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {renderCurrentSection()}

            <div className="flex justify-between pt-6 border-t">
              <Button
                type="button"
                variant="ghost"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>

              {currentStep === FORM_STEPS.length ? (
                <Button type="submit" className="gap-2">
                  Submit Request
                  <Send className="h-4 w-4" />
                </Button>
              ) : (
                <Button type="button" onClick={handleNext} className="gap-2">
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
