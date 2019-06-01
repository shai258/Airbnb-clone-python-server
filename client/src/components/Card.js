/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import {
  Link
} from 'react-router-dom'

import HomeContext from '../Home.context'

const Card = (props) => {
  const { imgUrl, type, title, price, reviews, _id } = props
  console.log(title)
  const rating = (() => {
    let counter = 0
    reviews.forEach(review => {
      counter += review.rating
    })
    const rating = counter / reviews.length
    return rating
  })()
  const reviewCount = reviews.length
  const city = props.address.city
  const homePath = `/home/${_id.$oid}`
  return (
    <HomeContext.Consumer>
      {({getHome}) => (
        <Link style={{ textDecoration: 'none' }} to={homePath}>
        <div onClick={() => getHome({id: _id.$oid})} css={cardBox}>
          <img css={image} src={ imgUrl } alt=""/>
          <div css={content}>
            <p css={typeStyle}>{type} · {city.toUpperCase()}</p>
            <h3 css={size}>{title}</h3>
            <p css={size}>₪{price} per night</p>
            <p css={review}> {new Array(Math.round(rating)).fill(<span css={star}><i class="fas fa-star"></i></span>).map(item => {return item})} · {reviewCount}</p>
          </div>
        </div>
        </Link>
      )}
    </HomeContext.Consumer>
  )
}

export default Card

const cardBox = css `
// font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif ;
`
const image = css `
  width: 100%;
`
const content = css `
  margin: 0 5px;
  color: rgb(72, 72, 72);
  line-height: 1.3em;
`
const typeStyle = css `
  color: rgb(88, 90, 58);
  font-size: 0.8em;
  font-weight: 700;
  `
const size = css `
  font-size: 0.9em;
`
const review = css `
  font-size: 0.7em;
`
const star = css `
  color: #008489;
  font-size: 0.8em;
`