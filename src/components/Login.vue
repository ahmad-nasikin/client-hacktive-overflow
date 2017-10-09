<template>
  <div class="container">
    <div class="text-header">
    <h3>Form Login Hacktive-Overflow</h3>
    </div>
    <div class="col-md-6 col-md-offset-3">
      <form class="form-horizontal">
        <div class="form-group">
          <div class="col-lg-10">
            <input v-model="username" type="text" class="form-control" placeholder="Username" required>
          </div>
        </div>
        <div class="form-group">
          <div class="col-lg-10">
            <input v-model="password" type="password" class="form-control" placeholder="Password" required>
          </div>
        </div>
        <div class="form-group text-right">
          <div class="col-lg-10 col-lg-offset-2">
            <div class="form-group">
              <button type="button" class="btn btn-primary" @click="login()" data-dismiss="modal">Login</button>
            </div>
          </div>
        </div>
      </form>
    </div>

  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default{
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      ...mapActions([
        'loginUser'
      ]),
      login () {
        this.loginUser({
          username: this.username,
          password: this.password
        })
        this.username = ''
        this.password = ''
      }
    }
  }
</script>
<style>
.text-header{
margin-bottom: 30px;
}
</style>
