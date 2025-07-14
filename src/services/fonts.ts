// app/fonts.ts
import localFont from "next/font/local";

// Poppins
export const poppins = localFont({
  src: [
    {
      path: "../fonts/poppins/Poppins-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/poppins/Poppins-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../fonts/poppins/Poppins-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/poppins/Poppins-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../fonts/poppins/Poppins-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/poppins/Poppins-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/poppins/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/poppins/Poppins-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/poppins/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/poppins/Poppins-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/poppins/Poppins-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/poppins/Poppins-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/poppins/Poppins-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../fonts/poppins/Poppins-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/poppins/Poppins-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-poppins",
  display: "swap",
});

// Guardian Sans
export const guardian = localFont({
  src: [
    {
      path: "../fonts/guardiansans/GuardianSansThin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/guardiansans/GuardianSansThinIt.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../fonts/guardiansans/GuardianSansLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/guardiansans/GuardianSansLightIt.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/guardiansans/GuardianSansRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/guardiansans/GuardianSansRegularIt.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/guardiansans/GuardianSansMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/guardiansans/GuardianSansMediumIt.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/guardiansans/GuardianSansBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/guardiansans/GuardianSansBoldIt.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/guardiansans/GuardianSansBlack.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/guardiansans/GuardianSansBlackIt.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-guardian",
  display: "swap",
});
