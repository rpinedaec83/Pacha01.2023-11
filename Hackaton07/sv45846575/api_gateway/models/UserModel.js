class GitHubUser {
    constructor(login, avatar_url, name, email, location, bio) {
      this.login = login,
      this.avatarUrl = avatar_url;
      this.name = name;
      this.email = email;
      this.location = location;
      this.bio = bio
    }
  }
  
  module.exports = GitHubUser