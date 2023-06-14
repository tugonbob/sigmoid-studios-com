import React from "react";
import { FlexDiv, MyIcon, Spacer } from "../../components/commonComponents";
import apple from "../../assets/customIcons/apple.png";
import android from "../../assets/customIcons/android.png";
import react from "../../assets/customIcons/react.png";
import website from "../../assets/customIcons/website.png";
import img from "../../assets/images/mobile-application.png";

export function ServicesSection() {
  const platforms = [
    { title: "Android App", icon: android },
    { title: "iOS App", icon: apple },
    { title: "Web App", icon: website },
    { title: "React-Native", icon: react },
  ];

  return (
    <FlexDiv
      style={{
        flexDirection: "row",
        padding: 32,
        backgroundColor: "var(--accent)",
        paddingTop: 64,
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      <FlexDiv
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 400,
        }}
      >
        <img src={img} style={{ width: "100%" }} alt="" />
      </FlexDiv>
      <FlexDiv
        style={{
          padding: 32,
          width: 400,
        }}
      >
        <h2 className="primary" style={{ margin: 0, marginBottom: 32 }}>
          Available Platforms
        </h2>
        <FlexDiv
          style={{
            justifyContent: "space-evenly",
          }}
        >
          {platforms.map(({ title, icon }, i) => (
            <FlexDiv
              style={{
                flexDirection: "row",
                borderRadius: "var(--borderRadius)",
                padding: 16,
                alignItems: "center",
              }}
            >
              <MyIcon icon={icon} size="5x" />
              <Spacer horizontal size={16} />
              <h4
                className="primary"
                style={{ marginTop: 0, fontFamily: "Vito" }}
              >
                {title}
              </h4>
            </FlexDiv>
          ))}
        </FlexDiv>
      </FlexDiv>
    </FlexDiv>
  );
}
