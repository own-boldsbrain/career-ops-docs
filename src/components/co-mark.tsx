import { instrumentSerifRegular } from '@/lib/fonts';

// Brand mark — lowercase "co" on brand orange. Matches the favicon
// (src/app/icon.tsx) one-for-one so when users see it in the navbar and
// in the browser tab they recognise the same shape. Dual-meaning seed:
// "co" of career-ops and "co" of companies — the word the manifesto
// inverts ("…AI to choose companies").
export function CoMark({ size = 28 }: { size?: number }) {
  return (
    <span
      aria-hidden="true"
      className={`${instrumentSerifRegular.className} inline-flex shrink-0 items-center justify-center rounded-md bg-brand text-white`}
      style={{
        width: size,
        height: size,
        fontSize: Math.round(size * 0.78),
        letterSpacing: '0.01em',
        lineHeight: 1,
        paddingBottom: Math.round(size * 0.08),
      }}
    >
      co
    </span>
  );
}
