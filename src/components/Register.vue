<template>
  <div class="container">
    <div class="text-header">
    <h1>Form Register Hacktive-Overflow</h1>
    </div>
    <div class="row">
      <div class="formRegister">
      <div class="col-md-6 col-md-offset-3">
        <form @submit.prevent="register(formRegister)"class="form-horizontal" id="login">
          <fieldset>
            <div class="form-group">
              <label for="inputPassword" class="col-lg-2 control-label">Username</label>
              <div class="col-lg-10">
                <input type="text" class="form-control" placeholder="username" v-model="formRegister.username">
              </div>
            </div>
            <div class="form-group">
              <label for="inputPassword" class="col-lg-2 control-label">Email</label>
              <div class="col-lg-10">
                <input type="text" class="form-control" placeholder="email" v-model="formRegister.email">
              </div>
            </div>
            <div class="form-group">
              <label for="inputPassword" class="col-lg-2 control-label">Password</label>
              <div class="col-lg-10">
                <input type="password" class="form-control" placeholder="Password" v-model="formRegister.password">
              </div>
            </div>
            <div class="form-group">
              <div class="col-lg-10 col-lg-offset-2">
                <button type="reset" class="btn btn-default">Cancel</button>
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      formRegister: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapState([
      'registerUser'
    ])
  },
  methods: {
    ...mapActions([
      'registerUser'
    ])
  }
}
</script>

<style>
.formRegister{
  margin-top: 30px;
}
.text-header{
margin-bottom: 30px;
}
</style>
