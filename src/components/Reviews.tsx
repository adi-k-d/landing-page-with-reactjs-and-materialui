import React from "react"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Avatar from "@material-ui/core/Avatar"
import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/core/styles"
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"
import Typography from "@material-ui/core/Typography"
import { Paper } from "@material-ui/core"
import Flag from "react-world-flags"

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
    background: "black",
    position: "relative",
    top: 5,
    left: -5,
    color: "white",
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

function Reviews() {
  const classes = useStyles()
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Box className={classes.bg}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Box className={classes.author}>
                  <Avatar src="https://s3-alpha-sig.figma.com/img/bfe5/8b21/510ca86917b9c3ccc0913f92357582be?Expires=1647216000&Signature=dc6ySKZgfpo3s~cPPo2pmCrKSW2zszWiaKHAzhqVa-Il--m1TsaKCjuJa3d94r1uhlZ~AiAI5QrMaruQza~MWj3vzIhzWIiDd-i~EGWTulw7hwN2zZHTNz9CvDrbUitkOcGqNDZnAKOtKHffXtF7Ih0rfmbd96Sxs94-qbIGaQ3SzsXyLCyJRp3L5XBMEKF4G2znoZDalhH8LRUR4sUDdj-4t0ZfGMKCHQLggp4FNmZDduF9IglBgeOcmcMGLYslg-GLuxB1xElfLco9wSxoO0PczNm50e56QIaLhhz2eX61FOEi-Lzt8xsxsH04p9KiAYfhW--PKM4WDqYvZVapEA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                  <Box ml={2}>
                    <Typography className={classes.title}>
                      Helen Jummy
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ paddingTop: "3%" }}>
                        <Flag code="us" height="10" />
                      </Box>
                      <Typography className={classes.subtitle}>
                        Palo Alto ,CA
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
            </CardActionArea>
          </Card>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Box className={classes.bg}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Box className={classes.author}>
                  <Avatar src="https://s3-alpha-sig.figma.com/img/b170/d098/6ffd2bedd0502693c4b159f2edb6f5f3?Expires=1647216000&Signature=gLLt~P116sRsy7fyEPvQpw0AgAwjRRe7ZhFIMGj4fmXGDwoG~keaacmvf8C7FmSxKyWI7mQVzaZKVfVfGAVIamdZHjVMhgq2ygVXdTVB2mZHBLnWvvy5WBtd5jAIi2Zxij80bejccyZ-15O9jgDZRJiF~e3bmcPakkyoytHlrgyyJlMDA7N7puKN2L8P-jgTADeIbGRsYabBt4TAG5r2Sa5LgWz5MBZtnBPGwLvz6Z1jELWjJw82Djr0jhsyhBqkVbWwbvF4ne6UBVBTk4F3WTWRpsAvEpLqFMU6jMtDQ7UFqJeMcdCRRakN9NHK-SO2c7dPQKtnjLX-37tAcp4I9A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                  <Box ml={2}>
                    <Typography className={classes.title}>
                      Isaac Oluwatemilorun
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ paddingTop: "3%" }}>
                        <Flag code="it" height="10" />
                      </Box>
                      <Typography className={classes.subtitle}>
                        Palo Alto ,CA
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Typography className={classes.content}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cupiditate beatae ad, itaque explicabo eos quam, reprehenderit
                  corrupti minus aspernatur rem libero nulla dignissimos nobis
                  facilis! Ad in accusantium ex earum.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Box className={classes.bg}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Box className={classes.author}>
                  <Avatar src="https://s3-alpha-sig.figma.com/img/bfe5/8b21/510ca86917b9c3ccc0913f92357582be?Expires=1647216000&Signature=dc6ySKZgfpo3s~cPPo2pmCrKSW2zszWiaKHAzhqVa-Il--m1TsaKCjuJa3d94r1uhlZ~AiAI5QrMaruQza~MWj3vzIhzWIiDd-i~EGWTulw7hwN2zZHTNz9CvDrbUitkOcGqNDZnAKOtKHffXtF7Ih0rfmbd96Sxs94-qbIGaQ3SzsXyLCyJRp3L5XBMEKF4G2znoZDalhH8LRUR4sUDdj-4t0ZfGMKCHQLggp4FNmZDduF9IglBgeOcmcMGLYslg-GLuxB1xElfLco9wSxoO0PczNm50e56QIaLhhz2eX61FOEi-Lzt8xsxsH04p9KiAYfhW--PKM4WDqYvZVapEA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                  <Box ml={2}>
                    <Typography className={classes.title}>
                      Helen Jummy
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ paddingTop: "3%" }}>
                        <Flag code="us" height="10" />
                      </Box>
                      <Typography className={classes.subtitle}>
                        Palo Alto ,CA
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Typography className={classes.content}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cupiditate beatae ad, itaque explicabo eos quam, reprehenderit
                  corrupti minus aspernatur rem libero nulla dignissimos nobis
                  facilis! Ad in accusantium ex earum.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Reviews
