import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';
import { NavStarChip } from '@/components/nav-star-chip';
import { CoMark } from '@/components/co-mark';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="inline-flex items-center gap-2.5">
          <CoMark size={32} />
          <span>
            {appName}
            <span className="hidden md:inline text-brand font-normal">{', your career operations hub'}</span>
          </span>
        </span>
      ),
      // Persistent live star count chip on the right side of the navbar.
      // Uses NavOptions.children slot from Fumadocs.
      children: <NavStarChip />,
      transparentMode: 'top',
      enabled: true,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
