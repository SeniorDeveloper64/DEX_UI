import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./PageLoader.module.css";

const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 2000));
      setLoading((loading) => !loading);
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className={cn(styles.preloader)}>
        <div className={cn(styles.spinner)}>
          <div className={cn(styles.rect1)}></div>
          <div className={cn(styles.rect2)}></div>
          <div className={cn(styles.rect3)}></div>
          <div className={cn(styles.rect4)}></div>
          <div className={cn(styles.rect5)}></div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default PageLoader;
