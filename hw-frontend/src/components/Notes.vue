<template>
  <div>
    <div id="textSection">
      <div id="title">版务</div>
      <div id="collapse">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item v-for="(note,no) in notes" :title="note.title" :name="no" :key="no">
            <div>{{ note.title }}</div>
            <div>{{ note.content }}</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>

    <div>
      <div>添加</div>
      <div>
        title:
        <el-input v-model="newNote.title" placeholder="请输入内容"></el-input>
      </div>
      <div>
        content:
        <el-input v-model="newNote.content" placeholder="请输入内容"></el-input>
      </div>
      <div>
        <button @click="submitNote(newNote)">submit</button>
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
        newNote: {
          title: 'test',
          content: 'ttest'
        }
      }
    },
    methods: {
      submitNote(newNote) {
        this.$store.commit('ADD_NOTE', {
          newNote
        });
      }
    },
    computed: {
      notes() {
        return this.$store.state.notes;
      }
    }
  }

</script>
