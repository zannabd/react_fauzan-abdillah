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
    const productNameInput = screen.getByLabelText('Product Name');
    // jalanin input text ke input Product Name
    fireEvent.change(productNameInput, { target: { value: "Product A" } });
    // Cari text yang ditampiilkan di halaman
    const displayedText = screen.getByDisplayValue("Product A");
    // Pastiin text yang ditampiin sesuuai input
    expect(displayedText).toBeInTheDocument();
    expect(screen.getByText("Detail Product")).toBeInTheDocument();
  });
  // test("Product Name tidak boleh mengandung karakter khusus @/#{}", () => {
  //   render(
  //     <Provider store={store}>
  //       <Inputform />
  //     </Provider>
  //   );
  //   const productNameInput = screen.getByLabelText(/Product Name/);
  //   fireEvent.change(productNameInput, { target: { value: "Product@Name" } });
  //   const validationMessage = screen.getByText(/Product Name tidak boleh mengandung karakter khusus/, { exact: false, ignore: ["comments", "script", "style"] });
  //   expect(validationMessage).toBeInTheDocument();
  // });
  // test("Product Name tidak boleh melebihi 25 karakter", async () => {
  //   await render(
  //     <Provider store={store}>
  //       <Inputform />
  //     </Provider>
  //   );
  //   const productNameInput = screen.getByLabelText(/Product Name/);
  //   fireEvent.change(productNameInput, { target: { value: "Nama Produk yang sangat panjang melebihi 25 karakter" } });
  //   const validationMessage = screen.getByText(/Product Name tidak boleh lebih dari 25 karakter/, { exact: false, ignore: ["comments", "script", "style"] });
  //   expect(validationMessage).toBeInTheDocument();
  // });
});
