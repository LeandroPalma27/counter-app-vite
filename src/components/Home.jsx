import React from "react";
import PropTypes from 'prop-types'

export const Home = ({title, subTitle, name, age}) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <p>{`Mi nombre es ${name} y tengo ${age}.`}</p>
    </>
  );
};

Home.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    name: PropTypes.string.isRequired,
    age: PropTypes.number
}

Home.defaultProps = {
    title: 'No hay titulo.',
    subTitle: 'No hay subtitulo.',
    name: 'Leandro',
    age: 0
}