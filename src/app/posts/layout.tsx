"use client";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}
        </div>
    )
}