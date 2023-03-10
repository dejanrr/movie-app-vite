import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-menu">
          <ul className="footer-menu-list">
            <li>Popular</li>
            <li>Top Rated</li>
            <li>Upcoming</li>
            <li>In Theaters</li>
          </ul>
        </div>
        <div className="footer-copyright">
          <div>
            I do not guarantee the accuracy of the information provided in the
            films. <br /> -github icon-
          </div>
          <div>-back to top icon-</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
