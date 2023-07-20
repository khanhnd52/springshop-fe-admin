import React, { Component } from "react";
import ContentHeader from "../common/ContentHeader";
import ManufacturerList from "./ManufacturerList";
import withRouter from "../../helpers/withRouter";

class ListManufacturers extends Component {
  render() {
    const { navigate } = this.props.router;
    return (
      <div>
        <ContentHeader
          navigate={navigate}
          title="List Manufacturers"
          className="site-page-header"
        ></ContentHeader>

        <ManufacturerList></ManufacturerList>
      </div>
    );
  }
}

export default withRouter(ListManufacturers);
