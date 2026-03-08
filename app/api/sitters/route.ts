import { NextRequest, NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city")?.toLowerCase().trim();
  const state = searchParams.get("state")?.toLowerCase().trim();
  const name = searchParams.get("name")?.toLowerCase().trim();

  try {
    const snapshot = await adminDb.collection("sitters").get();

    let sitters = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    // Filter — case-insensitive partial match
    if (city) {
      sitters = sitters.filter((s: any) =>
        s.city?.toLowerCase().includes(city)
      );
    }
    if (state) {
      sitters = sitters.filter((s: any) =>
        s.state?.toLowerCase().includes(state)
      );
    }
    if (name) {
      sitters = sitters.filter((s: any) =>
        s.name?.toLowerCase().includes(name)
      );
    }

    // Strip protected fields from unclaimed teen profiles
    sitters = sitters.map((s: any) => {
      if (s.is_teen && !s.claimed) {
        const { last_name, photo, contact_info, ...safe } = s;
        return {
          ...safe,
          last_name: s.last_name ? s.last_name[0] + "." : "",
        };
      }
      return s;
    });

    // Sort by rating descending
    sitters.sort((a: any, b: any) => (b.rating ?? 0) - (a.rating ?? 0));

    return NextResponse.json({ sitters });
  } catch (error) {
    console.error("GET /api/sitters error:", error);
    return NextResponse.json({ error: "Failed to fetch sitters" }, { status: 500 });
  }
}
