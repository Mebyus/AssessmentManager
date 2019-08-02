class CandidatesWorkspaceComponent {
    constructor() {
        this.picker = new CandidatePickerComponent();
        this.viewer = new CandidateViewerComponent();
    }

    init() {
        this.picker.init();
        this.viewer.init();
        console.log("candidates workspace loaded.");
    }

    getWebixUI() {
        let pickerUI = this.picker.getWebixUI();
        let viewerUI = this.viewer.getWebixUI();

        let candidatesWorkspace = {
            id:"candidatesWorkspace",
            cols: [
                pickerUI,
                viewerUI,
            ]
        }

        return candidatesWorkspace;
    }
}
