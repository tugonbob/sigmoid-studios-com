import React, { CSSProperties } from "react";

export function FlexDiv({
  children,
  style,
  className,
  d,
}: {
  children?: any;
  style?: CSSProperties;
  className?: string;
  d?: boolean;
}) {
  return (
    <div
      style={{
        ...{ border: d ? "1px solid red" : undefined },
        ...styles.flexDiv,
        ...style,
      }}
      className={className}
    >
      {children}
    </div>
  );
}

interface StyleSheet {
  [key: string]: React.CSSProperties;
}

const styles: StyleSheet = {
  flexDiv: {
    display: "flex",
    flexDirection: "column",
  },
};
