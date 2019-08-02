class EmployeesWorkspaceComponent {
    constructor() {
        this.picker = new EmployeePickerComponent();
        this.viewer = new EmployeeViewerComponent();
    }

    init() {
        console.log("employees workspace loaded.");
    }

    getWebixUI() {
        let pickerUI = this.picker.getWebixUI();
        let viewerUI = this.viewer.getWebixUI();

        let employeesWorkspace = {
            id:"employeesWorkspace",
            cols: [
                pickerUI,
                viewerUI,
            ]
        }

        return employeesWorkspace;
    }
}