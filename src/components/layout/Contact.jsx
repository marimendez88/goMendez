import React, { Fragment } from 'react';

const Contact = () => {
  return (
    <Fragment>
      <section id="contact" className="wrapper style5">
        <div className="inner">
          <h4>Contact me</h4>
          <form
            method="post"
            action="https://getform.io/f/0236476e-8b1c-4b18-b65d-bbd1ae00e49f"
          >
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  defaultValue=""
                  placeholder="Name"
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  defaultValue=""
                  placeholder="Email"
                />
              </div>

              <div className="col-12">
                <textarea
                  name="message"
                  id="message"
                  required
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
