import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = await fetch(
    "http://worldtimeapi.org/api/timezone/America/New_York",
    { next: { revalidate: 10, tags: ["data"] } },
  ).then((res) => res.json());

  return NextResponse.json({
    data: "Hello World",
    date: data.utc_datetime,
  });
}
