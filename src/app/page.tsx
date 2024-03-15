import { ClientComponent } from "./ClientComponent";

// comment this out and it will work
export const runtime = "edge";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ClientComponent />
    </main>
  );
}
