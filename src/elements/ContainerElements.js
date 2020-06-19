import styled from 'styled-components'

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: .25rem;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
`