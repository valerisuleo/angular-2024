import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodosShowComponent } from './todos-show.component';

describe('TodosShowComponent', () => {
    let component: TodosShowComponent;
    let fixture: ComponentFixture<TodosShowComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TodosShowComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TodosShowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
