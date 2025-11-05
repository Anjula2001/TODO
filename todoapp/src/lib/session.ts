import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function createSession(username: string) {
    const expiresAt =  new Date(Date.now() + 1000 * 60 * 60 * 24); // 24 hours
    const session = await encrypt({ username, expiresAt});

    (await cookies()).set("session", session, {
        httpOnly: true,
        secure:true,
        expires: expiresAt,
    });
}

export async function deleteSession() {
  (await cookies()).delete("session");
}

type SessionPayload = {
    username: string;
    expiresAt: Date;
};

export async function encrypt(payload: SessionPayload){
    return new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("24h")
        .sign(encodedKey);  
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify session");
  }
}


