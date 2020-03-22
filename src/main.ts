import {Crawler} from './main/Crawler';
import {DataManager} from './managers/dataManager';

async function main() {
  await Crawler.updateProperties();
  console.log('Finished...');
}

main();
