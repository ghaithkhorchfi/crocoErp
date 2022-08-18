import { Route } from "@angular/router";
import { compact } from "lodash";
import { AddFileComponent } from "./add-file/add-file.component";
import { FileTableComponent } from "./file-table/file-table.component";

export const fileRoutes:Route[]=[
    {path:'addFile',component:AddFileComponent},
    {path:'edit/:id',component:AddFileComponent},
    {path:'files',component:FileTableComponent}
]