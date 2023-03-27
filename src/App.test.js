import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import BookingForm from "./components/BookingForm";


test("renders learn react link", () => {
  render(<BookingForm />);
  const input = screen.getByTestId("form-input");
  fireEvent.change(input, { target: { value: {e:2,arg:"number"} } });
  expect(input).toHaveValue(2);
});
