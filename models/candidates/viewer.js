import * as testData from "./candidates_mock_data.json";
console.log(testData);

export class CandidateViewerProvider {
    constructor() {

    }

    get(id) {
        return testData.find(value => value.id === id);
    }
}
