// import cheerio from 'cheerio';

export class Property {
  private readonly _price?: string;
  status?: string;
  [propName:string]: any;

  constructor(public readonly url: string) {}

  parse(html: CheerioStatic) {
    this.status = this.getStatus(html);
    if(!this.status || this.status.toLocaleLowerCase() === 'off market') {
      this.status = 'Off market';
      return;
    }
    this.price = this.getPrice(html);
  }

  private getStatus = (html: CheerioStatic) => {
    const elements = html('.ds-status-details');
    let status = elements.eq(0).text();
    if(!status && elements.length > 1) status = elements.eq(1).text();
    return status;
  };

  private getPrice = (html: CheerioStatic) => html('.ds-value').eq(0).text();
}

