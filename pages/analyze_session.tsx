import { type } from "os";
import { ChangeEvent, MouseEventHandler, useState } from "react";


export default function PrivatePage() {
  const [file, setFile] = useState<{file: null | File}>({file: null})

  function getApiFields(url: string): string {
    const urlObject = new URL(url);
    return urlObject.pathname;
  }

  const extractEvents = async (harFile: any) => {
    // Extract the "entries" array from the .har file
    // Iterate over the entries and extract the relevant data for each event
    const har = JSON.parse(await harFile.text())
    const events = har.log.entries.filter((entry: any) => {
        let apiName = getApiFields(entry.request.url)
        if (apiName === '/api/recommend/item_list/' ) {
            console.log(entry.response.content.text)
            let content = JSON.parse(Buffer.from(entry.response.content.text, 'base64').toString());
            return {
                content
              };
        }
      })
    let fyp = JSON.parse(Buffer.from(events[0].response.content.text, 'base64').toString())
    console.log(fyp)
    return fyp;
  }

  const uploadToClient = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const i: File = event.target.files[0];
      setFile({file: i});
      
    }
  };

  const uploadToServer = async ():  Promise<void> => {
    if (file.file !== null) {
        const response = fetch("/api/upload_file", {
            method: "POST",
            body: JSON.stringify(await extractEvents(file.file))
        });
    }
    
    
  };

  return (
    <div>
      <div>
        <h4>Select File</h4>
        <input 
        className="text-white"
        type="file"
        name="currFile" 
        onChange={uploadToClient} />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          onClick={uploadToServer}
        >
          Send to server
        </button>
      </div>
    </div>
  );
}