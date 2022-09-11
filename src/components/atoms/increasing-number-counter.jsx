import React, {useEffect, useState} from 'react'
import './increasing-number-counter.css'
import PropTypes from 'prop-types'

export const IncreasingNumberCounter = ({number, suffix}) => {
    const [renderNumber, setRenderNumber] = useState(0)
    useEffect(() => {
        const incrementDivision = Math.ceil(number / 40)
        const increment = setInterval(() => {
            if (renderNumber < number) {
                const amountToIncrement = Math.min(incrementDivision, number - renderNumber)
                setRenderNumber(renderNumber + amountToIncrement)
            }
        }, 25)
        return () => {
            clearInterval(increment)
        }
    }, [renderNumber])
    return (
        <div className="count">
            {renderNumber}{suffix}
        </div>
    )
}

IncreasingNumberCounter.propTypes = {
    number: PropTypes.number.isRequired,
    suffix: PropTypes.string
}

export default IncreasingNumberCounter