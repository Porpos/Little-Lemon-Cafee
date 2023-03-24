import styles from "./home.module.css";
const Modal = (props) => {
  return (
    <>
      <div
        onClick={() => {
          props.clear()
        }}
        className={styles.backdrop}
      ></div>
      <div className={styles.modal}>
        <h3>Reservation is done!</h3>
        <span>Date: {props.details.date}</span>
        <span>Time: {props.details.time}</span>
        <span>Guest Number: {props.details.guestNumber}</span>
        <span>Occasion: {props.details.occasion}</span>
      </div>
    </>
  );
};

export default Modal
