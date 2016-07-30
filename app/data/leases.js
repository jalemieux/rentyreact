// leases.js

var Leases = [
  {
    address: "123 rd dr",
    city: "Eugene",
    state: "OR",
    label: "Dork",
    rent: 3000,
    leaseEnd: "2017/02/14",
    tenant: "John Doe",
    messages: 1,
    alerts: []
  },{
    address: "332 Jefferson Blvd",
    city: "Washington",
    state: "DC",
    label: "Jeff",
    rent: 2033,
    leaseEnd: "2017/10/03",
    tenant: "Mary Jane",
    alerts: [
        "maintenance alert",
        "rent overdue"
    ]
  },
];

module.exports = Leases;