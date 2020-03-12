import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import ContactForm from './ContactForm'
import 'mutationobserver-shim'
import { act } from 'react-dom/test-utils'

test('renders labels for first name', () => {
    const { getByText } = render(<ContactForm />)
    const firstNameText = getByText(/first/i)
    expect(firstNameText).toBeInTheDocument()
})

test("form submit outputs items", () => {
    const { getByText, getByTestId, getByLabelText } = render(<ContactForm />);

    const firstNameInput = getByTestId("testfname");
    expect(firstNameInput).toBeTruthy();
  
    fireEvent.change(firstNameInput, { target: { value: "Claria" } });
    const lastNameInput = getByLabelText(/lastName/i);

    fireEvent.change(lastNameInput, { target: { value: "lastName" } });

  
    expect(firstNameInput.value).toBe("Claria");
    expect(lastNameInput.value).toBe("lastName");

    fireEvent.click(getByText("submit"));
 
  });