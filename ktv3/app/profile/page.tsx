'use client';
import { useEffect, useState } from "react";
import { User } from "../components/types";
import LoginPage from "./login";
import RegisterPage from "./register";

export default function ProfilePage() {
    const[user, setUser] = useState<User | null>(null);
    const [mode, setMode] = useState<"login" | "register">("login");

    useEffect(() => {
        // Simulate fetching user data
        setTimeout(() => {
            // setUser({
            //     userId: "12345",
            //     username: "John Doe",
            //     email: "john.doe@example.com",
            // });
        }, 1000);
    }, []);

    if (!user) {
        return mode === "register" ? (
            <RegisterPage onSwitchToLogin={() => setMode("login")} />
        ) : (
            <LoginPage onSwitchToRegister={() => setMode("register")} />
        );
    }

    return (
        <div className="flex flex-col items-center justify-start">
            <h1 className="text-3xl font-bold mt-8">Profile</h1>
            <p className="mt-4 text-center">Welcome, {user.username}!</p>
            <p className="mt-2 text-center">Email: {user.email}</p>
        </div>
    );
}
