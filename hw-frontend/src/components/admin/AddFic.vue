<template>
  <div>
    addfic
    <editor  apiKey="qek0hdy0biduc64wdsnwqdgw1ppvote0x0n08pt25lukvqmh" 
    :init="{
         height: 500
     }" />
  </div>
</template>
<script>
  import Editor from '@tinymce/tinymce-vue'
  export default {
    components: {
      'editor': Editor
    }
  }

</script>
