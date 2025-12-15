import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container, Box, Typography, Button } from "@mui/material";
import { theme } from "./theme";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clerk Next.js Starter App",
  description: "A beautiful starter template for Clerk authentication with Next.js App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ThemeProvider theme={theme}>
            <CssBaseline />
          <Box
            component="header"
            sx={{
              position: "sticky",
              top: 0,
              zIndex: 1100,
              bgcolor: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(10px)",
              borderBottom: "1px solid rgba(0,0,0,0.1)",
              py: 2,
            }}
          >
            <Container maxWidth="lg">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Clerk Starter
                </Typography>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <SignedOut>
                    <SignInButton mode="modal">
                      <Button
                        variant="text"
                        component="span"
                        sx={{ mr: 1, textTransform: "none" }}
                      >
                        Sign In
                      </Button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <Button
                        variant="contained"
                        component="span"
                        sx={{ textTransform: "none" }}
                      >
                        Sign Up
                      </Button>
                    </SignUpButton>
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </Box>
              </Box>
            </Container>
          </Box>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
