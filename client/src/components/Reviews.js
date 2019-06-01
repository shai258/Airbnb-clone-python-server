/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'

import Review from './Review'

const Reviews = ({ reviews, reviewCount }) => {
  const rating = (() => {
    let counter = 0
    reviews.forEach(review => {
      counter += review.rating
    })
    const rating = counter / reviews.length
    return rating
  })()
  return(
    <div>
      <Heading>{reviewCount} Reviews <Stars rating={rating}></Stars></Heading>
      {reviews.map((item, index) => <Review {...item} key={index}/>)}
    </div>
  )
}

const Stars = ({ rating }) => {
  return (
    new Array(Math.round(rating)).fill(<span css={star}><i class="fas fa-star"></i></span>).map(item => {return item})
  )
}

export default Reviews

const Heading = styled.h1`
  margin-top: 3rem 0;
  font-size: 1.5rem;
  padding: 3rem 0;
  border-bottom: 1px solid grey;

`
const star = css`
  color: #008489;
`