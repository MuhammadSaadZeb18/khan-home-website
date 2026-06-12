import Header from "./components/common/Header";
import AboutUs from "./components/home/AboutUs";
import Hero from "./components/home/Hero";

export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <Header />
      <Hero />
      <AboutUs/>
    </main>
  );
}
