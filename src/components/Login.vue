
<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div v-if="signinData === 'username salah'">
          <div class="alert alert-dismissible alert-danger">
            <button type="button" class="close" data-dismiss="alert">&times;</button>  
            {{signinData}}
          </div>
        </div>
        <div v-else-if="signinData === 'password salah'">
          <div class="alert alert-dismissible alert-danger">
            <button type="button" class="close" data-dismiss="alert">&times;</button>  
            {{signinData}}
          </div>
        </div>
        <form @submit.prevent="login(formLogin)" class="form-horizontal" id="login">
          <fieldset>
            <div class="form-group">
              <label for="inputUsername" class="col-lg-2 control-label">Username</label>
              <div class="col-lg-10">
                <input type="text" class="form-control" id="inputEmail" placeholder="Email" v-model="formSignin.email">
              </div>
            </div>
            <div class="form-group">
              <label for="inputPassword" class="col-lg-2 control-label">Password</label>
              <div class="col-lg-10">
                <input type="password" class="form-control" id="inputPassword" placeholder="Password" v-model="formSignin.password">
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
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      formSignin: {
        username: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapState([
      'loginUser'
    ])
  },
  methods: {
    ...mapActions([
      'login'
    ])
  },
  created () {
    this.loginUser()
  }
}
</script>