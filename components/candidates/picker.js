class CandidatePickerComponent {
    constructor() {

    }

    init() {
        console.log("candidate picker loaded.");
    }

    getWebixUI() {
        let tableToolbar = {
            id: "candidateListToolbar",
            view: "toolbar",
            elements: [
                {id: "createCandidateButton", view:"button", value: "New"},
            ]
        }
        
        let table = {
            id: "candidateTable",
            view: "datatable",
            columns: [
                {id:"name", header:"Name", fillspace:true},
                {id:"phone", header:"Phone", fillspace:true},
                {id:"email", header:"Email", fillspace:true},
            ],
            select: true,
            data: candidateTestData,
        }

        let candidatePicker = {
            id: "candidatePicker",
            gravity:1,
            rows: [
                tableToolbar,
                table,
            ]
        }

        return candidatePicker;
    }
}

//Testing data
let candidateTestData = [
    {id: 1, name: "Tim", phone: "+7 964 643 90 41", email: "frfre@ffe.com", year: 1993},
    {id: 2, name: "Mike Donnovan", phone:"+7 534 233 34 13", email: "f43ffe.com", year: 1990},
    {id: 3, name: "John", phone:"+7 424 323 21 65", email: "frfrbve@ffewfde.com", year: 2003},
    {id: 4, name: "Moe Tiblithz", phone:"+7 123 543 76 32" , email: "frfrbgf552e@ffe.com", year: 1988},
    {id: 5, name: "Jake", phone:"+7 434 765 43 32", email: "frfre@ffe332.com", year: 1995},
]