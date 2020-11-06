import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from 'src/app/models/activity';
import { ActivityService } from '../../services/activity.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  ide:string = '';
  activity: Activity;
  activities: Activity[];
  lenthg: number;
  forma: FormGroup;
  flag:boolean =false;
  constructor(private activeRouter: ActivatedRoute,private service: ActivityService,private formBuilder: FormBuilder, private router:Router) { this.createForm(); }

  ngOnInit(): void {
    this.ide = this.activeRouter.snapshot.params["id"];
    if(this.ide != ''){
      this.service.getActivityByID(this.ide).subscribe((data : Activity) =>{
        this.activity = data;
        this.flag = true;
        this.forma.patchValue({
          id: this.activity.id,
          categoria: this.activity.categoria,
          descripcion : this.activity.descripcion,
          fecha : this.activity.fecha
        });
      });
    }else{
      this.forma.patchValue({
        id: Date.now(),
      });
      this.flag = true;
    }

    this.forma.get('categoria').valueChanges.subscribe((event) => {
      this.forma.get('categoria').setValue(event.toLowerCase(), {emitEvent: false});
   })
  }


  getCategoriaInvalid(){
    this.forma.get('categoria').invalid  && this.forma.get('categoria').touched;
  }

  getDescripcionInvalid(){
    return this.forma.get('descripcion').invalid && this.forma.get('descripcion').touched;
  }

  getfechaInvalid(){
    this.forma.get('fecha').invalid  && this.forma.get('fecha').touched;
  }

  createForm(){
    this.forma = this.formBuilder.group({
      id: ['',[Validators.required]],
      categoria: ['',[Validators.required]],
      descripcion: ['',[Validators.required]],
      fecha: ['',[Validators.required]]
    });
  }

  delete(){
    this.service.deleteByID(this.ide).subscribe(res =>{
      this.refresh();
    });
    this.router.navigateByUrl('/activities');
  }

  refresh() {
    this.service.getActivities().subscribe((data: Activity[]) => {
      this.service.activies = data;
    });
  }

  save(){
    let msg: string ='';
    if(this.forma.valid){
      if(this.ide != ''){
        this.service.updateById(this.ide,this.forma.value).subscribe(res => {this.refresh(); });
        msg="The information was updated"
      } else{
        this.service.addNewActivity(this.forma.value).subscribe(res => {this.refresh();});
        msg="You added a new activity"
      }
    }
    Swal.fire(
      'Good job!',
      msg,
      'success'
    );
    this.router.navigateByUrl('/activities');
   
  }
}
