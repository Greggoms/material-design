import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Box, Typography } from "@mui/material";

const Profile = () => {
  const navigate = useNavigate();
  const user = null;

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, [user, navigate]);
  return (
    <Box>
      <Typography variant="h2">Profile</Typography>
    </Box>
  );
};

export default Profile;
