import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { AuthService } from 'src/app/core/services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogged$: Observable<boolean> = this.authService.isLogged()

  constructor (private router: Router, private authService: AuthService) {}

  ngOnInit (): void {}

  goTo (route: string): void {
    this.router.navigateByUrl(route)
  }

  signOut (): void {
    this.authService.signOut().subscribe();
    window.location.href = '/'
  }

}
