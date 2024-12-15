import { PageHeader } from "@/components/page-header";
import { SettingsForm } from "@/components/settings/settings-form";

export default function SettingsPage() {
  return (
    <div className="container py-8">
      <PageHeader
        title="Settings"
        description="Manage your account and application preferences"
      />
      <SettingsForm />
    </div>
  );
}
