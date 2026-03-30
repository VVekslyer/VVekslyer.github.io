import React from "react";

export default function SidebarNav(props) {
  const name = props.sharedBasicInfo?.name || "";

  return (
    <nav className="sidebar" aria-label="Primary">
      <div className="sidebar__inner">
        <div className="sidebar__name">{name}</div>
        <div className="sidebar__links">
          <a className="sidebar__link" href="#about">
            About
          </a>
          <a className="sidebar__link" href="#experience">
            Experience
          </a>
          <a className="sidebar__link" href="#education">
            Education
          </a>
          <a className="sidebar__link" href="#projects">
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
}
