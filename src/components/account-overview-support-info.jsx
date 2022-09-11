import { Avatar, Grid, Box } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { yellow } from '@mui/material/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

export const AccountOverviewSupportInfo = ({ contact }) => {
  const { t } = useTranslation()
  const { name, email, phone } = contact
  return (
        <Grid container spacing={2}>
            <Grid item>
                <div className="caption">
                    {t('yourSupportContact').toUpperCase()}
                </div>
            </Grid>
            <Box width="100%"/>
            <Grid item>
                <Grid container alignItems="flex-end" spacing={2}>
                    <Grid item>
                        <Avatar variant="square" sx={{ bgcolor: yellow[500], color: '#000000', borderRadius: '25%' }}>{name[0]}</Avatar>
                    </Grid>
                    <Grid item>
                        <Grid container direction="column" alignItems="flex-start">
                            <Grid item>
                                <strong>{name}</strong>
                            </Grid>
                            <Grid item>
                                <div className="info iconContainer">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <a href={`mailto:${email}`}>{email}</a>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <div className="info">
                            {phone}
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
  )
}

AccountOverviewSupportInfo.propTypes = {
  contact: PropTypes.object.isRequired
}

export default AccountOverviewSupportInfo
