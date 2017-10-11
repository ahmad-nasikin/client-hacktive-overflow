<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2" v-for="question in questions">
          <div class="panel panel-danger">
            <div class="panel-heading">
              <router-link :to="'/' + question._id">
                <h3 class="panel-title">{{question.title}}</h3>
              </router-link>
              <h3 class="panel-title">{{question.answer.content}}</h3>
              <p align="left">Created: {{question.userId.username}}</p>
            </div>
            <div class="panel-body">
              <p>{{question.content}}</p>
              <p class="text">{{question.createdAt}}</p>
            </div>
            <button @click="deleteQuestion(question)">Delete</button>
            <button @click="updateQuestion(updateQuestion)">Upadate</button>
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
      'getAllQuestions',
      'deleteQuestion',
      'editQuestion'
    ])
  },
  computed: {
    questions () {
      return this.$store.state.questions
    }
  },
  created () {
    this.getAllQuestions()
  }
}
</script>

<style>
.text{
  margin-top: 50px;
  left: 10px;
}
</style>
