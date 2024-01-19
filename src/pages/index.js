import HomePage from "@/components/Home";

require('dotenv').config();

export default function Home() {
  return (
    <main className="w-full h-screen flex min-h-screen flex-col items-center justify-between p-12 bg-black max-w-full">
      <HomePage />
    </main>
  );
}
