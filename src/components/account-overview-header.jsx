import { Grid } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { titleCase } from '../utils/strings'
import PropTypes from 'prop-types'

import AccountOverviewSupportInfo from './account-overview-support-info'
export const AccountOverviewHeader = ({ contact }) => {
  const { t } = useTranslation()
  return (
        <Grid container spacing={2} padding={2}>
            <Grid item xs={5}>
                <h2>
                    {titleCase(t('accountOverview'))}
                </h2>
            </Grid>
            <Grid item xs={7}>
                <AccountOverviewSupportInfo contact={contact}></AccountOverviewSupportInfo>
            </Grid>
        </Grid>
  )
}

AccountOverviewHeader.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string
  })
}

export default AccountOverviewHeader
