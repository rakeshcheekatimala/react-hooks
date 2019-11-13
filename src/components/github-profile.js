import React, { useEffect, useState } from "react";

const initProfile = {
  followers: null,
  publicRepos: null,
  name: null
};
const GitHubProfile = () => {
  const [profile, setProfile] = useState(initProfile);

  async function loadGitHubProfile() {
    let response = await fetch(
      "https://api.github.com/users/rakeshcheekatimala"
    );
    const json = await response.json();

    setProfile({
      followers: json.followers,
      publicRepos: json.public_repos,
      name: json.name
    });
  }

  useEffect(() => {
    loadGitHubProfile();
  }, []);

  return (
    <>
      <h1>GitHub Profile Information</h1>
      <h3>{`Followers: ${profile.followers}, Repos: ${profile.publicRepos}`}</h3>
      <p>
        ProfileName: <b>{profile.name}</b>
      </p>
    </>
  );
};

export default GitHubProfile;
