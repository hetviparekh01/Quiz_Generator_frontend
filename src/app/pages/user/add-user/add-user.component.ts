import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticateService } from 'src/app/core/services/authenticate.service';
import { UserService } from 'src/app/core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  userForm!: FormGroup;
  userId = this.activatedroute.snapshot.paramMap.get('id') as string;
  isUpdate: boolean = true;
  isSubmit: boolean = false;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private activatedroute: ActivatedRoute, private authService: AuthenticateService) { }
  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      role: ['', Validators.compose([Validators.required])],
    })
    if (this.userId) {
      this.getUserById();
      this.isUpdate = false;
      this.isSubmit = true;
    }
  }

  getUserById() {
    this.userService.getUserById(this.userId).subscribe({
      next: (response: any) => {
        this.userForm.patchValue({
          name: response.content.name,
          email: response.content.email,
        })
      }
    })
  }
  onSubmit() {
    if (this.userForm.valid) {
      if (!this.isUpdate) {
        this.userService.updateUserByAdmin(this.userId, this.userForm.value).subscribe({
          next: (response: any) => {
            if (response.status) {
              Swal.fire({
                icon: "success",
                title: response.content,
                showConfirmButton: false,
                timer: 1500
              });
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: response.content,
              });
            }
          },
          error: (error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
          }
        })
      } else {
        this.authService.signup(this.userForm.value).subscribe({
          next: (response: any) => {
            if (response.status) {
              Swal.fire({
                icon: "success",
                title: response.content,
                showConfirmButton: false,
                timer: 1500
              });
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: response.content,
              });
            }
          },
          error: (error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
          }
        })
      }

      this.userForm.reset()
    }
  }
}
