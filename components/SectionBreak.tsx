import { ComponentConfig } from "@measured/puck";
import React from "react";

export type SectionBreakProps = {};

function SectionBreak({}: SectionBreakProps) {
  return <hr />;
}

export const sectionBreakConfig: ComponentConfig<SectionBreakProps> = {
  render: SectionBreak,
};
