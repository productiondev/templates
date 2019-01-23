<template>
  <div class="homepage_sq_parent_parent">
    <h1 class="header_page_title">STAY TUNED FOR NEW EXCLUSIVE INFO EVERYDAY</h1>
    <div class="homepage_sq_parent">
      <div class="loading" v-if="loading">LOADING</div>
      <div v-else class="homepage_sq_container">
        <div class="homepage_sq" v-for="item in items" :key="item.id">
          <div class="homepage_sq_locked_false" v-if="item.id == 1">
            <p class="homepage_sq_title"><strong>{{ item.cta_title }}</strong></p>
            <p class="homepage_sq_desc">{{ item.cta_desc }}</p>
            <router-link :to="item.path">{{ item.cta_btn }}</router-link>
          </div>
          <a href="https://gelp.com" @click="locked" v-if="item.locked && item.id != 1" class="homepage_sq_locked_true">
            <div class="homepage_sq_padlock_container">
              <div class="homepage_sq_padlock">
                <div class="homepage_sq_padlock_top"></div>
                <div class="homepage_sq_padlock_bottom">
                  <div class="homepage_sq_padlock_bottom_circle"></div>
                  <div class="homepage_sq_padlock_bottom_triangle"></div>
                </div>
              </div>
            </div>
            <div class="homepage_sq_padlock_title" v-if="item.id != 1">{{ item.title }}</div>
            <p class="homepage_sq_sub_title" v-if="item.id != 1">{{ item.cta_sub_title }}</p>
          </a>
          <router-link :to="item.path" v-if="!item.locked && item.id != 1" class="homepage_sq_locked_true">
            <div class="homepage_sq_padlock_container">
              <div class="homepage_sq_padlock">
                <div class="homepage_sq_padlock_top" ref="padlock_animate"></div>
                <div class="homepage_sq_padlock_bottom">
                  <div class="homepage_sq_padlock_bottom_circle"></div>
                  <div class="homepage_sq_padlock_bottom_triangle"></div>
                </div>
              </div>
            </div>
            <div class="homepage_sq_padlock_title" v-if="item.id != 1">{{ item.title }}</div>
            <p class="homepage_sq_sub_title" v-if="item.id != 1">{{ item.cta_sub_title }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        loading: true,
        items: [
          {
            id: 1,
            icon: 'padlock',
            title: 'Welcome!',
            path: '/welcome',
            locked: true,
            cta_title: 'Special Video from host James Altucher',
            cta_sub_title: 'January 20',
            cta_desc: 'Don\'t miss this special message from your host',
            cta_btn: 'Read More'
          },
          {
            id: 2,
            icon: 'padlock',
            title: 'Day 1',
            path: '/day-1',
            locked: true,
            cta_title: 'Special Video from host James Altucher',
            cta_sub_title: 'January 19',
            cta_desc: 'Don\'t miss this special message from your host',
            cta_btn: 'Read More'
          },
          {
            id: 3,
            icon: 'padlock',
            title: 'Day 2',
            path: '/day-2',
            locked: true,
            cta_title: 'CTA TITLE',
            cta_sub_title: 'January 20',
            cta_desc: 'CTA DESC',
            cta_btn: 'Read More'
          },
          {
            id: 4,
            icon: 'padlock',
            title: 'Day 3',
            path: '/day-3',
            locked: true,
            cta_title: 'CTA TITLE',
            cta_sub_title: 'January 21',
            cta_desc: 'CTA DESC',
            cta_btn: 'Read More'
          },
          {
            id: 5,
            icon: 'padlock',
            title: 'Day 4',
            path: '/day-4',
            locked: true,
            cta_title: 'CTA TITLE',
            cta_sub_title: 'January 22',
            cta_desc: 'CTA DESC',
            cta_btn: 'Read More'
          },
          {
            id: 6,
            icon: 'padlock',
            title: 'Day 5',
            path: '/day-5',
            locked: true,
            cta_title: 'CTA TITLE',
            cta_sub_title: 'January 23',
            cta_desc: 'CTA DESC',
            cta_btn: 'Read More'
          }
        ]
      }
    },
    mounted () {
      let component = this;

      // ui update
      this.loading = false;

      // send user to page top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

      // this info is coming
      // from the parent
      this.$nextTick(() => {
        let daysRemainingTillEvent = this.$parent.$data.daysRemainingTillEvent;

        let numberOfDaysToUnlock;

        if(daysRemainingTillEvent < this.$parent.$data.numberOfDaysOfLeadUpMaterial) {
          numberOfDaysToUnlock = (this.$parent.$data.numberOfDaysOfLeadUpMaterial - daysRemainingTillEvent)
        }

        // if expired unlock all days
        if(this.$parent.$data.isExpired) {
          for(let i = 0; i < this.items.length; i++) {
            this.items[i].locked = false;
          }
        } else {
          // using different comparison operator than what's in
          // nav.vue bc first item is a DAY and not HOME link
          for(let i = 0; i < (numberOfDaysToUnlock+1); i++) {
            this.items[i].locked = false;
          }
        }

        setTimeout(function() {
          let padlockAnimate = component.$refs.padlock_animate;

          if(padlockAnimate != undefined) {
            // need to set timeout to next tick
            // after v-for as set these nodes
            let staggerAnime = component.$anime.timeline();

            // animate opening of locks (sequential order)
            for(let i = 0; i < padlockAnimate.length; i++) {
              staggerAnime.add({
                targets: padlockAnimate[i],
                rotate: 90,
                skew: 0,
                duration: 500,
                delay: 150,
                easing: [.01,.74,.79,1.56]
              });
            }
          }
        }, 1000);
      });
    },
    methods: {
      locked: function(e) {
        // animate locked padlock
        this.$anime({
          targets: e.target,
          duration: 500,
          marginLeft: [7, -6, 5, -3, 0],
          easing: [.01,.74,.79,1.56]
        });
      }
    }
  }
</script>

<style scoped lang="scss">
@import '../assets/scss/variables';

.homepage_sq_parent_parent {
  max-width: 1000px;
  width: 100%;
}
h1  {
  max-width: 800px;
  margin: 0px auto 40px;
}
.homepage_sq_padlock_container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.homepage_sq_padlock {
  width: 150px;
  height: 150px;
  margin-top: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.homepage_sq_padlock_top {
  height: 80px;
  width: 90px;
  border: 20px solid #fff;
  border-bottom-color: transparent;
  border-radius: 35%;
  position: absolute;
  top: 0;
}
.homepage_sq_padlock_bottom {
  height: 100px;
  width: 100px;
  background-color: #fff;
  border-radius: 5%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.homepage_sq_padlock_bottom_circle {
  height: 30px;
  width: 30px;
  background-color: $dark_blue;
  border-radius: 50%;
}
.homepage_sq_padlock_bottom_triangle {
  width: 0;
  height: 0;
  margin-top: -20px;
  border-bottom: 50px solid $dark_blue;
  border-right: 25px solid transparent;
  border-left: 25px solid transparent;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}
// .homepage_sq:last-of-type .homepage_sq_padlock_bottom_circle {
//   background-color: $orange;
// }
// .homepage_sq:last-of-type .homepage_sq_padlock_bottom_triangle {
//   border-bottom: 50px solid $orange;
// }
.homepage_sq_padlock_title {
  color: $yellow;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5em;
  margin-top: -20px;
}

.homepage_sq_parent {
  width: 100%;
  max-width: 1000px;
}
.homepage_sq_container {
  display: grid;
  margin: 0 auto;
  max-width: 1000px;
  padding: 0;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(250px, auto);
}
.homepage_sq {
  border: 8px solid #fff;
  border-radius: 6px;
  background-color: $dark_blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
// .homepage_sq:last-of-type {
//   background-color: $orange;
// }
.homepage_sq_locked_false {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 100%;
  width: 100%;
  position: relative;

  a {
    width: 100%;
    height: 50px;
    color: $dark_blue;
    padding: 2em;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    align-self: flex-end;
    background-color: $yellow;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    transition: 300ms;
  }
  a:hover {
    height: 100%;
  }
}
.homepage_sq_locked_true {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: #fff;
  height: 100%;
  width: 100%;
  position: relative;
  cursor: pointer;
  transition: 300ms;
}
.homepage_sq_locked_true:hover {
  transform: scale(1.025);
}
.homepage_sq_title,
.homepage_sq_sub_title {
  color: #fff;
  text-align: center;
  padding: 5px 20px;
}
.homepage_sq_sub_title {
  padding: 0;
  color: #fff;
  text-transform: uppercase;
  margin-top: -25px;
  font-weight: bold;
  font-size: .85em;
}
.homepage_sq_desc {
  color: $yellow;
  text-align: center;
  margin-bottom: 30px;
  padding: 5px 20px;
  font-size: 1.25em;
}

@media only screen and (max-width: 1205px) {
  .homepage_sq_parent {
    padding: 0 50px;
  }
}
</style>