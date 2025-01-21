import { Config } from 'ziggy-js';

export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>
> = T & {
  flash: {
    success: string | null;
    error: string | null;
  };
  ziggy: Config & { location: string };
};
