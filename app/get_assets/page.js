import React from 'react'

const page = () => {
    const handleDownload = () => {
        // Replace "path_to_your_file" with the actual path to your file
        const fileUrl = 'path_to_your_file';
        const fileName = 'filename.extension';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
  return (
    <div className='flex items-center flex-col'>
         <button onClick={handleDownload}>Download Assets</button>
    </div>
  )
}

export default page
