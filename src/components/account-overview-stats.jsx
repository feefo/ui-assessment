import { Grid, Paper } from '@mui/material'
import React from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NumberCounterWithCaption from './molecules/number-counter-with-caption'
import PropTypes from 'prop-types'

const DashboardItem = ({ children, cols = 12 }) => {
  return (
        <Grid item xs={cols} style={{ textAlign: 'start' }}>
            <Paper style={{ padding: '2vmin' }}>
                {children}
            </Paper>
        </Grid>
  )
}

DashboardItem.propTypes = {
  children: PropTypes.node.isRequired,
  cols: PropTypes.number
}

export const AccountOverviewStats = ({ data }) => {
  const { t } = useTranslation()
  const { uploads, successfulUploads, linesSaved, linesAttempted } = data
  return (
        <div>
            <Grid container spacing={0.25} padding={2} justifyContent="flex-start">
                <DashboardItem>
                    <div className="iconContainer">
                        <FontAwesomeIcon icon={faUpload} color="rgb(62, 177, 235)" />
                        <h3 style={{ margin: 0 }}>Sales</h3>
                    </div>
                    <div className="info">
                        <Trans i18nKey="uploadsAndLines" values={{ uploads, lines: linesAttempted }}> You had 0 uploads and 0 lines added </Trans>
                    </div>
                </DashboardItem>
                <DashboardItem cols={6}>
                    <NumberCounterWithCaption number={successfulUploads * 100 / uploads} suffix="%" captionText={t('uploadSuccess').toUpperCase()} />
                </DashboardItem>
                <DashboardItem cols={6}>
                    <NumberCounterWithCaption number={linesSaved * 100 / linesAttempted} suffix="%" captionText={t('linesSaved').toUpperCase()}/>
                </DashboardItem>
            </Grid>
        </div>
  )
}

AccountOverviewStats.propTypes = {
  data: PropTypes.shape(
    {
      uploads: PropTypes.number.isRequired,
      successfulUploads: PropTypes.number.isRequired,
      linesSaved: PropTypes.number.isRequired,
      linesAttempted: PropTypes.number.isRequired
    }
  )
}

export default AccountOverviewStats
