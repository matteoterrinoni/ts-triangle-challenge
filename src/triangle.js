export const Measures = (measures) => ({

    isTriangle: ()=>{
        const [a, b, c] = measures

        //check if the given sides are valid
        return measures.length === 3 &&
        measures.every(s=>s) &&

        //Apply the Inequality Theorem
        //https://en.wikipedia.org/wiki/Triangle_inequality
        a+b > c &&
        a+c > b &&
        b+c > a &&
        Triangle(measures)
    }
})

export const Triangle = ([a, b, c]) => {
    const triangle = [a, b, c]
    return {
        //a triangle is equilateral when all sides are equal
        isEquilateral: () => triangle.every(s=>s===a),

        //a triangle is isosceles when there are two sides with an equal length
        isIsosceles: () => triangle.find(s=>triangle.filter(t=>t===s).length === 2),

        //a triangle is scalene when all sides are different
        isScalene: () => triangle.filter(s=>triangle.filter(t=>t===s).length > 1).length === 0
    }
}