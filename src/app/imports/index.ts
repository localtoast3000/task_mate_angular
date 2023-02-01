import SharedComponents from './components/shared-components';
import PageComponents from './components/page-components';
import { AppComponent } from '../app.component';

export const AppComponents = [
  AppComponent,
  ...SharedComponents,
  ...PageComponents,
];
