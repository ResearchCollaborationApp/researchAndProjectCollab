import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './texteditor.css'
function RichTextEditor({onDescriptionChange}) {
  const [data, setData] = useState('');
  const [display, setDisplay] = useState(false);

  const handleDone = () =>{
    setDisplay(true);
    onDescriptionChange(data);
  }
  const handleEdit = () =>{
    setDisplay(false);
  }
  const editorConfig = {
    placeholder: 'Enter your description here...',
    
  };

  return (
    <div>
     {!display && ( 
      <CKEditor
        editor={ClassicEditor}
        data=''
        config={editorConfig}
        onChange={(event, editor) => {
          const data = editor.getData();
          
          setData(data);
        }
      }
      />
      )}
      {display && (
        <div className="html-container">
          <div  dangerouslySetInnerHTML={{ __html: data }}/> 
        </div>
        )}
      {!display && (
        <button className = 'btn btn-primary' onClick = {handleDone}>Done</button>
        )}
      {display && 
      (<button className='btn btn-secondary' onClick ={handleEdit}>Keep Editing</button>

      )}
    </div>
    
  );
}

export default RichTextEditor;
