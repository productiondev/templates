<template>
  <footer class="footer">
    <div class="ofFooter">
      <div class="footer_container" style="margin: 0px auto; max-width: 1000px; padding-top: 20px;">
        <img src="https://d13p2xj50zkyqm.cloudfront.net/promos/AF/TOM/Assets/favicon.ico" alt="Choose Yourself Financial">
        <p>&copy; Choose Yourself Financial, LLC | 808 St. Paul St., Baltimore, MD 21202, United States of America |
          <span id="privacypolicy">
            <a class="privacypolicy" style="text-decoration: underline; cursor: pointer; color: #499195">Contact Us</a> |
            <a style="text-decoration: underline; cursor: pointer; color: #499195" class="privacypolicy">FAQ</a> |
            <a style="text-decoration: underline; cursor: pointer; color: #499195" class="privacypolicy">Terms and Conditions</a>
          </span> No part of this report may be reproduced or placed on any electronic medium without written permission from the publisher. Information contained herein is obtained from sources believed to be reliable, but its accuracy cannot be guaranteed. All currency mentioned is in US dollars. If you are to receive an item by mail, it will ship within 7-10 business days once your item is processed.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'WebinarFooter'
}
</script>

<style scoped lang="scss">
@import '../assets/scss/variables';

footer {
  margin-bottom: 30px;
}

.footer_container {
  padding: 0 10px;display: -webkit-box;display: -moz-box;display: -ms-flexbox;display: -webkit-flex;display: flex;
}
.footer_container > img {
  align-self: center !important;-webkit-align-self:center !important;width: 100%;max-width: 30px;
}
.footer_container p {
  text-align:left;
  font-size: 12px;
  margin-top: 0px;
  color: rgb(150, 150, 150);
}
.ofFooter {
  padding-top: 30px;
  margin: 0px;
  max-width: 100%;
  padding-bottom: 20px;
  background: rgba(255, 255, 255, 0);
}
@media screen and (max-width: 600px) {
  .footer_container{flex-direction: column}
  .footer_container img{margin-bottom:12px;}
  .footer_container p {text-align:center;}
  .footer_container p{ margin-left: 0px; }
}

</style>
