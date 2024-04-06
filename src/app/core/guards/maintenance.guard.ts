import { CanActivateFn, Router } from '@angular/router';
import { SiteStatusService } from '../services/site-status.service';

export const MaintenanceGuard: CanActivateFn = () => {
  const siteStatusService = new SiteStatusService();

  if (!siteStatusService.getIsSiteOnline()) {
    const router = new Router();
    router.navigate(['/maintenance']);
    return false;
  }
  return true;
};
