import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "cadastro",
    loadChildren: "./cadastro/cadastro.module#CadastroModule",
  },
  {
    path: "listar-candidatos",
    loadChildren:
      "./listar-candidatos/listar-candidatos.module#ListarCandidatosModule",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
