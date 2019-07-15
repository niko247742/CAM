export function createCandidate(candidate) {
    return { type: "CREATE_CANDIDATE", candidate: candidate }; 
}