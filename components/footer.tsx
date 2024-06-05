'use client'
import React, { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

  return (
    <footer className="mt-36 px-4 text-center text-gray-500 dark:text-white">
      <small className="mb-2 block text-xs">
        &copy; {year} Arnaldo Benavides. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting. Based on <a className="font-bold text-lg" target="_blank" href="https://www.youtube.com/watch?v=sUKptmUVIBM">ByteGrad</a> video
      </p>
    </footer>
  );
}
