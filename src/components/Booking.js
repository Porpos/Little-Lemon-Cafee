import { useState } from "react";
import BookingForm from "./BookingForm";
import styles from "./home.module.css";
import Modal from "./Modal";
import { sleep } from "../utils/sleep";
const Booking = () => {
  const [dateInput, setDateInput] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [guestNumberInput, setGuestNumberInput] = useState();
  const [occasionInput, setOccasionInput] = useState("");
  const [reservationDetails, setReservationDetails] = useState();
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    await sleep(1500);
    setReservationDetails({
      date: dateInput,
      time: timeInput,
      guestNumber: guestNumberInput,
      occasion: occasionInput,
    });
    setLoading(false);
  };

  const changeHandler = (e, arg) => {
    switch (arg) {
      case "date":
        setDateInput(e.target.value);
        break;
      case "time":
        setTimeInput(e.target.value);
        break;
      case "number":
        setGuestNumberInput(e.target.value);
        break;
      case "occasion":
        setOccasionInput(e.target.value);
        break;
      default:
        break;
    }
  };

  const clearReservationDetails = () => {
    setReservationDetails();
  };

  return (
    <>
      {reservationDetails && (
        <Modal clear={clearReservationDetails} details={reservationDetails} />
      )}
      <div className={styles.homeContainer}>
        <div></div>
        <div className={styles.main_text}>
          <h1>Book a table!</h1>
          <BookingForm
            loading={loading}
            submitForm={submitHandler}
            changeHandler={changeHandler}
            dateInput={dateInput}
            timeInput={timeInput}
            guestNumberInput={guestNumberInput}
            occasionInput={occasionInput}
          />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Booking;
