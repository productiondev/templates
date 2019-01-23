<template>
  <div>
    <div :class="[countdownMinimized ? 'countdown_parent_hide' : '', 'countdown_parent']">

      <div @click="timerUI" class="timer_ui_container"></div>
      <p @click="timerUI" class="timer_ui"><strong>X</strong></p>

      <div class="countdown_countainer" v-if="!timesUp">
        <div class="countdown_time_day">
          <span>DAYS</span>
          <div class="countdown_circle_container">
            <svg
              class="progress-ring"
              height="60"
              width="60"
            >
              <circle
                :stroke-dasharray="webinarProgressSVG.day"
                stroke="#499195"
                stroke-width="7"
                fill="transparent"
                :r="webinarProgressSVG.r"
                :cx="webinarProgressSVG.cx"
                :cy="webinarProgressSVG.cy"
              />
            </svg>
            <div class="countdown_value">
              <span>{{ webinarTimeUntil.day }}</span>
            </div>
          </div>
        </div>
        <div class="countdown_time_hour">
          <span>HOURS</span>
          <div class="countdown_circle_container">
            <svg
              class="progress-ring"
              height="60"
              width="60"
            >
              <circle
                :stroke-dasharray="webinarProgressSVG.hour"
                stroke="#499195"
                stroke-width="7"
                fill="transparent"
                :r="webinarProgressSVG.r"
                :cx="webinarProgressSVG.cx"
                :cy="webinarProgressSVG.cy"
              />
            </svg>
            <div class="countdown_value">
              <span>{{ webinarTimeUntil.hour }}</span>
            </div>
          </div>
        </div>
        <div class="countdown_time_minute">
          <span>MINUTES</span>
          <div class="countdown_circle_container">
            <svg
              class="progress-ring"
              height="60"
              width="60"
            >
              <circle
                :stroke-dasharray="webinarProgressSVG.minute"
                stroke="#499195"
                stroke-width="7"
                fill="transparent"
                :r="webinarProgressSVG.r"
                :cx="webinarProgressSVG.cx"
                :cy="webinarProgressSVG.cy"
              />
            </svg>
            <div class="countdown_value">
              <span>{{ webinarTimeUntil.minute }}</span>
            </div>
          </div>
        </div>
        <div class="countdown_time_second">
          <span>SECONDS</span>
          <div class="countdown_circle_container">
            <svg
              class="progress-ring"
              height="60"
              width="60"
            >
              <circle
                :stroke-dasharray="webinarProgressSVG.second"
                stroke="#499195"
                stroke-width="7"
                fill="transparent"
                :r="webinarProgressSVG.r"
                :cx="webinarProgressSVG.cx"
                :cy="webinarProgressSVG.cy"
              />
            </svg>
            <div class="countdown_value">
              <span>{{ webinarTimeUntil.second }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <p class="times_up" v-if="timesUp"><strong>{{ timesUpText }}</strong></p> -->
  </div>
</template>
<script>

  import { format, isPast, differenceInSeconds, differenceInMinutes, differenceInHours, differenceInDays, distanceInWordsToNow } from 'date-fns';

  export default {
    name: 'CountDown',
    data() {
      return {
        countdownMinimized: false,
        currentDate: '',
        currentTime: '',
        countdownTimerFn: '',
        controlDispatchEvent: false,
        distanceInTime: {
          day: '',
          hour: '',
          minute: '',
          second: ''
        },
        distanceInWords: '',
        timesUp: false,
        webinarStartDate: '01-24-2019',
        webinarStartTime: '13:00:00',
        webinarReleaseContentTime: '17:00:01',
        webinarTimeUntil: {
          day: 0,
          hour: 0,
          minute: 0,
          second: 0
        },
        webinarProgressSVG: {
          day: '0 1000',
          hour: '0 1000',
          minute: '0 1000',
          second: '0 1000',
          r: 27,
          cx: 24,
          cy: 24
        },
        timesUpText: 'Looks like time has expired...'
      }
    },
    mounted () {

      // BUG: if the day is in the future AND the user arrives to the page
      // the same minute the event expires (e.g. User arrive
      // at 3:00pm, event starts at 3:00pm there will be 1 less day for some reason AND
      // 1 extra minute on the countdown)

      // BUG: if the day is in the future AND the user arrives to the page
      // 1 minute before the event the day will be one day less (e.g. User arrive
      // at 2:59pm, event starts at 3:00pm there will be 1 less day for some reason)

      // Could not have done w/o the help of https://datayze.com/time-until.php and libraries used:
      // date-fns

      // store date and times on arrival to page
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const day = now.getDate();
      const hours = now.getHours();
      const minutes = now.getMinutes() + 1;
      const seconds = now.getSeconds();

      this.currentDate = month + '-' + day + '-' + year;
      this.currentTime = hours + ':' + minutes + ':' + seconds;
      // this.currentTime = '17:55:57';
      // console.log('this.currentTime: ', this.currentTime);

      const explodeCurrentDate = this.currentDate.split('-');
      const explodeCurrentTime = this.currentTime.split(':');
      const explodeStartDate = this.webinarStartDate.split('-');
      const explodeStartTime = this.webinarStartTime.split(':');
      const explodeCopyReleaseTime = this.webinarReleaseContentTime.split(':');

      // const is_today = isToday(new Date(explodeStartDate[2], explodeStartDate[0]-1, explodeStartDate[1]));
      const expired = isPast( new Date(explodeStartDate[2], explodeStartDate[0]-1, explodeStartDate[1], parseInt(explodeStartTime[0]), parseInt(explodeStartTime[1]), parseInt(explodeStartTime[2])) );

      // emit event to app
      this.$emit('isExpired', expired);

      if(expired) {
        // close countdown
        this.timesUp = true;

        // dispatch expired event to document
        let expired = document.createEvent('Event');
        expired.initEvent('countdown-expired', true, true);
        document.dispatchEvent(expired);

      } else {

        // get human readable difference (e.g. 'about 1 week')
        this.distanceInWords = distanceInWordsToNow(
          new Date(explodeStartDate[2], explodeStartDate[0]-1, explodeStartDate[1], parseInt(explodeStartTime[0]), parseInt(explodeStartTime[1]), parseInt(explodeStartTime[2])), {includeSeconds: true}
        );

        // find differend in seconds
        if(parseInt(explodeStartTime[2]) < parseInt(explodeCurrentTime[2])) {
          this.distanceInTime.second = differenceInSeconds(
            new Date(explodeStartDate[2], explodeStartDate[0]-1, explodeStartDate[1], parseInt(explodeStartTime[0]), parseInt(explodeStartTime[1]), parseInt(explodeCurrentTime[2])),
            new Date(explodeStartDate[2], explodeStartDate[0]-1, explodeStartDate[1], parseInt(explodeStartTime[0]), parseInt(explodeStartTime[1]), parseInt(explodeStartTime[2]))
          );
        } else {
          this.distanceInTime.second = differenceInSeconds(
            new Date(explodeStartDate[2], explodeStartDate[0]-1, explodeStartDate[1], parseInt(explodeStartTime[0]), parseInt(explodeStartTime[1]), parseInt(explodeStartTime[2])),
            new Date(explodeStartDate[2], explodeStartDate[0]-1, explodeStartDate[1], parseInt(explodeStartTime[0]), parseInt(explodeStartTime[1]), parseInt(explodeCurrentTime[2]))
          );
        }

        // find differend in minutes
        if(parseInt(explodeStartTime[1]) < parseInt(explodeCurrentTime[1])) {
          this.distanceInTime.minute = differenceInMinutes(
            new Date(explodeStartDate[2], explodeStartDate[0]-1, explodeStartDate[1], parseInt(explodeStartTime[0]), parseInt(explodeCurrentTime[1]), parseInt(explodeStartTime[2])),
            new Date(explodeStartDate[2], explodeStartDate[0]-1, explodeStartDate[1], parseInt(explodeStartTime[0]), parseInt(explodeStartTime[1]), parseInt(explodeStartTime[2]))
          );
        } else {
          this.distanceInTime.minute = differenceInMinutes(
            new Date(explodeStartDate[2], explodeStartDate[0]-1, explodeStartDate[1], parseInt(explodeStartTime[0]), parseInt(explodeStartTime[1]), parseInt(explodeStartTime[2])),
            new Date(explodeStartDate[2], explodeStartDate[0]-1, explodeStartDate[1], parseInt(explodeStartTime[0]), parseInt(explodeCurrentTime[1]), parseInt(explodeStartTime[2]))
          );
        }

        // find differend in hours
        if(parseInt(explodeStartTime[0]) < parseInt(explodeCurrentTime[0])) {
          this.distanceInTime.hour = differenceInHours(
            new Date(explodeStartDate[2], explodeStartDate[0]-1, explodeStartDate[1], parseInt(explodeCurrentTime[0]), parseInt(explodeStartTime[1]), parseInt(explodeStartTime[2])),
            new Date(explodeStartDate[2], explodeStartDate[0]-1, explodeStartDate[1], parseInt(explodeStartTime[0]), parseInt(explodeStartTime[1]), parseInt(explodeStartTime[2]))
          );
        } else {
          this.distanceInTime.hour = differenceInHours(
            new Date(explodeStartDate[2], explodeStartDate[0]-1, explodeStartDate[1], parseInt(explodeStartTime[0]), parseInt(explodeStartTime[1]), parseInt(explodeStartTime[2])),
            new Date(explodeStartDate[2], explodeStartDate[0]-1, explodeStartDate[1], parseInt(explodeCurrentTime[0]), parseInt(explodeStartTime[1]), parseInt(explodeStartTime[2]))
          );
        }
        this.distanceInTime.day = differenceInDays(
          new Date(explodeStartDate[2], explodeStartDate[0]-1, explodeStartDate[1], parseInt(explodeStartTime[0]), parseInt(explodeStartTime[1]), parseInt(explodeStartTime[2])),
          new Date(explodeCurrentDate[2], explodeCurrentDate[0]-1, explodeCurrentDate[1], parseInt(explodeCurrentTime[0]), parseInt(explodeCurrentTime[1]), parseInt(explodeCurrentTime[2]))
        );

        // this function is used because we need to release
        // the leadup copy before the startTime event
        // e.g. if eventTime is 1p, but we want to
        // release leadup copy everyday at 2am
        this.distanceInTime.day = differenceInDays(
          new Date(explodeStartDate[2], explodeStartDate[0]-1, explodeStartDate[1], parseInt(explodeCopyReleaseTime[0]), parseInt(explodeCopyReleaseTime[1]), parseInt(explodeCopyReleaseTime[2])),
          new Date(explodeCurrentDate[2], explodeCurrentDate[0]-1, explodeCurrentDate[1], parseInt(explodeCurrentTime[0]), parseInt(explodeCurrentTime[1]), parseInt(explodeCurrentTime[2]))
        );

        this.$emit('distanceInDaysToEvent', this.distanceInTime.day);

        // if(is_today) {
        //   this.distanceInTime.day = differenceInDays(
        //     new Date(explodeStartDate[2], explodeStartDate[0], explodeStartDate[1]),
        //     new Date(explodeCurrentDate[2], explodeCurrentDate[0], explodeCurrentDate[1])
        //   );
        // } else {
        //   this.distanceInTime.day = differenceInDays(
        //     new Date(explodeStartDate[2], explodeStartDate[0], explodeStartDate[1]-1),
        //     new Date(explodeCurrentDate[2], explodeCurrentDate[0], explodeCurrentDate[1])
        //   );
        // }

        // console.log('explodeCurrentTime: ', parseInt(explodeCurrentTime[0]));
        // console.log('explodeStartTime: ', parseInt(explodeStartTime[0]));
        // console.log('math abs: ', Math.abs((this.distanceInTime.hour)-24));

        // find differend in hours minus 24
        if(parseInt(explodeStartTime[0]) <= parseInt(explodeCurrentTime[0])) {
          this.distanceInTime.hour = Math.abs((this.distanceInTime.hour)-24);
        } else {
          this.distanceInTime.hour = Math.abs(this.distanceInTime.hour);
        }

        // find differend in minutes minus 60
        if(parseInt(explodeStartTime[1]) < parseInt(explodeCurrentTime[1]-1)) {
          this.distanceInTime.minute = Math.abs((this.distanceInTime.minute)-60);
          this.distanceInTime.hour--;
        } else {
          this.distanceInTime.minute = Math.abs(this.distanceInTime.minute);
        }

        // find differend in seconds minus 60
        if(parseInt(explodeStartTime[2]) < parseInt(explodeCurrentTime[2])) {
          this.distanceInTime.second = Math.abs((this.distanceInTime.second)-60);
        } else {
          this.distanceInTime.second = Math.abs(this.distanceInTime.second);
        }

        // prepend '0' if < 10
        this.parseTime();

        // UI UPDATES
        // update svg circle center points
        if(window.innerWidth <= 720) {
          this.webinarProgressSVG.cx = 22;
          this.webinarProgressSVG.cy = 22;
          this.webinarProgressSVG.r = 26;
        }
        // listen for window size change
        window.addEventListener('resize', () => {
          if(window.innerWidth <= 720) {
            this.webinarProgressSVG.cx = 22;
            this.webinarProgressSVG.cy = 22;
            this.webinarProgressSVG.r = 26;
          } else {
            this.webinarProgressSVG.cx = 24;
            this.webinarProgressSVG.cy = 24;
            this.webinarProgressSVG.r = 27;
          }
        });

        // animate times
        this.$anime({
          targets: this.webinarTimeUntil,
          hour: this.distanceInTime.hour,
          round: 1,
          easing: 'easeInOutExpo',
        });
        this.$anime({
          targets: this.webinarTimeUntil,
          minute: this.distanceInTime.minute,
          round: 1,
          easing: 'easeInOutExpo',
        });
        this.$anime({
          targets: this.webinarTimeUntil,
          second: this.distanceInTime.second,
          round: 1,
          easing: 'easeInOutExpo',
        });

        // animate svgs
        this.$anime({
          targets: this.webinarProgressSVG,
          second: `${Math.round((60-this.distanceInTime.second)*2.875)} 1000`,
          easing: 'easeInOutSine'
        });
        this.$anime({
          targets: this.webinarProgressSVG,
          minute: `${Math.round((60-this.distanceInTime.minute)*2.875)} 1000`,
          easing: 'easeInOutSine'
        });
        this.$anime({
          targets: this.webinarProgressSVG,
          hour: `${Math.round((24-this.distanceInTime.hour)*7.35)} 1000`,
          easing: 'easeInOutSine'
        });
        this.$anime({
          targets: this.webinarProgressSVG,
          day: '420 1000',
          easing: 'easeInOutSine'
        });
      }
    },
    methods: {
      // initial ui setting of time
      parseTime() {

        // make numbers positive
        this.distanceInTime.hour = Math.abs(this.distanceInTime.hour);
        this.distanceInTime.minute = Math.abs(this.distanceInTime.minute);
        this.distanceInTime.second = Math.abs(this.distanceInTime.second);

        // add 0 in front of single hour digits
        if( this.distanceInTime.hour < 10 ) {
          this.webinarTimeUntil.hour = '0' + this.distanceInTime.hour;
        } else {
          this.webinarTimeUntil.hour = this.distanceInTime.hour;
        }
        // add 0 in front of single minute digits
        if( this.distanceInTime.minute < 10 ) {
          this.webinarTimeUntil.minute = '0' + this.distanceInTime.minute;
        } else {
          this.webinarTimeUntil.minute = this.distanceInTime.minute;
        }
        // add 0 in front of single second digits
        if( this.distanceInTime.second < 10 ) {
          this.webinarTimeUntil.second = '0' + this.distanceInTime.second;
        } else {
          this.webinarTimeUntil.second = this.distanceInTime.second;
        }
        // set day
        this.webinarTimeUntil.day = this.distanceInTime.day;

        // initiate countdown
        this.startCountDown();
      },
      // initiate countdown
      startCountDown() {
        let component = this;

        // initial time
        this.updateSecond();
        this.updateMinute();
        this.updateHour();

        // start counting, update seconds first
        this.countdownTimerFn = setInterval(component.updateSecond, 1000);
      },
      // decrement second
      updateSecond() {
        let component = this;

        if(component.webinarTimeUntil.second == 0) {
          // check if other measures of time are expired
          if (component.webinarTimeUntil.minute == '00' && component.webinarTimeUntil.hour == '00' && component.webinarTimeUntil.day == '0') {
            // timer's up, stop interval
            clearInterval(component.countdownTimerFn);
            // ui update
            this.timesUp = true;

            // dispatch expired event to document
            let expired = new Event('Event');
            expired.initEvent('countdown-expired', true, true);
            document.dispatchEvent(expired);

          } else {
            // timer still going return to 59
            component.webinarTimeUntil.second = 59;
            // update minute countDown
            component.updateMinute();
          }

          component.webinarProgressSVG.second = "0 1000";
        } else {

          // update svg
          let secondsRemaining = (60-component.webinarTimeUntil.second)*2.875;
          component.webinarProgressSVG.second = `${secondsRemaining} 1000`;

          // check if timer is at 5 min marker
          // if so, dispatch an event
          if (component.webinarTimeUntil.minute < '30' && component.webinarTimeUntil.hour == '00' && component.webinarTimeUntil.day == '0' && !this.controlDispatchEvent) {

            // dispatch event to document
            let fiveMinsLeft = new Event('Event');
            fiveMinsLeft.initEvent('countdown-thirty-minutes-left', true, true);
            document.dispatchEvent(fiveMinsLeft);

            // set to true so events do not
            // continue to be dispatched
            this.controlDispatchEvent = true;
          }

          // add 0 in front of single second digits
          if(component.webinarTimeUntil.second <= 10) {
            component.webinarTimeUntil.second--
            component.webinarTimeUntil.second = '0'+component.webinarTimeUntil.second;
          } else {
            component.webinarTimeUntil.second--
          }
        }
      },
      // decrement minute
      updateMinute() {
        let component = this;

        if(component.webinarTimeUntil.minute == 0) {
          component.webinarTimeUntil.minute = 59;

          component.webinarProgressSVG.minute = "0 1000";

          // update hour countDown
          component.updateHour();
        } else {

          // update svg
          let minutesRemaining = (60-component.webinarTimeUntil.minute)*2.875;
          component.webinarProgressSVG.minute = `${minutesRemaining} 1000`;

          // add 0 in front of single minute digits
          if(component.webinarTimeUntil.minute < 10) {
            component.webinarTimeUntil.minute--
            component.webinarTimeUntil.minute = '0'+component.webinarTimeUntil.minute;
          } else {
            component.webinarTimeUntil.minute--
          }
        }
      },
      // decrement hour
      updateHour() {
        let component = this;
        const explodeCurrentDate = this.currentDate.split('-');
        const explodeCurrentTime = this.currentTime.split(':');
        const explodeStartDate = this.webinarStartDate.split('-');
        const explodeStartTime = this.webinarStartTime.split(':');

        if(component.webinarTimeUntil.hour == 0) {
          // just bc hour is 0 does not mean reset to 23,
          // since there might only be mins left
          if(parseInt(explodeStartTime[1]) > parseInt(explodeCurrentTime[1]-1)) {
            component.distanceInTime.hour = 23;
          }

          // update day countDown
          component.updateDay();

          component.webinarProgressSVG.hour = "0 1000";
        } else {
          // update svg
          let hoursRemaining = (24-component.webinarTimeUntil.hour)*7.35;
          component.webinarProgressSVG.hour = `${hoursRemaining} 1000`;

          if(component.webinarTimeUntil.hour == 24) {
            component.distanceInTime.hour = 0;
          }

          // add 0 in front of single hour digits
          if(component.webinarTimeUntil.hour < 10) {
            component.webinarTimeUntil.hour--;
            component.webinarTimeUntil.hour = '0'+component.webinarTimeUntil.hour;
          } else {
            component.webinarTimeUntil.hour--
          }
        }
      },
      // decrement day
      updateDay() {
        let component = this;

        // makes sure other timer components have reached
        // their end before updating the 'day' value
        if (component.webinarTimeUntil.hour == '23' && component.webinarTimeUntil.minute == '59' && component.webinarTimeUntil.second == '59') {
          component.webinarTimeUntil.day--;
        }

        // if(this.distanceInTime.day == 1) {
        //   this.webinarTimeUntil.day = 0;
        // } else {
        //   component.webinarTimeUntil.day--;
        // }
      },

      // update timer interface
      timerUI() {
        this.countdownMinimized = true;

        this.$anime({
          targets: this.$refs.padlock_circle,
          width: 20,
          borderRadius: 0,
          top: 10
        });
      }
    }
  }
</script>
<style scoped lang="scss">
  @import '../assets/scss/variables';

  .times_up {
    color: #fff;
    margin: 50px 0;
  }
  .timer_ui_container {
    position: absolute;
    top: -25px;
    right: -25px;
    width: 0;
    height: 0;
    border-top: 25px solid transparent;
    border-left: 50px solid $orange;
    border-bottom: 25px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(-45deg);
    z-index: 1;
    cursor: pointer;
  }
  .timer_ui {
    cursor: pointer;
    color: $yellow;
    position: absolute;
    top: 0;
    right: 0;
    padding: 3px 5px;
    font-size: 14px;
    z-index: 1;
  }
  .countdown_parent {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    background-color: $yellow;
    width: auto;
    position: fixed;
    bottom: 0;
    right: -1000px;
    height: $countdown_container_height;
    overflow: hidden;
    z-index: 1;
    animation: showCountDown;
    animation-duration: 1000ms;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.175);
    animation-iteration-count: 1;
    animation-delay: 2000ms;
  }
  .countdown_parent_hide {
    animation: hideCountDown;
    animation-duration: 750ms;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  }
  @keyframes showCountDown {
    0% {
      bottom: 0;
      right: -1000px;
    }
    100% {
      bottom: 0;
      right: 30px;
    }
  }
  @keyframes hideCountDown {
    0% {
      bottom: 0;
      right: 30px;
    }
    100% {
      bottom: 0;
      right: -1000px;
    }
  }

  .countdown_countainer {
    display: flex;
    justify-content: center;
    right: 0;
    bottom: 0;
  }
  div[class^='countdown_time_'] {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10px 30px;

    .countdown_value {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 1.25em;
      font-weight: bold;
    }
    span {
      // padding: 15px 0;
      color: $dark_blue;
    }
    .countdown_value span {
      color: $orange;
    }
  }
  div[class^='countdown_time_']:last-of-type {
    padding-right: 25px;
  }
  div[class^='countdown_circle_'] {
    width: 60px;
    height: 60px;
    border-radius: 5246246px;
    background-color: rgba(255, 255, 255, .5);
    border: 6px solid $dark_blue;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    svg {
      width: 150px;
      height: 150px;
      position: absolute;
      overflow: visible;
      top: -0.25px;
      left: -0.25px;
    }
  }

  @media screen and (max-width: 720px) {
    .countdown_parent {
      height: auto;
      width: 100%;
    }
    div[class^='countdown_circle_'] {
      border: 8px solid $dark_blue;

      svg {
        width: 50px;
        height: 50px;
      }
    }
    div[class^='countdown_time_'] {
      span {
        padding: 0 0 4px 0;
        font-size: 10px;
      }
    }
    div[class^='countdown_time_']:last-of-type {
      padding-right: 0;
    }
    .countdown_circle_container .countdown_value {
      span {
        font-size: 14px;
      }
    }

    @keyframes showCountDown {
      0% {
        bottom: -$countdown_container_height;
        right: 0;
      }
      100% {
        right: 0;
        bottom: 0;
      }
    }
    @keyframes hideCountDown {
      0% {
        bottom: 0;
        right: 0;
      }
      100% {
        right: 0;
        bottom: -$countdown_container_height;
      }
    }
  }

  @media only screen and (max-width: 380px) {
    div[class^='countdown_time_'] {
      margin: 10px auto;
      padding: 2px;
    }
  }
</style>