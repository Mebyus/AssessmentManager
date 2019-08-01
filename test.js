candidateTestData = [
    {id: 1, name: "Tim", year: 1993},
    {id: 2, name: "Mike", year: 1990},
    {id: 3, name: "John", year: 2003},
    {id: 4, name: "Moe", year: 1988},
    {id: 5, name: "Jake", year: 1995},
]

let candidateTableToolbar = {
    id: "candidateListToolbar",
    view: "toolbar",
    elements: [
        {id: "createCandidateButton", view:"button", value: "New"},
    ]
}

let candidateTable = {
    id: "candidateTable",
    view: "datatable",
    columns: [
        {id:"id", header:"", width:50},
        {id:"name", header:"Name", width:300},
        {id:"year", header:"Year", width:100},
    ],
    autowidth:true,
    select:true,
    data:candidateTestData,
}

let candidatePersonalInfoForm = {
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
        {rows:[
        {
            label: "Birthdate",
            labelPosition: "top", 
            view:"datepicker", 
            value: new Date(), 
        },
        {},
    ],
    },
    ],
    },
    ]
}

let candidateAssessmentForm = {
    view: "form",
    elements: [
        {label: "Date", labelPosition: "top", view:"combo", value:"27 Aug",
            options:["27 Aug", "13 Jul", "14 Sep", "9 Aug"]}
    ],
}

let candidateContactForm = {
    view: "form",
    elements: [
        {label: "Email", labelPosition: "top", view:"text", placeholder: "myawesome@randommail.com"},
        {label: "Phone", labelPosition: "top", view:"text", placeholder: "+7 931 284 30 31"},
    ]
}

let candidateViewer = {
    id: "candidateViewer",
    rows: [
        {
            view: "toolbar",
            elements: [
                {view:"button", value:"Confirm"},
                {view:"button", value:"Edit"},
                {view:"button", value:"Delete"},
            ] 
        },
        {view: "label", label: "Personal info", align: "center"},
        candidatePersonalInfoForm,
        {
        cols: [{ rows: [
            {view: "label", label: "Contacts", align: "center"},
            candidateContactForm,
        ]
        },
        {rows: [
            {view: "label", label: "Assessment", align: "center"},
            candidateAssessmentForm,
        ]}
        ],
        },
        {},
    ]
}

let candidatePicker = {
    id: "candidatePicker",
    rows: [
        candidateTableToolbar,
        candidateTable,
    ]
}

let candidatesWorkspace = {
    id:"candidatesWorkspace",
    cols: [
        candidatePicker,
        candidateViewer,
    ]
}

webix.ui({
    id:"tabView",
    // container:"appBlock",
    view:"tabview",
    cells:[     
        {
            header: "Candidates",
            body: candidatesWorkspace,
        },
        { 
            header:"Assessments", 
            body:{
                template:"Assessment content"
            } 
        },
        {
            header:"Employees",
            body:{
                template:"Employees content"
            }
        },
    ]
});
