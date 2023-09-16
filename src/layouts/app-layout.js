import React from "react";
import AppViews from "../views/app-views";
import styled from "styled-components";
import SideNav from '../views/components/SideNav'
// import Image from "./../../home.png";

export default function AppLayout() {
  return (
    <div>
    <SideNav/>
      <Section>
        <AppViews />
      </Section>
      <SideNav/>
    </div>
  );
}

const Section = styled.section`
  margin-left: 17vw;
  height: 100vh;
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    height: 100vh;
  }
`;
