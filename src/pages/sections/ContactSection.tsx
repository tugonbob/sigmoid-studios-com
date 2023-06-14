import { useState, useEffect } from "react";
import { FlexDiv, RowDiv, Spacer } from "../../components/commonComponents";

export function ContactSection() {
  return (
    <FlexDiv
      style={{ backgroundColor: "white", padding: 64, alignItems: "center" }}
    >
      <FlexDiv style={{ alignItems: "center", width: "100%" }}>
        <h2 className="tertiary">CONTACT US</h2>
        <Spacer size={64} />
        <h2 style={{ margin: 0 }}>
          Let's build something beautiful{" "}
          <b
            style={{
              color: "var(--accent)",
              fontFamily: "Caveat",
              fontSize: 48,
            }}
          >
            together
          </b>
        </h2>
      </FlexDiv>
      <Spacer size={32} />
      <FlexDiv
        style={{
          flexDirection: "row",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          padding: 64,
          borderRadius: "var(--borderRadius)",
          flexWrap: "wrap",
        }}
      >
        <FlexDiv
          style={{
            maxWidth: 450,
            marginBottom: 32,
            marginRight: "5vw",
          }}
        >
          <h2 style={{ margin: 0 }}>Email Us</h2>
          <p>
            Please provide your <b>name</b>, <b>email</b>, and <b>budget</b>.
            Then, provide a <b>project description</b> and your desired{" "}
            <b>project completion date</b>.
          </p>
          <h3>What's Next?</h3>
          <p className="tertiary">
            Next we’ll set up a video call where you can tell us about your
            project, get to know us, ask questions, get a price quote, and get a
            completion date.
          </p>
        </FlexDiv>
        <FlexDiv style={{ maxWidth: 300 }}>
          <h4>Contact Info</h4>
          <p style={{ color: "purple" }}>sigmoid.studios.llc@gmail.com</p>
          <Spacer />
          <h4>Office Hours</h4>
          <p>Monday - Friday</p>
          <p style={{ marginTop: 8 }}>9am - 4:30am (CST)</p>
        </FlexDiv>
      </FlexDiv>
      <Spacer size={128} />
    </FlexDiv>
  );
}
