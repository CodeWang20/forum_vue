<template>
  <div class="about">
    <h3>这是一个基于Vue构建的社区论坛项目</h3>
    {{ $store.getters.user.username }}
  </div>
</template>
