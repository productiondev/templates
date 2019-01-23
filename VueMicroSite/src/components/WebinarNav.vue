<template>
  <nav>
    <ul v-if="!isMiniMenu">
      <li v-for="item in items" :key="item.id" v-if="item.id != 8">
        <router-link :to="item.path" v-if="!item.locked && item.id != 8">{{ item.title }}</router-link>
        <span v-else class="padlock_animate">
          <span class="nav_padlock_container">
            <span class="nav_padlock">
              <span class="nav_padlock_top"></span>
              <span class="nav_padlock_bottom">
                <span class="nav_padlock_bottom_circle"></span>
                <span class="nav_padlock_bottom_triangle"></span>
              </span>
            </span>
          </span>
          <span class="nav_padlock_background"></span>
        </span>
      </li>
    </ul>
    <ul v-else class="mini_menu_top_level">
      <li>
        <router-link :to="items[0].path">{{ items[0].title }}</router-link>
      </li>
      <li @click="showMenu">
        <router-link to="#!" v-if="!menuOpen">{{ items[7].title }}</router-link>
        <router-link to="#!" v-else>X</router-link>
      </li>
      <li>
        <router-link :to="items[6].path">{{ items[6].title }}</router-link>
      </li>
    </ul>
    <ul :class="[menuOpen ? 'mini_menu_open' : 'mini_menu_close']" ref="miniMenu">
      <li v-for="miniMenuItem in miniMenuItems" :key="miniMenuItem.id" v-if="miniMenuItem.id != 6">
        <a v-if="!miniMenuItem.locked" @click="goToRoute(miniMenuItem.path)">{{ miniMenuItem.title }}</a>
        <span v-else class="padlock_animate" @click="hideMiniMenu">
          <span class="nav_padlock_container">
            <span class="nav_padlock">
              <span class="nav_padlock_top"></span>
              <span class="nav_padlock_bottom">
                <span class="nav_padlock_bottom_circle"></span>
                <span class="nav_padlock_bottom_triangle"></span>
              </span>
            </span>
          </span>
          <span class="nav_padlock_background"></span>
        </span>
      </li>
      <li @click="showMenu">
        <router-link to="#!">{{ miniMenuItems[5].title }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'WebinarNav',
    data () {
      return {
        isMiniMenu: false,
        menuOpen: false,
        items: [
          {
            id: 1,
            icon: 'padlock',
            title: 'Home',
            path: '/'
          },
          {
            id: 2,
            icon: 'menu',
            title: 'Day 1',
            path: '/day-1',
            locked: true
          },
          {
            id: 3,
            icon: 'padlock',
            title: 'Day 2',
            path: '/day-2',
            locked: true
          },
          {
            id: 4,
            icon: 'padlock',
            title: 'Day 3',
            path: '/day-3',
            locked: true
          },
          {
            id: 5,
            icon: 'padlock',
            title: 'Day 4',
            path: '/day-4',
            locked: true
          },
          {
            id: 6,
            icon: 'padlock',
            title: 'Day 5',
            path: '/day-5',
            locked: true
          },
          {
            id: 7,
            icon: 'padlock',
            title: 'Event',
            path: '/live',
            locked: false
          },
          {
            id: 8,
            icon: 'padlock',
            title: 'Menu',
            path: '/day-2'
          },
        ],
        miniMenuItems: [
          {
            id: 1,
            icon: 'padlock',
            title: 'Day 1',
            path: '/day-1',
            locked: true
          },
          {
            id: 2,
            icon: 'padlock',
            title: 'Day 2',
            path: '/day-2',
            locked: true
          },
          {
            id: 3,
            icon: 'padlock',
            title: 'Day 3',
            path: '/day-3',
            locked: true
          },
          {
            id: 4,
            icon: 'padlock',
            title: 'Day 4',
            path: '/day-4',
            locked: true
          },
          {
            id: 5,
            icon: 'padlock',
            title: 'Day 5',
            path: '/day-5',
            locked: true
          },
          {
            id: 6,
            icon: 'padlock',
            title: 'CLOSE MENU',
            path: '#!',
            locked: true
          }
        ]
      }
    },
    mounted () {
      let component = this;

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
         // using different comparison operator bc
         // first item is HOME and not a DAY link
         for(let i = 0; i < (numberOfDaysToUnlock+1); i++) {
           this.items[i].locked = false;
         }
         // using different comparison operator than what's in
         // nav.vue bc first item is a DAY and not HOME link
         for(let i = 0; i < numberOfDaysToUnlock; i++) {
           this.miniMenuItems[i].locked = false;
         }
        }
      });

      // let numberOfDaysToUnlock = (this.$parent.$data.daysRemainingTillEvent - this.numberOfDaysOfLeadUpMaterial);

      let mini = () => {this.showMiniMenu()};
      let miniHide = () => {this.hideMiniMenu()};
      let scroller = () => {this.scrollListener()};

      // need to set timeout to next tick
      // after v-for as set these nodes
      setTimeout(function() {
        component.animatePadLock();
      }, 100);

      // check width in order to
      // display proper menu
      if(window.innerWidth <= 720) {
        mini();

        // add the scroller event listener
        window.addEventListener('scroll', scroller, false);
      } else {
        miniHide();
      }
      // listen for window size change
      window.addEventListener('resize', () => {
        if(window.innerWidth <= 720) {
          mini();

          // re add the scroller event listener
          window.addEventListener('scroll', scroller, false);
        } else {
          // make sure menu is close
          // if window gets resized
          this.menuOpen = false
          miniHide();

          // remove the scroller event listener
          window.removeEventListener('scroll', scroller, false);
        }
      });
    },
    methods: {
      goToRoute: function (path) {
        this.menuOpen = false
        this.$router.push({path: path});
      },
      scrollListener: function() {
        let component = this;
        let isMiniMenu = document.getElementsByTagName('nav');
        let isMiniMenuTopLevel = document.getElementsByClassName('mini_menu_top_level');

        // get top level nav items on mini menu and
        // make smaller for better ux (on mobile)
        // when top nav is 'sticking' to top
        if(isMiniMenu[0].getBoundingClientRect().top <= 1) {
          component.$nextTick(() => {
            isMiniMenuTopLevel[0].classList.add('small');
          });
        }
        else {
          component.$nextTick(() => {
            isMiniMenuTopLevel[0].classList.remove('small');
          });
        }
      },
      animatePadLock: function () {
        let component = this;
        component.$anime({
          targets: '.padlock_animate',
          marginLeft: 0,
          marginTop: 0,
          duration: 800,
          delay: 200,
          easing: 'linear'
        });
        component.$anime({
          targets: '.nav_padlock_background',
          marginLeft: 0,
          duration: 200,
          delay: 800,
          easing: 'linear'
        });
      },
      getWindowWidth: function () {
        if(window.innerWidth <= 720) {
          this.showMiniMenu();
        } else {
          this.hideMiniMenu();
        }
      },
      showMenu: function () {
        // update UI
        this.menuOpen = !this.menuOpen;
      },
      showMiniMenu: function () {
        let component = this;

        component.isMiniMenu = true;
      },
      hideMiniMenu: function () {
        let component = this;
        component.isMiniMenu = false;

        component.animatePadLock();
      },
    }
  }
</script>

<style scoped lang="scss">
@import './src/assets/scss/variables.scss';

nav {
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
}
ul {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  background-color: $dark_blue;
  margin: 0 0 40px;
  height: 120px;

  li:not(:last-of-type) {
    margin-right: 14px;
  }
  li:last-of-type {
    background-color: $orange;

    a {
      color: #fff;
    }
  }
  li:first-of-type {
    background-color: $dark_blue;

    a {
      color: #fff;
    }
  }
  li {
    height: 80px;
    width: 80px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 5px solid #fff;
    background-color: $yellow;
    border-radius: 50%;
    overflow: hidden;
    transition: 300ms;
  }
  li:hover {
    transform: scale(1.05);
  }

  a {
    height: 80px;
    width: 80px;
    margin-top: 4px;
    color: $dark_blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    width: min-intrinsic;
    width: -webkit-min-content;
    width: -moz-min-content;
    width: min-content;
    -ms-grid-columns: min-content;
  }


  .nav_padlock_container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .nav_padlock {
    width: 25px;
    height: 25px;
    margin-top: 17px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
  .nav_padlock_top {
    height: 22px;
    width: 26px;
    border: 5px solid #fff;
    border-bottom-color: transparent;
    border-radius: 35%;
    position: absolute;
    top: -17px;
    background-color: $teal;
  }
  .nav_padlock_bottom {
    height: 30px;
    width: 30px;
    background-color: #fff;
    border-radius: 5%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .nav_padlock_bottom_circle {
    height: 8px;
    width: 8px;
    background-color: $dark_blue;
    border-radius: 50%;
  }
  .nav_padlock_bottom_triangle {
    width: 0;
    height: 0;
    margin-top: -8px;
    border-bottom: 16px solid $dark_blue;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    border-bottom-right-radius: 1px;
    border-bottom-left-radius: 1px;
  }
  .nav:last-of-type .nav_padlock_bottom_circle {
    background-color: $orange;
  }
  .nav:last-of-type .nav_padlock_bottom_triangle {
    border-bottom: 50px solid $orange;
  }
  .nav_padlock_background {
    background-color: $teal;
    height: 40px;
    width: 100%;
    position: relative;
    transform: rotate(45deg);
    position: absolute;
    border-radius: 50%;
    border-top-left-radius: 20%;
    border-bottom-left-radius: 35%;
    // border-bottom: 18px solid $dark_blue;
    box-shadow: 4px 6px 1px $teal;
    left: 27%;
    bottom: 0;
  }
  .nav_padlock_title {
    color: #fff;
    font-weight: bold;
    font-size: 1.5em;
    margin-top: -20px;
  }
  .nav_padlock_background {
    margin-left: 100px;
  }
  .padlock_animate {
    margin-left: -100px;
    margin-top: -200px;
  }
  .nav_padlock_bottom_menu {
    display: none;
    width: 20px;
    height: 10px;
  }
}
ul.small {
  height: 90px;
  li {
    width: 60px;
    height: 60px;
    font-size: 12px;
  }
}
.mini_menu_open,
.mini_menu_close {
  display: none;
}

@media screen and (max-width: 720px) {
  nav {
    margin: 0 0 40px;
    z-index: 2;
  }
  .mini_menu_open {
    display: flex;
    flex-direction: column;
    height: 0;
    position: fixed;
    top: 0;
    margin: 0;
    z-index: 1;
    animation: open_mini_menu;
    animation-duration: 500ms;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.75);
    animation-iteration-count: 1;

    li:not(:last-of-type) {
      margin-right: 0;
      margin-bottom: 14px;
    }
    li:first-of-type,
    li:last-of-type {
      background-color: $yellow;

      a {
        color: $dark_blue;
      }
    }
    li {
      width: 100%;
      height: 60px;
      border-radius: 0;

      a {width: 100%; cursor: pointer}

      .nav_padlock_background {
        display: none;
      }
    }
    li:focus,
    li:visited, {
      border: 4px solid transparent;
    }
  }
  .mini_menu_close {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    margin: 0;
    z-index: 1;
    height: 100%;
    animation: close_mini_menu;
    animation-duration: 500ms;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.75);
    animation-iteration-count: 1;

    li {
      opacity: 0;
      display: none;
    }
  }
  .mini_menu_top_level {
    top: 0;
    margin: 0;
    z-index: 1;
  }
  @keyframes open_mini_menu {
    0% {
      height: 0;
    }
    100% {
      height: 100%;
    }
  }
  @keyframes close_mini_menu {
    0% {
      height: 100%;
    }
    100% {
      height: 0;
    }
  }
}
.hide {
  display: none;
}
</style>