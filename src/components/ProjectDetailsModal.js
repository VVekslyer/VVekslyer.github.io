import React from 'react';
import { Modal } from 'react-bootstrap';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from '../scss/light-slider.scss';
import AwesomeSliderStyles2 from '../scss/dark-slider.scss';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';
import { If, Then, Else } from 'react-if';

export default function ProjectDetailsModal(props) {
  let img;
  if (props.data) {
    const technologies = props.data.technologies;
    const images = props.data.images;
    img = [{props:{'data-src':null}}];
    if (props.data.technologies) {
      var tech = technologies.map((icons, i) => {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center">
                <i className={icons.class} style={{ fontSize: "300%" }}>
                  <p className="text-center" style={{ fontSize: "30%" }}>
                    {icons.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
      if (props.data.images) {
        img = images.map((elem, i) => {
          return <div key={i} data-src={elem} />;
        });
      }
    }
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-inside"
    >
      <span onClick={props.onHide} className="modal-close">
        <i className="fas fa-times fa-3x close-icon"></i>
      </span>
      <div className="col-md-12">
        <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
          <If condition={img[0].props['data-src'] === 'images/portfolio/exercise-journal/ej-footage.gif'}>
            <Then>
              <AwesomeSlider
                cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
                animation="scaleOutAnimation"
                className="ej-image"
              >
                {img}
              </AwesomeSlider>
            </Then>
            <Else>
              <AwesomeSlider
                cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
                animation="scaleOutAnimation"
                className="slider-image"
              >
                {img}
              </AwesomeSlider>
            </Else>
          </If>
        </div>
        <div className="col-md-10 mx-auto">
          <h3 style={{ padding: "5px 5px 0 5px" }}>
            {props.data.title}
            {props.data.url ? (
              <a
                href={props.data.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-href"
              >
                <i
                  className="fas fa-external-link-alt"
                  style={{ marginLeft: "10px" }}
                ></i>
              </a>
            ) : null}
          </h3>
          <p className="modal-description">{props.data.description}</p>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto">{tech}</ul>
          </div>
        </div>
      </div>
    </Modal>
  );
}

