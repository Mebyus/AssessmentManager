class AssessmentsWorkspaceComponent {
    constructor() {
        this.picker = new AssessmentPickerComponent();
        this.viewer = new AssessmentViewerComponent();
    }

    init() {
        this.picker.init();
        this.viewer.init();
        console.log("assessments workspace loaded.");
    }

    getWebixUI() {
        let pickerUI = this.picker.getWebixUI();
        let viewerUI = this.viewer.getWebixUI();

        let assessmentsWorkspaceUI = {
            id:"assessmentssWorkspace",
            cols: [
                pickerUI,
                viewerUI,
            ]
        }

        return assessmentsWorkspaceUI;
    }
}