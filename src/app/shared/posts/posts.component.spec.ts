import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsComponent } from './posts.component';
import { PostsService } from 'src/app/core/posts.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AppModule } from 'src/app/app.module';
import { By } from '@angular/platform-browser';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let postsService: PostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsComponent],
      providers: [PostsService,
        ConfirmationService,
        MessageService],
      imports: [HttpClientTestingModule,
        AppModule]
    });
  });

  it('create modal add', async () => {
    const fixture = TestBed.createComponent(PostsComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('#addbutton');
    element.click();
    fixture.detectChanges();
    await fixture.whenStable();
    const html = fixture.nativeElement.innerHTML;
    const element2 = fixture.nativeElement.querySelector('#spam');
    expect(element2.textContent).toContain('Post add');

  });
 

  it('title of posts', () => {
    const fixture = TestBed.createComponent(PostsComponent);
    fixture.detectChanges();
    const html = fixture.nativeElement.innerHTML;
    console.log(html);
    const element = fixture.nativeElement.querySelector('.p-card-title');
    expect(element.textContent).toContain('Posts');
  });


});
