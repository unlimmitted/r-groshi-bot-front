<template>
  <ChooseContact/>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import ChooseContact from "@/components/new-duty/ChooseContact.vue";

export default defineComponent({
  name: "NewDuty",
  components: {ChooseContact}
})
</script>

<style scoped>

</style>