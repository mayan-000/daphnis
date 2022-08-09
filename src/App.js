import "./App.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";

function App() {
  return (
    <div>
      <header className="header">
        <div className="menu-container">
          <span className="business-logo" />
          <h1>Medical Darpan</h1>

          <ul class="menu-list">
            <li>Home</li>
            <li>Products</li>
            <li>Distributors</li>
            <li>Manufacturers</li>
            <li>About us</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="login-container">
          <p className="login">Login</p>
          <AccountCircleIcon className="account-icon" />
        </div>
      </header>

      <div className="container">
        <div className="search-container">
          <p className="path">
            Medical Darpan &gt; Search &gt; <span>FabiFlu Tablet</span>
          </p>
          <div className="search-bar">
            <div>
              <SearchIcon className="search" />
              <p>Paracetamol</p>
            </div>
            <button>Search</button>
          </div>
        </div>

        <div className="results-header">
          <h2>Paracetamol</h2> <span className="count">(128 products)</span>
          <div>
            Aceclofenac <CloseIcon />
          </div>{" "}
          <div>
            500 mg <CloseIcon />
          </div>
          <span className="remove">Remove all</span>
        </div>

        <div className="results">
          <div className="sidebar">
            <div className="sidebar-item">
              <h3>Related Category</h3>
              <p>Paracetamol Tablets</p>
              <p>Paracetamol Syrup</p>
              <p>Paracetamol Powder</p>
              <p className="pill">
                Aceclofenac{" "}
                <span>
                  <CloseIcon />
                </span>
              </p>
              <p>Magaladrate Simethicone Oral Suspension</p>
              <p>Mefenamic Paracetamol Syrup</p>
            </div>
            <div className="sidebar-item">
              <h3>Related Brands</h3>
              <p>Ciptol Paracetamol</p>
              <p>Pandal Paracetamol Tablets</p>
              <p>Combiflam</p>
              <p>Crocin Tablets</p>
              <p>Calpol Paracetamol Tablets</p>
              <p>Sumo Tablets</p>
            </div>

            <div className="sidebar-item">
              <h3>Business Type</h3>
              <p>Wholesaler</p>
              <p>Manufacturer</p>
              <p>Retailer</p>
              <p>Exporter</p>
            </div>

            <div className="sidebar-item">
              <h3>Strength</h3>
              <p className="pill">
                500 mg{" "}
                <span>
                  <CloseIcon />
                </span>
              </p>
              <p>650 mg</p>
            </div>

            <div className="sidebar-item">
              <h3>Manufacturer</h3>
              <p>Intas Pharaceutical Ltd</p>
              <p>Alkem Laboratories Ltd</p>
            </div>

            <div className="sidebar-item">
              <h3>Prescription/Non prescription</h3>
              <p>Intas Pharmaceutical Ltd</p>
              <p>Alkem Labroatories Ltd</p>
            </div>
          </div>

          <div className="results-blocks">
            {Array.apply(null, Array(6)).map(() => (
              <div className="result-block">
                <div className="info">
                  <img
                    src="https://tajlifesciences.com/wp-content/uploads/Paracetamol-500-MG-Tablet-manufcaturer-india-Taj-Life-Sciences-6-scaled.jpg"
                    alt="stripe"
                  />
                  <h3>Favipiravir 400mg (Fabiflu) Tablets</h3>
                  <p className="price-container">
                    <span className="price">Rs 1,775</span> /{" "}
                    <span className="stripe">stripe</span>
                  </p>
                  <p className="company-name">
                    Glenmark Pharmaceutical Limited
                  </p>
                  <p className="location">Parvat Patiya, surat, Gujrat</p>
                </div>
                <div className="contact-container">
                  <SendIcon /> <span>Contact Supplier</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
