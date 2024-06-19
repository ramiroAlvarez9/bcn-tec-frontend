import MainPage from "./idHookPages/main";
import About from "./idHookPages/about";
import Projects from "../../pages/projects";
import LetsTalk from "./idHookPages/lets-talk";
import FooterSpace from "./components/FooterSpace";
import FooterUpArrow from "./components/FooterUpArrow";

export default function Home() {
  return (
    <>
      <MainPage />
      <About />
      <LetsTalk />
      <FooterSpace />
      < FooterUpArrow />
    </>
  );
}
