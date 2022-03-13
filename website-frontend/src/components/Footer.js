// TODO: Complete this @linhvth
import React from "react";
import {Image, Row, Column, Container, CopyRight, 
        FooterArea, FooterLink, Name, Heading} from "./FooterStyles.js";

const Footer = () => {
  return (
    <div>
      <FooterArea>
        <Image src=""></Image>
        <Container>
          <Row>
            <Column>
              <Heading>About us</Heading>
              <FooterLink>Story</FooterLink>
              <FooterLink>Human</FooterLink>
              <FooterLink>Resource</FooterLink>
            </Column>
            <Column>
              <Heading>Activities</Heading>
              <FooterLink>Project</FooterLink>
              <FooterLink>Event</FooterLink>
              <FooterLink>Competition</FooterLink>
            </Column>
            <Column>
              <Heading>Blog</Heading>
              <FooterLink>STEM Journal</FooterLink>
              <FooterLink>STEM Sharing</FooterLink>
            </Column>
            <Column>
              <Heading>Podcast</Heading>
              <FooterLink>The Keen Podcast</FooterLink>
              <FooterLink>Podcast 1</FooterLink>
              <FooterLink>Podcast 2</FooterLink>
            </Column>
            <Column>
              <Heading>Contact us</Heading>
              <FooterLink href="https://www.facebook.com/fulbrightstemclub" target="_blank">Facebook</FooterLink>
              <FooterLink>[Email]</FooterLink>
              <FooterLink>[Phone number]</FooterLink>
            </Column>
          </Row>
        </Container>
        <div>
          <Name className="test-xs-center">
            Fulbright STEM Club
          </Name>
          <CopyRight className="text-xs-center">
            &copy;{new Date().getFullYear()} Fulbright STEM Club. All Rights Reserved.
          </CopyRight>
        </div>
      </FooterArea>
    </div>
  )
}

export default Footer