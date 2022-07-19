///////////////////////////////////////////////////
import React, { useEffect, useState } from "react";
import styles from "./go-top-button.module.css";
import { UpOutlined } from "@ant-design/icons";

export const GoTopButton = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  const handleVisibleButton = () => {
    setShowGoTop(window.pageYOffset > 850);
  };

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  }, []);

  return (
    <div
      className={showGoTop ? "" : styles.goTopHidden}
      onClick={handleScrollUp}
    >
      <button type={"button"} className={styles.goTop}>
        <span className={styles.goTopIcon}>
          <UpOutlined className="scrolltop-icon" />
        </span>
      </button>
    </div>
  );
};
