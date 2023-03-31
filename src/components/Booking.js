import { useEffect, useState } from "react";
import BookingForm from "./BookingForm";
import styles from "./home.module.css";
import Modal from "./Modal";
import { sleep } from "../utils/sleep";
import { fetchAPI, submitAPI } from "../utils/dataFether";

const Booking = () => {
  const [dateInput, setDateInput] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [timeInput, setTimeInput] = useState("");
  const [guestNumberInput, setGuestNumberInput] = useState();
  const [occasionInput, setOccasionInput] = useState("");
  const [reservationDetails, setReservationDetails] = useState();
  const [loading, setLoading] = useState(false);
  const [availableDates, setAvailableDates] = useState();
  const [formChecked, setFormChecked] = useState();

  useEffect(() => {
    setAvailableDates(fetchAPI(new Date(dateInput)));
  }, [dateInput]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (timeInput && guestNumberInput && occasionInput && dateInput) {
      setLoading(true);
      await sleep(1500);
      setReservationDetails({
        date: dateInput,
        time: timeInput,
        guestNumber: guestNumberInput,
        occasion: occasionInput,
      });
      setLoading(false);
    } else {
      setFormChecked(false)
      return;
    }
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
        <div>
          <img className={styles.image} src="https://st2.depositphotos.com/5532432/10076/v/600/depositphotos_100766842-stock-illustration-dining-table-vector-icon.jpg" alt="table" />
        </div>
        <div className={styles.main_text}>
          <h1>Book a table!</h1>
          <BookingForm
            loading={loading}
            availableDates={availableDates}
            submitForm={submitHandler}
            changeHandler={changeHandler}
            dateInput={dateInput}
            timeInput={timeInput}
            guestNumberInput={guestNumberInput}
            occasionInput={occasionInput}
          />
        </div>
        <div>
          <div className={styles.tick}></div>
        </div>
      </div>
    </>
  );
};

export default Booking;
