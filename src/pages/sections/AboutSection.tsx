import { FlexDiv, Spacer } from "../../components/commonComponents";
import inkBlot from "../../assets/images/inkSwipe.png";

export function AboutSection() {
  const sellingPoints = [
    {
      point: "Quick",
      description: "We move quickly, so your business can too",
    },
    {
      point: "Quality",
      description: "Enjoy our beautiful designs and reliable app",
    },
    {
      point: "Enjoyable",
      description: "Be prioritized with prompt and easy communication",
    },
  ];

  return (
    <FlexDiv
      style={{
        backgroundColor: "white",
        padding: 32,
        paddingTop: 64,
        paddingBottom: 64,
      }}
    >
      <FlexDiv style={{ alignItems: "center" }}>
        <h2 className="tertiary">ABOUT US</h2>
        <Spacer size={64} />
        <h2 style={{ margin: 0 }}>
          We go{" "}
          <b className="accent" style={{ fontFamily: "Caveat", fontSize: 48 }}>
            above
          </b>{" "}
          and{" "}
          <b className="accent" style={{ fontFamily: "Caveat", fontSize: 48 }}>
            beyond
          </b>{" "}
          for you
        </h2>
      </FlexDiv>
      <FlexDiv
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {sellingPoints.map(({ point, description }, i) => (
          <FlexDiv
            style={{
              alignItems: "center",
              flex: 1,
              maxWidth: 300,
              minWidth: 200,
              margin: 32,
            }}
          >
            <h2 style={{ color: "var(--accent)" }}>▽</h2>
            <h3 style={{ fontFamily: "Vito", fontSize: 36, margin: 0 }}>
              {point}
            </h3>
            <p className="tertiary" style={{ textAlign: "center" }}>
              {description}
            </p>
          </FlexDiv>
        ))}
      </FlexDiv>
    </FlexDiv>
  );
}
