<template>
  <div>
    <h1 class="header_page_title">LIVE EVENT</h1>
    <section v-if="live">
      <div class="loading" v-if="loading">LOADING</div>
      <div v-else>
        <h2>Not quite time, Topper.</h2>
        <img src="https://i.ytimg.com/vi/NK_4uHWei9c/maxresdefault.jpg" alt="" width="350px;">
      </div>
    </section>
    <section v-else>
      <h1>This content is locked</h1>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Day1',
    data () {
      return {
        loading: false,
        live: true,
        fields: {
          pageTitle: null,
          pageContent: null
        }
      }
    },
    mounted () {
      this.$nextTick(() => {
        if(!this.$parent.$data.isExpired) {
          this.live = false;
        }
      });
    }
  }
</script>