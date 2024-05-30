import MainPage from "./idHookPages/main";
import About from "./idHookPages/about";
import Projects from "./idHookPages/projects";
import LetsTalk from "./idHookPages/lets-talk";
import Footer from "./idHookPages/footer";
import FooterSpace from "./components/FooterSpace";
import FooterUpArrow from "./components/FooterUpArrow";

export default function Home() {
  return (
    <>
      <MainPage />
      <About />
      <Projects />
      <LetsTalk />
      <FooterSpace />
      < FooterUpArrow />
    </>
  );
}
