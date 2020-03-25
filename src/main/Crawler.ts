import xray from './headers';
import cherrio from 'cheerio';
import {Property} from '../beans/Property';
import {DataManager} from '../managers/dataManager';

export class Crawler {
  private static readonly properties: Property[] = [
    new Property('https://www.zillow.com/homedetails/6784-Rosemead-Blvd-San-Gabriel-CA-91775/249435335_zpid/'),
    // new Property('https://www.zillow.com/homedetails/200-E-Colorado-Blvd-Arcadia-CA-91006/20888224_zpid/'),
    // new Property('https://www.zillow.com/homedetails/556-Valmont-Dr-Monrovia-CA-91016/21583828_zpid/'),
    // new Property('https://www.zillow.com/homedetails/5916-Rosemead-Blvd-Temple-City-CA-91780/20733328_zpid/'),
    // new Property('https://www.zillow.com/homedetails/8913-Jaylee-Drive-San-Gabriel-CA-91775/20730953_zpid/')
  ];

  static async updateProperties() {
    await this.crawl();
    DataManager.writeProperties(this.properties);
  }

  private static async crawl() {
    for (let p of this.properties) {
      let content;
      try {
        content = await Crawler.getRaw(p.url);
      } catch (error) {
        console.error(error);
        break;
      }
      const html = cherrio.load(content);
      if(html('body').eq(0).text() === "Please verify you're a human to continue.") {
        throw Error('You are EXPOSED!');
      }
      p.parse(html);
      console.log('done: ', p.url);
    }
  }

  private static getRaw(url: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      xray(url, 'body@html')(function (error: any, content: string) {
        if(error) reject(error);
        resolve(content);
      });
    });
  }

}