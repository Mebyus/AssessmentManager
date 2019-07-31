class NavigationBarComponent {
    constructor() {
        this.menuOptions = [
            { id:"candidates", value: "Candidates"},
            { id:"assessments", value:"Assessments"},
            { id:"employees", value:"Employees" },
        ];
        this.UI = {
            type:"space", margin:0, rows:[
                { view:"tabbar", id:"tab", options:this.menuOptions, multiview:true },
                { cells:[
                    { id:"candidates", css:"preview-box", template:'<div class="card">Candidates</div>'},
                    { id:"assessments", css:"preview-box", template:'<div class="card">Assessments</div>' },
                    { id:"employees", css:"preview-box", template:'<div class="card">Employees</div>' },
                ] 
                }
            ]
        };
    }

    init() {
        console.log("navigation bar loaded.");
    }
}