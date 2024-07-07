import styles from "./App.scss";
import Header from "./Header";
import NavBar from "./NavBar";
import Projects from "./Projects";
import Certifications from "./Certifications";
import Footer from "./Footer";

function App() {
  return (
    <div className={styles.main}>
      <NavBar />
      <Header />
      <Projects />
      <Certifications />
      <Footer />
    </div>
  );
}

export default App;
