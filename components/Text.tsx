import React from "react";

export type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return <p className="font-sans">{text}</p>;
}

export default Text;
