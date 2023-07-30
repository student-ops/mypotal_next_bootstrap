import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import FiexedSidebar from "../components/fixedsidebar";
import Footer from "@/components/footer";
import CustomComponent from "@/components/section";
import Header from "@/components/header";
import { CSSTransition } from "react-transition-group";
import Sidebar from "@/components/sidebar";
import MainSections from "@/components/main_sections";

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
  const { ref: link3Ref, inView: link3InView } = useInView({
    threshold: 0.5,
  });
  const { ref: link4Ref, inView: link4InView } = useInView({
    threshold: 0.5,
  });
  const HomeContent = (
    <div id="home" ref={homeRef} style={{ paddingLeft: "5%" }} className="py-3">
      {MainSections[0]}
    </div>
  );

  const Section1Content = (
    <div id="section-1" ref={link1Ref}>
      {MainSections[1]}
    </div>
  );

  const Section2Content = (
    <div id="section-2" ref={link2Ref}>
      {/* Your link-2 content goes here */}
      {MainSections[2]}
    </div>
  );
  const Section3Content = (
    <div id="section-3" ref={link3Ref}>
      {MainSections[3]}
    </div>
  );
  const Section4Content = (
    <div id="section-4" ref={link4Ref}>
      {MainSections[4]}
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
            : homeInView
            ? "link1"
            : link1InView
            ? "link2"
            : link2InView
            ? "link3"
            : link3InView
            ? "link4"
            : link4InView
        }
      />
      <div id="container" className="w-100 px-2vw">
        <h1>FullScreen</h1>
        <div id="body" className="col-7 col-sm-7 col-md-8 col-lg-9">
          <div id="content-container">
            {HomeContent}
            <CustomComponent children={Section1Content} />
            <CustomComponent children={Section2Content} />
            <CustomComponent children={Section3Content} />
            <CustomComponent children={Section4Content} />
          </div>
          <Footer />
        </div>
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
