import { useContext, useCallback } from "react";
import { BaseLogo } from "../../assets";
import { footerTop } from "../../utils/constants";
import { footerBottomItems, footerSocial } from "../../utils/constants/Footer";
import Button from "../Button/Button";
import { NotificationContext } from "../../context/NotificationContext";
import styles from "./Footer.module.scss";
import { useState } from "react";

const Footer = () => {
  const { dispatch } = useContext(NotificationContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [inquiry, setInquiry] = useState("");

  const handleSubmit = useCallback((text) => {
    setTimeout(() => {
      dispatch({
        type: "SET_NOTIFICATION",
        payload: { message: "mesaj başarıyla gönderildi", type: "success" },
      });
      setName("");
      setEmail("");
      setMessage("");
      setInquiry("");
    }, 1000);
  }, []);

  return (
    <footer className={styles.footer}>
      <div id="contact" className={styles.footer_top}>
        <div className={styles.footer_top__left}>
          <div className={styles.footer_top__left__text}>
            <div className={styles.footer_top__left__title}>
              <h2>{footerTop.titleFirst}</h2>
              <h2>{footerTop.titleSecond}</h2>
            </div>
            <div className={styles.footer_top__left__desc}>
              <p>{footerTop.descFirst}</p>
              <p>{footerTop.descSecond}</p>
              <p>{footerTop.descThird}</p>
              <p>{footerTop.descFourth}</p>
            </div>
            <a href="#">{footerTop.mail}</a>
          </div>
          <div className={styles.footer_top__left__social}>
            <div>FOLLOW US ON</div>
            <div className={styles.footer_top__left__social__icons}>
              {footerSocial.map((item, index) => {
                return (
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <img src={item.icon} alt={item.name} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.footer_top__right}>
          <div className={styles.footer_top__right__form}>
            <input
              type="text"
              placeholder="Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name*"
            />
            <input
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email*"
            />
          </div>
          <input
            value={inquiry}
            onChange={(e) => setInquiry(e.target.value)}
            type="text"
            placeholder="Your inquiry about"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message..."
          ></textarea>
          <Button
            onClick={handleSubmit}
            title="Submit Now"
            isGradient={true}
            style={{
              width: "fit-content",
            }}
          />
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <div className={styles.footer_bottom__first}>
          <img src={BaseLogo} alt="" />
          <p>
            <strong>Decentralogic Limited</strong>
            <br />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Intershore+Chambers,+PO+Box+4342,+Road+Town,+Tortola,+VG1110,+BV"
              target="_blank"
              rel="noopener noreferrer"
            >
              Intershore Chambers, PO Box 4342, Road Town, <br /> Tortola,
              VG1110, BV
            </a>
          </p>
        </div>

        {footerBottomItems.map((item, index) => {
          return (
            <div className={styles.footer_bottom__second}>
              <span>{item.title}</span>
              {item.items.map((item, index) => {
                return <a href={item.link}>{item.name}</a>;
              })}
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
