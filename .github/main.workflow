workflow "Run Tests" {
  on = "push"
  resolves = [
    "netlify/actions/build@master",
    "Running Test",
  ]
}

action "Enabling Workspace" {
  uses = "borales/actions-yarn@master"
  runs = "yarn config set workspaces-experimental true"
  secrets = ["GITHUB_TOKEN"]
}

action "Installing Depdencies" {
  uses = "borales/actions-yarn@master"
  runs = "yarn"
  secrets = ["GITHUB_TOKEN"]
  needs = ["Enabling Workspace"]
}

action "Running Test" {
  uses = "borales/actions-yarn@master"
  secrets = ["GITHUB_TOKEN"]
  needs = ["Installing Depdencies"]
  runs = "yarn test"
  env = {
    SKIP_PREFLIGHT_CHECK = "true"
  }
}

action "netlify/actions/build@master" {
  uses = "netlify/actions/build@master"
  secrets = ["GITHUB_TOKEN", "NETLIFY_SITE_ID"]
  env = {
    NETLIFY_CMD = "npm install -g yarn && yarn && yarn build"
    NETLIFY_DIR = "build/\n"
    NETLIFY_BASE = ""
  }
}
