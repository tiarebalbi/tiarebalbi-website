workflow "Run Tests" {
  on = "push"
  resolves = [
    "netlify/actions/build@master",
    "Running Test",
    "Release Version",
  ]
}

action "Installing Dependencies" {
  uses = "nuxt/actions-yarn@master"
  runs = "yarn"
  secrets = ["GITHUB_TOKEN"]
}

action "Running Test" {
  uses = "nuxt/actions-yarn@master"
  secrets = ["GITHUB_TOKEN"]
  needs = ["Installing Dependencies"]
  runs = "yarn ci"
  env = {
    SKIP_PREFLIGHT_CHECK = "true"
  }
}

action "Release Version" {
  uses = "nuxt/actions-yarn@master"
  runs = "yarn release"
  secrets = ["GITHUB_TOKEN"]
  needs = ["Running Test"]
}

action "netlify/actions/build@master" {
  uses = "netlify/actions/build@master"
  secrets = ["GITHUB_TOKEN", "NETLIFY_SITE_ID"]
  needs = ["Running Test"]
  env = {
    NETLIFY_CMD = "npm install -g yarn && yarn && yarn build"
    NETLIFY_DIR = "build/\n"
    NETLIFY_BASE = ""
  }
}
