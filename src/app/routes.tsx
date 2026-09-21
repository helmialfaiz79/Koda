import { Route, Routes } from 'react-router-dom'
import { AppLayout } from '../components/layout/AppLayout'
import { Template01Page } from '../features/templates/Template01Page'
import { Template02Page } from '../features/templates/Template02Page'
import { Template03Page } from '../features/templates/Template03Page'
import { Template04Page } from '../features/templates/Template04Page'
import { Template05Page } from '../features/templates/Template05Page'
import { SettingsPage } from '../features/settings/SettingsPage'
import { NotFoundPage } from '../features/not-found/NotFoundPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Template01Page />} />
        <Route path="template-02" element={<Template02Page />} />
        <Route path="template-03" element={<Template03Page />} />
        <Route path="template-04" element={<Template04Page />} />
        <Route path="template-05" element={<Template05Page />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
