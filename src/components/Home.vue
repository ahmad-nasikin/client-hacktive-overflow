<template>
<div>
  <div>
  <headers></headers>
  <div class="container">
  <modal-add-btn/>
  </div><br>
  <div>
    <todo/>
  </div>
  </div>
</div>
</template>

<script>
import Headers from '@/components/Headers'
import ModalAddBtn from '@/components/ModalAdd'
import Todo from '@/components/Todo'
export default {
  components: {
    Headers,
    ModalAddBtn,
    Todo
  }
}
</script>

<style>

</style>
