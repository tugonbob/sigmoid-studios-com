import React from "react";

export function Spacer({
  size = 24,
  horizontal = false,
}: {
  size?: number | string;
  horizontal?: boolean;
}) {
  return (
    <div
      style={{
        height: !horizontal ? size : "auto",
        width: horizontal ? size : "auto",
      }}
    />
  );
}
