import React from "react";
import classnames from "classnames";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import Link from "@material-ui/core/Link";
import "./SocialMedia.scss";

const SocialMedia = () => {
  return (
    <div className="social-container">
      <div className={classnames("social-icon", "facebook")}>
        <Link href="#" target="_blank">
          <Facebook />
        </Link>
      </div>
      <div className={classnames("social-icon", "instagram")}>
        <Link href="#" target="_blank">
          <Instagram />
        </Link>
      </div>
      <div className={classnames("social-icon", "twitter")}>
        <Link href="#" target="_blank">
          <Twitter />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
