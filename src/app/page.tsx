// components
import Header from "./components/UI/Header";

// parts
import Hero from "./parts/Hero";
import BigVideo from "./parts/BigVideo";
import { Tech } from "./parts/Tech";
import Architecture from "./parts/Architecture";
import Form from "./parts/Form";
import Projects from "./parts/Projects";
import Footer from "./parts/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <BigVideo />
      <Tech />
      <Architecture />
      <Form />
      <Projects />
      <Footer />
    </main>
  );
}
