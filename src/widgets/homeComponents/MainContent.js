import { Box } from '@mui/material'
import React from 'react'
import Play from '../../assets/Play.svg'
import M from '../../assets/m.svg'
import N from '../../assets/n.svg'
import O from '../../assets/o.svg'
import P from '../../assets/p.svg'
import R from '../../assets/r.svg'

function MainContent() {
  return (
    <Box className="main-content-container">


      <div style={{ position:'absolute',left:'20px',bottom:'350px' }}>
        <img src={M} alt="M" style={{ width: 'inherit' }} />
      </div>
      <div style={{ position:'absolute',left:'20px',bottom:'50px' }}>
        <img src={O} alt="O" style={{ width: 'inherit' }} />
      </div>

      <div style={{ position:'absolute',right:'20px',bottom:'350px' }}>
        <img src={N} alt="N" style={{ width: 'inherit' }} />
      </div>
      <div style={{ position:'absolute',right:'20px',bottom:'50px' }}>
        <img src={P} alt="P" style={{ width: 'inherit' }} />
      </div>

      <div className='main-content-text-container'>
        <span className='main-content-text'>The Only</span>
        <span className='main-content-span'>All In One</span>
        <span className='main-content-text'>Analytics Tool For Your Engagement</span>
      </div>

      <div className='main-content-description'>
        Prove the ROI of social media, plan more engaging content, and create automated white label analytics reports.
      </div>

      <div className='main-btn-container'>
        <div className='btn-free'>
          Get started for free
        </div>
        <div className='btn-play'>
          <img src={Play} alt="Logo1" />
          <span style={{ paddingLeft: '10px' }}>Play video</span>
        </div>
      </div>

      <div className='main-con-desc'>
        NB: No credit card required. Plans starts at $0/month.
      </div>

      <div style={{ paddingTop: '20px' }}>
        <img src={R} alt="R" style={{ width: 'inherit' }} />
      </div>

    </Box>
  )
}

export default MainContent