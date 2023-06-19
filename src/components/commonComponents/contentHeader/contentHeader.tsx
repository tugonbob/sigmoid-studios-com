import React from "react";
import { RowDiv, MyIcon } from "../../commonComponents";
import {
  firebase,
  typescript,
  react,
  googleDrive,
  javascript,
  python,
  sql,
  youtube,
  github,
  css,
  figma,
  dialogflow,
} from "../../../assets/customIcons";
import "./styles.css";

export function ContentHeader({
  date,
  skills,
  projectComponents,
  sources,
}: {
  date: string;
  skills?: string[];
  projectComponents?: string;
  sources?: { [key: string]: string };
}) {
  let skillsObj: { [key: string]: any } = {
    css: <MyIcon icon={css} alt="CSS icon" />,
    dialogflow: <MyIcon icon={dialogflow} alt="Dialogflow icon" />,
    figma: <MyIcon icon={figma} alt="Figma icon" />,
    firebase: <MyIcon icon={firebase} alt="Firebase icon" />,
    googleDrive: <MyIcon icon={googleDrive} alt="Google Drive icon" />,
    js: <MyIcon icon={javascript} alt="JavaScript icon" />,
    javascript: <MyIcon icon={javascript} alt="JavaScript icon" />,
    python: <MyIcon icon={python} alt="Python icon" />,
    react: <MyIcon icon={react} alt="React and React-Native icon" />,
    sql: <MyIcon icon={sql} alt="SQL icon" />,
    typescript: <MyIcon icon={typescript} alt="Typescript icon" />,
  };

  let sourcesObj: { [key: string]: any } = {
    googleDrive: (
      <MyIcon className="icon" icon={googleDrive} alt="Google Drive icon" />
    ),
    github: <MyIcon className="icon" icon={github} alt="Github icon" />,
    youtube: <MyIcon className="icon" icon={youtube} alt="Youtube icon" />,
    dialogflow: (
      <MyIcon className="icon" icon={dialogflow} alt="Dialogflow icon" />
    ),
  };

  return (
    <>
      <RowDiv
        className="content-header"
        style={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <div>
          <RowDiv>
            {/* NAME DATE */}
            <p style={{ marginTop: 0, marginBottom: 0 }}>Josh Gao: {date}</p>

            {/* SKILLS */}
            {skills ? (
              <RowDiv style={{ marginBottom: 5 }}>
                {skills.map((skill) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        marginLeft: 4,
                      }}
                    >
                      {skillsObj[skill]}
                    </div>
                  );
                })}
              </RowDiv>
            ) : null}
          </RowDiv>

          {/* MAIN IDEAS */}
          {projectComponents ? (
            <div>
              <p style={styles.bold}>{projectComponents}</p>
            </div>
          ) : null}
        </div>

        {/* SOURCE LINKS */}
        {sources ? (
          <RowDiv>
            {Object.keys(sources).map((source) => (
              <a
                href={sources[source]} // get object value with its own key
                target="_blank"
                rel="nopener noreferrer"
                style={{ marginRight: 4 }}
              >
                {sourcesObj[source]}
              </a>
            ))}
          </RowDiv>
        ) : null}
      </RowDiv>
      <hr />
    </>
  );
}

type StyleSheet = {
  [key: string]: React.CSSProperties;
};

const styles: StyleSheet = {
  bold: {
    fontWeight: "bold",
    marginBottom: 0,
    marginTop: 0,
  },
  icon: {
    zIndex: 1,
  },
};
