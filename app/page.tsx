"use client";

import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Stack,
  Paper,
} from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import Security from "@mui/icons-material/Security";
import Speed from "@mui/icons-material/Speed";
import Code from "@mui/icons-material/Code";
import CheckCircle from "@mui/icons-material/CheckCircle";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Hero Section */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            textAlign: "center",
            color: "white",
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              mb: 3,
              fontWeight: 800,
              background: "linear-gradient(45deg, #ffffff 30%, #e0e7ff 90%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Clerk Next.js Starter
          </Typography>
          
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              maxWidth: "700px",
              mx: "auto",
              opacity: 0.95,
              fontWeight: 400,
            }}
          >
            A beautiful, production-ready starter template for building
            authenticated applications with Clerk and Next.js App Router
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            sx={{ mb: 8 }}
          >
            <SignedOut>
              <SignInButton mode="modal">
                <Button
                  variant="contained"
                  size="large"
                  component="span"
                  sx={{
                    bgcolor: "white",
                    color: "#6366f1",
                    "&:hover": {
                      bgcolor: "#f3f4f6",
                    },
                    px: 4,
                    py: 1.5,
                    textTransform: "none",
                  }}
                >
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button
                  variant="outlined"
                  size="large"
                  component="span"
                  sx={{
                    borderColor: "white",
                    color: "white",
                    "&:hover": {
                      borderColor: "white",
                      bgcolor: "rgba(255,255,255,0.1)",
                    },
                    px: 4,
                    py: 1.5,
                    textTransform: "none",
                  }}
                >
                  Sign Up
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>
                Welcome! You're signed in. Explore the app to see Clerk in action.
              </Typography>
            </SignedIn>
          </Stack>
        </Box>

        {/* What is Clerk Section */}
        <Box sx={{ mb: 8 }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              bgcolor: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 3,
                textAlign: "center",
                color: "#1f2937",
                fontWeight: 700,
              }}
            >
              What is Clerk?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.125rem",
                lineHeight: 1.8,
                color: "#4b5563",
                maxWidth: "800px",
                mx: "auto",
                textAlign: "center",
                mb: 4,
              }}
            >
              Clerk is a complete authentication and user management solution
              that provides everything you need to add authentication to your
              application. With Clerk, you get secure sign-in, sign-up, user
              profiles, and session management out of the box, without the
              complexity of building it yourself.
            </Typography>

            <Grid2 container spacing={3} sx={{ mt: 2 }}>
              <Grid2 xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    height: "100%",
                    textAlign: "center",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 4,
                    },
                  }}
                >
                  <CardContent>
                    <Security
                      sx={{
                        fontSize: 48,
                        color: "#6366f1",
                        mb: 2,
                      }}
                    />
                    <Typography variant="h6" gutterBottom fontWeight={600}>
                      Secure
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Enterprise-grade security with industry best practices
                    </Typography>
                  </CardContent>
                </Card>
              </Grid2>

              <Grid2 xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    height: "100%",
                    textAlign: "center",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 4,
                    },
                  }}
                >
                  <CardContent>
                    <Speed
                      sx={{
                        fontSize: 48,
                        color: "#8b5cf6",
                        mb: 2,
                      }}
                    />
                    <Typography variant="h6" gutterBottom fontWeight={600}>
                      Fast Setup
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Get up and running in minutes, not days
                    </Typography>
                  </CardContent>
                </Card>
              </Grid2>

              <Grid2 xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    height: "100%",
                    textAlign: "center",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 4,
                    },
                  }}
                >
                  <CardContent>
                    <Code
                      sx={{
                        fontSize: 48,
                        color: "#10b981",
                        mb: 2,
                      }}
                    />
                    <Typography variant="h6" gutterBottom fontWeight={600}>
                      Developer-Friendly
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Beautiful components and APIs designed for developers
                    </Typography>
                  </CardContent>
                </Card>
              </Grid2>

              <Grid2 xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    height: "100%",
                    textAlign: "center",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 4,
                    },
                  }}
                >
                  <CardContent>
                    <CheckCircle
                      sx={{
                        fontSize: 48,
                        color: "#f59e0b",
                        mb: 2,
                      }}
                    />
                    <Typography variant="h6" gutterBottom fontWeight={600}>
                      Production Ready
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Trusted by thousands of applications in production
                    </Typography>
                  </CardContent>
                </Card>
              </Grid2>
            </Grid2>
          </Paper>
        </Box>

        {/* Features Section */}
        <Box sx={{ mb: 8 }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              bgcolor: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{
                mb: 4,
                textAlign: "center",
                color: "#1f2937",
                fontWeight: 700,
              }}
            >
              What's Included
            </Typography>
            <Grid2 container spacing={3}>
              {[
                "Next.js 16 App Router integration",
                "Clerk authentication middleware",
                "Material-UI components",
                "TypeScript support",
                "Responsive design",
                "Production-ready setup",
              ].map((feature, index) => (
                <Grid2 xs={12} sm={6} key={index}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <CheckCircle sx={{ color: "#10b981", fontSize: 28 }} />
                    <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
                      {feature}
                    </Typography>
                  </Box>
                </Grid2>
              ))}
            </Grid2>
          </Paper>
        </Box>

        {/* Footer */}
        <Box
          sx={{
            py: 4,
            textAlign: "center",
            color: "white",
            opacity: 0.9,
          }}
        >
          <Typography variant="body2">
            Built with Clerk, Next.js, and Material-UI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
