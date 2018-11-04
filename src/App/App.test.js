import React from 'react';
import {render, cleanup, fireEvent} from 'react-testing-library';
import App from '.';

afterEach(cleanup)

it('renders a title a form and a result panel', () => {
    const {container} = render(<App />)
    expect(container.querySelector('.result')).not.toBeNull()
    expect(container.querySelector('form')).not.toBeNull()
    expect(container.querySelector('h2')).not.toBeNull()
})

it('inputing a triangle', () => {
    const {container, rerender} = render(<App />)

    expect(container.querySelector('.empty')).not.toBeNull()

    const inputs = container.querySelectorAll('input')
    fireEvent.change(inputs[0], {target: {value: 10}})
    fireEvent.change(inputs[1], {target: {value: 10}})
    fireEvent.change(inputs[2], {target: {value: 10}})

    rerender(<App />)

    expect(container.querySelector('.empty')).toBeNull()

})
