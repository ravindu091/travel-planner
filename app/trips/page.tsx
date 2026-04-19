import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Trips() {
  const session = await auth();
  if (!session) {
    redirect("/");
  }
  return (
    <div className="space-y-6 container mx-auto px-4 py-8">
      <div>
        <h1 className="text-2xl ">DashBoard</h1>
        <Link href={'/trips/new'}>
          <Button>Create + </Button>
        </Link>
      </div>
    </div>
  );
}
