import React, { useState, useEffect } from 'react';
import Typical from 'react-typical';

export default function Header(props) {
  const [checked] = useState(false);

  useEffect(() => {
    setTheme();
  }, [checked]);

  const setTheme = () => {
    const dataThemeAttribute = "data-theme";
    const body = document.body;
    const newTheme = body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  };

  let titles = [];
  let name = ""; // Declare the 'name' variable here
  if (props.sharedData) {
    name = props.sharedData.name; // Set the 'name' variable if sharedData exists
    titles = props.sharedData.titles.map((x) => [x.toUpperCase(), 1500]).flat();
  }

  const HeaderTitleTypeAnimation = React.memo(() => {
    return <Typical className="title-styles" steps={titles} loop={50} />;
  }, () => true);

  return (
    <header id="home" style={{ height: window.innerHeight, display: 'block' }}>
      <div className="row aligner" style={{ height: '80%' }}>
        <div className="col-md-12">
          <div>
            <br />
            <h1 className="mb-0">
              <Typical steps={[name]} wrapper="p" />
            </h1>
            <div className="title-container">
              <HeaderTitleTypeAnimation />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
