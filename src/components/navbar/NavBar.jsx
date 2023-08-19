import React, { useEffect, useRef } from "react";
import "./navbar.css";
import { GoDotFill as DotIcon } from "react-icons/go";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { RiMailSendLine as MailIcon } from "react-icons/ri";

function NavBar({ currentSection, changeSection }) {
  const navigate = useNavigate();
  const location = useLocation();
  const homeRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const sections = [
    {
      name: "home",
      ref: homeRef,
    },
    {
      name: "about",
      ref: aboutRef,
    },
    {
      name: "projects",
      ref: projectsRef,
    },
    {
      name: "contact",
      ref: contactRef,
    },
  ];

  useEffect(() => {
    let touchStartX, touchStartY, touchEndX, touchEndY;
    const handleTouchStart = (event) => {
      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchEnd = (event) => {
      touchEndX = event.changedTouches[0].clientX;
      touchEndY = event.changedTouches[0].clientY;

      let deltaX = touchEndX - touchStartX;
      let deltaY = touchEndY - touchStartY;

      // Check if the gesture is a swipe
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (Math.abs(deltaX) > 50) {
          if (deltaX > 0) {
            // Right swipe
            changeSection("relative", { path: "prev" });
          } else {
            // Left swipe
            changeSection("relative", { path: "next" });
          }
        }
      } else {
        if (Math.abs(deltaY) > 50) {
          if (deltaY > 0) {
            // Down swipe
            event.preventDefault(); //to prevent the page from refreshing
            changeSection("relative", { path: "prev" });
          } else {
            // Up swipe
            changeSection("relative", { path: "next" });
          }
        }
      }
    };

    const addSwipeListener = () => {
      document.addEventListener("touchstart", handleTouchStart);

      document.addEventListener("touchend", handleTouchEnd);
    };
    const removeSwipeListener = () => {
      document.removeEventListener("touchstart", handleTouchStart);

      document.removeEventListener("touchend", handleTouchEnd);
    };

  addSwipeListener()

  return () => removeSwipeListener()
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      const key = e.key;
      if (key === "ArrowUp" || key === "ArrowLeft")
        changeSection("relative", { path: "prev" });
      if (key === "ArrowDown" || key === "ArrowRight")
        changeSection("relative", { path: "next" });
    });

    sections.forEach((section) => {
      section.ref.current.addEventListener("click", () =>
        changeSection("absolute", { section: section.name })
      );
    });

    document.addEventListener("touch", (e) => console.log(e));
  }, []);

  useEffect(() => {
    navigate(currentSection === "home" ? "/" : currentSection);
    for (let section of sections) {
      if (section.name === currentSection)
        section.ref.current.classList.add("current-section");
      else section.ref.current.classList.remove("current-section");
    }
  }, [currentSection]);

  useEffect(() => {
    let pathname = location.pathname.split("/")[1];
    if (pathname) changeSection("absolute", { section: pathname });
  }, [location]);

  return (
    <header>
      <Link to="/home" id="home-logo">
        rb
      </Link>
      <nav>
        <ul>
          <li ref={homeRef} className="nav-link home current-section">
            <DotIcon />
          </li>
          <li ref={aboutRef} className="nav-link about">
            <DotIcon />
          </li>
          <li ref={projectsRef} className="nav-link projects">
            <DotIcon />
          </li>
          <li ref={contactRef} className="nav-link contact">
            <DotIcon />
          </li>
        </ul>
        <h2>{currentSection}</h2>
      </nav>
      <Link to="/contact" id="contact-logo">
        <MailIcon />
      </Link>
    </header>
  );
}

const mapStateToProps = (state) => ({ currentSection: state.currentSection });
const mapDispatchToProps = (dispatch) => ({
  changeSection: function (type, payload) {
    dispatch({ type, payload });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
