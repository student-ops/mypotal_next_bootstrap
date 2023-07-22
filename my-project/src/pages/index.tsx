import React, { useEffect, useRef, useState } from "react";
import { Dropdown, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Sidebar from "../components/sidebar";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const homeRef = useRef(null);
  const link1Ref = useRef(null);
  const link2Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    const { current: homeElement } = homeRef;
    const { current: link1Element } = link1Ref;
    const { current: link2Element } = link2Ref;

    if (homeElement) observer.observe(homeElement);
    if (link1Element) observer.observe(link1Element);
    if (link2Element) observer.observe(link2Element);

    // Cleanup on unmount
    return () => {
      if (homeElement) observer.unobserve(homeElement);
      if (link1Element) observer.unobserve(link1Element);
      if (link2Element) observer.unobserve(link2Element);
    };
  }, []);

  return (
    <>
      <div className="flex">
        <Sidebar activeSection={activeSection} />
        <p>Hello Bootstrap</p>

        <div className="flex flex-cols">
          <div id="home" ref={homeRef}>
            {/* Your home content */}
            <p>aaaaaaaaaaa</p>
          </div>
          <div id="link1" ref={link1Ref}>
            {/* Your link1 content */}
            <p>bbbbbbbbbbb</p>
          </div>
          <div id="link2" ref={link2Ref}>
            {/* Your link2 content */}
            <p>ccccccccccc</p>
          </div>
        </div>
      </div>
    </>
  );
}
