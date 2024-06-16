const ContactsPage = () => {
  return (
    <section id="content">
      <div className="container_12">
        <div className="grid_4 bot-1">
          <h2 className="top-6">Contact Us</h2>
          <div className="map">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fduciart&tabs=timeline&width=250px&height=130px&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
          <dl>
            <dt>
              100E/14 Đường N1, Phường Bình Thọ, <br />
              TP. Thủ Đức.(Khu Moonlight Residences)
            </dt>
            <dd>
              <span>Phone: </span>0903 997 907
            </dd>
          </dl>
        </div>
        <div className="grid_8">
          <div className="block-1 top-5">
            <div className="block-1-shadow1">
              <h2 className="clr-6">Contact Form</h2>
              <form
                id="form"
                method="post"
              >
                <fieldset style={{ borderWidth: "0px" }}>
                  <label>
                    <strong>Name:</strong>
                    <input
                      type="text"
                      defaultValue=""
                    />
                    <strong className="clear" />
                  </label>
                  <label>
                    <strong>Email:</strong>
                    <input
                      type="text"
                      defaultValue=""
                    />
                    <strong className="clear" />
                  </label>
                  <label>
                    <strong>Phone:</strong>
                    <input
                      type="text"
                      defaultValue=""
                    />
                    <strong className="clear" />
                  </label>
                  <label>
                    <strong>Message:</strong>
                    <textarea defaultValue={""} />
                    <strong className="clear" />
                  </label>
                  <strong className="clear" />
                  <div className="btns pad-2">
                    <a
                      href="#"
                      className="link-2"
                    >
                      Clear
                    </a>
                    <a
                      href="#"
                      className="link-2"
                    >
                      Send
                    </a>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </section>
  );
};

export default ContactsPage;
