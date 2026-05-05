import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Simulate saving message (no backend used)
    console.log("Contact Message Received:", { name, email, phone, message });

    return NextResponse.json({ success: true, message: "Message received successfully" }, { status: 201 });
  } catch (error) {
    console.error('Error processing contact message:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
