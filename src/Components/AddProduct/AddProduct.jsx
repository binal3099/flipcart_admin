import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { AddProductAsync } from '../../Services/Action/ProductAction'
import { useNavigate } from 'react-router'

function AddProduct() {


    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [InputField, setInputFied] = useState({
        title: '',
        description: '',
        category: '',
        brand: '',
        price: '',
        thumbnail : ''
    })

    const handlechange = (e) => {
        const name = e.target.name;
        console.log(name);
        const value = e.target.value;
        console.log(value);

        setInputFied({ ...InputField, [name]: value })
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log("clikc", InputField);

        dispatch(AddProductAsync(InputField));
        navigate('/view')
    }

    return (
        <>
            <Container>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                        <div className="statbox widget box box-shadow">
                            <div className="widget-header">
                                <div className="row">
                                    <div className="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Add / Manage Product </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-content widget-content-area add-manage-product-2">
                                <div className="row">
                                    <div className="col-xl-12 col-md-12">
                                        <div className="card card-default">
                                            <div className="card-heading"><h2 className="card-title"><span>ADD PRODUCT</span></h2></div>
                                            <div className="card-body">
                                                <div className="card-body">
                                                    <form className="form-horizontal" onSubmit={handleSubmit}>
                                                        <div className="form-group mb-4">
                                                            <div className="row">
                                                                <label className="col-md-4">Name :</label>
                                                                <div className="col-md-8">
                                                                    <input className="form-control" name="title" type="text" value={InputField.title} onChange={handlechange} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-4">
                                                            <div className="row">
                                                                <label className="col-md-4">Description :</label>
                                                                <div className="col-md-8">
                                                                    <textarea rows="4" cols="5" name="description" value={InputField.description} onChange={handlechange} className="form-control"></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-4">
                                                            <div className="row">
                                                                <label className="col-md-4">Category :</label>
                                                                <div className="col-md-8">
                                                                    <select className="form-control form-custom mb-4" name="category" value={InputField.category} onChange={handlechange}>
                                                                        <option value="">Select Category</option>
                                                                        {
                                                                            ["electornics", "Skin care & Hair", "Home & Kitchen", "home-decor"].map((p) => {
                                                                                return (
                                                                                    <option value={p}>{p}</option>

                                                                                )
                                                                            })
                                                                        }
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-4">
                                                            <div className="row">
                                                                <label className="col-md-4">Brand :</label>
                                                                <div className="col-md-8">
                                                                    <select className="form-control form-custom" name="brand" value={InputField.brand} onChange={handlechange}>
                                                                        <option value="">Select a Brand</option>
                                                                        {
                                                                            ["Apple", "Samsung", "OPPO", "Huawei", "Impression of Acqua Di Gio", "Royal_Mirage", "Fog Scent Xpressio", "Al Munakh", "Saaf & Khaas", "Bake Parlor Big", "Dry Rose", "luxury palace", "Golden", "Flying Wooden"].map((p) => {
                                                                                return (
                                                                                    <option value={p}>{p}</option>

                                                                                )
                                                                            })
                                                                        }
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-4">
                                                            <div className="row">
                                                                <label className="col-md-4">Price :</label>
                                                                <div className="col-md-8">
                                                                    <input className="form-control" name="price" type="number" value={InputField.price} onChange={handlechange} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="row">
                                                                <label className="col-md-4">Image :</label>
                                                                <div className="col-md-8">
                                                                    <div className="mb-3">
                                                                        <div className="custom-file">
                                                                            <input type="text" name="thumbnail" value={InputField.thumbnail} onChange={handlechange} className="form-control" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="align-center">
                                                            <button className="btn" type="submit">ADD PRODUCT</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default AddProduct