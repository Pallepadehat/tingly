"use client";
// ^-- to make sure we can mount the Provider from a server component
import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { createTRPCContext } from "@trpc/tanstack-react-query";
import { useState } from "react";
import { makeQueryClient } from "./query-client";
import type { AppRouter } from "./routers/_app";
export const { TRPCProvider, useTRPC } = createTRPCContext<AppRouter>();
let browserQueryClient: QueryClient;
/**
 * Provide a QueryClient appropriate for the current runtime environment.
 *
 * On the server returns a fresh QueryClient for each call; in the browser returns a module-scoped cached QueryClient (created on first access).
 *
 * @returns The QueryClient instance to use for React Query operations.
 */
function getQueryClient() {
  if (typeof window === "undefined") {
    // Server: always make a new query client
    return makeQueryClient();
  }
  // Browser: make a new query client if we don't already have one
  // This is very important, so we don't re-make a new client if React
  // suspends during the initial render. This may not be needed if we
  // have a suspense boundary BELOW the creation of the query client
  if (!browserQueryClient) browserQueryClient = makeQueryClient();
  return browserQueryClient;
}
/**
 * Resolve the full URL for TRPC API requests appropriate to the current runtime.
 *
 * @returns The TRPC API endpoint:
 * - `"/api/trpc"` when running in the browser,
 * - `"https://{VERCEL_URL}/api/trpc"` when running on the server with `VERCEL_URL` defined,
 * - `"http://localhost:3000/api/trpc"` when running on the server without `VERCEL_URL`.
 */
function getUrl() {
  const base = (() => {
    if (typeof window !== "undefined") return "";
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
    return "http://localhost:3000";
  })();
  return `${base}/api/trpc`;
}
/**
 * Provides application-wide React Query and tRPC contexts to descendant components.
 *
 * Initializes and supplies a QueryClient and a TRPC client and renders the provided children
 * within QueryClientProvider and TRPCProvider so descendants can use react-query and tRPC hooks.
 *
 * @param props - Component props.
 * @param props.children - React nodes to render inside the providers.
 * @returns A React element that wraps `props.children` with QueryClient and TRPC providers.
 */
export function TRPCReactProvider(
  props: Readonly<{
    children: React.ReactNode;
  }>
) {
  // NOTE: Avoid useState when initializing the query client if you don't
  //       have a suspense boundary between this and the code that may
  //       suspend because React will throw away the client on the initial
  //       render if it suspends and there is no boundary
  const queryClient = getQueryClient();
  const [trpcClient] = useState(() =>
    createTRPCClient<AppRouter>({
      links: [
        httpBatchLink({
          // transformer: superjson, <-- if you use a data transformer
          url: getUrl(),
        }),
      ],
    })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
        {props.children}
      </TRPCProvider>
    </QueryClientProvider>
  );
}