import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import PostVendor from "./PostVendor/PostVendor";
import GetVendor from "./GetVendor/GetVendor";
import UpdateVendor from "./UpdateVendor/UpdateVendor";
import DeleteVendor from "./DeleteVendor/DeleteVendor";

function ControlledTabs() {
  const [key, setKey] = useState("AddVendor");

  return (
    <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
      <Tab eventKey="AddVendor" title="Add Vendor">
        <PostVendor />
      </Tab>
      <Tab eventKey="GetVendor" title="List of Vendors">
        <GetVendor />
      </Tab>
      <Tab eventKey="UpdateVendor" title="Update Vendor">
        <UpdateVendor />
      </Tab>
      <Tab eventKey="DeleteVendor" title="Remove Vendor">
        <DeleteVendor />
      </Tab>
    </Tabs>
  );
}

export default ControlledTabs;
