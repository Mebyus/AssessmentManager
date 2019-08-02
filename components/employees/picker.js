class EmployeePickerComponent {
    constructor() {

    }

    init() {
        console.log("employee picker loaded.");
    }

    getWebixUI() {
        let tableToolbar = {
            id: "employeeTableToolbar",
            view: "toolbar",
            elements: [
                {id: "createEmployeeButton", view:"button", value: "New"},
            ]
        }
        
        let table = {
            id: "employeeTable",
            view: "datatable",
            columns: [
                {id:"id", header:"id", minWidth:60},
                {id:"name", header:"Name", fillspace:true},
            ],
            select: true,
            data: employeeTestData,
        }

        let employeePickerUI = {
            id: "employeePicker",
            gravity: 1,
            rows: [
                tableToolbar,
                table,
            ]
        }

        return employeePickerUI;
    }
}

let employeeTestData = [
    {id:1, name:"Rudolf"},
    {id:2, name:"Jane"},
    {id:3, name:"Quentin"},
    {id:4, name:"Van-der Varden"},
];