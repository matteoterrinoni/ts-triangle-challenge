import React from 'react';

import './triangle.css'

const Triangles = ({error}) => (
    <div className={`triangles ${error ? 'with-error': ''}`}>
        <div className="triangle t-1"/>
        <div className="triangle t-2"/>
        <div className="triangle t-3"/>
    </div>
)

export default Triangles