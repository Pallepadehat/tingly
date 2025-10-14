import { caller } from "@/trpc/server";

/**
 * Render the home page displaying the current users' names.
 *
 * Fetches users and renders their names inside an h1 within a div.
 *
 * @returns The JSX element for the home page: a div containing an h1 with the list of user names.
 */
export default async function Home() {
  const users = await caller.getUsers();
  return (
    <div>
      <h1>{users.map((user) => user.name)}</h1>
    </div>
  );
}