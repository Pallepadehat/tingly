import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";

const Page = async () => {
  await requireAuth();

  const data = await caller.getUsers();

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      Protected Server Component
      {JSON.stringify(data)}
    </div>
  );
};

export default Page;
