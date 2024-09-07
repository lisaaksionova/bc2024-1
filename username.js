
function GetUserFromGitHub(username){
  let githubApiUrl = `https://api.github.com/users/${username}`;
  
  fetch(githubApiUrl)
  //resolve
    .then(res => {
      if(res.ok) return res.json()
        //resolve
        .then(data => {
          console.log('\nUser Profile Url: ', data.html_url);
          console.log('\nHello, ', data.login);
        });
      else console.log('Error: ', res.status); 
    })
    //reject
    .catch(error => console.log('Error with fetch method'));
  }

GetUserFromGitHub('lisaaksionova');

