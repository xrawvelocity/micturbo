import React from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../../context/storeCtx'
import {
	Container,
	Grid,
	Typography,
	Button,
	Box,
	Paper,
	CircularProgress,
} from '@mui/material'
import { CartItem } from './CartItem'
import Flex from '../../components/structure/Flex'
import { LinkButton } from '../../components/buttons/LinkButton'

export const Cart = () => {
	const { cart, emptyCart, cartLoading } = useStore()

	const EmptyCart = () => {
		return (
			<Box style={{ padding: '6rem 0', width: '100%', textAlign: 'center' }}>
				<Typography
					variant="h6"
					style={{ marginBottom: '3rem' }}
					sx={{ color: 'text.main' }}
				>
					Your cart is empty, please add a product.
				</Typography>
				<LinkButton to="/store">Go To Store</LinkButton>
			</Box>
		)
	}

	const FilledCart = () => {
		return (
			<Flex direction="column" align="center" style={{ width: '100%' }}>
				<Typography
					variant="h4"
					align="center"
					style={{ marginBottom: '2rem' }}
				>
					Your Shopping Cart
				</Typography>
				<Flex
					justify="space-between"
					align="center"
					style={{ width: '100%', margin: '4rem 0' }}
					sx={{
						flexDirection: { xs: 'column !important', sm: 'row !important' },
					}}
				>
					<Typography variant="h5" sx={{ mb: { xs: '2rem', sm: '0' } }}>
						Subtotal: {cart.subtotal.formatted_with_symbol}
					</Typography>
					<Flex>
						<Button
							variant="outlined"
							color="secondary"
							sx={{ color: 'text.main' }}
							onClick={() => emptyCart()}
							size="large"
						>
							Empty Cart
						</Button>
						<LinkButton
							to="/checkout"
							sx={{
								marginLeft: '2rem',
							}}
							size="large"
						>
							Checkout
						</LinkButton>
					</Flex>
				</Flex>
				<Grid sx={{ mb: '6rem' }} container spacing={3}>
					{cart.line_items.map((each) => {
						return (
							<Grid item xs={12} sm={6} md={4}>
								<CartItem product={each} />
							</Grid>
						)
					})}
				</Grid>
			</Flex>
		)
	}

	return (
		<Box
			style={{ paddingTop: '4rem' }}
			sx={{ '& > *': { padding: { xs: '0 5%', sm: '0 15%' } } }}
		>
			{cartLoading ? (
				<Flex justify="center" sx={{ mt: '4rem' }}>
					<CircularProgress />
				</Flex>
			) : cart.total_items ? (
				<FilledCart />
			) : (
				<EmptyCart />
			)}
		</Box>
	)
}
