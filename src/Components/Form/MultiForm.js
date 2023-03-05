import React, { useReducer } from 'react';

const MultiForm = () => {
 const initialState = {
   firstName:"",
   lastName:"",
   email:"",
     phone: "",
   gender:"",
   feedback:"",
   quantity:0,
   term: false,
    };
    
    const reducer = (state,action) => {
      
        switch (action.type) {
          case "INPUT": {
            return {
              ...state,
              [action.payload.name]: action.payload.value,
            };
          }
          case "Toggle": {
            return { ...state, term: !state.term };
          }
            case "increase": {
              
            return { ...state, quantity: parseInt(state.quantity)+1 };
          }
            case "decrease": {
               
            return { ...state, quantity: parseInt(state.quantity) - 1 };
          }

          default: {
          }
        }

    }

    const [state, dispatch] = useReducer(reducer, initialState);



  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

    return (
      <div className="d-flex justify-content-center ">
        <div className="w-50 text-start border border-3 p-5 mt-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label className="mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                id="firstName"
                onBlur={(e) => {
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  });
                }}
              />
            </div>
            <div className="form-group mb-3">
              <label className="mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                id="lastName"
                onBlur={(e) => {
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  });
                }}
              />
            </div>
            <div className="form-group mb-3">
              <label className="mb-2" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                onBlur={(e) => {
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  });
                }}
              />
            </div>
            <div className="form-group mb-3">
              <label className="mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                id="phone"
                onBlur={(e) => {
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  });
                }}
              />
            </div>
            <div className="form-group mb-3">
              <label className="mb-2" htmlFor="feedback">
                Feedback
              </label>
              <textarea
                className="form-control"
                id="feedback"
                name="feedback"
                rows="3"
                onBlur={(e) => {
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  });
                }}
              ></textarea>
            </div>
            {/* <div className="form-group mb-3">
              <label className="mb-2" htmlFor="quantity">
                Quantity
              </label>
              <div className="mt-2">
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={(e) => {
                    dispatch({
                      type: "decrease",
                    });
                  }}
                >
                  -
                </button>
                <input
                  type="number"
                  name="quantity" className='mx-2'
                  value={state.quantity}
                  onChange={(e) => {
                    dispatch({
                      type: "INPUT",
                      payload: {
                        name: e.target.name,
                        value: parseInt(e.target.value),
                      },
                    });
                  }}
                />
             
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={(e) => {
                    dispatch({
                      type: "increase",
                    });
                  }}
                >
                  +
                </button>
              </div>
            </div> */}
            <div className="form-group mb-3">
              <label className="mb-2" htmlFor="quantity">
                Quantity
              </label>
              <div className="mt-2">
                <div class="input-group">
                  <input
                    type="number"
                    name="quantity"
                    value={state.quantity}
                    onChange={(e) => {
                      dispatch({
                        type: "INPUT",
                        payload: {
                          name: e.target.name,
                          value: parseInt(e.target.value),
                        },
                      });
                    }}
                    class="form-control input-number"
                  />
                  <span class="input-group-btn">
                    <button
                      type="button"
                      class="btn btn-default btn-number border"
                      onClick={(e) => {
                        dispatch({
                          type: "increase",
                        });
                      }}
                    >
                      <i class="fa-sharp fa-solid fa-caret-up  "></i>
                    </button>
                  </span>
                  <span class="input-group-btn">
                    <button
                      type="button"
                      class="btn btn-default btn-number border"
                      onClick={(e) => {
                        dispatch({
                          type: "decrease",
                        });
                      }}
                    >
                      <i class="fa-solid fa-caret-down "></i>
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div className="form-group mb-3">
              <label className="mb-2" htmlFor="gender">
                Select Gender
              </label>
              <select
                class="form-select"
                name="gender"
                aria-label="Default select example"
                onClick={(e) => {
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  });
                }}
              >
                <option selected>Open this select menu</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="checkbox"
                onClick={(e) => {
                  dispatch({
                    type: "Toggle",
                  });
                }}
              />
              <label className="form-check-label" htmlFor="checkbox">
                Accept conditions
              </label>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary mt-5"
                disabled={!state.term}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default MultiForm;