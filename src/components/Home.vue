<template>
<div>
  <div>
  <!-- <headers></headers> -->
  <div class="container">
  <modal-add-btn/>
  </div>
  <div class="jarak">
    <questions/>
  </div>
  </div>
  <div>
    <logout/>
  </div>
</div>
</template>

<script>
// import Headers from '@/components/Headers'
import ModalAddBtn from '@/components/ModalAdd'
import Questions from '@/components/Questions'
import Logout from '@/components/Logout'
export default {
  components: {
    // Headers,
    ModalAddBtn,
    Questions,
    Logout
  }
}
</script>

<style>
.jarak{
  margin-top: 10px;
}
</style>
