import Image from "next/image";
import { Inter } from "next/font/google";
import { Button as MUIButton } from "@mui/material";
import { Button, NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <NextUIProvider>
    <div className=" absolute inset-0 grid place-content-center text-center">
      <div>
        MAIN PAGE
      </div>
      <Button onClick={()=>{
        window.location.href = "/About";
      }}>
        Click me to about
      </Button>
      <MUIButton onClick={()=>{
        window.location.href = "/About";
      }
      }>
        Click me to about
      </MUIButton>
      
    </div>
    </NextUIProvider>

  );
}
