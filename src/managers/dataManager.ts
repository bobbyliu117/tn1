import fs from 'fs';
import {join} from 'path';
import {Property} from '../beans/Property';

const propertiesPath = join(__dirname, '../../local/properties.json');

export class DataManager {
  static writeProperties(properties: Property[]) {
    console.log('Start writing...');
    try {
      fs.writeFileSync(propertiesPath, JSON.stringify(properties));
    } catch (error) {
      console.log(error);
    }
  }

  static readProperties(): Property[] {
    let properties: Property[] = [];
    try {
      if(fs.existsSync(propertiesPath)) {
        properties = JSON.parse(fs.readFileSync(propertiesPath, 'utf-8'));
      }
    } catch (error) {
      console.log(error);
    }
    return properties;
  }
}

