import { NextResponse } from "next/server";
import { getMongoDb } from "@/util/mongodb";

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123!";
const COOKIE_NAME = "admin_session";

function createSessionToken(username) {
  const raw = `${username}:${Date.now()}`;
  // Note: this is a minimal demo; replace with JWT/HMAC if needed.
  return Buffer.from(raw).toString("base64url");
}

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { username, password } = body || {};

    const mongoUri = process.env.MONGODB_URI;
    const mongoDbName = process.env.MONGODB_DB;
    if (mongoUri && mongoDbName) {
      try {
        const db = await getMongoDb();
        console.log("Connected to DB:", db.databaseName);
        const admin = await db.collection("admins").findOne({ username });
        if (!admin) {
          return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
        }
        // For demo purposes only: comparing plaintext. Replace with bcrypt in production.
        if (admin.password !== password) {
          return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
        }
      } catch (dbErr) {
        return NextResponse.json({ message: "Database error" }, { status: 500 });
      }
    } else {
      if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
        return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
      }
    }

    const token = createSessionToken(username);

    const response = NextResponse.json({ ok: true });
    response.cookies.set({
      name: COOKIE_NAME,
      value: token,
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 8
    });
    return response;
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}


