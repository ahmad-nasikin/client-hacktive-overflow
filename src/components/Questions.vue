<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2" v-for="question in questions">
          <div class="panel panel-danger">
            <div class="panel-heading">
              <h3 class="panel-title">{{question.title}}</h3>
            </div>
            <div class="panel-body">
              <p>{{question.content}}</p>
            </div>
          </div>
        </div>
     </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'getAllQuestions'
    ])
  },
  computed: {
    questions () {
      return this.$store.state.questions
    }
  },
  mounted () {
    this.getAllQuestions()
  }
}
</script>

<style>

</style>
