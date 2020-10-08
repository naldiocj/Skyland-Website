import React from 'react';
import { Button } from '../../../styles/Button/styles';

import {
  InfoContainer,
  InfoWrapper,
  InforRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from './styles';

function Info({
  id,
  lightBg,
  imgStart,
  topLine,
  heading,
  description,
  lightText,
  darkText,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  link,
  buttonHide,
}) {
  return (
    <>
      <InfoContainer id={id} lightBg={lightBg}>
        <InfoWrapper>
          <InforRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{heading}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to={link}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    buttonHide={buttonHide ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InforRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}

export default Info;
