import { Table as AntTable } from "antd";
import React, { useState, useEffect } from "react";
import { getRentalServices } from "../services/rentalService";
import SearchBox from "./searchBox";
import _ from "lodash";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.name - b.name,
  },
  {
    title: "Code",
    dataIndex: "code",
    key: "code",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.code - b.code,
  },
  {
    title: "Availability",
    key: "availability",
    dataIndex: "availability",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.availability - b.availability,
    render: (availability) => <span> {availability ? "True" : "False"} </span>,
  },
  {
    title: "Need to repair",
    key: "needing_repair",
    dataIndex: "needing_repair",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.needing_repair - b.needing_repair,
    render: (needing_repair) => (
      <span> {needing_repair ? "True" : "False"} </span>
    ),
  },
  {
    title: "Durability",
    key: "durability",
    dataIndex: "durability",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.durability - b.durability,
  },
  {
    title: "Mileage",
    key: "mileage",
    dataIndex: "mileage",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.mileage - b.mileage,
  },
];

const Table = () => {
  const [rentalServices, setRentalServices] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    const rentalServices = getRentalServices();
    setRentalServices(rentalServices);
    setSearchData(rentalServices);
  }, [rentalServices]);

  const handleSearch = (value) => {
    const reg = new RegExp(value, "gi");
    const filteredData = _.map(rentalServices, (service) => {
      const nameMatch = _.get(service, "name").match(reg);
      const codeMatch = _.get(service, "code").match(reg);
      if (!nameMatch && !codeMatch) {
        return null;
      }
      return service;
    }).filter((service) => !!service);
    setSearchString(value);
    setSearchData(filteredData);
  };

  return (
    <React.Fragment>
      <SearchBox
        value={searchString}
        onChange={(value) => handleSearch(value)}
      />
      <AntTable
        columns={columns}
        dataSource={searchData}
        pagination={{ pageSize: 7 }}
      />
    </React.Fragment>
  );
};

export default Table;
