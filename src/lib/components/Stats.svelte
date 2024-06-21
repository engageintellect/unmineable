<script lang="ts">
  export let tokenName: any
  export let tokenBalance: any
  export let workerCount: any
  export let totalHashRate: any
</script>

<div class="stats stats-vertical lg:stats-horizontal shadow w-full">
  <div class="stat">
    <div class="stat-title">Balance</div>
    <div class="stat-value">{tokenBalance || 0}</div>
    <div class="stat-desc">{tokenName || 'unknown'} Tokens</div>
  </div>

  <div class="stat">
    <div class="stat-title">Workers</div>
    <div class="stat-value">{workerCount || 0}</div>
    <div class="stat-desc">↗︎ 400 (22%)</div>
  </div>

  <div class="stat">
    <div class="stat-title">HashRate</div>
    <div class="stat-value">{totalHashRate || 0}</div>
    <div class="stat-desc">↘︎ 90 (14%)</div>
  </div>
</div>
