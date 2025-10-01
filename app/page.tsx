"use client";

import { Inter } from "@next/font/google";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [state, setState] = useState<any>([]);

  return (
    <main>
      <h2 className={inter.className}>Quartr</h2>
      <p className={inter.className}>Trending companies</p>
      <p>{}</p>
    </main>
  );
}
