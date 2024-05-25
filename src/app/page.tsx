import MainPage from "./idHookPages/main";
import About from "./idHookPages/about";
import Projects from "./idHookPages/projects";
import LetsTalk from "./idHookPages/lets-talk";
import Footer from "./idHookPages/footer";

export default function Home() {
  return (
    <>
      <MainPage />
      <About    />
      <Projects />
      <LetsTalk />
      <Footer   />
    </>
  );
}
