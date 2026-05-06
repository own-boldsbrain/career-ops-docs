import { StarIcon } from 'lucide-react';
import { getProjectStats } from '@/lib/stats';

// Compact "43K" — round, no decimals, no plus sign for cleaner look.
function formatStarsCompact(n: number): string {
  if (n < 1000) return n.toString();
  return `${Math.floor(n / 1000)}K`;
}

// Persistent navbar chip showing live GitHub star count.
// Pattern: "GitHub · ★ 43K" — explicit platform + middle-dot separator +
// brand-orange star + compact number. Coherent with developer voice of the
// site without losing visual instant signal of the icon.
// Server component, async — fetches stars via getProjectStats() (1h ISR).
export async function NavStarChip() {
  const stats = await getProjectStats();

  if (!stats.stars) return null;

  return (
    <a
      href="https://github.com/santifer/career-ops"
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${stats.stars.toLocaleString('en-US')} stars on GitHub`}
      className="ml-3 lg:ml-4 hidden sm:inline-flex items-center gap-1.5 rounded-full border bg-fd-secondary/50 px-3 py-1 text-xs font-medium text-fd-foreground transition-colors hover:bg-fd-accent"
    >
      <span>GitHub</span>
      <span aria-hidden className="text-fd-muted-foreground">·</span>
      <StarIcon className="size-3.5 fill-current text-brand" />
      <span className="tabular-nums">{formatStarsCompact(stats.stars)}</span>
    </a>
  );
}
