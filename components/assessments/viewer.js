class AssessmentViewerComponent {
    constructor() {
    }

    init() {
        console.log("assessment viewer loaded.");
    }

    getWebixUI() {
        let employeesSelectorUI = {
            id:"employeesSelector",
            view:"form",
            rows:[
                {view:"multitext", label:"Employee", suggest:testEmployeeSelectionOptions,
                // on: {
                //     "onSectionAdd":handleSectionAdd,
                // }
                // options:testEmployeeSelectionOptions,
                // on:{
                //     "onChange": handleChange,
                // },
            }
            ],
        }

        let toolbarUI = {
            id: "assessmentsViewerToolbar",
            view: "toolbar",
            elements: [
                {view:"label", label:"Assessment info", align:"center"},
                {view:"button", value:"Confirm"},
                {view:"button", value:"Edit"},
                {view:"button", value:"Delete"},
            ],
        }

        let dateTimeFormUI = {
            view: "form",
            rows:[
                {view:"datepicker", timepicker:true, label: "Date", labelPosition: "top"},
                {view:"text", label: "Time"},
            ],
        }

        let dateTimeUI = {
            id: "assessmentsDateTimeForm",
            rows:[
                {view: "label", label: "Date & Time", align: "center"},
                dateTimeFormUI,
            ]
        }

        let scrollableViewverPartUI = {
            rows:[
                dateTimeUI,
                employeesSelectorUI,
                {},
            ]
        }

        let viewerUI = {
            id: "assessmentsViewer",
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

let testEmployeeSelectionOptions = [
    {id:1, value:"Rudolf"},
    {id:2, value:"Jane"},
    {id:3, value:"Quentin"},
    {id:4, value:"Van-der Varden"},
];

let testEmployeeSelected = [];

function handleSectionAdd(id, index) {
    $$(id).suggest = testEmployeeSelectionOptions;
}

// function handleChange(newValue, oldValue) {
//     index = testEmployeeSelected.indexOf(oldValue);
//     if (index !== -1) {
//         testEmployeeSelected.splice(index, 1);
//     }
//     testEmployeeSelected.push(newValue);
//     if (testEmployeeSelectionOptions) {
//         let newRichSelect = {
//             view:"richselect", label:"Employee", 
//             options:testEmployeeSelectionOptions, 
//             on:{
//                 "onChange": handleChange,
//             }
//         }

//         $$("employeesSelector").addView(newRichSelect);
//     }
// }