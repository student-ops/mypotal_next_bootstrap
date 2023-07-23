import React from "react";
import { useInView } from "react-intersection-observer";
import Sidebar from "../components/sidebar";
import Footer from "@/components/footer";

export default function HomePage() {
  // Define observers for each section
  const { ref: homeRef, inView: homeInView } = useInView({
    threshold: 0.5,
  });

  const { ref: link1Ref, inView: link1InView } = useInView({
    threshold: 0.5,
  });

  const { ref: link2Ref, inView: link2InView } = useInView({
    threshold: 0.5,
  });

  // Define the content of each section
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

  const Link1Content = (
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

  const Link2Content = (
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

  // Pass the currently visible section to the Sidebar component
  return (
    <div className="d-flex flex-row-reverse vh-100 overflow-auto bg-light">
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
      <div id="container" className="col-md-8">
        {HomeContent}
        {Link1Content}
        {Link2Content}
        <Footer />
      </div>
    </div>
  );
}
