import { Content } from './models/IContent';
import { ContentService } from './services/contentService';

export class Admin {
    private contentService: ContentService;

    constructor() {
        this.contentService = new ContentService();
    }

    createContent(title: string, body: string): Content {
        return this.contentService.createContent(title, body);
    }

    updateContent(id: number, title: string, body: string): Content | null {
        return this.contentService.updateContent(id, title, body);
    }

    deleteContent(id: number): boolean {
        return this.contentService.deleteContent(id);
    }
}