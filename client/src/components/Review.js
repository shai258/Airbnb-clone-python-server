/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

const Review = ({ content, title, date, userImgUrl }) => {
  date = new Date(date.$date).toISOString().slice(0, 10)
  return(
    <Container >
      <div>
        <div css={reviewHeader}>
          <img src={userImgUrl} css={image} alt="userimgUrl"></img>
          <div >
            <Title>{title}</Title>
            <PostDate>{date}</PostDate>
          </div>
        </div>
        <Comment>
          {content}
        </Comment>
      </div>
    </Container>
  )
}

export default Review

const image = css`
  border-radius: 50%;
  width: 45px;
  height: 45px;
  margin-right: 1rem;
`
const reviewHeader = css`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  
`
const Container = styled.div`
  padding: 0.5rem 0 1rem 0;
  border-bottom: 1px solid grey;
`
const Title = styled.div`
  font-weight: bold;
`
const PostDate = styled.div`
  font-size: 0.9rem;
`
const Comment = styled.div`
  line-height: 1.2;
  color: #4A4A4A;
`
// const commentLayout = css`
// `