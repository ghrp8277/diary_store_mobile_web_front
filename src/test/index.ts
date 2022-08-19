export class Emoji {
  imageName = '';
  title = '';
  author = '';

  constructor(imageName: string, title: string, author: string) {
    this.imageName = imageName;
    this.title = title;
    this.author = author;
  }
}
