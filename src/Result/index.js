import React from 'react';
import T from './model'

import './result.scss'

import Triangles from '../Triangles'

const Result = ({
  triangle
}) => {
    
    const isTriangle = T(triangle).isTriangle()

    return (
    <div className="result-wrapper">{

        !isTriangle ? 
            <div className="panel result empty">
                <p>not a triangle!</p>
            </div>
        :
            
            <div className="panel result success">
            {
                T(triangle).isEquilateral() &&
                <p className="equilateral">Equilateral</p>
            }
            {
                T(triangle).isIsosceles() &&
                <p className="isosceles">Isosceles</p>
            }
            {
                T(triangle).isScalene() &&
                <p className="scalene">Scalene</p>
            }
            </div>
        }

        <Triangles error={!isTriangle}/>
    
    </div>
    )
}


export default Result;
