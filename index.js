require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;
console.log(port);
const user = {
  login: "shivPosted",
  id: 107676397,
  node_id: "U_kgDOBmsC7Q",
  avatar_url: "https://avatars.githubusercontent.com/u/107676397?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/shivPosted",
  html_url: "https://github.com/shivPosted",
  followers_url: "https://api.github.com/users/shivPosted/followers",
  following_url:
    "https://api.github.com/users/shivPosted/following{/other_user}",
  gists_url: "https://api.github.com/users/shivPosted/gists{/gist_id}",
  starred_url: "https://api.github.com/users/shivPosted/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/shivPosted/subscriptions",
  organizations_url: "https://api.github.com/users/shivPosted/orgs",
  repos_url: "https://api.github.com/users/shivPosted/repos",
  events_url: "https://api.github.com/users/shivPosted/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/shivPosted/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Shiv Pratap",
  company: null,
  blog: "https://shivposted.hashnode.dev/",
  location: "Rajasthan, IN",
  email: null,
  hireable: true,
  bio: "Learning web dev | Passionate about technology and learning new things",
  twitter_username: "shiv_posted",
  public_repos: 58,
  public_gists: 0,
  followers: 22,
  following: 12,
  created_at: "2022-06-17T08:35:56Z",
  updated_at: "2025-04-09T09:52:41Z",
};

app.get("/", (req, res) => res.send("Hello Backend!"));
app.get("/twitter", (req, res) => res.send("shivPosted"));
app.get("/login", (req, res) => res.send("<h1>login to your account</h1>"));
app.get("/github", (req, res) => res.json(user));
app.listen(port, () => console.log(`app listening on port ${port}`));
