import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import FiexedSidebar from "../components/fixedsidebar";
import Footer from "@/components/footer";
import CustomComponent from "@/components/section";
import Header from "@/components/header";
import { CSSTransition } from "react-transition-group";
import Sidebar from "@/components/sidebar";

export default function HomePage() {
  const { ref: homeRef, inView: homeInView } = useInView({
    threshold: 0.5,
  });

  const { ref: link1Ref, inView: link1InView } = useInView({
    threshold: 0.5,
  });

  const { ref: link2Ref, inView: link2InView } = useInView({
    threshold: 0.5,
  });

  const HomeContent = (
    <div id="home" ref={homeRef}>
      <p>aaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaa</p>
      <p>aaaaaaaaaaaaaaaaaaaa</p>
    </div>
  );

  const Section1Content = (
    <div id="section-1" ref={link1Ref}>
      {/* Your link-1 content goes here */}
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
    </div>
  );

  const Section2Content = (
    <div id="section-2" ref={link2Ref}>
      {/* Your link-2 content goes here */}
      <p>ccccccccccccccccccccccccc</p>
      <p>ccccccccccccccccccccccccc</p>
      <p>ccccccccccccccccccccccccc</p>
      <p>ccccccccccccccccccccccccc</p>
      <p>ccccccccccccccccccccccccc</p>
      <p>ccccccccccccccccccccccccc</p>
      <p>ccccccccccccccccccccccccc</p>
      <p>ccccccccccccccccccccccccc</p>
      <p>ccccccccccccccccccccccccc</p>
    </div>
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }
  }, []);

  if (windowWidth === null) {
    return <div>Loading...</div>; // or return some loading spinner
  }
  // Define observers for each section
  // Define the content of each section

  const FullScreen = (
    <div className="d-flex flex-row-reverse vh-100 w-100 overflow-auto bg-light">
      <Sidebar
        activeSection={
          homeInView
            ? "home"
            : link1InView
            ? "link1"
            : link2InView
            ? "link2"
            : null
        }
      />
      <div id="container" className="w-100 px-2vw">
        <h1>FullScreen</h1>
        {HomeContent}
        <CustomComponent children={Section1Content} />
        <CustomComponent children={Section2Content} />
        <Footer />
      </div>
    </div>
  );
  const NormalScreen = (
    <div className="vh-100 overflow-auto bg-light w-100">
      <Header onMenuClick={handleMenuClick} isSidebarOpen={isSidebarOpen} />
      <div className="d-flex flex-row-reverse vh-95 overflow-auto bg-light">
        <CSSTransition
          in={isSidebarOpen}
          timeout={800}
          classNames="sidebar"
          unmountOnExit
        >
          <FiexedSidebar
            activeSection={
              homeInView
                ? "home"
                : link1InView
                ? "link1"
                : link2InView
                ? "link2"
                : null
            }
            isSidebarOpen={isSidebarOpen}
          />
        </CSSTransition>
        <div
          id="container"
          className={isSidebarOpen ? "col-md-8 px-2vw" : "w-100 px-2vw"}
        >
          {HomeContent}
          <CustomComponent children={Section1Content} />
          <CustomComponent children={Section2Content} />
          <Footer />
        </div>
      </div>
    </div>
  );

  // Pass the currently visible section to the Sidebar component
  return windowWidth && windowWidth > 768 ? FullScreen : NormalScreen;
}
