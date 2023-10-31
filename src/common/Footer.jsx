const Footer = () => {
  return (
      <>
       {/* info section */}
       <section className="info_section long_section">
        <div className="container">
          <div className="contact_nav">
            <a href="http://wa.me/821025979678">
              <img src="images/call1.png" alt="" width="70" height="70" />
            </a>
            <a href="https://instagram.com/jkorea_tour">
              <img src="images/noback_instagram.png" width="70" height="70" />
            </a>
            <a>
              <i className="fa fa-envelope" aria-hidden="true" />
              <span>juliana.jkorea@gmail.com</span>
            </a>
          </div>
          <div className="info_top">
            (07563) No. 491, 8, Gonghangdae-ro 59gil, Gangseo-gu, Seoul, Republic of Korea <br />
            Business Registration (Travel)  #161-21-01783<br /><br />
            Copyright© Jkorea Travel Agency. All right reserved.
          </div>
        </div>
      </section>
      {/* End Info section */}
      {/* Footer section */}
      <footer className="footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By
            <a href="https://html.design/">Free Html Templates</a>
          </p>
        </div>
      </footer>
      
       {/* <section className="info_section long_section">
          <div className="container">
            <div className="contact_nav">
              <a href="">
                <i className="fa fa-phone" aria-hidden="true" />
                <span>+82 10 2597 9678</span>
              </a>
              <a href="">
                <i className="fa fa-envelope" aria-hidden="true" />
                <span>juliana.jkorea@gmail.com</span>
              </a>
            </div>

            <div className="info_top ">
              (07563) No. 491, 8, Gonghangdae-ro 59gil, Gangseo-gu, Seoul,
              Republic of Korea <br />
              Business Registration (Travel) #161-21-01783
              <br />
              Copyright© Jkorea Travel Agency. All right reserve.
            </div>
          </div>
        </section>

        {/* footer section */}
        {/* <footer className="footer_section">
          <div className="container">
            <p>
              &copy; <span id="displayYear"></span> All Rights Reserved By{" "}
              <a href="https://html.design/">Free Html Templates</a>
            </p>
          </div>
        </footer> */}
      </>
  );
};


export default Footer;