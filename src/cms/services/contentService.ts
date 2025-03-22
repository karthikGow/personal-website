import { Content } from '../models/IContent';

export class ContentService {
    private contents: Content[] = [];

    createContent(title: string, body: string): Content {
        const newContent: Content = {
            id: this.contents.length + 1,
            title,
            body
        };
        this.contents.push(newContent);
        return newContent;
    }

    updateContent(id: number, title: string, body: string): Content | null {
        const contentIndex = this.contents.findIndex(content => content.id === id);
        if (contentIndex === -1) {
            return null;
        }

        this.contents[contentIndex] = {
            ...this.contents[contentIndex],
            title,
            body
        };
        return this.contents[contentIndex];
    }

    deleteContent(id: number): boolean {
        const contentIndex = this.contents.findIndex(content => content.id === id);
        if (contentIndex === -1) {
            return false;
        }
        this.contents.splice(contentIndex, 1);
        return true;
    }

    fetchContent(id: number): Content | null {
        return this.contents.find(content => content.id === id) || null;
    }
}