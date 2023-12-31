import styled from 'styled-components'

const Opcao = styled.li`
font-size: 16px;
display: flex;
align-items: center;
height: 100%;
padding: 0 5px;
cursor: pointer;
min-width: 120px;
`
const Opcoes = styled.ul`
display: flex;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function OpcoesHeader (){
    return(

        <Opcoes>
          {textoOpcoes.map((texto) => (
                <Opcao className='opcao' key={texto}>
                    <p>{texto}</p>
                </Opcao>
           ))}
        </Opcoes>

        
            
        
    )

}

export default OpcoesHeader;