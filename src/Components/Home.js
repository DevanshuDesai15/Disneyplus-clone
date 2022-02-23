import React from 'react';
import styled from 'styled-components';
import ImgSlider from '../SubComponents/ImgSlider';
import Trending from '../SubComponents/Trending';
import NewDisney from '../SubComponents/NewDisney';
import Originals from '../SubComponents/Originals';
import Recommends from '../SubComponents/Recommends';
import ChannelCards from '../Components/Cards/ChannelCards';


const Container =  styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.vw + 5px);

  &:after{
      background: url('images/home-background.png') center center/cover no-repeat fixed;
      content: "";
      position: absolute;
      inset: 0px;
      opacity: 1;
      z-index: -1;
  }
`

function Home() {
  return (
    <Container>
        <ImgSlider/>
        <ChannelCards/>
        <Recommends/>
        <NewDisney/>
        <Originals/>
        <Trending/>
    </Container>
  )
}

export default Home