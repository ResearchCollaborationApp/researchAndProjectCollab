import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function RichTextEditor() {
  const [data, setData] = useState('');
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data=""
        onChange={(event, editor) => {
          const data = editor.getData();
          setData(data);
          console.log({ event, editor, data });
        }}
      />
      {/* <div dangerouslySetInnerHTML={{ __html: data }} /> */}
    </div>
  );
}

export default RichTextEditor;
