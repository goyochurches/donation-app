import React from "react";
import Wave from "react-wavify";

const Resume = () => {
  return (
    <>
      <div className="row mt-4">
        <div className="col-12 col-md-8">
          <h1 className="fs-2">Mariana Gomez</h1>
          <h2 className="fs-3 text-primary">
            <em>MARGO joyas</em>
          </h2>
          <p className="text-left">
            Experienced jewelry designer with a demonstrated history of working
            in the luxury goods and jewelry industry. Skilled in gemology,
            manufacturing, buying & sourcing gems, Production, and team spirit.
            Strong accredited jewelry professional with a Graduate Gemologist
            degree GIA (Gemological Institute of America).
          </p>
        </div>
        <div className="col-12 col-md-2">
          <img
            id="magro"
            alt="Margo Joyas"
            src="https://margojoyas.com/wp-content/uploads/2022/01/cropped-fav-margo-192x192.png"
            className="img-fluid"
          />
        </div>
        <div className="col-12 col-md-2">
          <Wave
            fill="#e62315"
            mask="url(#mask)"
            options={{ points: 20, speed: 0.2, amplitude: 40 }}
          >
            {/* Example adapted from https://developer.mozilla.org/en-US/docs/Web/SVG/Element/mask */}
            <mask id="mask">
              <path
                d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z"
                fill="white"
              />
            </mask>
          </Wave>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <h3 className="text-primary">Patrocinadores</h3>
        </div>
        <div className="col-12 col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">PATROCINADOR 1</h5>
              <p className="card-text">Descripción del patrocinador 1.</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">PATROCINADOR 2</h5>
              <p className="card-text">Descripción del patrocinador 2.</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">PATROCINADOR 3</h5>
              <p className="card-text">Descripción del patrocinador 3.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
