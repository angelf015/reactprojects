import { useState } from 'react';
import { Row, Col, Card, Form, Button, ProgressBar, Tab, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

// hooks
import { usePageTitle } from '../../hooks';

// components
import { FormInput } from '../../components/form/';

const BasicWizard = () => {
    // active tab key
    const [key, setKey] = useState<string | null>('account');

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3"> Basic Wizard</h4>

                <Tab.Container
                    id="basic-wizard-tabs"
                    defaultActiveKey="account"
                    activeKey={key ? key : 'account'}
                    onSelect={(k) => setKey(k)}
                >
                    <Nav variant="pills" as="ul" className="nav-justified bg-light form-wizard-header mb-4">
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to="#" eventKey="account" className="rounded-0 pt-2 pb-2">
                                <i className="mdi mdi-account-circle me-1"></i>
                                <span className="d-none d-sm-inline">Account</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to="#" eventKey="profile" className="rounded-0 pt-2 pb-2">
                                <i className="mdi mdi-face-profile me-1"></i>
                                <span className="d-none d-sm-inline">Profile</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to="#" eventKey="contact" className="rounded-0 pt-2 pb-2">
                                <i className="mdi mdi-checkbox-marked-circle-outline me-1"></i>
                                <span className="d-none d-sm-inline">Finish</span>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content className="pb-0 mb-0 pt-0">
                        <Tab.Pane eventKey="account">
                            <Form>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label htmlFor="uname" column md={3}>
                                        User name
                                    </Form.Label>
                                    <Col md={9}>
                                        <Form.Control
                                            type="text"
                                            name="uname"
                                            id="uname"
                                            defaultValue="Coderthemes"
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label htmlFor="examplePassword" column md={3}>
                                        Password
                                    </Form.Label>
                                    <Col md={9}>
                                        <Form.Control
                                            type="password"
                                            name="examplePassword"
                                            id="examplePassword1"
                                            defaultValue="12345"
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label htmlFor="examplerePassword" column md={3}>
                                        Re-Password
                                    </Form.Label>
                                    <Col md={9}>
                                        <Form.Control
                                            type="password"
                                            name="exampleRepassword"
                                            id="examplerePassword1"
                                            defaultValue="12345"
                                        />
                                    </Col>
                                </Form.Group>

                                <ul className="pager wizard mb-0 list-inline text-end mt-2">
                                    <li className="next list-inline-item">
                                        <Button
                                            onClick={() => setKey('profile')}
                                            variant="secondary"
                                        >
                                            Next
                                        </Button>
                                    </li>
                                </ul>
                            </Form>
                        </Tab.Pane>
                        <Tab.Pane eventKey="profile">
                            <Form>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label htmlFor="fname" column md={3}>
                                        First name
                                    </Form.Label>
                                    <Col md={9}>
                                        <Form.Control
                                            type="text"
                                            name="fname"
                                            id="fname1"
                                            defaultValue={'Francis'}
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label htmlFor="lname" column md={3}>
                                        Last name
                                    </Form.Label>
                                    <Col md={9}>
                                        <Form.Control
                                            type="text"
                                            name="lname"
                                            id="lname1"
                                            defaultValue={'Brinkman'}
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label htmlFor="phone" column md={3}>
                                        Email
                                    </Form.Label>
                                    <Col md={9}>
                                        <Form.Control
                                            type="email"
                                            name="exampleemail"
                                            id="exampleemail"
                                            defaultValue={'cory1979@hotmail.com'}
                                        />
                                    </Col>
                                </Form.Group>

                                <ul className="pager wizard mb-0 list-inline mt-2">
                                    <li className="previous list-inline-item">
                                        <Button
                                            onClick={() => setKey('account')}
                                            variant="secondary"
                                        >
                                            Previous
                                        </Button>
                                    </li>
                                    <li className="next list-inline-item float-end">
                                        <Button
                                            onClick={() => setKey('contact')}
                                            variant="secondary"
                                        >
                                            Next
                                        </Button>
                                    </li>
                                </ul>
                            </Form>
                        </Tab.Pane>
                        <Tab.Pane eventKey="contact">
                            <Form>
                                <Row>
                                    <Col sm={12}>
                                        <div className="text-center">
                                            <h2 className="mt-0">
                                                <i className="mdi mdi-check-all"></i>
                                            </h2>
                                            <h3 className="mt-0">Thank you !</h3>

                                            <p className="w-75 mb-2 mx-auto">
                                                Quisque nec turpis at urna dictum luctus. Suspendisse
                                                convallis dignissim eros at volutpat. In egestas mattis
                                                dui. Aliquam mattis dictum aliquet.
                                            </p>

                                            <div className="mb-3">
                                                <Form.Check
                                                    type="checkbox"
                                                    id="check-box-1"
                                                    className="d-inline-block"
                                                >
                                                    <Form.Check.Input type="checkbox" />{' '}
                                                    <Form.Check.Label>
                                                        I agree with the Terms and Conditions
                                                    </Form.Check.Label>
                                                </Form.Check>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <ul className="pager wizard mb-0 list-inline">
                                    <li className="previous list-inline-item">
                                        <Button
                                            onClick={() => setKey('profile')}
                                            variant="secondary"
                                        >
                                            Previous
                                        </Button>
                                    </li>
                                    <li className="next list-inline-item float-end">
                                        <Button variant="primary">Submit</Button>
                                    </li>
                                </ul>
                            </Form>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Card.Body>
        </Card>
    );
};

const FormWizard = () => {
    // set pagetitle
    usePageTitle({
        title: 'Form Wizard',
        breadCrumbItems: [
            {
                path: '/forms/wizard',
                label: 'Forms',
            },
            {
                path: '/forms/wizard',
                label: 'Form Wizard',
                active: true,
            },
        ],
    });

    return (
        <>
            <Row>
                <Col xl={12}>
                    <BasicWizard />
                </Col>
            </Row>
        </>
    );
};

export default FormWizard;