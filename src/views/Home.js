import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Button, Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import { Modal } from "../components/Modal";
import { ListOfImages } from "../components/ListOfImages";
import { getCharacters } from "../api";
import { setCharacters, toggleShowImages } from "../actions/globalActions";

export const Title = styled(Typography)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-weight: 200;
`;

const mapStateToProps = ({ global }) => ({
  ...global,
});

const mapDispatchToProps = (dispatch) => ({
  toggleShowImages() {
    return toggleShowImages(dispatch, {});
  },
  setCharacters(characters = []) {
    return setCharacters(dispatch, characters);
  },
});

const Home = ({ characters, showImages, toggleShowImages, setCharacters }) => {
  useEffect(() => {
    getCharacters.then((data) => {
      setCharacters(data.results);
    });
  }, []);

  console.log(showImages);

  return (
    <Grid container spacing={8} direction="column" className="App">
      <Grid item>
        <Title variant="h2">Contenido</Title>
      </Grid>

      <Grid item>
        <Button onClick={toggleShowImages} color="primary" variant="contained">
          Ejecutar Consulta
        </Button>
      </Grid>

      <Modal onClose={toggleShowImages} open={showImages}>
        <ListOfImages data={characters} />

        <Button
          onClick={toggleShowImages}
          color="secondary"
          variant="contained"
        >
          Cerrar
        </Button>
      </Modal>
    </Grid>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
