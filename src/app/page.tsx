import Hero from "./parts/Hero";
import Header from "./components/UI/Header";
import BigVideo from "./parts/BigVideo";
import { Tech } from "./parts/Tech";
import Architecture from "./parts/Architecture";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <BigVideo />
      <Tech />
      <Architecture />
    </main>
  );
}
