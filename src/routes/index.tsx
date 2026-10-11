import { createFileRoute } from "@tanstack/react-router";
import { StoreListing } from "@/components/store-listing";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <StoreListing />;
}
