import React from "react";
import PageLoader from "../components/PageLoader/PageLoader";
import cn from "classnames";
import HeaderTwo from "../components/Header/HeaderTwo";
import FooterTwo from "../components/Footer/FooterTwo";

const LayoutTwo = (props) => {
  return (
    <div className={cn("white-background")}>
      <PageLoader />

      <HeaderTwo />

      {props.children}

      <FooterTwo />
    </div>
  );
};

export default LayoutTwo;
