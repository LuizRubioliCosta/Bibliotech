import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Collection } from 'src/app/models/collection.model';
import { BibliotechService } from 'src/app/service/bibliotech.service';

@Component({
  selector: 'app-new-collection',
  templateUrl: './new-collection.component.html',
  styleUrls: ['./new-collection.component.css'],
})
export class NewCollectionComponent implements OnInit {
  collectionForm!: FormGroup

  isEdit = false;
  collectionItem!: Collection
  optParam!: string;

  constructor(private service: BibliotechService, private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {
    initFlowbite()

    this.initializeForm()

    this.route.params.subscribe(params => {
      this.optParam = params['opt'];
    });

    this.collectionItem = this.service.collectionItem
    this.isEdit = this.optParam === 'edit'
    this.isEdit ? this.setForm() :  null
  }

  onSave() {
    if(this.isEdit) {
//
    } else {
      //
    }
  }

  onRemove() {
    //chamar service
  }

  initializeForm() {
    this.collectionForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  setForm() {
    this.collectionForm = this.fb.group({
      title: [this.collectionItem.title, [Validators.required]],
      description: [this.collectionItem.description, [Validators.required]],
    })
  }
}
