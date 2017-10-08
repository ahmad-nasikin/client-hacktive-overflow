<template>
<div>
  <div>
  <headers></headers>
  <div class="container">
  <modal-add-btn/>
  </div>
  <div class="jarak">
    <todo/>
  </div>
  </div>
</div>
</template>

<script>
import Headers from '@/components/Headers'
import ModalAddBtn from '@/components/ModalAdd'
import Questions from '@/components/Questions'
export default {
  components: {
    Headers,
    ModalAddBtn,
    Questions
  }
}
</script>

<style>
.jarak{
  margin-top: 10px;
}
</style>
