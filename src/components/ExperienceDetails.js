import React, { Component }  from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Row, Col, Button,ButtonToolbar,ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter, Label,Form, FormGroup,Input,FormText } from 'reactstrap';


class ExperienceDetails extends Component {
    constructor(props)
    {super(props)
     this.state={
           result:'',
           show:false,
           date: new Date()


     }}

    showModal = e => {
        this.setState({
          show: true
        });

      };


      onClose=e=>{
          this.setState({
              show:false
          });
      };

onChange = date => this.setState({ date })


    handler(e)
  {this.setState({
      result:e.target.value
  })};


    render() {


        return (

            <div className='major'>
    <Button color="primary" id='toggler' onClick={e => {this.showModal();}}>CLICK ME</Button>
       <Modal size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      isOpen={this.state.show} >

      <ModalHeader closebutton>
      Experiences
      </ModalHeader>

               <ModalBody>

               <Row>
                   <Col >
                      <Input placeholder="Company Name "/></Col>
                   <Col > <Input placeholder="Designation"/></Col>
                 </Row><br></br>



                <Row>   <Col xs={8} md={6}>
                        <DatePicker  placeholderText="Start Date"
                          selected={this.state.startDate}
                          onChange={this.handleChange}
                        /></Col>

                        <Col xs={8} md={6}>
                               <DatePicker placeholderText="End Date"
                                 selected={this.state.startDate}
                                 onChange={this.handleChange}
                               /><br></br>
                        </Col>
                </Row>

                <Row>
                               <Col xs={8} md={6}></Col>

                                <Col xs={8} md={6}><Input type="checkbox"/>
                                <Label for="checkbox">Are you presently working here</Label>
                                </Col>
                </Row>
                <ButtonToolbar>
      <ButtonGroup size="lg" outlinecolor="primary">
      <Button color="none">B</Button>
      <Button color="none">I</Button>
      <Button color="none">U</Button>
      </ButtonGroup></ButtonToolbar>

<Label for="Description">Description</Label>
<Input type="textarea" name="Description"/>
            </ModalBody><br></br>
            <ModalFooter>
        <Button color='none' onClick={e => {this.onClose(e);}}>CANCEL</Button>
            <Button color='success'>Save and Add More</Button>
            <Button color='success'>Save</Button>
            </ModalFooter>

        </Modal>

            </div>
        )
    }

}
export default ExperienceDetails
