import {  Box, IconButton,  } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useAppDispatch ,useAppSelector} from "../store/hooks";
import { setTheme } from "../store/slices/themeSlice";
import Switch from '@mui/material/Switch';
const ScreenMode = ({isMobView=false}:{isMobView?:boolean}) => {
  const selectedTheme = useAppSelector((state) => state.theme.selectedTheme);
  const dispatch = useAppDispatch();
  const handleThemeToggle = () => {
    dispatch(setTheme(selectedTheme === "dark" ? "light" : "dark"));
  }
  if(isMobView){
    return (
      <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center',justifyContent:'space-between',paddingInline:'10px',width:'100%'}}>
        <p>Dark Mode</p>
        <Switch
          checked={selectedTheme === "dark"}
          onChange={handleThemeToggle}
          inputProps={{ 'aria-label': 'controlled' }}
          // sx={{paddingRight:0}}
          />
      </Box>
    )
  }
  return (
    <IconButton onClick={handleThemeToggle} color="inherit">
    {selectedTheme==="dark" ? <DarkModeIcon /> : <LightModeIcon />}
  </IconButton>
  )
}

export default ScreenMode