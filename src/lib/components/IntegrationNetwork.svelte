<script lang="ts">
  // Demo: public SVGs for app icons
  const apps = [
    { name: 'Slack', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/slack.svg' },
    { name: 'Teams', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftteams.svg' },
    { name: 'Gmail', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg' },
    { name: 'Salesforce', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/salesforce.svg' },
    { name: 'Google Drive', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googledrive.svg' },
    { name: 'Zapier', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/zapier.svg' },
  ];
</script>

<div class="grid grid-cols-2 gap-3 w-full max-w-xs mx-auto mt-2">
  {#each apps as app}
    <div class="flex items-center gap-2 bg-neutral-100 rounded-xl px-4 py-2 text-xs font-light text-neutral-800 shadow-sm">
      <img src={app.icon} alt={app.name} class="w-4 h-4" />
      <span>{app.name}</span>
    </div>
  {/each}
</div> 