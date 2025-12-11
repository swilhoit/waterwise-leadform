"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Form } from "@/components/ui/form";
import { leadFormSchema, type LeadFormData, FORM_STEPS } from "@/lib/types";
import { ContactInfoSection } from "./form-sections/contact-info";
import { PropertyDetailsSection } from "./form-sections/property-details";
import { WaterCollectionSection } from "./form-sections/water-collection";
import { IrrigationMethodSection } from "./form-sections/irrigation-method";
import { ProjectGoalsSection } from "./form-sections/project-goals";
import { TimelineBudgetSection } from "./form-sections/timeline-budget";
import { InstallationSupportSection } from "./form-sections/installation-support";
import { RebatesIncentivesSection } from "./form-sections/rebates-incentives";

export function LeadForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      preferredContact: "email",
      propertyType: "residential",
      lotSize: "",
      lotSizeUnit: "sqft",
      currentLandscape: "lawn",
      existingIrrigation: "no",
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
        return ["fullName", "email", "phone", "street", "city", "state", "zip", "preferredContact"];
      case 2:
        return ["propertyType", "lotSize", "lotSizeUnit", "currentLandscape", "existingIrrigation"];
      case 3:
        return ["waterCollectionMethods"];
      case 4:
        return ["irrigationMethod"];
      case 5:
        return ["projectGoals"];
      case 6:
        return ["timeline", "budget"];
      case 7:
        return ["needInstaller", "maintenancePlan", "siteAssessment"];
      case 8:
        return ["awareOfRebates", "helpIdentifyRebates", "interestedInFinancing"];
      default:
        return [];
    }
  };

  const handleNext = async () => {
    const isValid = await validateCurrentStep();
    if (isValid && currentStep < FORM_STEPS.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: LeadFormData) => {
    console.log("Form submitted:", data);
    // Here you would typically send the data to your backend
    setIsSubmitted(true);
  };

  const renderCurrentSection = () => {
    switch (currentStep) {
      case 1:
        return <ContactInfoSection form={form} />;
      case 2:
        return <PropertyDetailsSection form={form} />;
      case 3:
        return <WaterCollectionSection form={form} />;
      case 4:
        return <IrrigationMethodSection form={form} />;
      case 5:
        return <ProjectGoalsSection form={form} />;
      case 6:
        return <TimelineBudgetSection form={form} />;
      case 7:
        return <InstallationSupportSection form={form} />;
      case 8:
        return <RebatesIncentivesSection form={form} />;
      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto shadow-lg">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <svg
              className="h-8 w-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <CardTitle className="text-2xl">Thank You!</CardTitle>
          <CardDescription className="text-base mt-2">
            Your sustainable irrigation consultation request has been submitted successfully.
            We&apos;ll be in touch within 1-2 business days.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground mb-6">
            In the meantime, check your email for helpful resources about sustainable water management.
          </p>
          <Button onClick={() => { setIsSubmitted(false); setCurrentStep(1); form.reset(); }}>
            Submit Another Request
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-xl">
            Step {currentStep}: {FORM_STEPS[currentStep - 1].title}
          </CardTitle>
          <span className="text-sm text-muted-foreground">
            {currentStep} of {FORM_STEPS.length}
          </span>
        </div>
        <CardDescription>{FORM_STEPS[currentStep - 1].description}</CardDescription>
        <Progress value={progress} className="mt-4" />
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {renderCurrentSection()}

            <div className="flex justify-between pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                Previous
              </Button>

              {currentStep === FORM_STEPS.length ? (
                <Button type="submit">
                  Submit Request
                </Button>
              ) : (
                <Button type="button" onClick={handleNext}>
                  Next
                </Button>
              )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
