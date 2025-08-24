import React from "react";
import {
  Typography,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { Fade, Bounce } from "react-awesome-reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Function to get the next batch date (every 2 days)
function getNextBatchDate() {
  const today = new Date();
  const nextBatch = new Date(today);
  const offset = today.getDate() % 2 === 0 ? 2 : 1;
  nextBatch.setDate(today.getDate() + offset);
  return nextBatch.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Testimonial data (embedded JSON)
const testimonials = [
  {
    name: "Arun Kumar",
    feedback: "The mock interviews were game-changers. I felt ready for real interviews after just 2 weeks.",
    topic: "Mock Interviews",
  },
  {
    name: "Deepika Reddy",
    feedback: "Got placed as a Flutter developer in just 3 months. The curriculum is really industry-oriented.",
    topic: "Flutter Placement",
  },
  {
    name: "Praveen Raj",
    feedback: "Interview support was outstanding. I cracked 3 rounds and got placed in a top startup.",
    topic: "Interview Support",
  },
  {
    name: "Meena Lakshmi",
    feedback: "Thanks to job referrals and guidance, I got my first job in an IT company without coding background.",
    topic: "Job Referral",
  },
  {
    name: "Sandeep Varma",
    feedback: "Real-world projects helped me stand out. My interviewers were very impressed with my portfolio.",
    topic: "Flutter Placement",
  },
  {
    name: "Kavya Suresh",
    feedback: "I wasn’t confident about interviews, but the mentorship and mock sessions boosted my confidence massively.",
    topic: "Mock Interviews",
  },
  {
    name: "Raghavendra Rao",
    feedback: "Flutter course covered everything — from UI basics to app publishing. Best decision I made!",
    topic: "Flutter Placement",
  },
  {
    name: "Divya Nair",
    feedback: "They didn't just train — they placed. I got referred and hired within 10 days of completing the course.",
    topic: "Job Referral",
  },
  {
    name: "Vignesh Iyer",
    feedback: "Great support from mentors. The one-on-one mock interviews were super helpful.",
    topic: "Mock Interviews",
  },
  {
    name: "Anjali Menon",
    feedback: "I shifted to mobile dev with the Flutter course and landed an internship with placement support.",
    topic: "Flutter Placement",
  },
];

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 960, settings: { slidesToShow: 2 } },
    { breakpoint: 600, settings: { slidesToShow: 1 } },
  ],
};

export default function Home() {
  const nextBatchDate = getNextBatchDate();

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* HERO SECTION */}
      <Box
        id="home"
        sx={{
          background: "linear-gradient(135deg,#3b82f6,#9333ea)",
          color: "#fff",
          py: { xs: 10, md: 14 },
          textAlign: "center",
        }}
      >
        <Fade direction="up" triggerOnce>
          <Container maxWidth="md">
            <Typography variant="h2" fontWeight="bold" mb={3}>
              Welcome to SAR Technologies
            </Typography>
            <Typography variant="h6" mb={3} lineHeight={1.8}>
              SAR Technologies is your trusted Training and Placement Services Center.
              Our trainers have 15+ years of IT expertise and have guided over 1,000
              students toward successful careers.
            </Typography>
          </Container>
        </Fade>

        <Bounce triggerOnce>
          <Box
            sx={{
              mt: 4,
              mx: "auto",
              maxWidth: 460,
              backgroundColor: "#fff",
              color: "#111827",
              borderRadius: "16px",
              px: 4,
              py: 3,
              boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
              transition: "transform 0.3s ease-in-out",
              ":hover": { transform: "scale(1.03)" },
            }}
          >
            <Typography variant="h6" fontWeight="bold" color="#9333ea" mb={1}>
              🎯 Next Batch Starts
            </Typography>
            <Typography>{nextBatchDate}</Typography>
            <Typography variant="caption" color="#6b7280" mt={1} display="block">
              Enroll now – limited slots available!
            </Typography>
          </Box>
        </Bounce>
      </Box>

      {/* WHY CHOOSE US */}
      <Container id="about" sx={{ my: 10 }}>
        <Fade cascade damping={0.1}>
          <Typography variant="h4" textAlign="center" fontWeight="bold" mb={4}>
            Why Choose SAR Technologies?
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                title: "100% Placement Assistance",
                text: "Especially for Flutter freshers — we guide you until you're placed with real interview support.",
              },
              {
                title: "Live Project-Based Training",
                text: "Our courses are industry-aligned with real-world projects and task-based learning.",
              },
              {
                title: "Dedicated Interview Preparation",
                text: "We conduct mock interviews, HR rounds, and technical prep sessions tailored to the role you’re targeting.",
              },
              {
                title: "Specialized Flutter Curriculum",
                text: "Focused on hybrid mobile app development for iOS & Android — ideal for freshers & lateral entrants.",
              },
              {
                title: "1-on-1 Career Mentorship",
                text: "Personal guidance on resume building, job portals, and salary negotiation.",
              },
              {
                title: "Support for Non-Coders Too",
                text: "Courses like Digital Marketing designed for students without any programming background.",
              },
            ].map((item) => (
              <Grid key={item.title} item xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    backgroundColor: "#f8fafc",
                    borderRadius: 3,
                    boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      ✅ {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.text}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Fade>
      </Container>

      {/* POPULAR COURSES */}
      <Box id="courses" sx={{ backgroundColor: "#f1f5f9", py: 10 }}>
        <Container>
          <Fade triggerOnce cascade damping={0.1}>
            <Typography variant="h4" textAlign="center" fontWeight="bold" mb={4}>
              Our Popular Courses
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {[
                {
                  title: "Flutter - Hybrid App Development",
                  description: "Build apps for iOS and Android with one codebase. Recommended for freshers. 100% placement assistance.",
                },
                {
                  title: "React Native - Hybrid Platform",
                  description: "Ideal for React developers aiming for high-paying jobs. Develop apps for Android & iOS.",
                },
                {
                  title: "React JS - WebApp Development",
                  description: "Develop responsive single-page web applications using ReactJS.",
                },
                {
                  title: "PHP, HTML, CSS, MySQL",
                  description: "Learn full-stack WebApp and back-end development from scratch.",
                },
                {
                  title: "Digital Marketing (No Coding)",
                  description: "Master SEO, SEM, Google Ads, and Social Media without any coding skills.",
                },
              ].map((course) => (
                <Grid key={course.title} item xs={12} sm={6} md={4}>
                  <Card
                    elevation={2}
                    sx={{
                      borderRadius: 3,
                      transition: "transform 0.2s",
                      ":hover": {
                        transform: "scale(1.02)",
                      },
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold" gutterBottom>
                        {course.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {course.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Fade>
        </Container>
      </Box>

      {/* MODERN TESTIMONIALS */}
      <Box id="testimonials" sx={{ py: 10, backgroundColor: "#f9fafb" }}>
        <Container>
          <Typography variant="h4" textAlign="center" fontWeight="bold" mb={6}>
            What Our Students Say
          </Typography>
          <Slider {...sliderSettings}>
            {testimonials.map((t, index) => (
              <Box key={index} px={2}>
                <Card
                  elevation={4}
                  sx={{
                    borderRadius: 3,
                    p: 3,
                    minHeight: 240,
                    background: "#ffffff",
                    boxShadow: "0px 6px 18px rgba(0,0,0,0.1)",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      gutterBottom
                      color="primary"
                    >
                      {t.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ fontStyle: "italic", color: "gray" }}
                    >
                      {t.topic}
                    </Typography>
                    <Typography variant="body2" mt={2}>
                      "{t.feedback}"
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
        </Container>
      </Box>

      {/* FOOTER */}
      <Box
        component="footer"
        sx={{
          backgroundColor: "#1e293b",
          color: "#fff",
          py: 3,
          mt: "auto",
        }}
      >
        <Container sx={{ textAlign: "center" }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} SAR Technologies. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
