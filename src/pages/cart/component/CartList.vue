<template>
  <div class="cart-list">
    <section :class="{'section': true, 'selected': sub.is_selected}" v-for="sub of goodsList" :key="sub.shop_id">
      <div class="shop">
        <span class="select-icon" @click="handleSectionSelect(sub.shop_id)"></span>
        <span class="name">{{sub.shop_name}}</span>
        <span class="icon iconfont icon-arrow-right"></span>
      </div>
      <div :class="{'item': true, 'border-top': true, 'selected': item.is_selected}" v-for="item of sub.list" :key="item.id">
        <div class="select-icon-fluid" @click="handleItemSelect(item.id, sub.shop_id)">
          <span class="select-icon"></span>
        </div>
        <div class="product-info">
          <div class="image">
            <img src="/static/images/goods/detail/detail_01.png" alt="image">
          </div>
          <div class="name">{{item.name}}</div>
          <div class="size">{{item.size}}</div>
          <div class="price">
            <span>￥</span>
            <em>{{item.price * item.number}}</em>
            <span>.00</span>
          </div>
          <div class="number">
            <span class="icon iconfont icon-minus"></span>
            <input type="text" class="value" value="1">
            <span class="icon iconfont icon-plus"></span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CartList',
  data () {
    return {
      goodsList: [
        {
          'shop_id': 1,
          'shop_name': 'Apple官方旗舰店',
          'is_selected': true,
          'list': [
            {
              'id': 1,
              'name': 'Apple MacBook Air 13.3英寸笔记本电脑 银色(2018款Retina屏/八代...',
              'size': 'i5 8G+128G 13.5英寸灰',
              'price': 13299,
              'number': 1,
              'is_selected': true
            },
            {
              'id': 2,
              'name': 'Apple MacBook Air 15.4英寸笔记本电脑 银色(2018款Retina屏/八代...',
              'size': 'i7 16G+256G 15.4英寸灰',
              'price': 15999,
              'number': 1,
              'is_selected': true
            }
          ]
        },
        {
          'shop_id': 2,
          'shop_name': '苹果野鸡店',
          'is_selected': false,
          'list': [
            {
              'id': 3,
              'name': 'Apple MacBook Air 19.9英寸笔记本电脑 银色(2018款Retina屏/八代...',
              'size': 'i7 16G+256G 19.9英寸红',
              'price': 5999,
              'number': 1,
              'is_selected': false
            }
          ]
        }
      ]
    }
  },
  props: {
    selected: Boolean
  },
  methods: {
    handleSectionSelect (id) {
      this.goodsList.map(shop => {
        if (shop.shop_id === id) {
          shop.is_selected = !shop.is_selected
          shop.list.map(item => {
            item.is_selected = shop.is_selected
            this.checkSelectAll()
          })
        }
      })
    },
    handleItemSelect (itemId, shopId) {
      this.goodsList.map(shop => {
        if (shop.shop_id === shopId) {
          shop.list.map(item => {
            if (item.id === itemId) {
              item.is_selected = !item.is_selected
              this.checkShopSelected(shopId)
              this.checkSelectAll()
            }
          })
        }
      })
    },
    checkShopSelected (id) {
      this.goodsList.map(shop => {
        if (shop.shop_id === id) {
          let item = shop.list.filter(item => item.is_selected === false)
          if (item.length === 0) {
            shop.is_selected = true
          } else {
            shop.is_selected = false
          }
        }
      })
    },
    checkSelectAll () {
      let shop = this.goodsList.filter(shop => shop.is_selected === false)
      if (shop.length === 0) {
        this.$emit('selectAll', true)
      } else {
        this.$emit('selectAll', false)
      }
    }
  },
  watch: {
    selected () {
      this.goodsList.map(shop => {
        shop.is_selected = this.selected
        shop.list.map(item => {
          item.is_selected = this.selected
        })
      })
    }
  }
}
</script>

<style></style>
