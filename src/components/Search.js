import { Divider, Input } from 'antd';

// Iteration 5
function Search({searchTerm, setSearchTerm}) {

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchTerm} type="text" onChange={handleChange} />
    </>
  );
}

export default Search;