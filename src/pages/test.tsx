import React from "react";
import { useInView } from "react-intersection-observer";
import Sidebar from "../components/fixedsidebar";

export default function HomePage() {
  // Define observers for each section
  const { ref: homeRef, inView: homeInView } = useInView({
    threshold: 0,
  });

  const { ref: link1Ref, inView: link1InView } = useInView({
    threshold: 0,
  });

  const { ref: link2Ref, inView: link2InView } = useInView({
    threshold: 0,
  });

  // Define the content of each section
  const HomeContent = (
    <div id="/home" ref={homeRef}>
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
    <div id="/link-1" ref={link1Ref}>
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
    </div>
  );

  const Link2Content = (
    <div id="/link-2" ref={link2Ref}>
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
    <>
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
      {HomeContent}
      {Link1Content}
      {Link2Content}
    </>
  );
}
