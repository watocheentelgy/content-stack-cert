/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Footer(props) {
  const webInfo = props.webInfo;
  return (
    <div className="copyright_section">
      <div className="container">
        <p className="copyright">{webInfo.footer.rights_reserved} <img src={webInfo.footer.image.url} alt={webInfo.title} width="72" height="16" /></p>
      </div>
    </div>
  );
}
