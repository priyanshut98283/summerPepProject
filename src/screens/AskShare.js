import React from "react";

// styles
import "./AskShare.css";

function AskShare() {
  return (
    <div className="ask-share-container">
      {/* left container  */}
      <div className="menu-container">
        <p>Welcome</p>
        <div>
          <div className="menu-container-options">
            <img src="" alt="" />
            <p>Ask</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Share</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Buy</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Sell</p>
          </div>
        </div>
      </div>

      {/* middle container  */}
      <div className="ask-share-content-container">
        <div className="menu-content-container">
            <div className="search-bar">
                What would you like to ask/share?
            </div>
            <div className="post-button">
                Post
            </div>
        </div>
      </div>

      {/* right container  */}
      <div className="menu-container">
        <p>Welcome</p>
        <div>
          <div className="menu-container-options">
            <img src="" alt="" />
            <p>Ask</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Share</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Buy</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Sell</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AskShare;