import ErrorBoundary from "@/src/components/ErrorBoundary";
import LoadingFallback from "@/src/components/LoadingFallback";
import Stories from "@/src/components/Stories";
import Story from "@/src/components/Stories/Story";
import { Box, Typography } from "@mui/material";
import { Suspense } from "react";

const StoryPage = ({
  params: { locale, story_id },
}: {
  params: { locale: string; story_id: string };
}) => {
  return (
    <ErrorBoundary locale={locale}>
      <Suspense fallback={<LoadingFallback />}>
        <Story story_id={story_id} locale={locale} />
        <Box sx={{ p: "16px" }}>
          <Typography variant="h6" fontWeight={700}>
            {locale === "ar" ? "المزيد من قصص الكفالة" : "More Kafala Stories"}
          </Typography>
          <Suspense fallback={<Box height={{ xs: "1040px", md: "520px" }} />}>
            <Stories
              locale={locale}
              storiesCount={3}
              cardsPerRow={3}
              exclude={[story_id]}
              random={true}
            />
          </Suspense>
        </Box>
      </Suspense>
    </ErrorBoundary>
  );
};

export default StoryPage;
