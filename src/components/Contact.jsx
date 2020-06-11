import React, { Fragment } from 'react';

const Contact = () => {
  return (
    <Fragment>
      <section className="wrapper style5">
        <div className="inner">
          <h4>Contact me</h4>
          <form method="post" action="#">
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="demo-name"
                  id="demo-name"
                  defaultValue=""
                  placeholder="Name"
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="demo-email"
                  id="demo-email"
                  defaultValue=""
                  placeholder="Email"
                />
              </div>
              <div className="col-12">
                <select name="demo-category" id="demo-category">
                  <option value=""> General</option>
                  <option value="1">Web Development</option>
                  <option value="1">Mobile Development</option>
                  <option value="1">Projects Administration</option>
                  <option value="1">Consultant</option>
                </select>
              </div>
              <div className="col-12">
                <textarea
                  name="demo-message"
                  id="demo-message"
                  placeholder="Enter your message"
                  rows="6"
                ></textarea>
              </div>
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      value="Send Message"
                      className="primary"
                    />
                  </li>
                  <li>
                    <input type="reset" value="Reset" />
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
