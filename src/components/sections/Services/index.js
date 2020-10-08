import React from 'react';
import icon1 from '../../../assets/images/svg-1.svg';
import icon2 from '../../../assets/images/svg-1.svg';
import icon3 from '../../../assets/images/svg-1.svg';

import {
  ServicesContainer,
  SeviceH1,
  ServiceWrapper,
  ServiceCard,
  ServiceIcon,
  ServiceH2,
  ServiceP,
} from './styles';

function Services() {
  return (
    <ServicesContainer id="services">
      <SeviceH1>Our Services</SeviceH1>
      <ServiceWrapper>
        <ServiceCard>
          <ServiceIcon src={icon1} />
          <ServiceH2>Reduce expenses</ServiceH2>
          <ServiceP>
            We help reduce your fess an increase your overall revenue.
          </ServiceP>
        </ServiceCard>
        <ServiceCard>
          <ServiceIcon src={icon2} />
          <ServiceH2>Virtual Offices</ServiceH2>
          <ServiceP>
            You can access our plataform online anywhere in the world.
          </ServiceP>
        </ServiceCard>
        <ServiceCard>
          <ServiceIcon src={icon3} />
          <ServiceH2>Premium Benefits</ServiceH2>
          <ServiceP>
            Unlock our special membership card that returns 5% cash back.
          </ServiceP>
        </ServiceCard>
      </ServiceWrapper>
    </ServicesContainer>
  );
}

export default Services;
