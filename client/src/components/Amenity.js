/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const icons = {
        kitchen: <i class="fas fa-utensils"></i>,
        wifi: <i class="fas fa-wifi"></i>, 
        tv: <i class="fas fa-tv"></i>, 
        aircon: <i class="far fa-snowflake"></i>, 
        heating:<i class="fas fa-fire-alt"></i> 
        }

const Amenity = ({ value }) => {
  return (
    <span css={iconSection}>
      <span>{icons[value]}</span><span>{value}</span>
    </span>
  )
}

export default Amenity

const iconSection = css`
  display: grid;
  grid-template-columns: 1.5rem 1fr;
`