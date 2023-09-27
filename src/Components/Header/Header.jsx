// import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Button, Container, Form, ListGroup, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

// import { base_url } from '../../Api/Api'

function Header() {

    const navigate = useNavigate()
    const [search, setsearch] = useState([])

    const [inputlist, setinputList] = useState({
        search: ''
    })

    const handleChange = (e) => {
        // console.log("e",e.target);
        let name = e.target.name
        let value = e.target.value

        setinputList({ ...inputlist, [name]: value })

        let search_show = document.getElementById("sea_show")

        if(value){
            search_show.classList.add("show");
        }
        else
        {
            search_show.classList.remove("show");

        }

        // axios.get(base_url + "/products").then((res) => {
        //     // console.log("res",res);

        //     let Search_Data = res.data.filter((e) => {
        //         return e.title.toLowerCase().indexOf(value.toLowerCase()) > -1;
        //     })
        //     setsearch(Search_Data);
        //     // console.log("Search_Data", Search_Data);

        // }).catch((err) => {
        //     console.log("errr", err);
        // })
        // console.log("ser_data",ser_data);


        // console.log("se",set_data);
        // setuserView(set_data);
    }

    const handleClick = ()=>{
        navigate('/login')
    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand onClick={() => navigate('/')} style={{ cursor: "pointer" }}><img src="logo.png" alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex search_form">
                            <div className='d-flex search_data'>
                                <Form.Control type="search" placeholder="Search" className="me-2" onChange={(e) => handleChange(e)} aria-label="Search" />
                                <Button className='btn-light'><BsSearch /></Button>
                            </div>
                            <div className='sear_list' id='sea_show'>
                                <ListGroup>
                                    {
                                        search.map((s) => {
                                            console.log("s", s);
                                            return (
                                                <ListGroup.Item>{s.title}</ListGroup.Item>
                                            )

                                        })
                                    }

                                </ListGroup>

                            </div>
                        </Form>


                    </Navbar.Collapse>
                    <Button variant="light" style={{ margin: "0 20px" }} onClick={handleClick}>Login</Button>
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        {/* <Nav.Link href="#" >View</Nav.Link> */}
                        <NavLink to='/view' className="view_page">View</NavLink>
    

                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
