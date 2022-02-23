import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
top: 30px;
padding: 0 calc(3.vw + 5px);
`
const Header = styled.div`
  height: 80vh;
  color: white;
  video{
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    padding: 0px;
    z-index: 0;
  }
`

function NatGeo() {
  return (
    <Container>
      <Header>
        <video autoPlay={true} playsInline={true}>
          <source src='/videos/NatGeoBack.mp4' type='video/mp4' />
        </video>
      </Header>
    </Container>
  )
}

export default NatGeo