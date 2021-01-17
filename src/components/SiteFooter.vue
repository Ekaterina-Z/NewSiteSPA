<template>
  <site-subscribe></site-subscribe>
  <company-information></company-information>
  <footer class="background center">
    <div class="copyright">
      &copy; <span id="myYear"></span>
      <h4>Brand All Rights Reserved.</h4>
      {{ year }}
    </div>
    <div class="mobile ">
      <a href="#" class="mobile_button">
        <i class="fa fa-facebook" aria-hidden="true"></i>
      </a>
      <a href="#" class="mobile_button">
        <i class="fa fa-twitter" aria-hidden="true"></i>
      </a>
      <a href="#" class="mobile_button">
        <i class="fa fa-linkedin" aria-hidden="true"></i>
      </a>
      <a href="#" class="mobile_button">
        <i class="fa fa-pinterest-p" aria-hidden="true"></i>
      </a>
      <a href="#" class="mobile_button">
        <i class="fa fa-google-plus" aria-hidden="true"></i>
      </a>
    </div>
  </footer>
</template>

<script>
import SiteSubscribe from "@/components/SiteSubscribe";
import CompanyInformation from "@/components/CompanyInformation";
export default {
  name: "SiteFooter",
  computed: {
    year() {
      return new Date().getFullYear();
    }
  },
  components: { SiteSubscribe, CompanyInformation }
};
</script>
