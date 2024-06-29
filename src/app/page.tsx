import Image from "next/image";
import Hero from "./components/widgets/Hero";
import Info from "./components/widgets/Info";
import Events from "./components/widgets/Events";
import Broadcasting from "./components/widgets/Broadcasting";
import Community from "./components/widgets/Community";
import Ngage from "./components/widgets/Ngage";

export default function Home() {
  return (
    <>
      <Hero />
      <Info />
      <Events />
      <Broadcasting />
      <Community />
      <Ngage />
    </>
  );
}
