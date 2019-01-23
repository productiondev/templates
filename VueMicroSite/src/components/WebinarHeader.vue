<template>
  <div class="header_container">
    <header>
      <img class="img_james" src="https://d13p2xj50zkyqm.cloudfront.net/promos/LF/production/pubs/top/common/img/top_hotlist_012019/TOP_HOTLIST_JAMESHEADER_012019.png">
      <div class="header_content_container">
        <h1><span class="james_name">James Altucher's</span> 2019 Prediction Summit</h1>
        <h2>Join me here for this live, one-time-only broadcast and I'll show you three trends that could <strong>10X your money in 2019!</strong></h2>
        <p class="webinar_info">
          <span class="blue-text">When:</span> January 24th at 1 p.m. EST<br>
          <span class="blue-text">Where:</span> Altucher2019Summit.com<br>
        </p>
      </div>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'WebinarHeader'
  }
</script>

<style scoped lang="scss">
@import '../assets/scss/variables';

header {
  max-width: 1200px;
  margin: 0 auto;
}
.header_container {
  background-image: url('https://d13p2xj50zkyqm.cloudfront.net/promos_2/LF/production/pubs/top/common/img/top_hotlist_012019/TOP_HOTLIST_BACKGROUNDIMAGE_012019.jpg');
  width: 100vw;
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.eyebrow {
  width: 100%;
  background-color: $dark_blue;
  color: $yellow;
  text-align: center;
  padding: 25px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.header_content_container {
  max-width: 1200px;
  margin: 0 auto;
  margin: 25px 0 0 50px;
}
h1 {
  color: #fff;
  text-transform: uppercase;
  font-family: $open_sans;
  font-size: 4rem;
  font-weight: bold;
  text-shadow: 5px 5px 3px rgba(0,0,0,.8);

  .james_name {
    font-weight: 100;
    color: $yellow;
  }
}
h2 {
  color: $yellow;
  font-size: 1.45rem;
  font-weight: bold;
  padding: 20px 0;
}
img {
  shape-outside: url('https://d13p2xj50zkyqm.cloudfront.net/promos/LF/production/pubs/top/common/img/top_hotlist_012019/TOP_HOTLIST_JAMESHEADER_012019.png');
  float: right;
}
.webinar_info {
  color: #fff;
  margin-bottom: 20px;

  .blue-text {
    color: $teal;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0,0,0,.8);
  }
}
@media only screen and (max-width: 1205px) {
  header {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  img {
    align-self: flex-end;
    width: 75%
  }
}
@media screen and (max-width: 1050px) {
  h1 {
    font-size: 2.25em;
  }
  h2 {
    font-size: 1.5em;
    padding: 20px 0 5px;
  }
  img {
    width: 60%
  }
}
@media screen and (max-width: 780px) {
  header {
    padding: 0;
  }
  .header_content_container {
    margin: 20px;
  }
  h1 {
    font-size: 2.25em;
  }
  h2 {
    font-size: 1em;
    padding: 20px 0 5px;
  }
  img {
    width: 50%;
  }
  .webinar_info {
    font-size: 1em;
  }
}
@media screen and (max-width: 720px) {
  .eyebrow {
    font-size: 12px;
    padding: 10px 30px;
  }
}
@media screen and (max-width: 600px) {
  img {
    display: none;
  }
}
@media screen and (max-width: 540px) {
  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1em;
  }
  img {
    width: 40%;
  }
}
@media only screen and (max-width: 380px) {
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1rem;
  }
}
</style>