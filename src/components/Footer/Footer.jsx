import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Form, Button } from 'react-bootstrap'

import './Footer.css'

const Footer = () => {
    return (
        <BrowserRouter>
            <MDBFooter color="blue-grey" className="page-footer font-small lighten-5 pt-0">
                <div style={{ backgroundColor: "#008f11" }}>
                    <MDBContainer>
                        <MDBRow className="py-4 d-flex align-items-center">
                            
                        </MDBRow>
                    </MDBContainer>
                </div>
                <MDBContainer className="mt-5 mb-4 text-center text-md-left">
                    <MDBRow className="mt-3">
                        <MDBCol md="3" lg="3    " xl="3" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong style={{marginLeft: '85%'}}>Agrocraft</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                            <p style={{textAlign: 'center',width:'200%'}}>
                                The purpose of Agrocraft is to provide connections between different roles in the agriculture industry. As the farmers are not getting a fair price for their goods because of contractors. This app removes the requirement of contractors for farmers. Farmers can buy their required needs for farming from Sellers and they can also sell their products to the Consumers
                            </p>
                        </MDBCol>
                        {/* <MDBCol md="2" lg="2" xl="2" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Links</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                            <p><Link to="/farmer" className="dark-grey-text">Famer</Link></p>
                            <p><Link to="/consumer" className="dark-grey-text">Consumer </Link></p>
                            <p><Link to="/supplier" className="dark-grey-text">Supplier</Link></p>
                            <p><Link to="/cart" className="dark-grey-text">Cart</Link></p>
                        </MDBCol> */}
                        <MDBCol md="3" lg="3" xl="4"  className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong style={{marginLeft:'120%'}}>Contact</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                            
                            <p style={{marginLeft:'110%',width:'60%'}}><i className="fa fa-envelope mr-3" /> agrocraft@gmail.com</p>
                            <p style={{marginLeft:'110%',width:'50%'}}><i className="fa fa-phone mr-3" /> + 01 234 567 88</p>
                            <p style={{marginLeft:'110%',width:'50%'}}><i className="fa fa-print mr-3" /> + 01 234 567 89</p>
                        </MDBCol>
                        {/* <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Get in touch</strong>
                            </h6>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Comment</Form.Label>
                                    <Form.Control as="textarea" rows={3} type="text" placeholder="Write Your Thoughts" />
                                </Form.Group>
                                <Button variant="primary" type="submit">Send message</Button>
                            </Form>
                        </MDBCol> */}
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                         
                    www.Agrocraft.com
                </MDBContainer>
                </div>
            </MDBFooter>
        </BrowserRouter>
    )
}

export default Footer
