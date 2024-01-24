import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

export default function RTE({name,control,label,defaultvalue='',}) {
    return ( 
        <div className='w-full'>
            {label && <label className='pl-1 mb-1 inline-block'>{label }</label>}

            <Controller
            name={name || 'content'}
            control={control}
            render={({field:{onchange}})=>(
                <Editor
                apiKey='csb9rceh4l1rqagda4pte1bvbnrwz9tep6l651qnxsn6zcu4'
                initialValue={defaultvalue}
                init={{
                    height:500,
                    menubar:true,
                    plugins:[
                        'advlist autolink lists link  image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media paste table code help wordcount',
                    ],
                    toolbar : 'undo redo |formatselect | bold italic underline |\ alignleft aligncenter alignright alignjustify|\
                    bullist numlist outdent indent | removeformat | help',
                    content_style: "body { font-family:Helivetica,Arial,sans-serif,font-size:14px} "
                }}
                onEditorChange={onchange}
                />
            )}
            />
    
        </div>
       
  
     );
}


