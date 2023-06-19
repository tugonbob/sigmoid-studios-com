import AskGpt from "../../assets/images/AskGpt.png";
import { FlexDiv, RowDiv, Spacer } from "../../components/commonComponents";

export function WorksSection() {
  return (
    <FlexDiv
      style={{
        padding: 64,
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      <FlexDiv style={{ alignItems: "center" }}>
        <h2 className="tertiary">FEATURED WORK</h2>
      </FlexDiv>
      <Spacer size={128} />
      <RowDiv style={{ justifyContent: "space-evenly", flexWrap: "wrap" }}>
        <FlexDiv>
          <img
            src={AskGpt}
            alt="A display image of the mobile app AskGPT, to demonstrate what the mobile app is."
            style={{
              maxWidth: 900,
              width: "90%",
            }}
          />
        </FlexDiv>
        <FlexDiv style={{ width: 250, padding: 64 }}>
          <Spacer />
          <h3 style={{ margin: 0 }}>AskGPT</h3>
          <p>A mobile app enabling conversations with Chat-GPT</p>
        </FlexDiv>
      </RowDiv>
    </FlexDiv>
  );
}
