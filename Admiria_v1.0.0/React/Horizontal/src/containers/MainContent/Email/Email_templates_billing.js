import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Email_templates_billing extends Component{
 
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
                                    <li className="breadcrumb-item"><Link to="#">Email Templates</Link></li>
                                    <li className="breadcrumb-item active">Billing Email</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Billing Email</h4>
                        </div>
                    </div>
                </div>

                    <div className="row">
                        <div className="col-12">
                            <table className="body-wrap" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , width: "100%" , backgroundColor: "#f6f6f6" , margin: "0"}} bgcolor="#f6f6f6">
                                <tr style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , margin: "0"}}>
                                    <td style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , verticalAlign: "top" , margin: "0"}} valign="top"></td>
                                    <td className="container" width="600" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , verticalAlign: "top" , display: "block !important" , maxWidth: "600px !important" , clear: "both !important" ,  margin: "0 auto"}} valign="top">
                                        <div className="content" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , maxWidth: "600px" , display: "block" , margin: "0 auto" , padding: "20px"}}>
                                            <table className="main" width="100%" cellpadding="0" cellspacing="0" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , borderRadius: "3px" , margin: "0" , border: "none"}}>
                                                <tr style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , margin: "0"}}>
                                                    <td className="content-wrap aligncenter" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , verticalAlign: "top" , margin: "0" , padding: "20px" , border: "3px solid #1d1e3a" , borderRadius: "7px" , backgroundColor: "#fff"}} align="center" valign="top">
                                                        <table width="100%" cellpadding="0" cellspacing="0" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , margin: "0"}}>
                                                            <tr style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , margin: "0"}}>
                                                                <td className="content-block" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , verticalAlign :"top" ,  margin : "0" , padding: "0 0 20px"}} valign="top">
                                                                    <h2 className="aligncenter" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "24px" , color : "#000" , lineHeight : "1.2em" , fontWeight : "400" ,  textAlign : "center" , margin : "40px 0 0"}} align="center">Thanks for using <b>ADMIRIA</b>.</h2>
                                                                </td>
                                                            </tr>
                                                            <tr style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , margin: "0"}}>
                                                                <td className="content-block aligncenter" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , verticalAlign: "top" , textAlign : "center" , margin: "0" , padding: "20px" }} align="center" valign="top">
                                                                    <table className="invoice"  style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box"  , fontSize: "14px" , textAlign : "left" , width: "80%" , margin: "40px auto"}}>
                                                                        <tr style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , margin: "0"}}>
                                                                            <td style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box"  , fontSize: "14px" , verticalAlign: "top" , margin: "0" , padding: "5px 0"}} valign="top"><b>Company Name</b>
                                                                                <br style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , margin: "0"}} />Invoice #6521
                                                                                <br style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , margin: "0"}} />August 01 2017
                                                                            </td>
                                                                        </tr>
                                                                        <tr style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , margin: "0"}}>
                                                                            <td style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , verticalAlign: "top" , margin: "0" , padding: "5px 0"}} valign="top">
                                                                                <table className="invoice-items" cellpadding="0" cellspacing="0" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize: "14px" , width: "100%" , margin: "0"}}>
                                                                                    <tr style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , margin: "0"}}>
                                                                                        <td style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , verticalAlign :"top" , borderTopWidth : "1px" , borderTopColor : "#eee" , borderTopStyle : "solid" , margin : "0" , padding: "5px 0"}} valign="top">BS-200 (1 Pc)
                                                                                        </td>
                                                                                        <td className="alignright" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , verticalAlign :"top" , textAlign : "right" , borderTopWidth : "1px" , borderTopColor : "#eee" , borderTopStyle : "solid" , margin : "0" , padding: "5px 0"}} align="right" valign="top">$10.99
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , margin: "0"}}>
                                                                                        <td style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , verticalAlign :"top" , borderTopWidth : "1px" , borderTopColor : "#eee" , borderTopStyle : "solid" , margin : "0" , padding: "5px 0"}} valign="top">BS-400 (2 Pcs)
                                                                                        </td>
                                                                                        <td className="alignright" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , verticalAlign :"top" , textAlign : "right" , borderTopWidth : "1px" , borderTopColor : "#eee" , borderTopStyle : "solid" , margin : "0" , padding: "5px 0"}} align="right" valign="top">$60.00
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , margin: "0"}}>
                                                                                        <td style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , verticalAlign :"top" , borderTopWidth : "1px" , borderTopColor : "#eee" , borderTopStyle : "solid" , margin : "0" , padding: "5px 0"}} valign="top">BS-1000 (1 Pc)
                                                                                        </td>
                                                                                        <td className="alignright" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , verticalAlign :"top" , textAlign : "right" , borderTopWidth : "1px" , borderTopColor : "#eee" , borderTopStyle : "solid" , margin : "0" , padding: "5px 0"}} align="right" valign="top">$600.00
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr className="total" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , margin: "0"}}>
                                                                                        <td className="alignright" width="80%"  style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" ,  verticalAlign : "top" , textAlign : "right" , borderTopWidth : "2px" , borderTopColor : "#333" , borderTopStyle : "solid" , borderBottomColor : "#333" , borderBottomWidth: "2px" , borderBottomStyle : "solid" , fontWeight : "700" , margin : "0" , padding : "5px 0"}} align="right" valign="top">Total
                                                                                        </td>
                                                                                        <td className="alignright"  style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" ,  verticalAlign : "top" , textAlign : "right" , borderTopWidth : "2px" , borderTopColor : "#333" , borderTopStyle : "solid" , borderBottomColor : "#333" , borderBottomWidth: "2px" , borderBottomStyle : "solid" , fontWeight : "700" , margin : "0" , padding : "5px 0"}}>$670.99
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , margin: "0"}}>
                                                                <td className="content-block aligncenter" style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , verticalAlign :"top" , textAlign : "center" , margin : "0" , padding: "0 0 20px"}} align="center" valign="top">
                                                                    Admiria Inc. 2896 Howell Rd, Russellville, AR, 72823
                                                                </td>
                                                            </tr>

                                                            <tr style={{fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , margin: "0"}}>
                                                                <td className="content-block" style={{textAlign : "center" , fontFamily : "'Helvetica Neue',Helvetica,Arial,sans-serif", boxSizing : "border-box" , fontSize : "14px" , verticalAlign :"top" , margin : "0" ,  padding: "0"}} valign="top">
                                                                    © {new Date().getFullYear() - 1} -  {new Date().getFullYear()} Admiria
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div> 
            </div>
           </AUX>
        );
    }
}

export default Email_templates_billing;   