<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div class="panel panel-info">
          <div class="panel-heading">
            <h4 class="panel-title">{{ questionbyid.title }}</h4>
          </div>
          <div class="panel-body">
            <p>{{ questionbyid.content }}</p>
            <p class="text-left">Created: {{ questionbyid.userId.username }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row2">
      <div class="col-md-6 col-md-offset-3">
        <div class="panel">
          <div class="panel-heading" v-for="answer in questionbyid.answer">
            <div>
              <p>{{ answer.content }}</p>
              <!-- <p>{{ answer.userId.username }}</p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  props: ['id'],
  computed: {
    ...mapState([
      'questionbyid'
    ])
  },
  methods: {
    ...mapActions([
      'getOneQuestion'
    ])
  },
  mounted () {
    this.getOneQuestion(this.id)
    console.log('this.questions', this.questions)
  }
}
</script>

<style scoped>
</style>
