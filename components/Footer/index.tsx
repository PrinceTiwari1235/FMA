"use client";
import React from "react";

export default function Footer(): React.ReactElement {
  return (
    <footer className="border-t mt-12 border-gray-100 dark:border-gray-800 bg-transparent" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-bold text-lg">Dynamic Music Academy</div>
          <address className="not-italic text-sm text-gray-500 mt-1">
            123 Music Lane<br />
            Hometown, HT 12345<br />
            <a href="mailto:info@dynamicmusic.example" className="text-indigo-600">info@dynamicmusic.example</a>
          </address>
        </div>

        <div className="text-sm text-gray-500">© {new Date().getFullYear()} Dynamic Music Academy</div>
      </div>
    </footer>
  );
}
