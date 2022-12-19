export class TikTokScraper {

    private apiEndpoint: string = 'https://m.tiktok.com/api/recommend/item_list/'

    public async getTrending(): Promise<any> {
        return await fetch(this.apiEndpoint)
    }

}