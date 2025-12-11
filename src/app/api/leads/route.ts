import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, doc, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";

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
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    // Save to Firestore
    await setDoc(doc(collection(db, "leads"), leadId), lead);

    console.log("New lead created:", leadId);

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

    if (!leadId) {
      return NextResponse.json(
        { error: "Lead ID is required" },
        { status: 400 }
      );
    }

    // Update in Firestore
    const leadRef = doc(db, "leads", leadId);
    await updateDoc(leadRef, {
      ...updateData,
      updatedAt: serverTimestamp(),
    });

    console.log("Lead updated:", leadId);

    return NextResponse.json({ leadId, success: true });
  } catch (error) {
    console.error("Failed to update lead:", error);
    return NextResponse.json(
      { error: "Failed to update lead" },
      { status: 500 }
    );
  }
}
