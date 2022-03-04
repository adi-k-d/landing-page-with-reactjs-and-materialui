import { makeStyles } from "@material-ui/core/styles"
import Divider from "@mui/material/Divider"
import Typography from "@material-ui/core/Typography"
import Grid from "@mui/material/Grid"
import Container from "@material-ui/core/Container"
import { styled } from "@mui/material/styles"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import Paper from "@mui/material/Paper"
import Circles from "./components/Circles"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Body from "./components/Body"
import Body2 from "./components/Body2"
import Reviews from "./components/Reviews"
import Reviews2 from "./components/Reviews2"
import { Box } from "@material-ui/core"
import { display } from "@mui/system"
import { ArrowLeft, ArrowRight } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
  bodyContainer: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },

  more: {
    color: "#E5C558",
    display: "inline-flex",
    justifyContent: "space-between",
    width: "20%",
    marginLeft: "5%",
  },

  bodyTitle: {
    fontWeight: 800,
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(3),
    color: "white",
    display: "inline-flex",
    flexGrow: 1,
    width: "75%",
    textDecoration: "underline",
    textDecorationColor: "blue",
  },
  more1: {
    color: "#E5C558",
    display: "inline-flex",
    justifyContent: "space-between",
    width: "10%",
    marginLeft: "3%",
  },

  bodyTitle1: {
    fontWeight: 800,
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(3),
    color: "white",
    display: "inline-flex",
    flexGrow: 1,
    width: "80%",
    fontFamily: "Libre Baskerville",
  },
}))
const Item = styled(Paper)(({ theme }) => ({
  background: "#0A0B1A",
}))

function App() {
  const classes = useStyles()

  return (
    <div
      style={{
        background: "black",
        color: "white",
      }}
    >
      <Header />
      <Hero />

      <Container maxWidth="lg" className={classes.bodyContainer}>
        <Box sx={{ flexDirection: "row" }}>
          <Typography variant="h4" className={classes.bodyTitle}>
            Upcoming Shows
          </Typography>

          <Typography className={classes.more}>View All</Typography>
        </Box>

        <Box
          sx={{
            display: { xs: "none", sm: "block", md: "block", lg: "block" },
          }}
        >
          <Body />
        </Box>
        <Box
          sx={{
            display: {
              xs: "block",
              sm: "none",
              md: "none",
              lg: "none",
            },
          }}
        >
          <Body2 />
        </Box>
        <Box sx={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Typography variant="h4" className={classes.bodyTitle1}>
            Reviews
          </Typography>

          <Typography className={classes.more1}>
            1/12
            <ArrowBackIcon
              style={{
                color: "#FFFFFF",
                marginLeft: "2%",
              }}
            />
            <ArrowForwardIcon
              style={{
                color: "#FFFFFF",
                marginLeft: "2%",
              }}
            />
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "block", md: "block", lg: "block" },
          }}
        >
          <Reviews />
        </Box>
        <Box
          sx={{
            display: { xs: "block", sm: "none", md: "none", lg: "none" },
            margin: "5%",
          }}
        >
          <Reviews2 />
        </Box>
      </Container>
    </div>
  )
}

export default App
