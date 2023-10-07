import { fireEvent, render, screen } from "@testing-library/react";
import Inputform from "./Inputform";
import { Provider } from "react-redux";
import store from "../../store/store";

describe("Input Form", () => {
  test("Memastikan input Product Name menerima input text dan menampilkannya", () => {
    // Render component inputForm
    render(
      <Provider store={store}>
        <Inputform />
      </Provider>
    );
    // mencari input product name berdasarkan label nya
    const productNameInput = screen.getByLabelText(/Product Name/);
    // jalanin input text ke input Product Name
    fireEvent.change(productNameInput, { target: { value: "" } });
    // Cari text yang ditampiilkan di halaman
    const displayedText = screen.getByText("");
    // Pastiin text yang ditampiin sesuuai input
    expect(displayedText).toBeInTheDocument();
    expect(screen.getByText("Detail Product")).toBeInTheDocument();
  });
});
