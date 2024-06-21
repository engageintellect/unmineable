<script lang="ts">
  export let workerData: any
</script>

<div class="overflow-x-auto">
  <table class="w-full">
    <!-- head -->
    <!-- <thead> -->
    <!-- <tr> -->
    <!-- <th>Worker</th> -->
    <!-- <th>Job</th> -->
    <!-- <th></th> -->
    <!-- </tr> -->
    <!-- </thead> -->
    <tbody>
      <!-- row 1 -->
      {#each [workerData] as workers}
        {#each workers as worker}
          <tr>
            <td>
              <div class="flex items-center gap-3">
                <div>
                  <div class="font-bold text-xl text-primary">
                    {worker.name}
                  </div>
                </div>
              </div>
            </td>
            <td class="text-xl">
              {worker.rhr} H/s
            </td>
          </tr>
        {/each}
      {/each}
    </tbody>
  </table>
</div>
