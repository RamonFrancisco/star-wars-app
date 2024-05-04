import { Montserrat, Lato } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: "normal",
  variable: "--font-montserrat",
});

export const lato = Lato({ weight: "400", subsets: ["latin"] });
