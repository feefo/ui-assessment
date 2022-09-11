import React from 'react'

import './account-overview.css'
import AccountOverviewHeader from './components/account-overview-header'
import AccountOverviewStats from './components/account-overview-stats'
import PropTypes from 'prop-types'

export const AccountOverview = ({ data }) => {
  const { salesOverview, supportContact } = data
  return (
    <div className="AccountOverview">
      <AccountOverviewHeader contact={supportContact} />
      <AccountOverviewStats data={salesOverview} />
    </div>
  )
}

AccountOverview.propTypes = {
  data: PropTypes.object.isRequired
}

export default AccountOverview
