import type { AppRouter } from '../server/utils/types';
import { createTRPCClient } from '@trpc/client';
import { vscLink } from './link/vsc-link';

export const trpc = createTRPCClient<AppRouter>({
  links: [vscLink()],
});
