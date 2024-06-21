<script lang="ts">
  import { PUBLIC_DOCS_URL, PUBLIC_POCKETBASE_URL } from '$env/static/public'
  import { currentUser } from '$lib/stores/user'
  import Icon from '@iconify/svelte'
  import { fade } from 'svelte/transition'
  import Stats from '$lib/components/Stats.svelte'
  import WorkersCard from '$lib/components/WorkersCard.svelte'
  import StatsCard from '$lib/components/StatsCard.svelte'
  import AddressCard from '$lib/components/AdressCard.svelte'
  import type { PageData } from './$types'
  import { totalHashRate } from '$lib/stores/hashrate'

  export let data: PageData
  let addressData = data.addressData.data
  let statsData = data.statsData.data
  let workersData = data.workerData.data.randomx.workers
</script>

<div class="">
  {#if !$currentUser}
    <div class="hero bg-base-100">
      <div class="hero-content text-center">
        <div class="max-w-sm">
          <h1
            class="text-6xl text-center font-extrabold text-primary drop-shadow-lg"
          >
            unmineable
          </h1>
          <p class="py-5">
            The best way to start your next <a
              href="https://kit.svelte.dev"
              class="text-primary underline">Svelte</a
            >
            project, if you care about building
            <span class="text-primary italic">fast</span>...
          </p>
          <div class="max-w-md flex gap-2">
            <a
              href="/auth/register"
              class="btn btn-primary flex group items-center justify-between flex-1 group/registerButton"
            >
              <div>get started</div>
              <Icon
                icon="material-symbols:rocket"
                class="w-7 h-7 md:group-hover/registerButton:rotate-45 transition-transform duration-300"
              />
            </a>
            <a
              href="/auth/login"
              class="btn btn-primary btn-outline flex-1 flex items-cetner justify-between group/loginButton"
            >
              <div>login</div>
              <Icon
                icon="material-symbols:login"
                class="w-7 h-7 md:group-hover/loginButton:translate-x-1 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  {:else if $currentUser.verified}
    <div class="flex flex-col gap-10">
      <div>
        <div class="px-5">
          <h1 class="text-7xl">
            <div
              class="tracking-tight text-primary font-extrabold flex items-center"
            >
              <div>mining</div>
              <div class="font-thin text-primary/[33%] tracking-tighter">
                data
              </div>
            </div>
          </h1>
          <p class="mt-2">
            visit <a class="text-primary underline" href={PUBLIC_DOCS_URL}
              >docs</a
            > for more info
          </p>
        </div>

        <div class="my-2">
          <Stats
            tokenBalance={statsData.balance_mining}
            workerCount={workersData.length}
            totalHashRate={$totalHashRate}
            tokenName={statsData.coin}
          />
        </div>

        <div class="my-2 card shadow">
          <div class="card-body p-5">
            <div class="card-title">
              Workers: <span class="text-primary font-bold text-3xl"
                >{workersData.length}</span
              >
            </div>
            {#if workersData.length === 0}
              <div class="text-center text-2xl">No workers found</div>
            {:else}
              <WorkersCard workerData={workersData} />
            {/if}
          </div>
        </div>

        <StatsCard
          rewards={statsData.rewarded}
          payment_threshold={statsData.payment_threshold}
          network={statsData.network}
        />

        <AddressCard {addressData} />
      </div>
    </div>
  {:else}
    <div in:fade class="card shadow">
      <div class="card-body">
        <div class="card-title">Error:</div>
        <div>Must be a verified user to view mining data.</div>
        <div>
          Make sure that the user you are trying to log in as has the "verified"
          option toggled to "true" in the users table of the <a
            href={`${PUBLIC_POCKETBASE_URL}/_/`}
            class="text-primary underline">Pocketbase</a
          >
          admin panel.
        </div>
      </div>
    </div>
  {/if}
</div>
