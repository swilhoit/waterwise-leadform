import { NextRequest, NextResponse } from "next/server";

// In-memory store for demo purposes
// Replace with your database (e.g., Prisma, Supabase, etc.)
const leads = new Map<string, Record<string, unknown>>();

function generateLeadId(): string {
  return `lead_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const leadId = generateLeadId();

    const lead = {
      ...data,
      leadId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    leads.set(leadId, lead);

    console.log("New lead created:", lead);

    return NextResponse.json({ leadId, success: true });
  } catch (error) {
    console.error("Failed to create lead:", error);
    return NextResponse.json(
      { error: "Failed to create lead" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const data = await request.json();
    const { leadId, ...updateData } = data;

    if (!leadId || !leads.has(leadId)) {
      return NextResponse.json(
        { error: "Lead not found" },
        { status: 404 }
      );
    }

    const existingLead = leads.get(leadId);
    const updatedLead = {
      ...existingLead,
      ...updateData,
      updatedAt: new Date().toISOString(),
    };

    leads.set(leadId, updatedLead);

    console.log("Lead updated:", updatedLead);

    return NextResponse.json({ leadId, success: true });
  } catch (error) {
    console.error("Failed to update lead:", error);
    return NextResponse.json(
      { error: "Failed to update lead" },
      { status: 500 }
    );
  }
}
