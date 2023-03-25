import styles from "./bookingForm.module.css";
const BookingForm = (props) => {
  return (
    <form onSubmit={props.submitForm} className={styles.form_wrapper}>
      <label htmlFor="res-date">
        Choose date
        <input
          onChange={(e) => {
            props.changeHandler(e, "date");
          }}
          value={props.dateInput}
          type="date"
          id="res-date"
          placeholder={props.dateInput !== "" ? "" : "Date"}
        />
      </label>
      <label htmlFor="res-time">
        Choose time
        <select
          onChange={(e) => {
            props.changeHandler(e, "time");
          }}
          value={props.timeInput}
          id="res-time"
        >
          {props.availableDates.map((item) => (
            <option>{item}</option>
          ))}
        </select>
      </label>
      <label htmlFor="guests">
        Number of guests
        <input
          onChange={(e) => {
            props.changeHandler(e, "number");
          }}
          value={props.guestNumberInput}
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
        />
      </label>
      <label htmlFor="occasion">
        Occasion
        <select
          onChange={(e) => {
            props.changeHandler(e, "occasion");
          }}
          value={props.occasionInput}
          id="occasion"
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </label>
      <button className={styles.submit_button} type="submit">
        {!props.loading ? (
          <span className={styles.button_text}>Make Your reservation</span>
        ) : (
          <>
            <span>Reserving</span>
            <span id={styles.dots}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </>
        )}
      </button>
    </form>
  );
};

export default BookingForm;
