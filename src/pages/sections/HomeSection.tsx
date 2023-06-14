import React from "react";
import { FlexDiv } from "../../components/commonComponents";
import mobileDevelopment from "../../assets/images/mobileDevelopment.png";

export function HomeSection() {
  return (
    <FlexDiv
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        padding: 32,
      }}
    >
      <FlexDiv style={{ width: 425, justifyContent: "center" }}>
        <h2 style={{ margin: 0 }}>
          Unlock a mobile app that makes you{" "}
          <b
            style={{
              color: "var(--accent)",
              fontFamily: "Caveat",
              fontSize: 48,
            }}
          >
            proud
          </b>
        </h2>
        <p>
          Experience our beautiful design process and create your ideal mobile
          app.
        </p>
      </FlexDiv>
      <FlexDiv>
        <img src={mobileDevelopment} alt="" style={styles.image} />
      </FlexDiv>
    </FlexDiv>
  );
}

interface StyleSheet {
  [key: string]: React.CSSProperties;
}

const styles: StyleSheet = {
  image: {
    borderRadius: "var(--borderRadius)",
    marginTop: 32,
    marginBottom: 32,
    width: "100%",
    maxWidth: 422,
    minWidth: 200,
    height: undefined,
  },
};
