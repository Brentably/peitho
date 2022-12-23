import fs from "fs";
import type { NextApiRequest, NextApiResponse } from 'next';

function extractEvents(harFile: any) {
  // Extract the "entries" array from the .har file
  // Iterate over the entries and extract the relevant data for each event

  const events = harFile.itemList
  console.log(events)

  return events;
}

function validateHarFormat(harFile: any) {
    // Check that the .har file has a "log" property
  
    // Check that the "log" property has an "entries" array
    if (!Array.isArray(harFile.itemList) && (harFile.itemList !== undefined)) {
        return false;
    }
  
    // The .har file is valid
    return true;
  }
  



async function parseHarFile(req: NextApiRequest, res: NextApiResponse) {
    // Parse the .har file from the request body
    const harFile = JSON.parse(req.body);
    

    // Validate the .har file format
    if (!validateHarFormat(harFile)) {
        console.log('bad file')
        res.status(400).send('Invalid .har file format');
      return;
    }
  
    // Extract the events from the .har file
    const events = extractEvents(harFile);
    // Process the events as needed

    res.status(200).send('Success');
  }

export default (req: NextApiRequest, res: NextApiResponse) => {
    req.method === 'POST'
        ? parseHarFile(req, res)
        : res.status(404).send("only POST");
};