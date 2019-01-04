import React, { Component } from 'react';
import { Button, Label, Col, Row } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import { sendCall, sendText } from '../redux/ActionCreators';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));

class Simulation extends Component {
	
	handleSubmit(values) {
		if (values.contactType === 'Call Yourself') {
        	sendCall(values.personaltel)
        } else if (values.contactType === 'Text Emergency Contacts') {
        	sendText(values.personalname, values.friendname1, values.friendtel1, values.friendname2, values.friendtel2)
        }
	}
    

	render(){
		return(
			<div className="row row-content">
				<div className="col-12">
					<hr/>
	                <h2>Pinch Simulation</h2>
	                <hr/>
	            </div>
	            <div className="col-9">
	                <p>Each bracelet will already have information about its owner configured. By tapping
	                another bracelet, you receive the information stored in that bracelet. So, you would
	                only ever have to set up your own information on the bracelet. For simulation purposes,
	                please enter the emergency contact information for two other hypothetical bracelet owners
	                and the option you want to test with the bracelet. </p>
	            </div>
				<div className = "col-12 col-md-9">
					<Form model="simulation" onSubmit={(values) => this.handleSubmit(values)}>
		                <Row className="form-group">
		                    <Label htmlFor="personalname" md={4}>Your Name</Label>
		                    <Col md={8}>
		                        <Control.text model=".personalname" id="personalname" name="personalname"
		                            placeholder="Your First Name"
		                            className="form-control"
		                            validators={{
		                                required, minLength: minLength(3), maxLength: maxLength(15)
		                            }} />
		                        <Errors
		                            className="text-danger"
		                            model=".personalname"
		                            show="touched"
		                            messages={{
		                                required: 'Required. ',
		                                minLength: 'Must be greater than 2 characters. ',
		                                maxLength: 'Must be 15 characters or less. '
		                            }}
		                        />
		                    </Col>
		                </Row>
		                <Row className="form-group">
		                    <Label htmlFor="personaltel" md={4}>Your Phone</Label>
		                    <Col md={8}>
		                        <Control.text model=".personaltel" id="personaltel" name="personaltel"
		                            placeholder="Your Phone Number"
		                            className="form-control"
		                            validators={{
		                                required, minLength: minLength(3), maxLength: maxLength(15), isNumber
		                            }} />
		                        <Errors
		                            className="text-danger"
		                            model=".personaltel"
		                            show="touched"
		                            messages={{
		                                required: 'Required. ',
		                                minLength: 'Must be greater than 2 numbers. ',
		                                maxLength: 'Must be 15 numbers or less. ',
		                                isNumber: 'Must be a number. '
		                            }}
		                        />
		                    </Col>
		                </Row>
		                <Row className="form-group">
		                    <Label htmlFor="friendname1" md={4}>Emergency Contact Name</Label>
		                    <Col md={8}>
		                        <Control.text model=".friendname1" id="friendname1" name="friendname1"
		                            placeholder="Emergency Contact Name"
		                            className="form-control"
		                            validators={{
		                                minLength: minLength(3), maxLength: maxLength(15)
		                            }} />
		                        <Errors
		                            className="text-danger"
		                            model=".friendname1"
		                            show="touched"
		                            messages={{
		                                minLength: 'Must be greater than 2 characters. ',
		                                maxLength: 'Must be 15 characters or less. '
		                            }}
		                        />
		                    </Col>
		                </Row>
		                <Row className="form-group">
		                    <Label htmlFor="friendtel1" md={4}>Emergency Contact Phone</Label>
		                    <Col md={8}>
		                        <Control.text model=".friendtel1" id="friendtel1" name="friendtel1"
		                            placeholder="Emergency Contact Phone"
		                            className="form-control"
		                            validators={{
		                                minLength: minLength(3), maxLength: maxLength(15), isNumber
		                            }} />
		                        <Errors
		                            className="text-danger"
		                            model=".friendtel1"
		                            show="touched"
		                            messages={{
		                                minLength: 'Must be greater than 2 numbers. ',
		                                maxLength: 'Must be 15 numbers or less. ',
		                                isNumber: 'Must be a number. '
		                            }}
		                        />
		                    </Col>
		                </Row>
		                <Row className="form-group">
		                    <Label htmlFor="friendname2" md={4}>Emergency Contact Name</Label>
		                    <Col md={8}>
		                        <Control.text model=".friendname2" id="friendname2" name="friendname2"
		                            placeholder="Emergency Contact Name"
		                            className="form-control"
		                            validators={{
		                                minLength: minLength(3), maxLength: maxLength(15)
		                            }} />
		                        <Errors
		                            className="text-danger"
		                            model=".friendname2"
		                            show="touched"
		                            messages={{
		                                minLength: 'Must be greater than 2 characters. ',
		                                maxLength: 'Must be 15 characters or less. '
		                            }}
		                        />
		                    </Col>
		                </Row>
		                <Row className="form-group">
		                    <Label htmlFor="friendtel2" md={4}>Emergency Contact Phone</Label>
		                    <Col md={8}>
		                        <Control.text model=".friendtel2" id="friendtel2" name="friendtel2"
		                            placeholder="Emergency Contact Phone"
		                            className="form-control"
		                            validators={{
		                                minLength: minLength(3), maxLength: maxLength(15), isNumber
		                            }} />
		                        <Errors
		                            className="text-danger"
		                            model=".friendtel2"
		                            show="touched"
		                            messages={{
		                                minLength: 'Must be greater than 2 numbers. ',
		                                maxLength: 'Must be 15 numbers or less. ',
		                                isNumber: 'Must be a number. '
		                            }}
		                        />
		                    </Col>
		                </Row>
		                <Row className="form-group">
		                	<Label htmlFor="contactType" md={4}>Pinch Action Options</Label>
                            <Col md={8}>
                                <Control.select model=".contactType" name="contactType"
                                    className="form-control">
                                    <option>Call Yourself</option>
                                    <option>Text Emergency Contacts</option>
                                </Control.select>
                            </Col>
                        </Row>
		                <Row className="form-group">
		                    <Col md={{size:10}}>
		                        <Button type="submit" color="primary"> Submit </Button>
		                    </Col>
		                </Row>
		            </Form>
		        </div>
	        </div>
		)
	}
}

export default Simulation;