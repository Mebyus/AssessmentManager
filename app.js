class AppWorkspace {
    constructor() {
        this.navigationBar = new NavigationBarComponent();
        this.candidateWorkspace = new CandidatesWorkspaceComponent();
        this.assessmentWorkspace = new AssessmentsWorkspaceComponent();
        this.employeeWorkspace = new EmployeesWorkspaceComponent();
    }

    init() {
        this.navigationBar.init();
        this.candidateWorkspace.init();
        this.assessmentWorkspace.init();
        this.employeeWorkspace.init();
        webix.ui(this.getWebixUI());
        console.log("app workspace loaded.");
    }

    getWebixUI() {
        let webixUI = this.navigationBar.UI;
        return webixUI;
    }
}

testApp = new AppWorkspace();
testApp.init();