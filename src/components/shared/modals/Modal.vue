<template>
  <b-modal
    :size="size"
    :hide-header="hideHeader"
    :hide-footer="hideFooter"
    :no-close-on-backdrop="noCloseOnBackdrop"
    :no-close-on-esc="noCloseOnEsc"
    :hide-header-close="hideHeaderClose"
    :body-class="bodyClass"
    v-model="isModalVisible"
    @hide="handleClose"
  >
    <div slot="modal-header">
      <slot name="header"></slot>
    </div>
    <div>
      <main>
        <slot></slot>
      </main>
    </div>
    <div class="w-100">
      <slot slot="modal-footer" name="footer"></slot>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: {
    bodyClass: {
      type: [Array, String],
      required: false,
      default() { return ''; },
    },
    hideHeader: {
      type: Boolean,
      required: true,
    },
    hideFooter: {
      type: Boolean,
      required: true,
    },
    noCloseOnBackdrop: {
      type: Boolean,
      required: true,
    },
    noCloseOnEsc: {
      type: Boolean,
      required: true,
    },
    hideHeaderClose: {
      type: Boolean,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    onClose: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      isModalVisible: true,
    };
  },
  methods: {
    handleClose(evt) {
      evt.preventDefault();
      this.onClose();
    },
  },
};
</script>