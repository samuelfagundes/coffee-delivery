import styled from 'styled-components'

export const DeliveryInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 2.5rem;
  padding: 2.5rem;
  border-width: 1px;
  background: linear-gradient(#fafafa, #fafafa) padding-box,
    linear-gradient(to right, darkblue, darkorchid) border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;
`

const ICON_BACKGROUND_COLOR = {
  purple: 'purple-900',
  yellow: 'yellow-500',
  darkYellow: 'yellow-900',
} as const

interface IconBackgroundProps {
  iconBackground: keyof typeof ICON_BACKGROUND_COLOR
}

export const InfoItem = styled.div<IconBackgroundProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

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

  p {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['brown-200']};
    font-size: 1rem;
  }

  span {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['brown-200']};
    font-size: 1rem !important;
    font-weight: 700;
  }

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  :first-child span {
    margin-left: 0.25rem;
  }
`
