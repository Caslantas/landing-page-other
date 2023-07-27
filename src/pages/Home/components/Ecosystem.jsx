import React from "react";
import styles from "./Ecosystem.module.scss";
import { ecoTitle, ecoDesc, ecoCardItems } from "../../../utils/constants";
import DaoPeople from "../../../assets/images/DaoPeople.svg";
import { RightArrow } from "../../../assets/index";

const Ecosystem = () => {
  return (
    <div className={styles.ecosystem}>
      <div className={styles.ecosystem__top}>
        <div className={styles.ecosystem__top__left}>
          <h2 className={styles.ecosystem__top__left__title}>{ecoTitle}</h2>
          <div className={styles.ecosystem__top__left__desc}>
            <p>{ecoDesc.first}</p>
            <p>{ecoDesc.second}</p>
          </div>
        </div>
        <div className={styles.ecosystem__top__right}>
          <button>+</button>
          <img src={DaoPeople} alt="" />
        </div>
      </div>
      <div className={styles.ecosystem__bottom}>
        {ecoCardItems.map((item, index) => {
          return (
            <div
              className={styles.ecosystem__bottom__card__container}
              key={index}
            >
              <a className={styles.ecosystem__bottom__card}>
                <span>{item.id}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </a>
              <a className={styles.ecosystem__bottom__card__button} href="#">
                <span>{item.buttonText}</span>
                <img src={RightArrow} alt="" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ecosystem;
