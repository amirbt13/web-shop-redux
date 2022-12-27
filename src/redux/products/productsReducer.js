const intialState = {
  loading: false,
  products: [],
  error: "",
};

const productsReducer = (state = intialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQ":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case "FETCH_PRODUCTS_FAIL":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case "CHANGE_SHOW_PRODUCTS":
      console.log("change Showing Products");
      // search filter
      // search filter
      if (action.name === "search") {
        if (action.payload !== "") {
          const newProducts = state.products.map((product) => {
            if (product.title.toLowerCase().includes(action.payload)) {
              return {
                ...product,
                isShow: true,
              };
            } else {
              return {
                ...product,
                isShow: false,
              };
            }
          });
          return {
            ...state,
            products: [...newProducts],
          };
        } else {
          const newProducts = state.products.map((product) => {
            return {
              ...product,
              isShow: true,
            };
          });
          return {
            ...state,
            products: [...newProducts],
          };
        }
      }
      // category filter
      // category filter
      if (action.name === "category") {
        const newProducts = state.products.map((product) => {
          if (action.payload === "all") {
            return {
              ...product,
              isShow: true,
            };
          } else if (product.category !== action.payload) {
            return {
              ...product,
              isShow: false,
            };
          } else {
            return {
              ...product,
              isShow: true,
            };
          }
        });
        return {
          ...state,
          products: [...newProducts],
        };
      }
      // price filter
      // price filter
      if (action.name === "price") {
        const newProducts = state.products.map((product) => {
          if (product.price > action.payload) {
            return {
              ...product,
              isShow: false,
            };
          } else {
            return {
              ...product,
              isShow: true,
            };
          }
        });
        return {
          ...state,
          products: [...newProducts],
        };
      }
      break;
    case "SHOW_ALL_PRODUCTS":
      const newProducts = state.products.map((product) => {
        return {
          ...product,
          isShow: true,
        };
      });
      return {
        ...state,
        products: [...newProducts],
      };
    default:
      return state;
  }
};

export default productsReducer;
