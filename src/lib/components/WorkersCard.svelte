<script lang="ts">
  import { PUBLIC_SERVER_DASHBOARD_URL } from '$env/static/public'
  import { totalHashRate } from '$lib/stores/hashrate'
  import { onMount } from 'svelte'

  export let workerData: any

  onMount(() => {
    const updateTotalHashRate = () => {
      totalHashRate.set(
        workerData.reduce(
          (acc: any, worker: any) => acc + Number(worker.rhr),
          0,
        ),
      )
    }

    updateTotalHashRate()
  })
</script>

<div class="overflow-x-auto">
  <table class="w-full">
    <thead>
      <tr class="text-left">
        <th class="text-lg font-thin">Worker</th>
        <th class="text-lg font-thin">Status</th>
        <th class="text-lg font-thin">Hashrate</th>
      </tr>
    </thead>
    <tbody>
      {#each [workerData] as workers}
        {#each workers as worker}
          <tr>
            <td>
              <div class="flex items-center gap-3">
                <div>
                  <a
                    href={PUBLIC_SERVER_DASHBOARD_URL
                      ? `${PUBLIC_SERVER_DASHBOARD_URL}`
                      : '#'}
                    class="font-bold text-xl text-primary"
                  >
                    {worker.name}
                  </a>
                </div>
              </div>
            </td>

            {#if worker.online === true}
              <td class="text-xl text-success font-thin">online</td>
            {:else}
              <td class="text-xl text-error font-thin">offline</td>
            {/if}

            <td class="text-xl">
              {worker.chr} H/s
            </td>
          </tr>{/each}
      {/each}
    </tbody>
  </table>
</div>
