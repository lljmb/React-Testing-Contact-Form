import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactForm from './ContactForm'
import userEvent from '@testing-library/user-event';

test('render App form', async () => {
    // arrange
    render(<ContactForm />);

    // act
    // get input fields
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
    const messageInput = screen.getByLabelText(/message/i);

    // type into inputs
        userEvent.type(firstNameInput, 'jb');
        userEvent.type(lastNameInput, 'brown');
        userEvent.type(emailInput, 'jb@brown.com');
        userEvent.type(messageInput, 'heyooo');

    // push the submit button
    const button = screen.getByRole('button', {value: 'Submit'});
    userEvent.click(button);

    //assert: form is complete
    const newFirstName = await screen.findByText(/jb/i)
    const newLastName = await screen.findByText(/brown/i)
    const newEmail = await screen.findByText(/jb@brown.com/i)
    expect(newFirstName && newLastName && newEmail).toBeInTheDocument();

});