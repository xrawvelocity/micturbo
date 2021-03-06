import { Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'

import newlogo from '../../assets/images/newlogo.png'
import creditCards from '../../assets/images/creditCards.png'
import Flex from '../../components/structure/Flex'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'

export const Footer = () => {
	return (
		<Flex
			component="footer"
			justify="space-between"
			align="center"
			sx={{
				bgcolor: 'permanent.black2',
				padding: { xs: '20px 5%', sm: '20px 15%' },
				borderTop: '2px solid #000',
				width: '100%',
				zIndex: '100',
				height: '200px',
				color: 'permanent.white1',
			}}
		>
			<Flex sx={{ width: { xs: '45%', md: '30%' } }} direction="column">
				<Typography>(305) 685-1061</Typography>
				<Typography
					sx={{
						display: 'inline',
						my: '.5rem',
						'& > a, & > a:hover, & > a:visited': { color: 'permanent.blue' },
					}}
				>
					<a href="mailto:Manuel_mic@live.com">manuel_mic@live.com</a>
				</Typography>
				<Typography>4641 E 10th Ave, Hialeah, FL 33013</Typography>
				<Flex
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
					}}
					sx={{ mt: '1rem' }}
				>
					<a
						href="https://www.facebook.com/micturbo"
						target="_blank"
						rel="noopener noreferrer"
						style={{
							marginRight: '1rem',
						}}
					>
						<FacebookIcon
							style={{
								height: '2.4rem',
								width: '2.4rem',
								color: '#4267B2',
								cursor: 'pointer',
							}}
						/>
					</a>
					<a
						href="https://www.instagram.com/mic_turbo"
						target="_blank"
						rel="noopener noreferrer"
						style={{
							marginRight: '1rem',
						}}
					>
						<InstagramIcon
							style={{
								height: '2.4rem',
								width: '2.4rem',
								color: '#E1306C',
								cursor: 'pointer',
							}}
						/>
					</a>
					<a
						href="https://www.ebay.com/usr/mic_turbo"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2560px-EBay_logo.svg.png"
							alt="Ebay logo"
							style={{ width: 'auto', height: '2.4rem' }}
						/>
					</a>
				</Flex>
			</Flex>
			<Box
				sx={{
					height: { xs: '4rem', md: '8rem' },
					width: '30%',
					display: { xs: 'none', md: 'flex' },
					justifyContent: 'center',
					marginLeft: { xs: '-3rem', md: '0' },
				}}
			>
				<img
					src={newlogo}
					alt="logo"
					style={{ height: '100%', width: 'auto' }}
				/>
			</Box>

			<Flex
				direction="column"
				align="flex-end"
				sx={{ width: { xs: '45%', md: '30%' } }}
			>
				<Box sx={{ height: { xs: '25px', sm: '35px' }, width: 'auto' }}>
					<img
						src={creditCards}
						alt="cards"
						style={{ height: '100%', width: 'auto', objectFit: 'cover' }}
					/>
				</Box>
				<Typography sx={{ color: 'permanent.gray1', mt: '2rem' }}>
					?? 2021 MIC Turbo
				</Typography>
				<Typography sx={{ color: 'permanent.gray1', whiteSpace: 'nowrap' }}>
					Ecommerce Software by{' '}
					<Typography
						sx={{
							display: 'inline',
							'& > a, & > a:hover, & > a:visited': {
								color: 'permanent.blue',
							},
						}}
					>
						<a
							href="https://www.vic-dev.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Vic Dev
						</a>
					</Typography>
				</Typography>
			</Flex>
		</Flex>
	)
}
