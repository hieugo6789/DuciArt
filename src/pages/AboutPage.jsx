import imgHome from "../assets/images/page2-img1.jpg";

const AboutPage = () => {
  return (
    <section id="content">
      <div className="container_12">
        <div className="grid_4 bot-1">
          <h2 className="top-6 p2">Teachers</h2>
          <p className="text-1 p3">Peter Stanton</p>
          <p>
            Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
            ut labore et dolore magna aliquyam erat{" "}
          </p>
          <p className="text-1 top-2 p3">Helen Perton</p>
          <p>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est{" "}
          </p>
          <p className="text-1 top-2 p3">Jesica Murray</p>
          <p>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, <br />
            sed diam{" "}
          </p>
        </div>
        <div className="grid_8">
          <div className="block-1 top-5">
            <div className="block-1-shadow1">
              <h2 className="clr-6 p6">A Few Words About Us</h2>
              <p className="clr-6">
                <strong>
                  Consetetur sadipscing elitr, sed diam nonumy eirmod tempor{" "}
                </strong>
              </p>
              <p className="clr-6">
                Invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et acam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est lorem
                ipsum dolor sit amet.
              </p>
              <div className="pad-3">
                <img
                  src={imgHome}
                  alt=""
                  className="img-border img-indent"
                />
                <div className="extra-wrap clr-6">
                  <p>
                    <strong>Lorem ipsum dolor sit amet, consetetur</strong>
                  </p>
                  <p>
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam et justo duo dolores et ea rebum. Stet
                    clita kasd gubergren, no sea takimata sanctus est Lorem
                    ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              <h2 className="clr-6 p6">What We Offer</h2>
              <p className="clr-6">
                <strong>
                  Nam liber tempor cum soluta nobis eleifend option
                </strong>
              </p>
              <p className="clr-6">
                Congue nihil imperdiet doming id quod mazim placerat facer
                possim assum. Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit:
              </p>
              <div className="lists">
                <ul className="list-2">
                  <li>
                    <p>Sed diam nonummy nibh euismod</p>
                  </li>
                  <li>
                    <p>Tincidunt ut laoreet dolore</p>
                  </li>
                  <li>
                    <p>Magna aliquam erat volutpat wisi enim</p>
                  </li>
                  <li>
                    <p>Minim veniam, quis nostrud exerci</p>
                  </li>
                </ul>
                <ul className="list-2 last">
                  <li>
                    <p>Duis autem vel eum iriure dolor</p>
                  </li>
                  <li>
                    <p>Hendrerit in vulputate velit molestie</p>
                  </li>
                  <li>
                    <p>Consequat vel illum dolore</p>
                  </li>
                  <li>
                    <p>Feugiat nulla facilisis at vero eros</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </section>
  );
};

export default AboutPage;
