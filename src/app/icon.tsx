import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: "#0D0D0D",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#F4F2EE",
          borderRadius: "50%",
          fontWeight: 700,
          fontFamily: "monospace",
        }}
      >
        TR
      </div>
    ),
    {
      ...size,
    }
  );
}
