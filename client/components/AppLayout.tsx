import {
  AppBar,
  Box,
  BoxProps,
  Button,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { IoMdImages } from "react-icons/io";

const pages = [
  {
    title: "Libray",
    href: "/library",
  },
  {
    title: "Upload",
    href: "/upload",
  },
];

export const AppLayout = ({ children, ...rest }: BoxProps) => {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
      {...rest}
    >
      <AppBar position="sticky">
        <Container>
          <Toolbar disableGutters>
            <IoMdImages size="1.65rem" />
            <Typography
              variant="h1"
              noWrap
              component="a"
              href="/"
              sx={{
                ml: 1,
                fontSize: "1rem",
                textTransform: "uppercase",
                fontWeight: 700,
                letterSpacing: "0.2rem",
                textDecoration: "none",
              }}
            >
              Screens
            </Typography>
            <Box sx={{ ml: "auto", display: "flex" }}>
              {pages.map((v) => (
                <Button
                  key={v.href}
                  sx={{ color: "#fff" }}
                  onClick={() => router.push(v.href)}
                >
                  {v.title}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ flex: "1 1 auto", py: 4 }}>
        <Container>{children}</Container>
      </Box>
      <Box sx={{ pb: 4 }}>
        <Container sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>Screens</Box>
          <Box>Ⓒ 2023</Box>
        </Container>
      </Box>
    </Box>
  );
};
