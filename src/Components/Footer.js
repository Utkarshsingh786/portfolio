import React from "react";
const Footer = ({ data }) => {
  if (data) {
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name} >
          <a href={network.url} target="_blank" rel="noreferrer">
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links" >{networks}</ul>

          <ul className="copyright">
            <li>
              Code by{" "}
              <a title="Sanskar Singh" href="https://linkedin.com/in/sanskar-singh-98ba16193" target="_blank" rel="noreferrer">
              Sanskar Singh 
              </a>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
          <i class="fa fa-chevron-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
