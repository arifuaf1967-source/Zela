import type {Metadata} from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
export const metadata:Metadata={title:{default:"Zela Boost — Creative Growth Studio",template:"%s | Zela Boost"},description:"Zela Boost combines performance marketing, design and creative strategy to help ambitious brands grow.",robots:{index:false,follow:false}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Navigation/><main>{children}</main><Footer/></body></html>}
