import * as React from "react";
import HeroSectionStyles from "./styles/HeroSectionStyles";

interface HeroSectionProps {
  color?: string;
  children: React.ReactNode;
}

const HeroSection = ({ color, children }: HeroSectionProps) => {
  return (
    <HeroSectionStyles color={color}>
      <div className="container">{children}</div>
    </HeroSectionStyles>
  );
};

export default HeroSection;
