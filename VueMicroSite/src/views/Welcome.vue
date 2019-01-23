<template>
  <div>
    <h1 class="header_page_title">{{ pageTitle }}</h1>
    <section v-if="live">
      <div class="loading" v-if="loading">LOADING</div>
      <div class="content" v-else>
        <h1><em>A Special Message From James Altucher</em></h1>

        <div class="video_container">
          <div class="wistia_responsive_wrapper">
            <div class="wistia_embed videoFoam=true playbar=false fullscreenButton=false playButton=false autoPlay=false">&nbsp;</div>
          </div>
        </div>

        <p>On Thursday, January 24, at 1 p.m. EST, James Altucher will reveal his most provocative and controversial predictions yet… </p>

        <p><strong>And reveal an INCREDIBLE secret that could hand you up to 1,000%+ returns in the next 12 months.</strong></p>

        <p>Right now, there are market forces poised to reshape the cultural and economic landscape of America.</p>

        <p>These forces are going catch 99% of Americans completely off guard…</p>

        <p>But James is going to give you his inside scoop.</p>

        <p>He’ll tell you how to prepare… and profit during what could be the most earth-shattering financial event of our lifetimes.</p>

        <p>You have a front row seat to this LIVE, one night only summit, where you’ll…</p>

        <ul>
          <li><strong>Discover the top three breakthrough trends that could allow you to 10x your money in 2019…</strong></li>

          <li><strong>Get an inside look at a bizarre stock market anomaly that we haven’t seen in nearly 40 years…</strong></li>

          <li><strong>Have the chance to see which big “blue chip” companies to avoid like the plague (there’s a good chance these companies are in your portfolio right now)…</strong></li>
        </ul>

        <p>Keep in mind, you will NOT find this information anywhere else after this event. </p>

        <p>Reminder: The event is on Thursday, January 24, at 1 p.m. EST. </p>

        <p>We’re broadcasting it live — miss it, and you could miss your opportunity to ride three of James’ tidal-wave predictions to seven-figure wealth.</p>

        <!-- <h1 class="cal_link_header">Add This Event to Your Calendar:</h1>
        <div class="cal_link">
          <a href="http://www.google.com/calendar/event?action=TEMPLATE&dates=20190124T180000Z%2F20190124T190000Z&text=James%20Altucher%27s%202019%20Prediction%20Summit%20&location=Online%20From%20the%20Comfort%20of%20Your%20Own%20Home&details=A%20live%20broadcast%20with%20millionaire%20trend%20investor%2C%20James%20Altucher" target="_blank">Google Calendar</a>
          <a href="https://d8yoo85ikfg26.cloudfront.net/wp-content/uploads/2019/01/James_Altuchers_2019_Prediction_Summit.ics" target="_blank">iCal Calendar</a>
          <a href="https://d8yoo85ikfg26.cloudfront.net/wp-content/uploads/2019/01/James_Altuchers_2019_Prediction_Summit.ics" target="_blank">Outlook Calendar</a>
        </div> -->

        <form>

          <h1 class="cal_link_header">Add This Event to Your Calendar:</h1>
          <div class="cal_link">
            <a href="http://www.google.com/calendar/event?action=TEMPLATE&dates=20190124T180000Z%2F20190124T190000Z&text=James%20Altucher%27s%202019%20Prediction%20Summit%20&location=Online%20From%20the%20Comfort%20of%20Your%20Own%20Home&details=A%20live%20broadcast%20with%20millionaire%20trend%20investor%2C%20James%20Altucher" target="_blank">Google Calendar</a>
            <a href="https://d8yoo85ikfg26.cloudfront.net/wp-content/uploads/2019/01/James_Altuchers_2019_Prediction_Summit.ics" target="_blank">iCal Calendar</a>
          </div>

        </form>

        <form class="optInForm" id="LeadGen">

          <h1 class="cal_link_header">Get Up-To-The-Minute Updates About The Event... And Two Special Never-To-Be-Seen-Again Bonuses ($79 Value!):</h1>
          <iframe src="https://slicktext.com/widget/v2/f7386e59301818e98a8275c463a8a3bc" width="514" height="299" frameborder="0" /></iframe>

          <!-- <p class="text-center"><strong>Don’t Miss a Thing When Sign Up to Our Premiere Reminder Service. Just Enter Your Mobile Number Below:</strong></p>

          <input style="display: none;" name="source" type="hidden" value="X430V100">
          <input style="display: none;" name="NotSaveSignup" type="hidden" value="False"> -->

          <!-- Hidden zip field to put s1 query into -->
          <!-- <input class="zipFiled" style="display: none;" name="PostalCode" type="hidden"> -->
          <!-- / Hidden zip field to put s1 query into -->

          <!-- email input -->
          <!-- <input class="submissionform topemail" id="email" name="email" type="text" value="" placeholder="Please Enter E-mail"> -->
          <!-- / email input -->

          <!-- / checkbox for sms -->
          <!-- input field for sms -->
          <!-- <div id="smsFormGroup">
            <input name="phone" v-model="phone" placeholder="Enter your mobile phone number" type="tel" id="phone">
            <a href="#!" @click="phoneSubmit" class="btn"> >>> SIGN ME UP! <<< </a>
          </div> -->

          <!-- <p class="terms"><strong>Yes, I'd like a sign-up via text message and agree to the <a style="text-decoration: underline; cursor: pointer; color: black;" onclick="window.open('https://chooseyourselffinancial.com/terms-of-service-2/','mywin','width=300,height=300')">terms of service</a> &amp; <a style="text-decoration: underline; cursor: pointer; color: black;" onclick="window.open('https://chooseyourselffinancial.com/privacy-policy/','mywin','width=300,height=300')">privacy policy</a>.</strong> 20 Msg/Month. Reply <strong>STOP</strong> to cancel, <strong>HELP</strong> for help. Msg&amp;data rates may apply.</p>
          <p :class="[successMsg ? 'success_msg' : '', 'message']">
            <span><strong>YES!</strong></span>
            <span>You're signed up!</span>
          </p> -->
        </form>

        <p>He’s not putting it in his books, podcast or on his website.</p>

        <p>But before January 24, James Altucher and your host, Monica McCarthy, will pull back the curtain on everything you need to know before the 2019 Prediction Summit...</p>

        <p>We’ll be sending you a special edition of Altucher Confidential…  full of bonuses and extras... </p>

        <p>For instance, you’ll get a glimpse into James’ “crystal ball,” where you’ll learn exactly how he’s able to see the future… and make tremendous profit in business and the markets.</p>

        <p>But you’ll ONLY catch all this if you watch this page and your email inbox for new content. </p>

        <p>Stay tuned...</p>

        <p>For now, though, James has a favor to ask of you…</p>

        <p><strong>What would you do in 2020 if you had access to my crystal ball and used it to make an extra $100,000 in the next 12 months.</strong></p>

        <p>Would you start your own side hustle or business?</p>

        <p>Would you retire and pursue your passions?</p>

        <p>Would you pick up an RV so you can live like a “digital nomad” anywhere you want?</p>

        <p>Or would you buy a beachside condo down in Panama? </p>

        <p>Whatever it is… please tell us.</p>

        <p>The more details, the better. And don’t worry, there’s no right answer.</p>

        <p> <a href="https://d13p2xj50zkyqm.cloudfront.net/promos/LF/production/pubs/top/standalone/video_submission.html" target="_blank" class="btn">>>> CLICK HERE TO SUBMIT YOUR ANSWER <<<</a></p>

        <p>Your response is super important to James. And incredibly motivating for him. So please, let us know!</p>
        <p>Watch your email tomorrow for the special edition of Altucher Confidential…</p>

      </div>
    </section>
    <section v-else>
      <h1>This content is locked</h1>
    </section>
  </div>
</template>

<script>

  import wistia from 'wistia-js-player-api'

  export default {
    name: 'Welcome',
    data () {
      return {
        loading: true,
        live: true,
        phone: null,
        successMsg: false,
        pageTitle: "James Altucher’s 2019 Prediction Summit"
      }
    },
    mounted () {

      // send user to page top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

      this.loading = false;

      if(this.live) {
        // add video id below
        this.$nextTick(() => {
          let videoId = '7rkszo1ljk';
          let video = document.getElementsByClassName('wistia_embed')[0].classList.add('wistia_async_7rkszo1ljk')
          window._wq = window._wq || [];
          _wq.push({
            id: videoId,
            options: {
              stillUrl: 'https://d13p2xj50zkyqm.cloudfront.net/promos/LF/production/pubs/top/common/img/top_hotlist_012019/TOP_PREDICTIONS_LIVEEVENT_SR_TEST_CTP_HIGHRES_012019.gif'
            },
            onReady: function(video) {

            // var video = Wistia.api(videoId);

            // listen for video play
            // video.bind("play", function() {
            //   console.log("the video played!");
            // });
            }
          });
        });
      }
    },
    methods: {
      phoneSubmit () {
        // let component = this;

        // console.log('phone number: ', this.phone);

        // let payload = {
        //   phoneNumber: this.phoneSubmit,
        //   email: 'from@microsite.com',
        //   userStatus: 'james'
        // }

        // this.$axios.post('https://wiggum.agorafinancial.com/api/jatop/sms', payload)
        // .then(function (response) {
        //   console.log("hoejoe", response);
        // });

        // this.successMsg = true;
        // setTimeout(function() {
        //   component.successMsg = false;
        // }, 3000);
      }
    }
  }
</script>
