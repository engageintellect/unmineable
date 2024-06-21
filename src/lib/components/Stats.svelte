<script lang="ts">
  export let tokenName: any
  export let tokenBalance: any
  export let workerCount: any
  export let totalHashRate: any

  import { formatNumber } from '$lib/utils'
</script>

<div class="stats stats-vertical lg:stats-horizontal shadow w-full">
  <div class="stat">
    <div class="stat-title">Balance</div>
    <div class="stat-value text-primary text-5xl">
      {formatNumber(Number(tokenBalance)) || '0'}
    </div>
    <div class="stat-desc">{tokenName || 'unknown'} Tokens</div>
  </div>

  <div class="stat">
    <div class="stat-title">Workers</div>
    <div class="stat-value text-primary">{workerCount || 0}</div>
    <div class="stat-desc">Currently online</div>
  </div>

  <div class="stat">
    <div class="stat-title">HashRate</div>
    <div class="stat-value text-primary">{totalHashRate || 0} H/s</div>
    <div class="stat-desc">Total Hashrate</div>
  </div>
</div>
