import React from 'react'

import Input from '../Input'

const Form = ({sides, onChangeSide})=>{
    const {a, b, c} = sides
    return (
    <form data-ts="Form" className="panel">
        <div data-ts="Note">
            <p>Fill the form with sides length of the triangle to inspect</p>
        </div>
        <Input target="a" label="A side" value={a} onChange={onChangeSide}/>
        <Input target="b" label="B side" value={b} onChange={onChangeSide}/>
        <Input target="c" label="C side" value={c} onChange={onChangeSide}/>
    </form>
    )
}

export default Form