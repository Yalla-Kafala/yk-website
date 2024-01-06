import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import NewsletterForm from "./NewsletterForm";
import Link from "next/link";

const NewsletterList = () => {
  return (
    <>
      <Grid
        item
        sx={{
          pb: 13,
        }}
      >
        <Box>
          <Typography
            sx={{
              pb: 3.5,
            }}
            variant="h4"
          >
            Subscribe to our newsletter
          </Typography>
          <NewsletterForm />
        </Box>
      </Grid>
      <Grid
        item
        sx={{
          pb: 13,
        }}
      >
        <Box>
          <Typography
            sx={{
              paddingRight: 3.5,
            }}
            variant="h4"
          >
            Follow us
          </Typography>
          <Grid justifyContent="flex-start" container>
            <Grid
              item
              sx={{
                pr: 3.5,
              }}
            >
              <Link href="/">
                <Box component="img" src="fbIcon.png" />
              </Link>
            </Grid>
            <Grid
              item
              sx={{
                pr: 3.5,
              }}
            >
              <Link href="/">
                <Box component="img" src="igIcon.png" />
              </Link>
            </Grid>
            <Grid
              item
              sx={{
                pr: 3.5,
              }}
            >
              <Link href="/">
                <Box component="img" src="ytIcon.png" />
              </Link>
            </Grid>
            <Grid
              item
              sx={{
                pr: 3.5,
              }}
            >
              <Link href="/">
                <Box component="img" src="xIcon.png" />
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid
        item
        sx={{
          pb: 13,
        }}
      >
        <Box
          sx={{
            maxHeight: { xs: "75px", md: "60px" }, // To force box to take children hight
          }}
        >
          <Grid container direction="row">
            <Grid
              sx={{
                paddingRight: "11px",
              }}
              item
            >
              <Box component="img" src="silver.png" />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="subtitle1">
                Yalla Kafala is a silver-level <br /> GuideStar participant,
                <br />
                demonstrating its commitment to
                <br /> transparency.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default NewsletterList;
