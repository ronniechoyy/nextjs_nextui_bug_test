import { Button as MUIButton } from "@mui/material";
import { Button } from "@nextui-org/react";


export default function About() {
  return (
    <div className=" absolute inset-0 grid place-content-center text-center">
      <div>
        ABOUT PAGE
      </div>
      <Button onClick={() => {
        window.location.href = "/";
      }}>
        Click me to home
      </Button>
      <MUIButton onClick={() => {
        window.location.href = "/";
      }
      }>
        Click me to home
      </MUIButton>

    </div>

  );
}
