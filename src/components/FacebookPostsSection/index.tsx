import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import Link from "next/link";

export interface FacebookPost {
  id: string;
  picture: string;
  createdAt: string;
  postLink: string;
  message: string;
  attachments: any;
}

interface FacebookPostsProps {
  posts: FacebookPost[];
}

const FacebookPosts = async () => {
  let fbPosts: FacebookPost[] = [];
  try {
    const response = await fetch(
      `https://graph.facebook.com/v20.0/469771757195549/posts?limit=3&fields=message,created_time,permalink_url,full_picture,attachments,id&access_token=EAAVUbBwLqfIBO1WCDnrXqAwnfNWjo6ilJE7v5OagZCMZAdN0UHknxbTGBpsF2iicYVdwYSsZAm2rzsKjcZBbGH6Ch7qhWFjaaa3gvkdOnk2cRfXD6ZCRSbtP0Q1ZCT6l2LdzHAhg7xVtb7fyRCpuQWzMmEmQeJsOZC0wWIV1pDeDuHWfm01R5ZCYZCMpx65HoLYPeYWrjl8HxN8y6YzmD`,
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      console.log(response.status);
    } else {
      const parsedResponse = await response.json();
      fbPosts = parsedResponse.data.map((post: any) => {
        return {
          id: post.id,
          picture: post.full_picture,
          createdAt: post.created_time,
          postLink: post.permalink_url,
          message: post.message,
          attachments: post.attachments,
        };
      });
    }
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      {fbPosts.length > 0 && (
        <Box padding={{ xs: "20px", md: "40px" }}>
          <Grid container spacing={4}>
            {fbPosts.map((post) => (
              <Grid item xs={12} sm={4} key={post.id}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {post.picture && (
                    <CardMedia
                      component="img"
                      height="300"
                      image={post.picture}
                      alt="Post image"
                    />
                  )}
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="body2"
                      color="text.secondary"
                    >
                      {new Date(post.createdAt).toLocaleDateString()}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      {post.message && post.message.length > 150
                        ? `${post.message.substring(0, 150)}...`
                        : post.message}
                    </Typography>
                    <Box sx={{ mt: "auto" }}>
                      <Button
                        variant="outlined"
                        color="primary"
                        href={post.postLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        fullWidth
                      >
                        Read More
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Link href={"https://www.facebook.com/YallaKafala"}>
              <Button
                variant="text"
                color="primary"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  textDecoration: "underline",
                }}
              >
                View more posts
              </Button>
            </Link>
          </Box>
        </Box>
      )}
    </>
  );
};

export default FacebookPosts;
