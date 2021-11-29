import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";

import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/auth" exact element={<Auth />} />
          <Route path="/search" exact element={<Search />} />
          <Route path="/results" exact element={<Results />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

// import React, { useEffect } from "react";
// import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
// import { useDispatch } from "react-redux";

// import { getPosts } from "./actions/posts";
// import Posts from "./components/Posts/Posts";
// import Form from "./components/Form/Form";
// import memories from "./images/memories.png";
// import useStyles from "./styles";

// const App = () => {
//   const classes = useStyles();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getPosts());
//   }, [dispatch]);

//   return (
//     <Container maxidth="lg">
//       <AppBar className={classes.appBar} position="static" color="inherit">
//         <Typography className={classes.heading} variant="h2" align="center">
//           Memories
//         </Typography>
//         <img
//           className={classes.image}
//           src={memories}
//           alt="memories"
//           height="60"
//         />
//       </AppBar>
//       <Grow in>
//         <Container>
//           <Grid
//             container
//             justify="space-between"
//             alignItems="stretch"
//             spacing={3}
//           >
//             <Grid item xs={12} sm={7}>
//               <Posts />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <Form />
//             </Grid>
//           </Grid>
//         </Container>
//       </Grow>
//     </Container>
//   );
// };

// export default App;
