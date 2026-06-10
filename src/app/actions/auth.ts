"use server";

import { cookies } from "next/headers";

export async function login(formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  if (username === "nimish" && password === "nimish") {
    (await cookies()).set("admin_session", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });
    return { success: true };
  }

  return { success: false, error: "Invalid credentials" };
}

export async function logout() {
  (await cookies()).delete("admin_session");
  return { success: true };
}
