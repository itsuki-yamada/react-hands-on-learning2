import {useState} from 'react';
import GitHubUser from './components/GitHubUser';
import RepositoryReadme from './components/RepositoryReadme';
import SearchForm from './components/SearchForm';
import UserRepositories from './components/UserRepositories';

function App() {
  const [login, setLogin] = useState('moonhighway');
  const [repo, setRepo] = useState('learning-react');

  const handleSearch = login => {
    if (login) return setLogin(login);
    setLogin('');
    setRepo('');
  };

  return (
      <>
        <SearchForm value={login} onSearch={handleSearch}/>
        {login && <GitHubUser login={login}/>}
        {login && (
            <UserRepositories
                login={login}
                selectedRepo={repo}
                onSelect={setRepo}
            />
        )}
        {login && repo && (
            <RepositoryReadme login={login} repo={repo}/>
        )}
      </>
  );
}

export default App;
