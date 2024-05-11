import MainPage from "./pages/main";
import About from "./pages/about";
import Projects from "./pages/projects";
import LetsTalk from "./pages/lets-talk";
import Footer from "./pages/footer";

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
