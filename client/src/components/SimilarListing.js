// import React, { Component } from 'react'

// import styled from '@emotion/styled'

// import Card from './Card'

// class SimilarListings extends Component {

//   state = {
//     SimilarListingsObj: []
//   }

  
//   //i need to put here asinc\await
//   render(){
//     this.props.similarHomes.forEach(id => {
//       fetch(`/homes/${id}`)
//         .then(data => data.json())
//           .then(home => this.setState({SimilarListingsObj: [...this.state.SimilarListingsObjSimilarListingsObj, home]}))
//     })

//     return(
//       <CardWrapper>
//         {
//           this.state.SimilarListingsObj.map((home, index) => {
//             return <Card {...home} key={index} />
//         })}
//       </CardWrapper>
//     )
//   }
// }

// export default SimilarListings

// const CardWrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   grid-gap: 1rem;
//   margin-top: 1rem;
//   width: 71.5%;
// `