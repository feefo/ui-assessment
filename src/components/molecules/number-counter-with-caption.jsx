import React from 'react'
import PropTypes from 'prop-types'

import IncreasingNumberCounter from '../atoms/increasing-number-counter'

export const NumberCounterWithCaption = ({ number, suffix, captionText }) => {
  return (
        <div>
            <IncreasingNumberCounter number={number} suffix={suffix} />
            <div className="caption">{captionText}</div>
        </div>
  )
}

NumberCounterWithCaption.propTypes = {
  number: PropTypes.number.isRequired,
  suffix: PropTypes.string,
  captionText: PropTypes.string
}

export default NumberCounterWithCaption
