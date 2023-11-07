const Footer = () => {
  return (
      <>
       {/* info section */}
       <section className="info_section">
        <div className="container">
          <div className="contact_nav">
            <a href="http://wa.me/821025979678">
              <img src="images/call1.png" alt="whats app" width="70" height="70" />
            </a>
            <a href="https://instagram.com/jkorea_tour">
              <img src="images/noback_instagram.png" alt="Instagram" width="70" height="70" />
            </a>
            <div>
              <img src="images/message.png" alt="" width="70" height="70" />
              <span>juliana.jkorea@gmail.com</span>
            </div>
          </div>
          <div className="info_top">
            (07563) No. 491, 8, Gonghangdae-ro 59gil, Gangseo-gu, Seoul, Republic of Korea <br />
            Business Registration (Travel)  #161-21-01783<br /><br />
            Copyright© Jkorea Travel Agency. All right reserved.
          </div>
        </div>
      </section>
      {/* End Info section */}

      {/*psb:: free templete - Footer section */}
      {/* <footer className="footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By
            <a href="https://html.design/">Free Html Templates</a>
          </p>
        </div>
      </footer> */}
      </>
  );
};


export default Footer;