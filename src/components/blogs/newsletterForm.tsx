"use client";

import Script from "next/script";

declare global {
  interface Window {
    Tally: any; // Declare Tally on the global window object (since it's loaded dynamically)
  }
}

export default function NewsletterForm() {
  return (
    <>
      {/* Load the Tally embed script using the next/script component */}
      <Script
        id="tally-js"
        src="https://tally.so/widgets/embed.js"
        onReady={() => {
          // Ensure Tally is available before calling Tally.loadEmbeds()
          if (typeof window.Tally !== "undefined") {
            window.Tally.loadEmbeds();
          }
        }}
      />
      <div className="mt-10 border-t border-gray-200">
        <div className="mx-5 sm:mx-auto mt-10 mb-5 flex flex-col space-y-3">
          <h3 className="text-4xl">Newsletter Signup</h3>
          <p className="text-gray-500">
            Sign up for my newsletter to get updates on my latest blog posts and
            other cool stuff.
          </p>
        </div>
        <iframe
          data-tally-src="https://tally.so/embed/3xvoV9?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="224"
          title="Newsletter sign-up"
        />
      </div>
    </>
  );
}
