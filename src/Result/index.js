import React from 'react';
import {
    Measures
} from '../triangle'

import './result.scss'

import Triangles from '../Triangles'

const Result = ({
  triangle
}) => {
    
    const Triangle = Measures(triangle).isTriangle()

    return (
    <div className="result-wrapper">{

        !Triangle ? 
            <div className="panel result empty">
                <p>not a triangle!</p>
            </div>
        :
            
            <div className="panel result success">
            {
                Triangle.isEquilateral() &&
                <p className="equilateral">Equilateral</p>
            }
            {
                Triangle.isIsosceles() &&
                <p className="isosceles">Isosceles</p>
            }
            {
                Triangle.isScalene() &&
                <p className="scalene">Scalene</p>
            }
            </div>
        }

        <Triangles error={!Triangle}/>
    
    </div>
    )
}


export default Result;
