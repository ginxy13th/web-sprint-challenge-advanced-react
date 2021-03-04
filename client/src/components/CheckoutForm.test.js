import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    const firstnameInput = screen.getByLabelText(/first name:/i)
    const lastnameInput = screen.getByLabelText(/last name:/i)
    const addressInput = screen.getByLabelText(/address:/i)
    const cityInput = screen.getByLabelText(/city:/i)
    const stateInput = screen.getByLabelText(/state:/i)
    const zipInput = screen.getByLabelText(/zip:/i)
    const submitButton = screen.getByRole('button', {name: 'Checkout'})

    // const firstnameInput = screen.findByTestId('firstname')
    // const lastnameInput = screen.findByTestId('lastname')
    // const addressInput = screen.findByTestId('address')
    // const cityInput = screen.findByTestId('city')
    // const stateInput = screen.findByTestId('state')
    // const zipInput = screen.findByTestId('zipcode')
    
        fireEvent.change(firstnameInput, { target: { value: 'elizabeth' } });
        fireEvent.change(lastnameInput, { target: { value: 'bailey' } });
        fireEvent.change(addressInput, { target: { value: '1234 address way' } });
        fireEvent.change(cityInput, { target: { value: 'whatever' } });
        fireEvent.change(stateInput, { target: { value: 'galifray' } });
        fireEvent.change(zipInput, { target: { value: '12345' } });
        fireEvent.click(submitButton)
     

     expect( screen.getByTestId('successMessage')).toBeInTheDocument();
});
