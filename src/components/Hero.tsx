import { Box } from "@material-ui/core"
import React from "react"
import hero from "../images/Img.png"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@mui/material/Typography"
import { Grid, Button } from "@mui/material"
import Circles from "./Circles"

import Image from "../images/Img1.png" // Import using relative path

const useStyles = makeStyles((theme) => ({
  title: {
    color: "white",
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(5, 11, 20, 0.28), rgba(1, 13, 32, 0.69)), url('https://s3-alpha-sig.figma.com/img/c7b5/3573/6991a1a773c3b45eed0c575ba2f6bd44?Expires=1647216000&Signature=Kq9dpEXdx0s7-mQpnWKEcOhKfO3vQKeKcnMx8bFK2bX04BVQnP-hGD7twURlGC3bR4PAeDLazbi7tTrBwv3~M0fdWOdlUF0n2Mq7wfr189kah9~96fh7~EbNFUcvgCuxblaNozIa---M9hXWvgJ0MsAF0XIOEXbbaBXPAWHEUminpP-dXyWaJbkIqfexWJYV-xTHyRLYRf99ZavoSbSEkfTkeFxc26FZxJ8OOoE8YykNy-fA3FwyD2Y4ZLqNBuN0o8yn5gxDgGGo3WmcPIaWaqdlUO1z~rJ8E6bRyyEff8U6xowgAAQ0Lmx7q0tU1oqdFDQft9oQHYZz8llSVrRoqg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "#000000",
    [theme.breakpoints.down("sm")]: {
      height: 300,
    },
    position: "relative",
    width: "auto",
  },
}))

function Hero() {
  const classes = useStyles()
  return (
    <Box className={classes.hero}>
      <Box sx={{ paddingLeft: "10%", paddingTop: "10%" }}>
        <Typography
          variant="h3"
          sx={{
            color: "white",

            fontWeight: 700,
            fontFamily: "Libre Baskerville",
          }}
        >
          Cari Cari
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "white",

            fontWeight: 400,
            fontFamily: "Nunito",
            width: "40%",
          }}
        >
          Live from their sofa to yours. Get closer to your favorite artists,
          and never miss out.
        </Typography>
      </Box>
      <Circles />
    </Box>
  )
}

export default Hero
