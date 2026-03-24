"use client";

import { JSX } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Footer() {
  const pathname = usePathname() || "/";
  const router = useRouter();

  const tabs: { id: string; label: string; icon: JSX.Element }[] = [
    {
      id: "",
      label: "Music",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      ),
    },
    {
      id: "room",
      label: "Room",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <rect x="7" y="4" width="10" height="16" rx="1" ry="1" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      ),
    },
    {
      id: "profile",
      label: "Profile",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.6 6.879 1.804" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="app-footer fixed inset-x-0 bottom-0 bg-gray-800 text-white py-3 z-30">
      <nav className="app-footer-nav max-w-lg mx-auto flex justify-between">
        {tabs.map((t) => {
          const target = `/${t.id}`;
          const isActive = pathname === target || pathname.startsWith(target + "/");
          return (
            <button
              key={t.id}
              type="button"
              aria-current={isActive}
              onClick={() => router.push(target)}
              className={`flex-1 flex flex-col items-center justify-center py-2 ${
                isActive ? "text-indigo-400" : "text-gray-300"
              }`}
            >
              {t.icon}
              <span className="text-sm mt-1">{t.label}</span>
            </button>
          );
        })}
      </nav>
    </footer>
  );
}