import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Product_editAsync, get_dataAsync, product_removeAsync } from '../../Services/Action/ProductAction';
import { Container, Row, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router';

function ViewProduct() {

    const navigate = useNavigate()

    const products = useSelector(state => state.products)

    const dispatch = useDispatch();

    const alldata = () => {
        dispatch(get_dataAsync())
    }

    useEffect(() => {
        alldata()
    });


    const handleEdit = async (id, data) => {
        await dispatch(Product_editAsync(id, data));

        navigate(`/edit/:${id}`);

    }

    const handleRemove = async (id) => {
        // console.log("id",id);
        await dispatch(product_removeAsync(id));

    }

    return (
        <>
            <Container>
                <Row>
                    <Table striped bordered hover className='mt-4'>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Product Dec</th>
                                <th>Brand</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((d) => {
                                    // console.log("d", d);
                                    return (
                                        <tr>
                                            <td><img src={d.thumbnail} style={{ width: "100px", height: "100px" }} /></td>
                                            <td>{d.title}</td>
                                            <td>{d.price}</td>
                                            <td>{d.description}</td>
                                            <td>{d.brand}</td>
                                            <td><button className='btn btn-danger' onClick={() => handleRemove(d.id)}>
                                                Remove
                                            </button> ||
                                                <button className='btn btn-primary' onClick={() => handleEdit(d.id, d)}>
                                                    Edit
                                                </button>

                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </Table>
                </Row>
            </Container>
        </>
    )
}

export default ViewProduct