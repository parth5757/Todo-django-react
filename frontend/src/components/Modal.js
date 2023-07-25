import React, {Component} from "react";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from 'reactstrap';
import {
    Button,
    Modal,
    ModalHeader, // Change 'ModalHeder' to 'ModalHeader'
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';


class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activeItem: this.props.activeItem
        };
    }

    handleChange = e => {
        let { name, value } = e.target;
        if(e.target.type === "checkbox") {
            value = e.target.checked;
        }
        const activeItem = { ...this.state.activeItems, [name]: value};
        this.setState({ activeItem })
    };
    
    render(){
        const { toggle, onSave } = this.props;
        return (
            <Modal isOpen =  {true} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                Task Item
                </ModalHeader>
                <ModalBody>
                    <Form>
                        {/* title */}
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input
                                type="text"
                                name="title"
                                value={this.state.activeItem.title}
                                onChange={this.handleChange}
                                placeholder="Enter Task Title"
                            />
                         </FormGroup>
                         {/* 2 description of task */}
                         <FormGroup>
                            <Label for="description">Description</Label>
                            <Input 
                                type="text"
                                name="description"
                                value={this.state.activeItem.description}
                                onChange={this.handleChange}
                                placeholder="Enter Task Description"
                            />
                         </FormGroup>

                         {/* 3  Completed label */}
                         <FormGroup check>
                            <Label for="completed">
                                <Input 
                                    type="checkbox"
                                    name="completed"
                                    checked={this.state.activeItem.completed}
                                    onChange={this.handleChange}
                                />
                                Completed  
                            </Label>
                         </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <button color="success" onClick={() => onSave(this.state.activeItem)}>
                        Save
                    </button>
                </ModalFooter>
            </Modal>
        ) 
    }
}

export default CustomModal;