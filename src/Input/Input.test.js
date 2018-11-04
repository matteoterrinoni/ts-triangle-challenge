import React from 'react';
import {render, cleanup, fireEvent} from 'react-testing-library';
import Input from './';

const getInput = container => container.querySelector('input')

afterEach(cleanup)

it('render an Input', () => {
    const {container} = render(<Input/>)
    const input = getInput(container)
    expect(input).not.toBeNull()
});

it('render a label if passed', () => {
    const {container} = render(<Input label="mylabel"/>)
    const html = container.innerHTML
    expect(html).toContain('mylabel')
});

it ('render an input with a value', ()=>{
    const fn = jest.fn()
    const testValue = "ciao" 
    const {queryAllByValue} = render(<Input value={testValue} onChange={fn}/>)
    const inputWithValue = queryAllByValue(testValue)
    expect(inputWithValue).not.toBeNull()
})

it ('onChange is called correctly only when inputed value is a number', ()=>{
    const handleChange = jest.fn()
    const {container} = render(<Input value="" target="a" onChange={handleChange}/>)
    const input = getInput(container)
    
    expect(handleChange).not.toHaveBeenCalled()
    expect(input.value).toBe('')

    fireEvent.change(input, {target: {value: 'a'}})
    expect(handleChange).toHaveBeenCalledTimes(0)

    fireEvent.change(input, {target: {value: '1'}})
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith({a:1})
})

