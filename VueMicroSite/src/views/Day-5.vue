<template>
  <div>
    <h1 class="header_page_title">{{ pageTitle }}</h1>
    <section v-if="live">
      <div class="loading" v-if="loading">LOADING</div>
      <div class="content" v-else>
        <h1>Placeholder content for Day 5</h1>
      </div>
    </section>
    <section v-else>
      <h1>This content is locked</h1>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Day5',
    data () {
      return {
        loading: true,
        live: true,
        pageTitle: "Day 5"
      }
    },
    mounted () {
      let component = this;

      // send user to page top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

      this.$nextTick(() => {
        if(this.$parent.$data.daysRemainingTillEvent < '1') {
          this.live = true;
          this.loading = false
        } else {
          this.live = false;
        }
      });
    },
  }
</script>