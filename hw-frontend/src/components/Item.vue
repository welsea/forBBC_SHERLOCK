<template>
  <div>
    <div v-if="from=='fics'" class="item_content">
      <div>name</div>
      <div>summary</div>
      <div>content</div>
      <div id="work_kudos">
        <i class="icon icon-font icon-aixin1 aixin_fill"></i>
        <div id="kudos_num">kudos</div>
      </div>
    </div>

    <div v-else class="item_content">
      <div>{{img.name}}</div>
      <img :src="img.url" alt="">
      <div id="work_kudos">
        <i class="icon icon-font icon-aixin1 aixin_fill"></i>
        <div id="kudos_num">{{img.kudos}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        from: '',
        item:[],
        id:''
      }
    },
    methods: {
      fetchData() {
        this.from = this.$route.query.from;
        this.id = this.$route.query.id;
      }
    },
    computed: {
      img() {
        return this.$store.getters.imgById(this.$route.query.id);;
      },
    },
    created() {
      this.fetchData();
      this.item = this.img;
      // if (this.item.name!='') {
        this.$store.dispatch('imgById', {
          id: this.$route.query.id
        });
        console.log(this.img)
      // }

      //   this.$store.dispatch('imgByid',this.kw)
      //   this.$store.dispatch('allFics');
      //   this.$store.dispatch('allVideos');
    },
  }

</script>
<style>
  #work_kudos {
    background: #fff;
    padding: 5px 6px;
    border-radius: 20px;
    font-size: 11px;
    color: #999;
    line-height: 13px;
    display: flex;
    justify-content: center;
    width: fit-content;
    border: 1px solid #fad4d3;
    margin: 5px 0;
    height: fit-content;
  }

  .item_content {
    width: 90%;
    background-color: white;
    border-radius: 20px;
    margin-top: 20px;
  }

  .item_content>img {
    width: 50%;
  }

</style>
