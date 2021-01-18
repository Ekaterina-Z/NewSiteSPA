<template>
  <div class="registration center">
    <registration-shiping-adress></registration-shiping-adress>
    <registration-billing-info></registration-billing-info>
    <registration-shiping-info></registration-shiping-info>
    <registration-shiping-method></registration-shiping-method>
    <registration-payment-method></registration-payment-method>
    <registration-order></registration-order>
  </div>
</template>

<script>
import RegistrationShipingAdress from "../components/RegistrationShipingAdress";
import RegistrationBillingInfo from "../components/RegistrationBillingInfo";
import RegistrationShipingInfo from "../components/RegistrationShipingInfo";
import RegistrationShipingMethod from "../components/RegistrationShipingMethod";
import RegistrationPaymentMethod from "../components/RegistrationPaymentMethod";
import RegistrationOrder from "../components/RegistrationOrder";
export default {
  name: "Registration",
  components: {
    RegistrationOrder,
    RegistrationPaymentMethod,
    RegistrationShipingMethod,
    RegistrationShipingInfo,
    RegistrationBillingInfo,
    RegistrationShipingAdress
  }
};
</script>

<style scoped></style>
