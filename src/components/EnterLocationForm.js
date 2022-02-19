import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";

function EnterLocationForm({ submitFn }) {
  const [location, setLocation] = useState("");
  return (
    <form onSubmit={(e) => submitFn(e, location)}>
      <Grid container spacing={2}>
        <Grid container item xs={12} md={6} direction="column">
          <Input
            placeholder="Enter city name"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Grid>
        <Grid container item xs={12} md={6}>
          <Button type="submit" variant="contained">
            What's the weather like?
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default EnterLocationForm;
