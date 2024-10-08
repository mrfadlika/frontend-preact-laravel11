export default function Intro() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card border-0 rounded shadow">
            <div
              className="d-flex align-items-center"
              style={{ padding: "40px 40px 20px 40px" }}
            >
              <img
                src="https://avatars.githubusercontent.com/u/101388811?v=4"
                alt="Raffi Fadlika"
                className="rounded-circle"
                style={{ width: "100px", height: "100px", marginRight: "20px" }}
              />
              <div className="container-fluid py5">
                <h1 className="display-5 fw-bold">Hi! I'm Raffi Fadlika</h1>
                <p className="fs-4">I'm a Professional Web Developer</p>
              </div>
            </div>
            <hr />
            <div
              className="row"
              style={{ padding: "40px 40px 10px 40px" }}
            >
              <div className="col-md-6" style={{ padding: "10px 40px 10px 40px" }}>
                <h4>Personal Information</h4>
                <p>
                  <strong>Name:</strong> Raffi Fadlika
                </p>
                <p>
                  <strong>Email:</strong> mrfadlika248@gmail.com
                </p>
                <p>
                  <strong>Phone:</strong> +62 882020802944
                </p>
                <p>
                  <strong>Address:</strong> Jl. Imam Bonjol, Jakarta, Indonesia
                </p>
              </div>
              <div
                className="col-md-6"
                style={{ padding: "40px", paddingBottom: "20px" }}
              >
                <h4>Discouse</h4>
                <p>
                  <strong>Kampus:</strong> Politeknik Negeri Ujung Pandang
                </p>
                <p>
                  <strong>Jurusan:</strong> Teknik Informatika dan Komputer
                </p>
                <p>
                  <strong>Prodi:</strong> Teknik Multimedia dan Jaringan
                </p>
              </div>
            </div>
            <hr />
            <div className="mt-4" style={{padding: "20px 60px 20px 60px"}}>
              <h4>Skills</h4>
              <div className="row">
                <div className="col-12 mb-4">
                  <div className="d-flex align-items-center mb-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                      alt="React Logo"
                      style={{
                        width: "30px",
                        height: "30px",
                        marginRight: "10px",
                      }}
                    />
                    <span>React</span>
                  </div>
                  <div className="progress" style={{ height: "20px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "55%" }}
                      aria-valuenow="55"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      55%
                    </div>
                  </div>
                </div>

                <div className="col-12 mb-4">
                  <div className="d-flex align-items-center mb-2">
                    <img
                      src="https://static.cdnlogo.com/logos/l/23/laravel.svg"
                      alt="Laravel Logo"
                      style={{
                        width: "30px",
                        height: "30px",
                        marginRight: "10px",
                      }}
                    />
                    <span>Laravel</span>
                  </div>
                  <div className="progress" style={{ height: "20px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      85%
                    </div>
                  </div>
                </div>

                <div className="col-12 mb-4">
                  <div className="d-flex align-items-center mb-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                      alt="Vue Logo"
                      style={{
                        width: "30px",
                        height: "30px",
                        marginRight: "10px",
                      }}
                    />
                    <span>Vue</span>
                  </div>
                  <div className="progress" style={{ height: "20px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "40%" }}
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      40%
                    </div>
                  </div>
                </div>

                <div className="col-12 mb-4">
                  <div className="d-flex align-items-center mb-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                      alt="React Native Logo"
                      style={{
                        width: "30px",
                        height: "30px",
                        marginRight: "10px",
                      }}
                    />
                    <span>React Native</span>
                  </div>
                  <div className="progress" style={{ height: "20px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      90%
                    </div>
                  </div>
                </div>

                <div className="col-12 mb-4">
                  <div className="d-flex align-items-center mb-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                      alt="Flutter Logo"
                      style={{
                        width: "30px",
                        height: "30px",
                        marginRight: "10px",
                      }}
                    />
                    <span>Flutter</span>
                  </div>
                  <div className="progress" style={{ height: "20px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "65%" }}
                      aria-valuenow="65"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      65%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
