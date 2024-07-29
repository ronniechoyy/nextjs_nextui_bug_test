import { Button as MUIButton } from "@mui/material";
import { Button } from "@nextui-org/react";

export async function getServerSideProps() {
  return {
    props: {
      title: "About Page",
    },
  };
}


export default function About({ title }) {
  return (
    <div className=" absolute inset-0 grid place-content-center text-center">
      <div>
        {/* ABOUT PAGE */}
        {title}
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
