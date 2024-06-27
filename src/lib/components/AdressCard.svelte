<script lang="ts">
  export let addressData: any

  let addressProps = ['address']
</script>

<div class="card shadow">
  <div class="card-body p-5">
    <div class="card-title">Address Data</div>
    {#each Object.entries(addressData) as [key, value]}
      {#if addressProps.includes(key)}
        <!-- TODO: This could be cleaner -->
        <div class="flex items-center gap-2">
          <div class="capitalize">
            {key}:
          </div>

          <a
            href={`${addressData.chains[0].explorer_address}/${value}`}
            class="badge badge-primary p-4 hover:underline transition-all duration-200 ease-in-out overflow-x-auto overflow-y-hidden"
          >
            {value}
          </a>
        </div>
      {/if}
    {/each}
  </div>
</div>
