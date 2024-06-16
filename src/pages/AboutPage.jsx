import imgHome from "../assets/images/page2-img1.jpg";

const AboutPage = () => {
  return (
    <section id="content">
      <div className="container_12">
        <div className="grid_4 bot-3">
          <h2
            className="top-6 p2"
            style={{ marginTop: "60px" }}
          >
            Teachers
          </h2>
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
                  Duci Art CHÍNH THỨC gia nhập đường đua nghệ thuật ! 🔥
                </strong>
              </p>
              <p className="clr-6">
                Vậy là sau 5 tháng ấp ủ thì cũng đã đến lúc nhà "Đu xì" thực
                hiện giấc mơ của mình. Với sứ mệnh nuôi nấng những tâm hồn nghệ
                thuật bên trong của mỗi cá thể, Duci Art sẽ cùng bạn hoà mình
                vào nét vẽ của thực tại, để bạn thoả sức sáng tạo với niềm đam
                mê của bản thân.
              </p>
              <div className="pad-3">
                <img
                  src={imgHome}
                  alt=""
                  className="img-border img-indent"
                />
                <div className="extra-wrap clr-6">
                  <p>
                    Chúng mình có lộ trình học cụ thể, từ cơ bản đến nâng cao ở
                    các lớp màu bột, màu nước, kí hoạ, minh hoạ, tĩnh vật chì và
                    các lớp mỹ thuật thiếu nhi cho các bạn nhỏ.
                  </p>
                </div>
              </div>

              <p className="clr-6">
                Nhưng mong rằng, khi đến với Duci thì ai cũng giống nhau, không
                lấy tuổi tác, vị thế làm rào cản. Vì chúng ta đều mang trong
                mình một tâm hồn nghệ thuật rất riêng ! <br />
                ☘️ Hãy cùng Duci Art chăm sóc và ươm mầm cho vườn hoa bên trong
                bạn. Để từ đó sinh sôi những gam màu tuyệt vời nhất !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
