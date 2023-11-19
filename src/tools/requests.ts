import { Octokit } from "octokit"

const octokit = new Octokit({
    auth: import.meta.env.VITE_SOME_KEY
  });
export type Sort = "stars" | "forks" | "help-wanted-issues" | "updated"
type Query ={
  q: string;
  sort?: Sort;
}

export function searchGithub(input: Query){
    return octokit.request("GET /search/repositories", {
        ...input,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28"
        }
});
}