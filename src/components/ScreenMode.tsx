import {  IconButton,  } from "@mui/material";
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useAppDispatch ,useAppSelector} from "../store/hooks";
import { setTheme } from "../store/slices/themeSlice";
const ScreenMode = () => {
  const selectedTheme = useAppSelector((state) => state.theme.selectedTheme);
  const dispatch = useAppDispatch();
  const handleThemeToggle = () => {
    dispatch(setTheme(selectedTheme === "dark" ? "light" : "dark"));
  }
  return (
    <IconButton onClick={handleThemeToggle} color="inherit">
    {selectedTheme==="dark" ? <Brightness7Icon /> : <Brightness4Icon />}
  </IconButton>
  )
}

export default ScreenMode