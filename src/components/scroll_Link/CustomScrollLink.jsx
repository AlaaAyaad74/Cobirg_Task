import React from "react";
import { Link as ScrollLink } from "react-scroll";

function CustomScrollLink(props) {
  return (
    <ScrollLink
      className="scroll-link"
      activeClass="active"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      {...props} // Pass additional props
    >
      {props.children}
    </ScrollLink>
  );
}
export default CustomScrollLink;
