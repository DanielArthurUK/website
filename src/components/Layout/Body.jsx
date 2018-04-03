import React from 'react'
import styled from 'styled-components'

import PostListing from '../PostListing/PostListing'

const Container = styled.div`
  padding: ${props => props.theme.sitePadding};
`

class Body extends React.Component {
  render() {
    return(
      <Container>
        <PostListing postEdges = />
      </Container>
    )
  }
}

export default Body