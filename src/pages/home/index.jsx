export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container mt-5 mb-5">
        {/* Header Section */}
        <div className="row">
          <div className="col-md-12">
            <div className="card border-0 rounded shadow">
              <div className="container-fluid py-5 bg-primary text-white">
                <h1 className="display-5 fw-bold text-center">
                  Preact + Bootstrap 5
                </h1>
                <p className="col-md-8 fs-4 text-center mx-auto">
                  Welcome to My Website
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Body Layout Section */}
        <div className="row mt-4">
          <div className="col-lg-3 col-md-4 col-12 mb-3">
            <div className="card p-3 text-center bg-light border-0 shadow-sm">
              <h3>Backend Dev</h3>
              <p>Building robust server-side logic and APIs.</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-4 col-12 mb-3">
            <div className="card p-3 text-center bg-light border-0 shadow-sm">
              <h3>Frontend Dev</h3>
              <p>Creating beautiful and responsive user interfaces.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12 mb-3">
            <div className="card p-3 text-center bg-light border-0 shadow-sm">
              <h3>Android Dev</h3>
              <p>Building native Android applications for mobile users.</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-auto container-fluid bg-dark text-white">
        <div className="row">
          <div className="col-md-6 text-center py-3">
            &copy; 2024 My Website
          </div>
          <div className="col-md-6 text-center py-3">
            Contact: admin.simogas@novatix.site
          </div>
        </div>
      </footer>
    </div>
  );
}
