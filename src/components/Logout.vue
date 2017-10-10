<template>
  <div>
    <div class="col-md-offset-4 col-md-2 col-md-offset-5">
      <button type="button" class="btn btn-primary" @click="logout()">Logout</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'logout'
    ]),
    logout () {
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
