import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren, Suspense } from "react";

import Loading from "./loading";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en">
            <body className={`${inter.className} overflow-x-hidden`}>
                <Suspense fallback={<Loading />}>{children}</Suspense>
            </body>
        </html>
    );
}
