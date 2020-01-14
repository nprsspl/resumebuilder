import React, { Component }  from 'react'

import { InputGroupButtonDropdown,Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Form, FormGroup,InputGroup, InputGroupAddon, InputGroupText, Input,DropdownMenu,DropdownItem,DropdownToggle } from 'reactstrap';

class Personalinfo extends Component {
    constructor(props)
    {super(props)
     this.state={
           dropdown1:false,
           dropdown2:false,
           result:'',
           show:false
           
     }}
     toggledropdown1=e=>{
        this.setState({
         dropdown1:true
        })
    }
    toggledropdown2=e=>{
        this.setState({
         dropdown2:true
        })
    }
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
      closedropdown1=e=>{
          this.setState({
          dowpdown1:false
      });
    };
      
      handler(e)
    {this.setState({
        result:e.target.value
    })};
  

    render() { 
        

        return (
            <div className='major'>
    <Button color="primary" id='toggler' onClick={e => {this.showModal();}}>CLICK ME</Button>
       <Modal  isOpen={this.state.show} >
           <ModalHeader >Personal Information</ModalHeader>
               <ModalBody>
                <InputGroup>
                 <InputGroupAddon addonType="prepend">
                 <InputGroupText>Person</InputGroupText>
                 </InputGroupAddon>
                 <Input placeholder="First Name"/>
                 <Input placeholder="last Name"/>
                 </InputGroup><br></br>
                 <InputGroup >
        
        <Input placeholder="Profession/Functional areas" value={this.state.result}/>
          <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.dropdown1} onClick={e => {this.toggledropdown1();}}  >
          <DropdownToggle split outline >
            
          </DropdownToggle>
              <DropdownMenu value={this.state.result} onChange ={this.handler.bind(this)}  >
                  <DropdownItem value="play" onClick={e=>{this.closedropdown1();}} >PLAY</DropdownItem>
                  <DropdownItem value="play">PLAY</DropdownItem>
                  <DropdownItem value="play">PLAY</DropdownItem>
              </DropdownMenu>
          </InputGroupButtonDropdown>
        
            </InputGroup><br></br>
            <InputGroup>
            <Input placeholder="email"/>
            <InputGroupAddon addonType="prepend">
                 <InputGroupText>@</InputGroupText>
                 </InputGroupAddon>
               <Input placeholder="gmail.com"/>
            </InputGroup><br/>
            <Input placeholder="Mobile number"/><br></br>
            <InputGroup>
            <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.dropdown2} onClick={e=>{this.toggledropdown2();}}>
           
          <DropdownToggle split outline> Add Link    </DropdownToggle>
          <DropdownMenu>
            <DropdownItem >Header</DropdownItem>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
              </InputGroupButtonDropdown>
              <Input placeholder="url"></Input>
            </InputGroup>
            </ModalBody><br></br>
            <ModalFooter>
        <Button onClick={e => {this.onClose(e);}}>CANCEL</Button>
            <Button color='success'>SUBMIT</Button>
            </ModalFooter>
            
        </Modal>
   
            </div>
        )
    }
}

export default Personalinfo