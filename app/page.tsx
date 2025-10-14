import { caller } from "@/trpc/server";

export default async function Home() {
  const users = await caller.getUsers();
  return (
    <div>
      <h1>{users.map((user) => user.name)}</h1>
    </div>
  );
}
