import { Box, Button, Typography } from "@mui/material";
import HeroSection from "./HeroSection";
import MissionStatement from "./MissionStatement";
import YKIntroSection from "./YKIntroSection";
import StoriesSection from "./StoriesSection";
import FAQsSection from "./FAQsSection";
import MobileDonationButton from "../MobileDonateButton";

const Home = ({ locale }: { locale: "ar" | "en" }) => {
  return (
    <Box>
      <HeroSection locale={locale} />
      <MissionStatement locale={locale} />
      <YKIntroSection locale={locale} />
      <StoriesSection locale={locale} />
      <FAQsSection locale={locale} />
      <MobileDonationButton locale={locale} />
    </Box>
  );
};

export default Home;
