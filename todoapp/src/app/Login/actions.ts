"use server";

import { createSession, deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";
import{ z } from "zod";

const testUser ={
    username:"testuser",
    password:"Test@123",
};

const loginSchema = z.object({
    username: z.string().min(3,{ message:"username must be at least 3 characters "}).trim(),
    password: z.string().min(8,{ message:"password must be at least 8 characters "}).trim(),
});

export async function login(prevState: any, formData: FormData){
    
    const result = loginSchema.safeParse(Object.fromEntries(formData));

    if(!result.success){
        return{
            errors: result.error.flatten().fieldErrors,
        };
    }

    const { username, password } = result.data;

    if (username !== testUser.username || password !== testUser.password) {
        return {
            errors: {
                username: ["Invalid username or password"],
            },
        };
    }

    await createSession(testUser.username);

    redirect("/dashboard");
} 

export async function logout() {
  await deleteSession();
  redirect("/Login");
}