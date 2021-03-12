import { css } from "@emotion/react"

export const responsiveMixin = css`
  @media (max-width: 475px) {
    flex-direction: column;
    align-items: center;

    & > *:not(:last-child) {
      margin-bottom: 24px;
    }

    & > * {
      text-align: center;
      align-items: center;
    }
  }
`
