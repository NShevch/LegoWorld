import { Component, Input, OnInit } from '@angular/core';
import LocalStorage from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [LocalStorage]
})
export class CommentsComponent implements OnInit {
  comments!: string[];
  @Input() product!: Product;

  constructor(private storage: LocalStorage) { }

  ngOnInit(): void {
    this.comments = this.storage.get(this.product.name) || [];
  }
  addComment(textArea: HTMLTextAreaElement) {
    if (textArea.value.trim() !== '') {
      this.comments.push(textArea.value);
      this.storage.set(this.product.name, this.comments);
      textArea.value = "";
    } else {
      textArea.placeholder = "no comments were entered";
      setTimeout(() => {
        textArea.placeholder = "Write your comment...";
      }, 2000);
    }
    
  }
}
