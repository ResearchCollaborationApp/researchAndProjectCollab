import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './texteditor.css'

function RichTextEditor({onDescriptionChange, onClickingDone}) {
  const [data, setData] = useState('');
  //this dsplay state helps to display texteditor when it is false
  //and when it is true it displays the description written inside
  //texteditor inside paragraph tag and displays edit button
  const [display, setDisplay] = useState(false);
  const handleDone = () =>{
    onClickingDone(true);
    setDisplay(true);
    onDescriptionChange(data);
  }
  const handleEdit = () =>{
    setDisplay(false);
    onClickingDone(false);
  }
  const editorConfig = {
    placeholder: 'Enter your description here...',
    
  };

  return (
    <div>
     {!display && ( 
      <CKEditor
        editor={ClassicEditor}
        data={data}
        config={editorConfig}
        onChange={(event, editor) => {
          const data = editor.getData();
          setData(data);
        }
      }
      />
      )
      }
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
