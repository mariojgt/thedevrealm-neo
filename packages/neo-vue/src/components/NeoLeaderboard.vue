<script setup lang="ts">
export interface LeaderboardEntry {
  rank: number
  name: string
  score: number | string
}
defineProps<{ entries: LeaderboardEntry[] }>()

function rankIcon(r: number) { return r === 1 ? '🥇' : r === 2 ? '🥈' : r === 3 ? '🥉' : String(r) }
</script>

<template>
  <div class="neo-leaderboard">
    <div class="neo-lb-header">
      <span>#</span>
      <span style="flex:1">Player</span>
      <span>Score</span>
    </div>
    <div
      v-for="e in entries"
      :key="e.rank"
      :class="['neo-lb-row', e.rank <= 3 ? `neo-lb-row-${e.rank}` : '']"
    >
      <span :class="['neo-lb-rank', e.rank <= 3 ? `neo-lb-rank-${e.rank}` : '']">{{ rankIcon(e.rank) }}</span>
      <span class="neo-lb-name">{{ e.name }}</span>
      <span class="neo-lb-score">{{ e.score }}</span>
    </div>
  </div>
</template>
