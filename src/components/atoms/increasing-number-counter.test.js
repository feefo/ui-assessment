import { render, screen, getByText, waitFor } from '@testing-library/react'
import IncreasingNumberCounter from './increasing-number-counter'
import React from 'react'
import '../../i18nForTests'

const salesOverview = {
    uploads: 8,
    successfulUploads: 3,
    linesAttempted: 20,
    linesSaved: 4
}

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {})
      }
    }
  },
  Trans: ({ children }) => children
}))

test('success rate is 0 but then correct percentage', async () => {
  const { uploads, successfulUploads } = salesOverview
  render(<IncreasingNumberCounter number={successfulUploads * 100 / uploads} suffix="%" />)
  const zero = screen.getByText("0%")
  expect(zero).toBeInTheDocument()
  await waitFor(() => expect(screen.getByText("37.5%")).toBeInTheDocument(), { timeout: 1500 })
})
