import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from "react-router-dom";
import NButton from "../../../UI/NButton";
import ProductListItem from "../../../UI/ProductListItem";
import FlatList from "../../../UI/FlatList";
import OnboardingHeader from "./OnboardingHeader";
import AddProductView from "./AddProductView";
import OnboardingImageWrapper from "./OnboardingImageWrapper";
import BrandStyles from "../../../BrandStyles";
import Modal from 'react-modal';
import {
  clearSellerCurrentProductCache,
  loadAllProductCategories,
  loadAllProductTags,
  loadSellerProduct,
  clearTagsAndCategories,
} from '../../../../actions/seller';
import { setOnBoardingStepId, logoutFirebase } from "../../../../actions/auth";
import { createProduct, createTestProduct, updateProduct } from '../../../../actions/products';
import { getNextOnBoardingStepId } from '../../../../utils/helpers';
import screenNames from '../../../../constants/screenNames';

class SellerOnboardingAddProductsPage extends Component {
  constructor(props) {
    super(props);
    let sellerProducts = [];
    if (props.products) {
      for (const key in props.products) {
        sellerProducts.push(props.products[key]);
      }
    }

    this.state = {
      products: sellerProducts,
    };

    this.renderProductItem = this.renderProductItem.bind(this);
    this._closeModal = this._closeModal.bind(this);
  }


  async onSubmitProduct() {
    this.setState({ isSavingProduct: true });
    this.saveProduct();
  }

  async saveProduct() {
    let currentProduct = this.props.product ? this.props.product : this.props.currentSellerProduct;
    /*let valid = this.validateInput();
    if (!valid) {
      return;
    }*/
    let formData = new FormData();
    //formData.append('my_photos')
    for (let i = 0; i < this.state.formData.productPhotos.length; i++) {
      let photo = this.state.formData.productPhotos[i];
      formData.append(`productImageFile[${i}]`, {
        uri: photo.sourceURL,
        type: photo.mime,
        name: this.state.formData.title + '-' + this.props.user._id + 'productImage' + i,
      });
    }
    formData = this.transformToFormData(this.state.formData, formData);
    formData.append('userId', this.props.user._id);
    formData.append('storeId', this.props.user.storeId._id);

    const existingProduct =
      this.props.product ?? this.props.currentSellerProduct ?? this.props.route.params
        ? this.props.route.params.product
        : null;

    if (existingProduct) {
      formData.append('productId', existingProduct._id);
      await this.props.updateProduct({ formData });
      this.props.navigation.goBack();
      return;
    }

    await this.props.createProduct({ formData });
    this.setState({ isSavingProduct: false });
    this.props.navigation.goBack();
  }

  onPressAddProduct = () => {
    // popup a modal to add product
    this.setState({
      isAddProductModalVisible: true
    });
  };

  onPressItem = (itemId) => {
    const product = this.props.sellerProducts[itemId];
    console.log("PRODUCT", product);
    this.setState({
      product,
      isAddProductModalVisible: true
    }) 
  };

  _closeModal() {
    console.log("clsoe modal")
    this.setState({
      isAddProductModalVisible: false,
    });
  }

  onPressNext = () => {
    this.props.setOnBoardingStepId(getNextOnBoardingStepId(this.props.onboardingStepId, true));
    this.setState({
      toNextStep: true
    });
  };
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('RECEIVING NEW PROPS???', nextProps);
  }

  renderProductItem({ item }) {
    return <ProductListItem full product={item} onClickItem={this.onPressItem} />;
  }

  render() {
    if (this.state.toNextStep) {
      return (<Redirect to="/seller/onboarding/payment" />);
    }
    const isLoading = this.state.isLoading;
    console.log('ARE TAGS LOADING???', isLoading);
    console.log("SellerOnboardingAddProductsPage render", this.props)
    /*const currentProduct =
      this.props.product ?? this.props.currentSellerProduct ?? this.props.route.params
        ? this.props.route.params.product
        : null;*/
    //let currentProduct = this.props.product ? this.props.product : this.props.currentSellerProduct;
    let sellerProducts = [];
    if (this.props.products) {
      for (const key in this.props.products) {
        sellerProducts.push(this.props.products[key]);
      }
    }
    let nextButton = null;
    // if greater than 3 products, allow to move on
    //if (sellerProducts && sellerProducts.length > 2) {
      if (true) {
        nextButton = <NButton title={'Next Step'} onClick={this.onPressNext} />;
      }
    let containerStyle = {...BrandStyles.components.onboarding.container, justifyContent: 'center', paddingTop: 42};
    return (
      <OnboardingImageWrapper>
        <OnboardingHeader />
        <div
          style={containerStyle}
        >
          <div
            enableResetScrollToCoords={false}
            keyboardShouldPersistTaps="handled"
          >
            <div
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <h2 style={{ fontWeight: 'bold' }}>Add Products</h2>
              <div style={{ height: 24 }} />
              <span>Please add at least 3 products to your store.</span>
            </div>
            <div style={{ height: 16 }} />
            <Modal
             style={{content: {borderRadius: 32, backgroundColor: BrandStyles.color.lightBeige}}}
              isOpen={this.state.isAddProductModalVisible}
              >
              <AddProductView onChange={this.onChange} onClose={this._closeModal} product={this.state.product}/>
            </Modal>
            <NButton onClick={this.onPressAddProduct} title="Add product" />
            {nextButton}
            <FlatList
              extraData={this.state}
              data={sellerProducts}
              renderItem={this.renderProductItem}
              keyExtractor={(item) => item._id}
            />
            <div style={{ height: 64 }} />
          </div>
        </div>
      </OnboardingImageWrapper>
    );
  }
}


const mapStateToProps = (state) => ({
  sellerProducts: state.products.sellerProductsCache,
  products: state.products.productsCache,
  onboardingStepId: state.auth.onboardingStepId,
  user: state.auth
});

const actions = {
  logOut: logoutFirebase,
  setOnBoardingStepId: setOnBoardingStepId,
  createProduct,
  updateProduct,
  loadSellerProduct,
  clearTagsAndCategories: clearTagsAndCategories,
  createTestProduct: createTestProduct,
  loadAllTags: loadAllProductTags,
  loadAllCategories: loadAllProductCategories,
  clearSellerProductCache: clearSellerCurrentProductCache,
  // getSellerProducts: getSellerProducts
};

export default connect(mapStateToProps, actions)(SellerOnboardingAddProductsPage);