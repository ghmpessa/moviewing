import { styled, Button as MUIButton } from '@mui/material'

export namespace HomePageStyles {
  export const Container = styled('div')`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  `

  export const LoadingContainer = styled('div')`
    flex: 1;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 115px);
  `

  export const LoadMore = styled(MUIButton)`
    width: 150px;
    align-self: center;
    margin: 20px 0px 40px;
  `
}
