import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json(); 
    console.log("Received Data:", formData); 

    return NextResponse.json(
      { message: "Form data received successfully!", data: formData },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}