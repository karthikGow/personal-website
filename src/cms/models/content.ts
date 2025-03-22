import { Content } from './IContent';

export class ContentImpl implements Content {
    constructor(
        public id: number,
        public title: string,
        public body: string
    ) {}

    validate(): boolean {
        return this.title.length > 0 && this.body.length > 0;
    }

    format(): string {
        return `<h1>${this.title}</h1><p>${this.body}</p>`;
    }
}
