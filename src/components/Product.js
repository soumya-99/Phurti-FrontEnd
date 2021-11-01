import { useState, useEffect } from "react"
import { Badge, Card } from "react-bootstrap"
import axios from "axios"

function Product() {
	const API_ENDPOINT = "http://127.0.0.1:8000/"

	const [products, setProducts] = useState([])

	const refreshList = async () => {
		const { data: products } = await axios.get(`${API_ENDPOINT}product`)
		setProducts(products)
	}

	useEffect(() => {
		refreshList()
	}, [])

	return (
		<div>
			<h2>Products</h2>

			<div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
				{products.map((product) => (
					<Card key={product.productName} className="m-2" style={{ width: "18rem" }}>
						<Card.Header>{product.productName}</Card.Header>
						<Card.Body>
							<Card.Title>{product.productName}</Card.Title>
							<Card.Text>
                                {product.productDescription}
							</Card.Text>
							<h5><Badge bg="danger">{product.price}/-</Badge></h5>
						</Card.Body>
					</Card>
				))}
			</div>
		</div>
	)
}

export default Product
