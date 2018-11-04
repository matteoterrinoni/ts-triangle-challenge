import React from 'react';
import {render, cleanup} from 'react-testing-library';
import Result from './';

afterEach(cleanup)

const triangle = [
    1, 1, 1
]

const nonTriangle = [
    1, 2
]

it('renders result if is a triangle', () => {
    const {container} = render(<Result triangle={triangle}/>)
    expect(container.querySelector('.result')).not.toBeNull()
})

it('renders empty message if is not a triangle', () => {
    const {container} = render(<Result triangle={nonTriangle}/>)
    expect(container.querySelector('.empty')).not.toBeNull()
})

it('renders equilateral message if the triangle is equilateral', () => {
    const {container} = render(<Result triangle={[1, 1, 1]}/>)
    expect(container.querySelector('.equilateral')).not.toBeNull()
    expect(container.querySelector('.isosceles')).toBeNull()
})

it('renders isosceles message if the triangle is isosceles', () => {
    const {container} = render(<Result triangle={[10, 10, 2]}/>)
    expect(container.querySelector('.isosceles')).not.toBeNull()
    expect(container.querySelector('.equilateral')).toBeNull()
})

it('renders scalene message if the triangle is scalene', () => {
    const {container} = render(<Result triangle={[7, 10, 5]}/>)
    expect(container.querySelector('.scalene')).not.toBeNull()
    expect(container.querySelector('.isosceles')).toBeNull()
    expect(container.querySelector('.equilateral')).toBeNull()
})

