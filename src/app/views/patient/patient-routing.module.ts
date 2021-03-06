import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiagnosticComponent } from './diagnostic/diagnostic.component';
import { PatientComponent } from './patient.component';
import { TicketComponent } from './ticket/ticket.component';
import { TreatmentComponent } from './treatment/treatment.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Patient'
    },
    children: [
      {
        path: 'list',
        component: PatientComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'diagnostic',
        component: DiagnosticComponent,
        data: {
          title: 'Diagnostic'
        }
      },
      {
        path: 'treatment',
        component: TreatmentComponent,
        data: {
          title: 'Treatment'
        }
      },
      {
        path: 'ticket',
        component: TicketComponent,
        data: {
          title: 'Ticket'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule {}
