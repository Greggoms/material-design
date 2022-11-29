import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Box, Typography } from "@mui/material";

const Admin = () => {
  const navigate = useNavigate();
  const user = null;

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, [user, navigate]);
  return (
    <Box>
      <Typography variant="h2">Admin</Typography>
    </Box>
  );
};

export default Admin;
