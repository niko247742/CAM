import * as mockData from "./CandidatesApiMockData";
import * as config from "../constants/config";
import * as ajaxCreators from "./ajaxCallCreators";

const delay = process.env.DELAY === undefined ? 0 : process.env.DELAY;
const apiUrl = config.apiUrl + "candidates";

//************************************************** STANDARD API SERVER CALLS ****************************************
class ServerCandidatesApi {
  static getCandidates() {
    return ajaxCreators.get(apiUrl, null, "candidates");
    // return new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve(mockData.Candidates);
    //   }, delay);
    // });
  }
  static getCandidate(id) {
    return ajaxCreators.get(`${apiUrl}/${id}`, { id }, "candidates");
  }
}
//************************************************** MOCK API SERVER CALLS ****************************************

class MockCandidatesApi {
  static getCandidates() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(mockData.candidates);
      }, delay);
    });
  }
  static getLog(id) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(mockData.candidates.filter(l => l.id === id)[0]);
      }, delay);
    });
  }
}

const CandidatesApi = ServerCandidatesApi;
//process.env.NODE_ENV === "production" || process.env.API_MODE === "server"
//  ? ServerCandidatesApi
//  : MockCandidatesApi;
export default CandidatesApi;
