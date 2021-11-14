import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { SharedModule } from "../shared/shared.module";
import { OrdersDelayedChartComponent } from "./components/orders-delayed-chart/orders-delayed-chart.component";
import { TicketStatusByOfficeChartComponent } from "./components/ticket-status-by-office-chart/ticket-status-by-office-chart.component";
import { Top10ProductsChartComponent } from "./components/top-10-products-chart/top-10-products-chart.component";
import { ReportsPage } from "./containers/reports/reports.page";
import { ReportsRoutingModule } from "./reports-routing.module";
@NgModule({
  declarations: [
    ReportsPage,
    Top10ProductsChartComponent,
    TicketStatusByOfficeChartComponent,
    OrdersDelayedChartComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    ReportsRoutingModule
  ]
})

export class ReportsModule {}