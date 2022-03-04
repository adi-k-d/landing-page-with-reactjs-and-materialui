import React from "react"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@mui/material/Button"
import BookOnlineOutlinedIcon from "@mui/icons-material/BookOnlineOutlined"
import Box from "@material-ui/core/Box"
import Carousel from "react-material-ui-carousel"
import Typography from "@material-ui/core/Typography"
import BookOnlineOutlined from "@mui/icons-material/BookOnlineOutlined"

const useStyles = makeStyles((theme) => ({
  bg: {
    borderRadius: "5px",
    background: "#0259EB",
    position: "relative",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  name: {
    color: "white",
    fontFamily: "Libre Baskerville",
  },
  genre: {
    borderRadius: "5px",
    color: "#682F26",
    background: "#E5C558",
    display: "inline-block",
    fontFamily: "Nunito",
  },
  card: {
    maxWidth: "100%",
    background: "#111229",

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
  },
}))

function Body2(props) {
  const classes = useStyles()
  var items = [
    {
      name: "Benny Dayal",
      genre: "Folk",
      img: "https://s3-alpha-sig.figma.com/img/c153/d9e4/575af0a0c47fbc35f8befa545523b022?Expires=1647216000&Signature=EHwYWj-LWPLtX6x7zJ2DNJv6DssMn2A8ObO06W2i9xWLWUlkYcVUfh4qUowolpGZ1tZqGV~8JMBDUL~2JRkv0js9ejjx2A~R4Bzr8PTYrunyAfE4HqbC~mjZ376oq2ZetRgoxwvu~WdlwLFsi~vQch6KfJ1r~0RndV-r0PsjUw89TpDgyeoSywLefS-oTBG1odeNlMNu-R7cyvKe650TPAeE8yta~TPRhxq0FyfIObFBkf-MgO4ymhpzxLtBDntcM31iDExm7ySgu7IykyapD~VS3LajoPHF43YFhxHAVwknEFJOWa~RljQFQvTS1UfSKVLoIDY0tRlAFDtYfNtVnQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      name: "Vijay Yesudas",
      genre: "Bollywood",
      img: "https://s3-alpha-sig.figma.com/img/00aa/184e/14e65dbe5f4c4ac8365460fb81c2d274?Expires=1647216000&Signature=IcwrAZTVDXZQH5QSKbbMJzA8JPhvBuJ07jOZYMCjXvEnyAjBM7m9~Y6jd8qMTdkZc6tOqFN~UG6t5lQl1Kx4wEbUQCX2m-zdbuoGdUsfxHZhEV9zDq5ZPrBIi2ufJ7k4nsusW-hj3yowwgpPsY~WlccsKTaN81MoNkHrYpicbF62LVDJpqGvgG812way7lg5OLF91r2ukAMVC3FGJYmWa4n1Vpcqb2fIRfWUWAbtHc9erPw7wZrwOekPKWH6kopjC747PF--G9nVOePtGPnsXBqcRpC0hHxuQSBoaWda-utWLEpuU5YiT1K88uLct-UNvYiuwNIVONrPfnhjE9xVUg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      name: "Andrea Jeremiah",
      genre: "Folk",
      img: "https://s3-alpha-sig.figma.com/img/dcc6/2cf7/c3f15ae722813c8d9985de4d6bd6509f?Expires=1647216000&Signature=Y9Hry0~9CfUq2taf0kMElXJUxSJ-Ju6zJqU2pDFcXCxjW05w--DM1zPU29akOebxid4Qa-IgeiImDbO6rs~sIMTDL063NLxbxEoFdr1tCd6iEEJ~I1qSiMCDz-3CmLPDVjhVVLS6yUcgqG4UNT0e92Yrj96m31Jf15CaHxex~pwKS7nyF7X85wKwR1uB8NKpuYhF2m2Y6Y1baQFmPIxM3WvAI4ezmdn20RunvgDaMnO7dCft9wm14kgfu4ox0EqphY3KfP9Sh-NWrV-UFKHo8xmmmsdWL-i9aRQCIg~K8pLAMJ3ervnXphZJlaKQOMNexIPJ~rypKHfknz6DBGZquw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      name: "Shilpa Rao",
      genre: "Folk",
      img: "https://s3-alpha-sig.figma.com/img/64a1/8b66/bd57fcd0d6a0d45a30dc2426856835dd?Expires=1647216000&Signature=e57BeVwBcDfY8ogGwGHMee0N4Sw-5DtF-1D7esIXlk~zKRaVvDR1MwUTAtruat0gkA80MAreWjoL~Ic7wQ29m1H7iAB2ZYLwMoODZo8Gs6y~nfWVbxwbu4ymtqHMFlOV~~wqKnmZxqIg6WtCGxDC0ZWLRaX~swFX1Unpijc~Bp0QGVAyvPUdPGX36m~VXmAbWfAHO8RkHvBFFN8CAO6V3M8QceMafHpgN-njluvWxcXxA-fgJymh8o7hP98~fhlWBBMMQnjovaNmE5mizBzKn2gEKQ8ZWPrc7ZcLVX2dGbTPC~waQ99N7ylJZO5PrDOrXMPHZjliM-x-uOdKkobdLA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
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
    <Grid item xs={12} sm={6} md={3}>
      <Box className={classes.bg}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={props.item.img}
            title="Benny dayal"
          />
          <CardContent>
            <Typography className={classes.genre} component="h2">
              {props.item.genre}
            </Typography>
            <Typography variant="h5" className={classes.name} component="h2">
              {props.item.name}
            </Typography>
            <Typography variant="body2" component="p"></Typography>
          </CardContent>
          <CardActionArea>
            <Button
              size="small"
              sx={{
                "&.MuiButton-text": { color: "#0259EB" },
                flexGrow: 1,
                pl: 2,
              }}
              endIcon={<ArrowForwardIcon />}
            >
              More Info
            </Button>

            <BookOnlineOutlined
              style={{
                color: "#B727F3",
                paddingTop: 2,
              }}
            />
          </CardActionArea>
          <CardActions className={classes.cardActions}></CardActions>
        </Card>
      </Box>
    </Grid>
  )
}

export default Body2
