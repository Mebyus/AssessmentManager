class CandidateViewerComponent {
    constructor() {

    }

    init() {
        console.log("candidate viewer loaded.");
    }

    getWebixUI() {
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
        
        let assessmentForm = {
            view: "form",
            elements: [
                {label: "Date", labelPosition: "top", view:"combo", value:"27 Aug",
                    options:["27 Aug", "13 Jul", "14 Sep", "9 Aug"]}
            ],
        }
        
        let contactForm = {
            view: "form",
            elements: [
                {label: "Email", labelPosition: "top", view:"text", placeholder: "myawesome@randommail.com"},
                {label: "Phone", labelPosition: "top", view:"text", placeholder: "+7 931 284 30 31"},
            ]
        }

        let scrollableViewerPartUI = { rows:[
            personalInfoForm,
                {
                cols: [{ rows: [
                    {view: "label", label: "Contacts", align: "center"},
                    contactForm,
                ]
                },
                {rows: [
                    {view: "label", label: "Assessment", align: "center"},
                    assessmentForm,
                ]}
                ],
                },
                {},]
        }

        let viewerUI = {
            id: "candidateViewer",
            gravity:2,
            rows: [
                {
                    view: "toolbar",
                    elements: [
                        {view:"label", label:"Candidate info", align:"center"},
                        {view:"button", value:"Confirm"},
                        {view:"button", value:"Edit"},
                        {view:"button", value:"Delete"},
                    ] 
                },
                {
                    view:"scrollview",
                    scroll:"auto",
                    body: scrollableViewerPartUI,
                }
            ]
        }

        return viewerUI;
    }
}