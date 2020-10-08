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
  BtnWrap,
  ImgWrap,
  Img,
  InputWrap,
  Input,
} from './styles';

function Newsletter({
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
              </TextWrapper>
              <InputWrap>
                <Input placeholder="Digite o seu E-mail" />
              </InputWrap>
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
                  Inscreva-se
                </Button>
              </BtnWrap>
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

export default Newsletter;
