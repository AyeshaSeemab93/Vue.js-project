<script setup>
import Hero from "@/components/Hero.vue";
import HomeCards from "@/components/HomeCards.vue";
import JobListings from "@/components/JobListings.vue";
</script>
<template>
  <Hero title="Test Title" />
  <HomeCards />
  <JobListings :limit="4" showButton="true" />
</template>
