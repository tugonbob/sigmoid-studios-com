import android from "../../assets/customIcons/android.png";
import apple from "../../assets/customIcons/apple.png";
import react from "../../assets/customIcons/react.png";
import website from "../../assets/customIcons/website.png";
import mobileDevelopment from "../../assets/images/mobile-application.png";
import { FlexDiv, MyIcon, Spacer } from "../../components/commonComponents";

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
        <img
          src={mobileDevelopment}
          style={{ width: "100%" }}
          alt="A decorative mobile development image"
        />
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
              <MyIcon icon={icon} size="5x" alt={title + " icon"} />
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
