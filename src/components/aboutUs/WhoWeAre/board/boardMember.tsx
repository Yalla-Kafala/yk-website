import { Grid, Box, Typography } from "@mui/material";

const BoardMember = ({
  name,
  title,
  image,
  index,
  setCurrentMember,
  handleOpen,
}: {
  name: string;
  title: string;
  image: string;
  bio: string;
  index: number;
  setCurrentMember: (index: number) => void;
  handleOpen: () => void;
}) => {
  return (
    <Grid
      item
      onClick={() => {
        setCurrentMember(index);
        handleOpen();
      }}
      xs={5.5}
      md={2.5}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#B9D7E0",
          paddingX: { xs: "30px", md: "50px" },
          paddingY: { xs: "10px", md: "12px" },
        }}
        component={"img"}
        src={image}
      />
      <Typography
        sx={{
          textAlign: "start",
          width: "100%",
          fontSize: { xs: "18px", md: "24px" },
          color: "primary.main",
          fontWeight: "bold",
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          textAlign: "start",
          width: "100%",
          fontSize: { xs: "16px", md: "24px" },
        }}
      >
        {title}
      </Typography>
    </Grid>
  );
};
export default BoardMember;
