import React from "react"
import AppBar from "@mui/material/AppBar"
import Typography from "@mui/material/Typography"
import logo from "../images/image52.png"
import { IconButton, Toolbar } from "@mui/material"
import Button from "@mui/material/Button"
import SearchIcon from "@mui/icons-material/Search"
import LocalMallIcon from "@mui/icons-material/LocalMall"
import Box from "@mui/material/Box"
import SearchSharpIcon from "@mui/icons-material/SearchSharp"
import MenuIcon from "@mui/icons-material/Menu"
import Circles from "./Circles"

function Header() {
  return (
    <>
      <Box>
        <AppBar
          position="fixed"
          style={{ background: "transparent", boxShadow: "none" }}
        >
          <Toolbar>
            <Typography sx={{ flexGrow: 1, pl: "10%" }} fontSize="large">
              <img src={logo} alt="homeJam" />
            </Typography>

            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "block", lg: "block" },
              }}
            >
              <Button
                size="small"
                sx={{
                  "&.MuiButton-text": { color: "#FFFFFF" },
                }}
                startIcon={<SearchIcon />}
              >
                Search
              </Button>
              <Button
                size="small"
                sx={{
                  "&.MuiButton-text": { color: "#FFFFFF" },
                }}
              >
                Help
              </Button>
              <Button
                size="small"
                sx={{
                  "&.MuiButton-text": { color: "#FFFFFF" },
                }}
              >
                Account
              </Button>
            </Box>
            <Button
              size="small"
              endIcon={<LocalMallIcon />}
              sx={{
                "&.MuiButton-text": { color: "#FFFFFF" },
              }}
            />
            <Button
              size="small"
              endIcon={<SearchIcon />}
              sx={{
                "&.MuiButton-text": { color: "#FFFFFF" },
                display: { xs: "block", sm: "block", md: "none" },
              }}
            />
            <Button
              size="small"
              endIcon={<MenuIcon />}
              sx={{
                "&.MuiButton-text": { color: "#FFFFFF" },
                display: { xs: "block", sm: "block", md: "none" },
              }}
            />

            <IconButton />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Header
