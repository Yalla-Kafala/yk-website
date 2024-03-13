import { Box, Button, Typography } from "@mui/material";
import Stories from "../../Stories";
import Link from "next/link";

const StoriesSection = ({ locale }: { locale: "ar" | "en" }) => {
  return (
    <Box padding={{ xs: "20px", md: "40px" }}>
      <Typography
        variant="h5"
        textAlign="center"
        padding="20px"
        fontWeight={600}
      >
        {locale === "ar" ? "قصص الكفالة" : "Kafala Stories"}
      </Typography>
      <Box>
        <Stories
          locale={locale}
          cardsPerRow={3}
          storiesCount={3}
          random={true}
        />
      </Box>
      <Box textAlign="center" padding="20px">
        <Link href={`/${locale}/stories`}>
          <Button
            variant="text"
            color="primary"
            sx={{
              fontWeight: "bold",
              fontSize: "1.2rem",
              textDecoration: "underline",
            }}
          >
            {locale === "ar" ? "اقرأ المزيد من القصص" : "Read more stories"}
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default StoriesSection;
