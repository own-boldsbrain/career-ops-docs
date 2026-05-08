'use client';

import { usePathname } from 'next/navigation';
import { SubscribeForm } from './subscribe-form';

// Footer subscribe form lives on /docs/** only. Standalone pages (/, /about,
// /methodology, /privacy, /subscribed) feel off-brand asking for an email
// in the footer chrome — the home has its own integrated CTA, the others
// are reading contexts where the ask doesn't fit.
export function FooterSubscribeBlock() {
  const pathname = usePathname();
  if (!pathname.startsWith('/docs')) return null;

  return (
    <>
      <div className="py-8 md:py-10">
        <SubscribeForm />
      </div>
      <div className="border-t" />
    </>
  );
}
