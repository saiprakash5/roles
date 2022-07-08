import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Grid,
  useMediaQuery,
  useTheme,
  Tabs,
  Tab,
} from "@mui/material";
import logo from "./logo.png";
import { Link } from "react-router-dom";
export const Header = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <AppBar>
        <Toolbar>
          <a href="/">
            <img src={logo} height="80" width="100" />
          </a>
          {isMatch ? (
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Button variant="contained" component={Link} to="/">
                Signin
              </Button>
            </Grid>
          ) : (
            <Tabs
              sx={{ marginLeft: "auto" }}
              textColor="inherit"
              indicatorColor="secondary"
            >
              <Button variant="contained" component={Link} to="/">
              Signin
              </Button>
            </Tabs>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
