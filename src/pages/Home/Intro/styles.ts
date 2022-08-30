import styled from 'styled-components'

export const IntroContainer = styled.div`
  margin-top: 7.875rem;
  display: flex;
  gap: 3.25rem;

  h1 {
    color: ${(props) => props.theme['brown-900']};
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 62.4px;
    margin-bottom: 1rem;
  }

  h2 {
    color: ${(props) => props.theme['brown-300']};
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 26px;
  }
`

export const VantagesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 4.125rem;
`

const ICON_BACKGROUND_COLOR = {
  darkYellow: 'yellow-900',
  yellow: 'yellow-500',
  brown: 'brown-200',
  purple: 'purple-900',
} as const

interface IconBackgroundProps {
  iconBackground: keyof typeof ICON_BACKGROUND_COLOR
}

export const VantagesItem = styled.div<IconBackgroundProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;

  div {
    background-color: ${(props) =>
      props.theme[ICON_BACKGROUND_COLOR[props.iconBackground]]};
    padding: 0.5rem;
    border: none;
    border-radius: 999px;
    line-height: 0;

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`
