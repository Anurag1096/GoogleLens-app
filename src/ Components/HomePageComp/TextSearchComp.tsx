import { useState } from 'react'
import './textSearchComp.css'

// this thing will be a page
function TextSearchComp() {
  const [searchVal, setSearchVal] = useState<string>("")
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value)
  }
  return (
    <div className='input-wrapper'>
      <span className="input-icon left" onClick={() => alert("this will close the modal")}>
         {/* You can use an SVG or Font Awesome here */}
        🔙
      </span>

      <input
        type='text'
        className="text-search"
        value={searchVal}
        onChange={handleChange}
        placeholder="Search something..."
        autoFocus
        aria-label="Search input"
      />
      {/* if search val is there then a x icon will be displayed */}
      {searchVal && (
        <span className="input-icon right" onClick={() => setSearchVal("")}>
          ❌
        </span>
      )}
      {/* When there is no search tow icons will be displayed */}
      {!searchVal && (
        <div>
          <span className="input-icon right" onClick={() => setSearchVal("")}>
          🎤
          </span>
          <span className="input-icon right2" onClick={() => setSearchVal("")}>
          📷
          </span>
        </div>
      )}

    </div>


  )
}

export default TextSearchComp