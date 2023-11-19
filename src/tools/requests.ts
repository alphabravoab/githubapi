import { Octokit } from "octokit"

const octokit = new Octokit({
    auth: import.meta.env.TOKEN
  });

type Query ={
  q: string;
  sort?: "stars" | "forks" | "help-wanted-issues" | "updated";
}

export function searchGithub(input: Query){
    return octokit.request("GET /search/repositories", {
        ...input,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28"
        }
});
}