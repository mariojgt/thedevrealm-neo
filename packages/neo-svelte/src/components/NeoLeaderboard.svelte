<script lang="ts">
  export interface LeaderboardEntry { rank: number; name: string; score: number | string }
  export let entries: LeaderboardEntry[] = []

  function icon(r: number) { return r === 1 ? '🥇' : r === 2 ? '🥈' : r === 3 ? '🥉' : String(r) }
</script>

<div class="neo-leaderboard">
  <div class="neo-lb-header">
    <span>#</span>
    <span style="flex:1">Player</span>
    <span>Score</span>
  </div>
  {#each entries as e (e.rank)}
    <div class="neo-lb-row" class:neo-lb-row-1={e.rank===1} class:neo-lb-row-2={e.rank===2} class:neo-lb-row-3={e.rank===3}>
      <span class="neo-lb-rank" class:neo-lb-rank-1={e.rank===1} class:neo-lb-rank-2={e.rank===2} class:neo-lb-rank-3={e.rank===3}>{icon(e.rank)}</span>
      <span class="neo-lb-name">{e.name}</span>
      <span class="neo-lb-score">{e.score}</span>
    </div>
  {/each}
</div>
