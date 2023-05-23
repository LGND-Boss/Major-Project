import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
// import LaunchIcon from '@mui/icons-material/Launch';
import News from "scenes/newsapi";
const WebScraperWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  // const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  return (
    <WidgetWrapper>
      <FlexBetween bgcolor={"black"} padding={".4rem .5rem"} borderRadius={".4rem"}>
        <Typography color={dark} variant="h4" fontWeight="500">
          Poornima New's
        </Typography>
        <Typography color="red" fontWeight="500">🔴 Live</Typography>
      </FlexBetween>
      <News />
      {/* <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://images.unsplash.com/photo-1643208589889-0735ad7218f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      /> */}
      <FlexBetween>
        {/* <Typography variant="h5" gutterBottom color="red">Netflix</Typography>
        <Typography variant="h6" gutterBottom color={main}><LaunchIcon fontSize="small" /></Typography> */}
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      {/* loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum */}
      </Typography>
    </WidgetWrapper>
  );
};

export default WebScraperWidget;