import Header from './componentes/Header';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);

 
`;

const AppHeader = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer>
      <AppHeader>
        <Header />
      </AppHeader>
    </AppContainer>
  );
}

export default App;
