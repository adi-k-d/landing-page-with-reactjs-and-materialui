import React from "react"
import Carousel from "react-material-ui-carousel"
import {
  Box,
  Typography,
  Card,
  Avatar,
  CardActionArea,
  CardContent,
} from "@mui/material"
import { makeStyles } from "@material-ui/core/styles"
import Flag from "react-world-flags"
import Grid from "@material-ui/core/Grid"
import { Paper } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  // shadow: {
  //    background: "linear-gradient(#2A6F7B, #5293E8)",
  //    position: "absolute",
  //     z-index: "-1"
  // },
  title: {
    color: "white",
    fontSize: "24",
    fontWeight: "normal",
    fontFamily: "Quattrocento",
  },
  subtitle: {
    color: "white",
    fontSize: "24",
    fontWeight: "normal",
    fontFamily: "Nunito",
  },
  content: {
    color: "white",
    fontSize: "24",
    fontWeight: "normal",
    fontFamily: "Nunito",
  },
  bg: {
    borderRadius: "5px",
    background: "linear-gradient(to right bottom, #276C73, #5293E8)",
    position: "relative",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  card: {
    position: "relative",
    top: 5,
    left: -5,
    borderRadius: "5px",
    borderBlockColor: "#E5AF56",
    border: "1px solid",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
}))

function Reviews2(props) {
  const classes = useStyles()
  var items = [
    {
      name: "Helen Jummy",
      location: "Palo Alto ,CA",
      country: "us",
      img: "https://s3-alpha-sig.figma.com/img/bfe5/8b21/510ca86917b9c3ccc0913f92357582be?Expires=1647216000&Signature=dc6ySKZgfpo3s~cPPo2pmCrKSW2zszWiaKHAzhqVa-Il--m1TsaKCjuJa3d94r1uhlZ~AiAI5QrMaruQza~MWj3vzIhzWIiDd-i~EGWTulw7hwN2zZHTNz9CvDrbUitkOcGqNDZnAKOtKHffXtF7Ih0rfmbd96Sxs94-qbIGaQ3SzsXyLCyJRp3L5XBMEKF4G2znoZDalhH8LRUR4sUDdj-4t0ZfGMKCHQLggp4FNmZDduF9IglBgeOcmcMGLYslg-GLuxB1xElfLco9wSxoO0PczNm50e56QIaLhhz2eX61FOEi-Lzt8xsxsH04p9KiAYfhW--PKM4WDqYvZVapEA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      name: "Isaac Oluwatemilorun",
      location: "Palo Alto ,CA",
      country: "it",
      img: "https://s3-alpha-sig.figma.com/img/b170/d098/6ffd2bedd0502693c4b159f2edb6f5f3?Expires=1647216000&Signature=gLLt~P116sRsy7fyEPvQpw0AgAwjRRe7ZhFIMGj4fmXGDwoG~keaacmvf8C7FmSxKyWI7mQVzaZKVfVfGAVIamdZHjVMhgq2ygVXdTVB2mZHBLnWvvy5WBtd5jAIi2Zxij80bejccyZ-15O9jgDZRJiF~e3bmcPakkyoytHlrgyyJlMDA7N7puKN2L8P-jgTADeIbGRsYabBt4TAG5r2Sa5LgWz5MBZtnBPGwLvz6Z1jELWjJw82Djr0jhsyhBqkVbWwbvF4ne6UBVBTk4F3WTWRpsAvEpLqFMU6jMtDQ7UFqJeMcdCRRakN9NHK-SO2c7dPQKtnjLX-37tAcp4I9A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      name: "Helen Jummy",
      location: "Palo Alto ,CA",
      country: "ger",
      img: "https://s3-alpha-sig.figma.com/img/bfe5/8b21/510ca86917b9c3ccc0913f92357582be?Expires=1647216000&Signature=dc6ySKZgfpo3s~cPPo2pmCrKSW2zszWiaKHAzhqVa-Il--m1TsaKCjuJa3d94r1uhlZ~AiAI5QrMaruQza~MWj3vzIhzWIiDd-i~EGWTulw7hwN2zZHTNz9CvDrbUitkOcGqNDZnAKOtKHffXtF7Ih0rfmbd96Sxs94-qbIGaQ3SzsXyLCyJRp3L5XBMEKF4G2znoZDalhH8LRUR4sUDdj-4t0ZfGMKCHQLggp4FNmZDduF9IglBgeOcmcMGLYslg-GLuxB1xElfLco9wSxoO0PczNm50e56QIaLhhz2eX61FOEi-Lzt8xsxsH04p9KiAYfhW--PKM4WDqYvZVapEA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
  ]

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  )
}

function Item(props) {
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box className={classes.bg}>
        <Card className={classes.card}>
          <CardActionArea>
            <Box
              sx={{
                background: "black",
                position: "relative",

                borderRadius: "5px",
                borderBlockColor: "#E5AF56",
                border: "1px solid",
                borderLeft: "1px solid",
              }}
            >
              <CardContent>
                <Box className={classes.author}>
                  <Avatar src={props.item.img} />
                  <Box ml={2}>
                    <Typography className={classes.title}>
                      {props.item.name}
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ paddingTop: "3%" }}>
                        <Flag code={props.item.country} height="10" />
                      </Box>
                      <Typography className={classes.subtitle}>
                        {props.item.location}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Typography className={classes.content}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque neque commodi suscipit nemo rem. Impedit vitae ipsam
                  fugiat cumque animi deleniti, dolores esse enim amet non
                  dolorem tempore dignissimos aliquam!
                </Typography>
              </CardContent>
            </Box>
          </CardActionArea>
        </Card>
      </Box>
    </Grid>
  )
}

export default Reviews2
