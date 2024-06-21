<script lang="ts">
  import { PUBLIC_DOCS_URL } from '$env/static/public'
  import { currentUser } from '$lib/stores/user'
  import Icon from '@iconify/svelte'
  import { fade } from 'svelte/transition'
  import Stats from '$lib/components/Stats.svelte'
  import WorkersCard from '$lib/components/WorkersCard.svelte'

  import type { PageData } from './$types'

  export let data: PageData

  let adressData = data.addressData.data
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

    <!-- <div
      transition:fade={{ duration: 500 }}
      class="mockup-browser border border-base-300 shadow-xl mt-5"
    >
      <div class="mockup-browser-toolbar">
        <div class="bg-base-300 px-2 py-1 w-full card">
          <div class="flex items-center gap-1">
            <Icon icon="mdi-search" class="w-5 h-5" />
            unmineable.engage-dev.com
          </div>
        </div>
      </div>

      <div class="overflow-auto">
        <div
          class="flex overflow-auto justify-center h-64 sm:h-80 transition-all duration-300 items-center border-t border-base-300 bg-gradient-to-b from-primary to-primary/0 px-4 gap-2"
        >
          <Icon
            icon="teenyicons-svelte-solid"
            class="w-52 h-52 text-base-300"
          />
          <Icon
            icon="simple-icons:pocketbase"
            class="w-52 h-52 text-base-300"
          />
          <Icon icon="simple-icons:vercel" class="w-52 h-52 text-base-300" />
          <Icon
            icon="simple-icons:tailwindcss"
            class="w-52 h-52 text-base-300"
          />
          <Icon icon="simple-icons:zod" class="w-52 h-52 text-base-300" />
        </div>
      </div>
    </div> -->
  {:else}
    <div class="flex flex-col gap-10">
      <div>
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
          visit <a class="text-primary underline" href={PUBLIC_DOCS_URL}>docs</a
          > for more info
        </p>

        <div class="my-5">
          <Stats
            tokenBalance={statsData.balance_mining}
            workerCount={workersData.length}
            totalHashRate={999}
            tokenName={statsData.coin}
          />
        </div>

        <div class="my-5 card shadow">
          <div class="card-body p-5">
            <div class="text-2xl">Workers: {workersData.length}</div>
            {#if workersData.length === 0}
              <div class="text-center text-2xl">No workers found</div>
            {:else}
              <WorkersCard workerData={workersData} />
            {/if}
          </div>
        </div>

        <div class="my-5 card shadow">
          <div class="card-body p-5">
            <div class="text-2xl">Stats</div>
            <div class="">
              {JSON.stringify(statsData, null, 2)}
              <!-- {#each workers as worker}
            {worker.name}
            {worker.rhr}
          {/each} -->
            </div>
          </div>
        </div>

        <div class="my-5 card shadow">
          <div class="card-body p-5">
            <div class="text-2xl">Address</div>
            <div class="">
              {JSON.stringify(adressData, null, 2)}
              <!-- {#each workers as worker}
            {worker.name}
            {worker.rhr}
          {/each} -->
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
