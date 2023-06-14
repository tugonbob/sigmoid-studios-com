import {
  FlexDiv,
  MyIcon,
  RowDiv,
  Spacer,
} from "../../components/commonComponents";
import {
  MdEditNote,
  MdOutlinePalette,
  MdRebaseEdit,
  MdOutlineInstallMobile,
  MdSupportAgent,
} from "react-icons/md";
import { FaAward } from "react-icons/fa";
import { BsFileCode } from "react-icons/bs";

export function ProcessSection() {
  const steps = [
    {
      title: "1. Requirement Gathering",
      description:
        "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.",
      icon: <MdEditNote size={48} color="#ffb3ba" />,
    },
    {
      title: "2. UI/UX Design",
      description:
        "We create catchy and charming designs with the latest tools of designing to make it a best user-friendly experience.",
      icon: <MdOutlinePalette size={48} color="#bae1ff" />,
    },
    {
      title: "3. Prototype",
      description:
        "After designing, you will get your prototype, which will be sent ahead for the development process for the product.",
      icon: <MdRebaseEdit size={48} color="#CC99C9" />,
    },
    {
      title: "4. Development",
      description:
        "Development of mobile application/web/blockchain started using latest tools and technologies with transparency.",
      icon: <BsFileCode size={48} color="#9EC1CF" />,
    },
    {
      title: "5. Quality Assurance",
      description:
        "Hyperlink values quality and provides 100% bug free application with no compromisation in it.",
      icon: <FaAward size={48} color="var(--accent)" />,
    },
    {
      title: "6. Deployment",
      description:
        "After trial and following all processes, your app is ready to launch on the App store or Play Store.",
      icon: <MdOutlineInstallMobile size={48} color="#FEB144" />,
    },
    {
      title: "7. Support & Maintenance",
      description:
        "Our company offers you all support and the team is always ready to answer every query after deployment.",
      icon: <MdSupportAgent size={48} color="#9EE09E" />,
    },
  ];

  return (
    <FlexDiv style={{ alignItems: "center", padding: 64 }}>
      <h2>
        Here's how our process{" "}
        <b
          style={{
            color: "var(--accent)",
            fontFamily: "Caveat",
            fontSize: 48,
          }}
        >
          works
        </b>
      </h2>
      <Spacer size={48} />
      <FlexDiv style={{ maxWidth: 1300 }}>
        <RowDiv style={{ flexWrap: "wrap", justifyContent: "center" }}>
          {steps.map(({ title, description, icon }, i) => (
            <FlexDiv style={styles.stepsRow}>
              <Spacer />
              {icon}
              <h4 style={{ textAlign: "center" }}>{title}</h4>
              <p style={{ textAlign: "center", color: "var(--tertiary)" }}>
                {description}
              </p>
            </FlexDiv>
          ))}
        </RowDiv>
      </FlexDiv>
    </FlexDiv>
  );
}

interface StyleSheet {
  [key: string]: React.CSSProperties;
}

const styles: StyleSheet = {
  stepsRow: {
    margin: 8,
    padding: 16,
    height: 275,
    width: 275,
    borderRadius: "var(--borderRadius)",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    alignItems: "center",
  },
};
