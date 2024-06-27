import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // revalidatePath("http://worldtimeapi.org/api/timezone/America/New_York");
  revalidateTag("data");

  return NextResponse.json({ data: "ok" });
}
