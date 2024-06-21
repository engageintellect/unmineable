<script lang="ts">
  import { formatNumber } from '$lib/utils'

  export let rewards: any
  export let payment_threshold: any
  export let network: any
</script>

<div>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 w-full">
    <div class="card w-full shadow">
      <div class="card-body p-5">
        <h2 class="card-title">Rewards</h2>

        <table class="w-full">
          <tbody>
            {#each Object.entries(rewards) as [key, value]}
              <tr>
                <td>
                  <div class="flex items-center gap-3">
                    <div>
                      <div class="font-bold text-xl text-primary capitalize">
                        {key.replaceAll('_', ' ')}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="text-xl">
                  {formatNumber(Number(value)) || '0'}
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
    <div class="card w-full shadow">
      <div class="card-body p-5">
        <h2 class="card-title">Payment Threshold</h2>
        <p class="text-3xl font-bold text-primary">
          {formatNumber(Number(payment_threshold))}
        </p>
        <h2 class="card-title">Network</h2>
        <p class="text-3xl font-bold text-primary">{network}</p>
      </div>
    </div>
  </div>
</div>
