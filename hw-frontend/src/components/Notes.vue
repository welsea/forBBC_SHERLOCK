<template>
  <div>
    <div id="textSection">
      <div id="title">版务</div>
      <div id="collapse">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item v-for="(note,no) in notes" :title="note.title" :name="no" :key="no">
            <div>{{ note.content }}</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>

    <div>
      <div>添加</div>
      <div>
        title:
        <el-input v-model="note.title" placeholder="请输入内容"></el-input>
      </div>
      <div>
        content:
        <el-input v-model="note.content" placeholder="请输入内容"></el-input>
      </div>
      <div>
        <button @click="submitNote">submit</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'notes_list',
    data() {
      return {
        activeName: '',
        note: {
          title: '',
          content: ''
        },
      }
    },
    methods: {
      submitNote() {
        this.$store.dispatch('addNote',{
          note:this.note
        })
      }
    },
    created() {
      if (this.notes.length === 0) {
        this.$store.dispatch('allNotes')
      }
    },
    computed: {
      notes() {
        return this.$store.getters.allNotes;
      }
    },

  }

</script>
