import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const CustomPaper = styled(Paper)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "100%",
  padding: "1rem",
}));
const CustomList = styled(List)(({ theme }) => ({
  maxWidth: "fit-content",
  alignSelf: "center",
  padding: "1rem",
  backgroundColor: theme.palette.background.paper,
}));

const Hero = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Stack direction="row" width="100%">
        <CustomPaper>
          <Typography textAlign="center" variant="h4">
            Find Useful Documents
          </Typography>
          <Button
            sx={{ alignSelf: "center" }}
            variant="contained"
            onClick={() => navigate("/documents")}
          >
            Browse Documents
          </Button>
          <CustomList>
            <ListItem>
              <ListItemText primary="New Hire Paperwork" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Company Policies" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Handouts" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Error Handling Help" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Everyday Forms" />
            </ListItem>
          </CustomList>
        </CustomPaper>
        <CustomPaper>
          <Typography textAlign="center" variant="h4">
            Access Your Records
          </Typography>
          <Button
            sx={{ alignSelf: "center" }}
            variant="contained"
            onClick={() => navigate("/profile")}
          >
            Your Profile
          </Button>
          <CustomList>
            <ListItem>
              <ListItemText primary="Request PTO" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Important Dates" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Pay Rate" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Insurance Status" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Other General Info" />
            </ListItem>
          </CustomList>
        </CustomPaper>
        <CustomPaper>
          <Typography textAlign="center" variant="h4">
            Employment Resources
          </Typography>
          <Button
            sx={{ alignSelf: "center" }}
            variant="contained"
            onClick={() => navigate("/faq")}
          >
            Visit the FAQ
          </Button>
          <CustomList>
            <ListItem>
              <ListItemText primary="Setting Up Direct Deposit" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Enrolling Into Insurance" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="How To File a W-4" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Viewing Paystubs" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Additional Links" />
            </ListItem>
          </CustomList>
        </CustomPaper>
      </Stack>
    </Box>
  );
};

export default Hero;
