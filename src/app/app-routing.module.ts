import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryComponent } from './library/library.component';
import { HomeComponent } from './home/home.component';
import { GameRoomComponent } from './game-room/game-room.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'library', component: LibraryComponent },
  { path: 'game-room', component: GameRoomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
