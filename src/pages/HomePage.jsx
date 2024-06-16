import { Link } from "react-router-dom";

import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";

const HomePage = () => {
  return (
    <section id="content">
      <div className="container_12">
        <div className="grid_4 bot-1">
          <div className="art" />
          <h2 className="top-1 p2">Events</h2>
          <p className="text-1 p3">April 18 - “Spring’s Bloom”</p>
          <p>
            The PSD source files of this{" "}
            <a
              href="http://blog.templatemonster.com/2012/04/23/free-website-template-justslider-art-school/"
              className="link"
              rel="nofollow"
            >
              Art School Template
            </a>{" "}
            are available for free for the registered members of
            TemplateMonster.com. Feel free to <br />
            get them!
          </p>
          <p className="text-1 top-2 p3">April 01 - “Smile!”</p>
          <p>
            This website template has several pages: Home Page, About Us,
            Schedule, Gallery, Contact Us (note that contact us form – <br />
            doesn’t work).
          </p>
        </div>
        <div className="grid_8">
          <div className="pad-1">
            <h2 className="p2">Welcome to Duci Art</h2>
            <p className="text-1">
              Art School is one of{" "}
              <a
                href="http://blog.templatemonster.com/free-website-templates/"
                target="_blank"
                className="link"
              >
                free website templates
              </a>{" "}
              by TemplateMonster.com team. This template is optimized for
              1280X1024 screen resolution. It is also XHTML &amp; CSS valid.
            </p>
          </div>
          <div className="block-1">
            <div className="block-1-shadow1">
              <h2 className="clr-6 p4">Our Gallery</h2>
              <div className="box-1">
                <div className="img-border">
                  <img
                    src={img1}
                    alt=""
                  />
                </div>
                <p className="text-2">Jennifer, 10 years</p>
              </div>
              <div className="box-1 last">
                <div className="img-border">
                  <img
                    src={img2}
                    alt=""
                  />
                </div>
                <p className="text-2">Martin, 13 years</p>
              </div>
              <div className="clear p5" />
              <div className="box-1">
                <div className="img-border">
                  <img
                    src={img3}
                    alt=""
                  />
                </div>
                <p className="text-2">Sebastian, 14 years</p>
              </div>
              <div className="box-1 last">
                <div className="img-border">
                  <img
                    src={img4}
                    alt=""
                  />
                </div>
                <p className="text-2">Fiona, 8 years</p>
              </div>

              <div className="clear" />
              <div className="pad-2">
                <Link
                  to="/gallery"
                  className="link-2"
                >
                  Full Gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </section>
  );
};

export default HomePage;
