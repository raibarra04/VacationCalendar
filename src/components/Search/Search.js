import React from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";
import Input from "../Auth/Input";

const Search = () => {
  const classes = useStyles();
  // const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {};
  const handleChange = (e) => {};

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <SearchIcon />
        </Avatar>
        <Typography variant="h5">Search</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <>
              <Input
                name="destinationName"
                label="Destination Name"
                handleChange={handleChange}
                autoFocus
                half
              />
              <Input
                name="climateType"
                label="Climate Type"
                handleChange={handleChange}
                half
              />
            </>
          </Grid>
          <Button
            component={Link}
            to="/results"
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Search;
