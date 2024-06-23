import { CONFIG } from 'src/config-global';

import { TreatmentView } from 'src/sections/treatment/view';

// ----------------------------------------------------------------------
export const metadata = { title: `Tratamento | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return <TreatmentView />;
}
