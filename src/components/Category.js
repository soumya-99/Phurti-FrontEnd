import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'

function Category() {

    const API_ENDPOINT = "http://127.0.0.1:8000/"

    const [categories, setCategories] = useState([])

    const refreshList = async () => {
		const { data: category } = await axios.get(`${API_ENDPOINT}category`)
		setCategories(category)
	}

    useEffect(() => {
        refreshList()
    }, [])

    return (
        <div>
            <h2>Categories</h2>
            {categories.map(category => (
                <Button key={category.categoryName} style={{marginRight: 5}} variant="primary">{category.categoryName}</Button>
            ))}
            <hr />
        </div>
    )
}

export default Category
