class EmployeeViewerComponent {
    constructor() {
    }

    init() {
        console.log("employee viewer loaded.");
    }

    getWebixUI() {
        let toolbarUI = {
            id: "employeeViewerToolbar",
            view: "toolbar",
            elements: [
                {view:"label", label:"Employee info", align:"center"},
                {view:"button", value:"Confirm"},
                {view:"button", value:"Edit"},
                {view:"button", value:"Delete"},
            ],
        }

        let personalInfoForm = {
            view: "form",
            elements: [{cols:[
                {
                    rows:
                    [
                        {label: "First Name", labelPosition: "top", view:"text", placeholder: "First Name"},
                        {label: "Middle Name", labelPosition: "top", view:"text", placeholder: "Middle Name"},
                        {label: "Last Name", labelPosition: "top", view: "text", placeholder: "Last Name"},
                    ]
                },
            ]}],
        }

        let employeeCanlendar = {
            view:"calendar",
            id:"employeeCalendar",
            date:new Date(),
            weekHeader:true,
            events:webix.Date.isHoliday,
            width:300,
            height:250
        };

        let employeeCalendarToolbar = {
            view:"toolbar",
            id:"employeeCalendarToolbar",
            rows: [
                {view:"button", value:"Assign"},
                {view:"button", value:"Dismiss"},
            ]
        }

        let scrollableViewverPartUI = {
            rows:[
                personalInfoForm,
                {},
                {
                    cols:[
                        employeeCanlendar,
                        employeeCalendarToolbar,
                        {},
                    ]
                },
            ]
        }

        let viewerUI = {
            id: "employeeViewer",
            gravity:2,
            rows: [
                toolbarUI,
                {
                    view:"scrollview",
                    scroll:"auto",
                    body: scrollableViewverPartUI,
                }
            ],
        }

        return viewerUI;
    }
}