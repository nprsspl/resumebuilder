import React, { Component }  from 'react'
import DatePicker from 'react-date-picker';
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label,Form, FormGroup,Input,FormText } from 'reactstrap';


class ExperienceDetails extends Component {
    constructor(props)
    {super(props)
     this.state={

           dropdown1:false,
           dropdown2:false,
           result:'',
           show:false,
      date: new Date()

     }}
     row :[
             {marks:'',division:''}

       ]

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
       <Modal  isOpen={this.state.show} >
      <ModalHeader closebutton>Expereinces</ModalHeader>
               <ModalBody>

               <Row>
                   <Col>
                      <Input placeholder="Company Name "/></Col>
                   <Col> <Input placeholder="Designation"/></Col>
                 </Row>


                <Row> <Col><Label for="Start">Start Date</Label></Col>
                      <Col><Label for="End">End Date</Label></Col>
                </Row>

                <Row>   <Col>             <DatePicker
                                    onChange={this.onChange}
                                    value={this.state.date}/>
                                    </Col>

                  <Col>   <DatePicker
                         onChange={this.onChange}
                         value={this.state.date}/><br></br>
<Input type="checkbox">Are you Currently working here </Input>
                  </Col>
                </Row>

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
