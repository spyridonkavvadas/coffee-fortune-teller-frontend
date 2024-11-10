import React from "react";
import persona3 from "../images/persona3.jpg";
import { FaFacebook, FaPinterestSquare, FaTwitter, FaEnvelope } from "react-icons/fa";
import { GiSpeaker } from "react-icons/gi";

function Oracle({ oracle }) {
  return (
    <>
      <div className="container">
        <div className="row align-items-left bg-faded mb-2">
          <div className="col-2"></div>
          <div className="col-8">
            <img src={persona3} alt="Coffee Fortune Teller" width="129px" />
          </div>
          <div className="col-2"></div>
        </div>

        <div className="row align-items-center bg-faded mb-5">
          <div className="col-1"></div>
          {oracle && (
            <div className="col-10">
              <h4>Here is your Oracle!</h4>
              <div className="text-oracle p-3 mt-2" style={{ backgroundColor: "whitesmoke" }}>
                {oracle.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}

                <div className="social-media d-flex justify-content-center">
                  <a
                    className="resp-sharing-button__link"
                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Share on Facebook"
                  >
                    <FaFacebook size="1.3em" />
                  </a>

                  <a
                    href="https://www.pinterest.com/pin/create/button/"
                    data-pin-do="buttonBookmark"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Share on Pinterest"
                  >
                    <FaPinterestSquare size="1.3em" />
                  </a>

                  <a
                    href="https://twitter.com/intent/tweet/?text=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;url=http%3A%2F%2Fsharingbuttons.io"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Share on Twitter"
                  >
                    <FaTwitter size="1.3em" />
                  </a>

                  <a
                    href="https://mail.google.com/mail/u/0/#search/rfc822msgid%3Aabcdefg%40example.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Share by E-Mail"
                  >
                    <FaEnvelope size="1.3em" />
                  </a>

                  {/* Replaced the anchor tag with a button for accessibility */}
                  <button
                    onClick={() => {}}
                    style={{
                      background: "none",
                      border: "none",
                      color: "blue",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    aria-label="Activate Speaker"
                  >
                    <GiSpeaker size="1.7em" />
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
}

export default Oracle;
