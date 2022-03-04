import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"
import EmailIcon from "@material-ui/icons/Email"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import { Box, Typography } from "@mui/material"
import { FavoriteBorderOutlined } from "@material-ui/icons"
import EventIcon from "@mui/icons-material/Event"

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: "transparent",
    border: `1px solid #FFFFFF`,

    color: "#FFFFFF",
    flexDirection: "column",
    width: "auto",
    height: "auto",
    padding: "5%",
    marginTop: "3%",
    marginLeft: "3%",
    marginRight: "3%",
    maxWidth: "100%",
  },
  avatar1: {
    backgroundColor: "transparent",

    borderRight: "1px #DD4CAC solid",
    borderLeft: "1px white solid",

    borderBottom: "1px #DD4CAC solid",
    color: "#FFFFFF",
    flexDirection: "column",
    width: "auto",
    height: "auto",
    padding: "5%",
    marginTop: "3%",
    marginLeft: "3%",
    marginRight: "3%",
    maxWidth: "100%",
  },
}))

export default function Circles() {
  const classes = useStyles()
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        borderRadius: 1,
        background: "linear-gradient(to bottom, transparent 0%, black 100%)",
      }}
    >
      <Avatar className={classes.avatar1}>
        <FavoriteBorderOutlined style={{ color: "blue" }} />
        <Typography sx={{}} fontSize="">
          0
        </Typography>
        <Typography sx={{}} fontSize="">
          Label
        </Typography>
      </Avatar>
      <Avatar className={classes.avatar}>
        <EventIcon />
        <Typography sx={{}} fontSize="">
          0
        </Typography>
        <Typography sx={{}} fontSize="">
          Label
        </Typography>
      </Avatar>
      <Avatar className={classes.avatar}>
        <EventIcon />
        <Typography sx={{}} fontSize="">
          0
        </Typography>
        <Typography sx={{}} fontSize="">
          Label
        </Typography>
      </Avatar>
      <Avatar className={classes.avatar}>
        <EventIcon />
        <Typography sx={{}} fontSize="">
          0
        </Typography>
        <Typography sx={{}} fontSize="">
          Label
        </Typography>
      </Avatar>
    </Box>
  )
}
