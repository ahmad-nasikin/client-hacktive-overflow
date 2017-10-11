<template>
<div>
  <div class="">
    <button id="create" type="button" class="btn btn-danger" data-toggle="modal" data-target="#myModal">Answer</button>
                <!-- Modal -->
    <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Answer</h4>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label class="control-label" for="focusedInput">Input Title</label>
              <input class="form-control" id="focusedInput" type="text" placeholder="Input Title" v-model="formPostAnswer.title">
            </div>
            <div class="form-group">
              <label for="textArea" class="control-label">Description</label>
              <div>
                <textarea class="form-control" id="textArea" v-model="formPostAnswer.content"></textarea>
              </div>
            </div>
            <!-- <div class="form-group">
              <label class="control-label" for="disabledInput">Author</label>
              <input class="form-control" id="disabledInput" type="text" disabled>
            </div> -->
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal"> Cancel</button>
            <button type="button" class="btn btn-success" data-dismiss="modal" @click="createAnswer(formPostAnswer)"> Post</button>
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
  props: ['q_id'],
  data () {
    return {
      formPostAnswer: {
        title: '',
        content: '',
        id: this.q_id
      },
      userAnswer: this.$store.state.userAnswer
    }
  },
  methods: {
    ...mapActions([
      'createAnswer'
    ]),
    submit () {
      this.createAnswer({
        q_id: this.q_id,
        questionData: this.formPostAnswer
      })
    }
  }
  // ,
  // created () {
  //   console.log(this.q_id)
  // }
}
</script>

<style>

</style>
