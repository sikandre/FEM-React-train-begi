const Pet = ({ name, animal, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed),
  ]);
};

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt me!'),
    React.createElement(Pet, {
      name: 'Jason',
      animal: 'Dog',
      breed: 'Yorkshire',
    }),
    React.createElement(Pet, {
      name: 'Maui',
      animal: 'Dog',
      breed: 'Portuguese water Dog',
    }),
    React.createElement(Pet, {
      name: 'Kiara',
      animal: 'Cat',
      breed: 'La Perm',
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById('root'));
