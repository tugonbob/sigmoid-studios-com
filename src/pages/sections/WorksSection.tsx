import React from "react";
import { FlexDiv, RowDiv, Spacer } from "../../components/commonComponents";
import AskGpt from "../../assets/images/AskGpt.png";

export function WorksSection() {
  return (
    <RowDiv
      style={{ padding: 64, justifyContent: "space-evenly", flexWrap: "wrap" }}
    >
      <FlexDiv>
        <img
          src={AskGpt}
          alt=""
          style={{ maxWidth: 550, maxHeight: 450, width: "100%" }}
        />
      </FlexDiv>
      <FlexDiv>
        <p>Featured Work</p>
        <Spacer />
        <h3 style={{ margin: 0 }}>AskGPT</h3>
      </FlexDiv>
    </RowDiv>
  );
}
