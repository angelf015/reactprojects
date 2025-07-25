import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'react-dropdown/style.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';

class email_compose extends Component{

    constructor(props) {
        super(props);
        this.state = {
            drp_button:false,drp_button1:false,drp_button2:false,
        };
      }
 
render(){
    return(
           <AUX>
                <div className="wrapper">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="page-title-box">
                                <div className="btn-group pull-right">
                                    <ol className="breadcrumb hide-phone p-0 m-0">
                                        <li className="breadcrumb-item"><Link to="#">Email</Link></li>
                                        <li className="breadcrumb-item active">Email Compose</li>
                                    </ol>
                                </div>
                                <h4 className="page-title">Email Compose</h4>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="email-leftbar">
                                <a href="email_compose" className="btn btn-danger btn-rounded btn-custom btn-block waves-effect waves-light">Compose</a>

                                <div className="mail-list m-t-20">
                                    <a href="#" className="active">Inbox <span className="ml-1">(18)</span></a>
                                    <a href="#">Starred</a>
                                    <a href="#">Important</a>
                                    <a href="#">Draft</a>
                                    <a href="#">Sent Mail</a>
                                    <a href="#">Trash</a>
                                </div>

                                <h6 className="m-t-30">Labels</h6>

                                <div className="mail-list m-t-20">
                                    <a href="#"><span className="mdi mdi-arrow-right-drop-circle text-info float-right mt-1 m-l-10"></span>Theme Support</a>
                                    <a href="#"><span className="mdi mdi-arrow-right-drop-circle text-warning float-right mt-1 m-l-10"></span>Freelance</a>
                                    <a href="#"><span className="mdi mdi-arrow-right-drop-circle text-purple float-right mt-1 m-l-10"></span>Social</a>
                                    <a href="#"><span className="mdi mdi-arrow-right-drop-circle text-pink float-right mt-1 m-l-10"></span>Friends</a>
                                    <a href="#"><span className="mdi mdi-arrow-right-drop-circle text-success float-right mt-1 m-l-10"></span>Family</a>
                                </div>

                                <h6 className="m-t-30">Chat</h6>

                                <div className="m-t-20">
                                    <a href="#" className="media">
                                        <img className="d-flex mr-3 rounded-circle" src="assets/images/users/avatar-2.jpg" alt="Generic placeholder image" height="36" />
                                        <div className="media-body chat-user-box">
                                            <p className="user-title m-0">Scott Median</p>
                                            <p className="text-muted">Hello</p>
                                        </div>
                                    </a>

                                    <a href="#" className="media">
                                        <img className="d-flex mr-3 rounded-circle" src="assets/images/users/avatar-3.jpg" alt="Generic placeholder image" height="36" />
                                        <div className="media-body chat-user-box">
                                            <p className="user-title m-0">Julian Rosa</p>
                                            <p className="text-muted">What about our next..</p>
                                        </div>
                                    </a>

                                    <a href="#" className="media">
                                        <img className="d-flex mr-3 rounded-circle" src="assets/images/users/avatar-4.jpg" alt="Generic placeholder image" height="36" />
                                        <div className="media-body chat-user-box">
                                            <p className="user-title m-0">David Medina</p>
                                            <p className="text-muted">Yeah everything is fine</p>
                                        </div>
                                    </a>

                                    <a href="#" className="media">
                                        <img className="d-flex mr-3 rounded-circle" src="assets/images/users/avatar-6.jpg" alt="Generic placeholder image" height="36" />
                                        <div className="media-body chat-user-box">
                                            <p className="user-title m-0">Jay Baker</p>
                                            <p className="text-muted">Wow that's great</p>
                                        </div>
                                    </a>

                                </div>
                            </div>

                            <div className="email-rightbar">
                                <div className="btn-toolbar" role="toolbar">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-primary waves-light waves-effect"><i className="fa fa-inbox"></i></button>
                                        <button type="button" className="btn btn-primary waves-light waves-effect"><i className="fa fa-exclamation-circle"></i></button>
                                        <button type="button" className="btn btn-primary waves-light waves-effect"><i className="fa fa-trash-o"></i></button>
                                    </div>
                                    <div className="btn-group ml-1">

                                            <Dropdown isOpen={this.state.drp_button}  toggle={() => this.setState({ drp_button: !this.state.drp_button })}>
                                                <DropdownToggle className="btn btn-primary wthoutflag" caret>
                                                <i className="fa fa-folder"></i>
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                <DropdownItem>Updates</DropdownItem>
                                                <DropdownItem>Social</DropdownItem>
                                                <DropdownItem>Team Manage</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>

                                            </div>
                                            <div className="btn-group ml-1">
                                            <Dropdown isOpen={this.state.drp_button1}  toggle={() => this.setState({ drp_button1: !this.state.drp_button1 })}>
                                                <DropdownToggle className="btn btn-primary wthoutflag" caret>
                                                <i className="fa fa-tag"></i>
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                <DropdownItem>Updates</DropdownItem>
                                                <DropdownItem>Social</DropdownItem>
                                                <DropdownItem>Team Manage</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>

                                            </div>

                                            <div className="btn-group ml-1">
                                            <Dropdown isOpen={this.state.drp_button2}  toggle={() => this.setState({ drp_button2: !this.state.drp_button2 })}>
                                                <DropdownToggle className="btn btn-primary wthoutflag" caret>
                                                More
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                <DropdownItem>Mark as Unread</DropdownItem>
                                                <DropdownItem>Mark as Important</DropdownItem>
                                                <DropdownItem>Add to Tasks</DropdownItem>
                                                <DropdownItem>Add Star</DropdownItem>
                                                <DropdownItem>Mute</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                            </div>
                                </div>


                                <div className="card m-t-20">
                                    <div className="card-body">

                                        <form role="form">
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="To" />
                                            </div>

                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Subject" />
                                            </div>

                                            <div className="form-group">
                                            <Editor
                                                toolbarClassName="toolbarClassName"
                                                wrapperClassName="wrapperClassName"
                                                editorClassName="editorClassName" />
                                            </div>

                                            <div className="btn-toolbar form-group m-b-0">
                                                <div className="">
                                                    <button type="button" className="btn btn-success waves-effect waves-light m-r-5"><i className="fa fa-floppy-o"></i></button>
                                                    <button type="button" className="btn btn-success waves-effect waves-light m-r-5"><i className="fa fa-trash-o"></i></button>
                                                    <button className="btn btn-purple waves-effect waves-light"> <span>Send</span> <i className="fa fa-send m-l-10"></i> </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
                
           </AUX>
        );
    }
}

export default email_compose;   