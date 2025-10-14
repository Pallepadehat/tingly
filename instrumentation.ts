import * as Sentry from '@sentry/nextjs';

/**
 * Loads and initializes Sentry configuration for the current Next.js runtime.
 *
 * Dynamically imports the runtime-specific Sentry configuration module based on NEXT_RUNTIME:
 * "nodejs" loads the server configuration and "edge" loads the edge configuration.
 */
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./sentry.server.config');
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    await import('./sentry.edge.config');
  }
}

export const onRequestError = Sentry.captureRequestError;