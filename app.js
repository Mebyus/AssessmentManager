class AppWorkspace {
    constructor() {
        this.navigationBar = new NavigationBarComponent();
        this.candidatesWorkspace = new CandidatesWorkspaceComponent();
        this.assessmentsWorkspace = new AssessmentsWorkspaceComponent();
        this.employeesWorkspace = new EmployeesWorkspaceComponent();
    }

    init() {
        this.navigationBar.init();
        this.candidatesWorkspace.init();
        this.assessmentsWorkspace.init();
        this.employeesWorkspace.init();
        webix.ui(this.getWebixUI());
        console.log("app workspace loaded.");
    }

    getWebixUI() {
        let candidatesWorkspaceUI = this.candidatesWorkspace.getWebixUI();
        let assessmentsWorkspaceUI = this.assessmentsWorkspace.getWebixUI();
        let employeesWorkspaceUI = this.employeesWorkspace.getWebixUI()
        
        let appUI = {
            id:"tabView",
            view:"tabview",
            cells:[     
                {
                    header: "Candidates",
                    body: candidatesWorkspaceUI,
                },
                { 
                    header:"Assessments", 
                    body: assessmentsWorkspaceUI,
                },
                {
                    header:"Employees",
                    body: employeesWorkspaceUI,
                },
            ]
        };

        return appUI;
    }
}

testApp = new AppWorkspace();
testApp.init();