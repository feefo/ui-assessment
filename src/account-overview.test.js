import { render, screen, getByText } from '@testing-library/react'
import AccountOverview from './account-overview'
import React from 'react'
import './i18nForTests'

const accountOverviewStub = {
  supportContact: {
    name: 'John Smith',
    email: 'john.smith@feefo.com',
    phone: '0121 222 4422'
  },
  salesOverview: {
    uploads: 8,
    successfulUploads: 3,
    linesAttempted: 20,
    linesSaved: 4
  }
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

test('upload summary exists', () => {
  render(<AccountOverview data={accountOverviewStub} />)
  const element = screen.getByText("You had 0 uploads and 0 lines added")
  expect(element).toBeInTheDocument()
})

test('email link is an href', () => {
  render(<AccountOverview data={accountOverviewStub} />)
  expect(screen.getByText(/john.smith@feefo.com/i)).toHaveAttribute('href', 'mailto:john.smith@feefo.com')
})