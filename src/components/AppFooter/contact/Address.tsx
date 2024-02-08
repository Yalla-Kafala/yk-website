import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

interface AddressProps {
  title?: string;
  content: React.ReactNode;
}
const Address: React.FC<AddressProps> = ({ title, content }) => {
  return (
    <Grid
      item
      sx={{
        pb: 10.5,
      }}
      color="#ffffff"
    >
      <Box>
        <Typography
          color="#ffffff"
          sx={{
            pb: 3.5,
          }}
          variant="h5"
        >
          {title}
        </Typography>
        {content}
      </Box>
    </Grid>
  );
};

export default Address;
