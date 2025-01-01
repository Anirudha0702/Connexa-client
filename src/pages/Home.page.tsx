import Box from "@mui/material/Box"
import {Navbar, ProfileCard} from "../components"
import Grid from "@mui/material/Grid2"

const Home = () => {
  return (<>
  
  <Navbar/>
  <Box sx={{ flexGrow: 1 }}>
  <Grid container spacing={3}>
    <Box>
      <ProfileCard/>
    </Box>
  </Grid>
  </Box>
  </>
  )
}

export default Home