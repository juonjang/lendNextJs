import { Kanit, Sarabun, K2D } from "next/font/google";

const k2d = K2D({
  subsets: ["thai"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
  ],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-k2D",
});

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
  ],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-kanit",
});

const sarabun = Sarabun({
  subsets: ["thai"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
  ],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-sarabun",
});

export { k2d, kanit, sarabun };
