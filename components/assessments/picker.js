class AssessmentPickerComponent {
    constructor() {
    }

    init() {
        console.log("assessment picker loaded.");
    }

    getWebixUI() {
        let tableToolbar = {
            id: "assessmentTableToolbar",
            view: "toolbar",
            elements: [
                {id: "createAssessmentButton", view:"button", value: "New"},
            ]
        }
        
        let table = {
            id: "assessmentTable",
            view: "datatable",
            columns: [
                {id:"date", header:"Date", fillspace:true},
                {id:"numberOfCandidates", header:"Candidates", minWidth:60},
                {id:"numberOfEmployees", header:"Employees", fillspace:true}
            ],
            select: true,
            data: assessmentTestData,
        }

        let assessmentPickerUI = {
            id: "assessmentPicker",
            gravity: 1,
            rows: [
                tableToolbar,
                table,
            ]
        }

        return assessmentPickerUI;
    }
}

let assessmentTestData = [
    {date:"27 July", numberOfCandidates: 3, numberOfEmployees: 2},
    {date:"7 September", numberOfCandidates: 4, numberOfEmployees: 1},
    {date:"13 June", numberOfCandidates: 6, numberOfEmployees: 3},
    {date:"21 August", numberOfCandidates: 2, numberOfEmployees: 1},
];