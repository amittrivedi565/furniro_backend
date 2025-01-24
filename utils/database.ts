import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(__dirname, '../data.json');

// Function to read data from the JSON file
export const readData = async (): Promise<any> => {
  try {
    const data = await fs.promises.readFile(dataFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading file:', error);
    return { products: [] }; // Return empty data if there’s an error
  }
};

// Function to write data to the JSON file
export const writeData = async (data: any): Promise<void> => {
  try {
    await fs.promises.writeFile(dataFilePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing file:', error);
  }
};
