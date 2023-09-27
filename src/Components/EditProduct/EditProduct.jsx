import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { product_updateAsync } from '../../Services/Action/ProductAction';

function EditProduct() {


    // const [validated, setValidated] = useState(false);

    const dispatch = useDispatch();

    const navigate = useNavigate()

    const { product } = useSelector(state => state)

    const [inputList, setinputList] = useState(product);

    const handlechange = (e) => {
        let name = e.target.name;
        let value = e.target.value

        setinputList({ ...inputList, [name]: value }, e.target.files)
        // setinputList(e.target.files)
        // console.log("name",name);

    }

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log("inputyList", inputList);

        dispatch(product_updateAsync(inputList.id, inputList));

        navigate('/view')

        setinputList({
            title: '',
            description: '',
            category: '',
            brand: '',
            price: '',
            thumbnail : ''
        })



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
                                                                    <input className="form-control" name="title" type="text" value={inputList.title} onChange={handlechange} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-4">
                                                            <div className="row">
                                                                <label className="col-md-4">Description :</label>
                                                                <div className="col-md-8">
                                                                    <textarea rows="4" cols="5" name="description" value={inputList.description} onChange={handlechange} className="form-control"></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-4">
                                                            <div className="row">
                                                                <label className="col-md-4">Category :</label>
                                                                <div className="col-md-8">
                                                                    <select className="form-control form-custom mb-4" name="category" value={inputList.category} onChange={handlechange}>
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
                                                                    <select className="form-control form-custom" name="brand" value={inputList.brand} onChange={handlechange}>
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
                                                                    <input className="form-control" name="price" type="number" value={inputList.price} onChange={handlechange} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="row">
                                                                <label className="col-md-4">Image :</label>
                                                                <div className="col-md-8">
                                                                    <div className="mb-3">
                                                                        <div className="custom-file">
                                                                            <input type="text" name="thumbnail" value={inputList.thumbnail} onChange={handlechange} className="form-control" />
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

export default EditProduct