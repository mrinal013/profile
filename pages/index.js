import Head from "next/head";
import Introduction from "../components/Introduction";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mrinal Haque | Full Stack Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Introduction></Introduction>
      <About></About>
      <Skills></Skills>
      <Services></Services>
      <Projects></Projects>
    </div>
  );
}
