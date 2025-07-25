import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Sparklines,SparklinesLine  } from 'react-sparklines';
import { Link } from 'react-router-dom';
import MultipleArea from '../../../containers/Chartstypes/Apex/MultipleArea';
import {PieChart} from 'react-easy-chart';
import { Tooltip } from 'reactstrap';
import StackColumn from '../../../containers/Chartstypes/Apex/StackColumn';
import DonutChart from 'react-donut-chart';

class dashboard2 extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
          fb: false,
          tw: false,
          num: false,
          sky: false,

          fb1: false,
          tw1: false,
          num1: false,
          sky1: false,
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
                                        <li className="breadcrumb-item"><Link to="#">Admiria</Link></li>
                                        <li className="breadcrumb-item active">Dashboard 2</li>
                                    </ol>
                                </div>
                                <h4 className="page-title">Dashboard 2</h4>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-xl-3">
                            <div className="mini-stat widget-chart-sm clearfix bg-white">
                            <PieChart
                                size={70}
                                innerHoleSize={50}
                                data={[
                                { key: 'A', value: 100, color: '#f2f2f2' },
                                { key: 'B', value: 200, color: '#3bc3e9' },
                                ]}
                            />
                              
                                <div className="mini-stat-info text-right">
                                    <span className="counter text-info">9541</span>
                                    Total Sales
                                </div>
                                <div className="clearfix"></div>
                                <p className=" mb-0 m-t-20 text-muted">Total income: $22506 <span className="pull-right"><i className="fa fa-caret-up m-r-5"></i>10.25%</span></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="mini-stat widget-chart-sm clearfix bg-white">
                            <PieChart 
                                size={70}
                                data={[
                                { key: 'A', value: 100, color: '#f2f2f2' },
                                { key: 'B', value: 200, color: '#4ac18e' },
                                ]}
                            />
                            
                                <div className="mini-stat-info text-right">
                                    <span className="counter text-lime">36521</span>
                                    New Orders
                                </div>
                                <div className="clearfix"></div>
                                <p className="text-muted mb-0 m-t-20">Total income: $22506 <span className="pull-right"><i className="fa fa-caret-up m-r-5"></i>10.25%</span></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="mini-stat widget-chart-sm clearfix bg-white">
                            <PieChart
                                size={70}   
                                innerHoleSize={50}
                                data={[
                                { key: 'A', value: 100, color: '#f2f2f2' },
                                { key: 'B', value: 200, color: '#ea553d' },
                                ]}
                            />
                             <div className="mini-stat-info text-right">
                                    <span className="counter text-danger">6521</span>
                                    New Users
                                </div>
                                <div className="clearfix"></div>
                                <p className="text-muted mb-0 m-t-20">Total income: $22506 <span className="pull-right"><i className="fa fa-caret-up m-r-5"></i>10.25%</span></p>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="mini-stat widget-chart-sm clearfix bg-white">
                                
                            <PieChart 
                                size={70}
                                data={[
                                { key: 'A', value: 60, color: '#f2f2f2' },
                                { key: 'B', value: 200, color: '#1d1e3a' },
                                ]}
                            />
                            <div className="mini-stat-info text-right">
                                    <span className="counter text-dark">1002</span>
                                    Unique Visitors
                                </div>
                                <div className="clearfix"></div>
                                <p className="text-muted mb-0 m-t-20">Total income: $22506 <span className="pull-right"><i className="fa fa-caret-up m-r-5"></i>10.25%</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-xl-3">
                            <div className="card m-b-20">
                                <div className="card-body">
                                    <h4 className="mt-0 header-title">Monthly Earnings</h4>

                                    <div className="row text-center m-t-20">
                                        <div className="col-6">
                                            <h5 className="">56241</h5>
                                            <p className="text-muted font-14">Marketplace</p>
                                        </div>
                                        <div className="col-6">
                                            <h5 className="">23651</h5>
                                            <p className="text-muted font-14">Total Income</p>
                                        </div>
                                    </div>
                                    <div align="center">
                                    <br></br>
                                    <DonutChart
                                        height = {320}
                                        width = {320}
                                        colors = {['#6d60b0', '#4ac18e', '#5468da']}
                                        legend = {false}
                                        data={[{
                                            label: 'Online',
                                            value: 25,
                                        },
                                        {
                                            label: 'Marketing',
                                            value: 50
                                        },
                                        {
                                            label: 'Offline',
                                            value: 35
                                        }
                                     ]} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6">
                            <div className="card m-b-20">
                                <div className="card-body">
                                    <h4 className="mt-0 header-title">Email Sent</h4>

                                    <div className="row text-center m-t-20">
                                        <div className="col-4">
                                            <h5 className="">56241</h5>
                                            <p className="text-muted font-14">Marketplace</p>
                                        </div>
                                        <div className="col-4">
                                            <h5 className="">23651</h5>
                                            <p className="text-muted font-14">Total Income</p>
                                        </div>
                                        <div className="col-4">
                                            <h5 className="">23651</h5>
                                            <p className="text-muted font-14">Last Month</p>
                                        </div>
                                    </div>
                                    <MultipleArea />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3">
                            <div className="card m-b-20">
                                <div className="card-body">
                                    <h4 className="mt-0 header-title">Monthly Earnings</h4>

                                    <div className="row text-center m-t-20">
                                        <div className="col-6">
                                            <h5 className="">56241</h5>
                                            <p className="text-muted font-14">Marketplace</p>
                                        </div>
                                        <div className="col-6">
                                            <h5 className="">23651</h5>
                                            <p className="text-muted font-14">Total Income</p>
                                        </div>
                                    </div>

                                   <StackColumn />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-4">
                            <div className="card m-b-20">
                                <div className="card-body">
                                    <h4 className="mt-0 m-b-15 header-title">Latest Messages</h4>

                                    <div className="inbox-widget">
                                        <a href="#">
                                            <div className="inbox-item">
                                                <div className="inbox-item-img"><img src="assets/images/users/avatar-1.jpg" className="rounded-circle" alt="" /></div>
                                                <p className="inbox-item-author">Didier Charpentier</p>
                                                <p className="inbox-item-text">Hey! there I'm available...</p>
                                                <p className="inbox-item-date">13:40 PM</p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="inbox-item">
                                                <div className="inbox-item-img"><img src="assets/images/users/avatar-2.jpg" className="rounded-circle" alt="" /></div>
                                                <p className="inbox-item-author">Sacripant Laderoute</p>
                                                <p className="inbox-item-text">I've finished it! See you so...</p>
                                                <p className="inbox-item-date">13:34 PM</p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="inbox-item">
                                                <div className="inbox-item-img"><img src="assets/images/users/avatar-3.jpg" className="rounded-circle" alt="" /></div>
                                                <p className="inbox-item-author">Huon Chalifour</p>
                                                <p className="inbox-item-text">This theme is awesome!</p>
                                                <p className="inbox-item-date">13:17 PM</p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="inbox-item">
                                                <div className="inbox-item-img"><img src="assets/images/users/avatar-4.jpg" className="rounded-circle" alt="" /></div>
                                                <p className="inbox-item-author">Paien Barrientos</p>
                                                <p className="inbox-item-text">Nice to meet you</p>
                                                <p className="inbox-item-date">12:20 PM</p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="inbox-item">
                                                <div className="inbox-item-img"><img src="assets/images/users/avatar-5.jpg" className="rounded-circle" alt="" /></div>
                                                <p className="inbox-item-author">Aubrey St-Jean</p>
                                                <p className="inbox-item-text">Hey! there I'm available...</p>
                                                <p className="inbox-item-date">10:15 AM</p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="inbox-item">
                                                <div className="inbox-item-img"><img src="assets/images/users/avatar-6.jpg" className="rounded-circle" alt="" /></div>
                                                <p className="inbox-item-author">Maurice Monty</p>
                                                <p className="inbox-item-text">This theme is awesome!</p>
                                                <p className="inbox-item-date">9:56 AM</p>
                                            </div>
                                        </a>

                                        <div className="text-center m-t-15">
                                            <a href="#" className="btn btn-sm btn-primary waves-light waves-effect">Load More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="card m-b-20">
                                <div className="card-body">
                                    <h4 className="mt-0 m-b-15 header-title">Recent Activity Feed</h4>

                                    <ol className="activity-feed mb-0">
                                        <li className="feed-item">
                                            <span className="date">Sep 25</span>
                                            <span className="activity-text">Responded to need “Volunteer Activities”</span>
                                        </li>
                                        <li className="feed-item">
                                            <span className="date">Sep 24</span>
                                            <span className="activity-text">Added an interest “Volunteer Activities”</span>
                                        </li>
                                        <li className="feed-item">
                                            <span className="date">Sep 23</span>
                                            <span className="activity-text">Joined the group “Boardsmanship Forum”</span>
                                        </li>
                                        <li className="feed-item">
                                            <span className="date">Sep 21</span>
                                            <span className="activity-text">Responded to need “In-Kind Opportunity”</span>
                                        </li>
                                        <li className="feed-item">
                                            <span className="date">Sep 18</span>
                                            <span className="activity-text">Created need “Volunteer Activities”</span>
                                        </li>
                                        <li className="feed-item">
                                            <span className="date">Sep 17</span>
                                            <span className="activity-text">Attending the event “Some New Event”</span>
                                        </li>
                                    </ol>

                                    <div className="text-center">
                                        <a href="#" className="btn btn-sm btn-primary">Load More</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-xl-4">
                            <div className="card m-b-20">
                                <div className="card-body">
                                    <div className="media">
                                        <img className="d-flex mr-3 rounded-circle img-thumbnail thumb-lg" src="assets/images/users/avatar-2.jpg" alt="Generic placeholder image" />
                                        <div className="media-body">
                                            <h5 className="mt-0 font-18 mb-1">Pauline I. Bird</h5>
                                            <p className="text-muted font-14">Webdeveloper</p>

                            <Tooltip placement="top" isOpen={this.state.fb} target="fbtar" toggle={()=> this.setState({ fb: !this.state.fb  })}>Facebook</Tooltip>
                            <Tooltip placement="top" isOpen={this.state.tw} target="twtar" toggle={()=> this.setState({ tw: !this.state.tw  })}>Twitter</Tooltip>
                            <Tooltip placement="top" isOpen={this.state.num} target="numtar" toggle={()=> this.setState({ num: !this.state.num  })}>1234567890</Tooltip>
                            <Tooltip placement="top" isOpen={this.state.sky} target="skytar" toggle={()=> this.setState({ sky: !this.state.sky  })}>@skypename</Tooltip>
                                    

                                            <ul className="social-links list-inline mb-0">
                                                <li className="list-inline-item">
                                                    <Link to="#" className="tooltips" id="fbtar"><i className="fa fa-facebook"></i></Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link to="#" className="tooltips" id="twtar"><i className="fa fa-twitter"></i></Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link to="#" className="tooltips" id="numtar"><i className="fa fa-phone"></i></Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link to="#" className="tooltips" id="skytar"><i className="fa fa-skype"></i></Link>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card m-b-20">
                                <div className="card-body text-center">
                                    <h1 className="text-danger"><span className="mdi mdi-heart"></span></h1>
                                    <h5 className="font-light">You have a live Order !!</h5>
                                    <p className="text-muted font-14">Align terms and descriptions horizontally by using our
                                        grid system’s predefined classNamees (or semantic mixins).
                                        an ellipsis.</p>
                                </div>
                            </div>

                            <div className="card m-b-20">
                                <div className="card-body">

                                    <div className="media">
                                        <img className="d-flex mr-3 rounded-circle img-thumbnail thumb-lg" src="assets/images/users/avatar-3.jpg" alt="Generic placeholder image" />
                                        <div className="media-body">
                                            <h5 className="mt-0 font-18 mb-1">Ralph L. Alva</h5>
                                            <p className="text-muted font-14">Webdeveloper</p>


                                            <Tooltip placement="top" isOpen={this.state.fb1} target="fbtar1" toggle={()=> this.setState({ fb1: !this.state.fb1  })}>Facebook</Tooltip>
                            <Tooltip placement="top" isOpen={this.state.tw1} target="twtar1" toggle={()=> this.setState({ tw1: !this.state.tw1  })}>Twitter</Tooltip>
                            <Tooltip placement="top" isOpen={this.state.num1} target="numtar1" toggle={()=> this.setState({ num1: !this.state.num1  })}>1234567890</Tooltip>
                            <Tooltip placement="top" isOpen={this.state.sky1} target="skytar1" toggle={()=> this.setState({ sky1: !this.state.sky1  })}>@skypename</Tooltip>
                                    

                                            <ul className="social-links list-inline mb-0">
                                                <li className="list-inline-item">
                                                    <Link to="#" className="tooltips" id="fbtar1"><i className="fa fa-facebook"></i></Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link to="#" className="tooltips" id="twtar1"><i className="fa fa-twitter"></i></Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link to="#" className="tooltips" id="numtar1"><i className="fa fa-phone"></i></Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link to="#" className="tooltips" id="skytar1"><i className="fa fa-skype"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
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

export default dashboard2;   